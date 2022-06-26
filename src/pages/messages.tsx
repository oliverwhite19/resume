import Header from '../components/Header';
import { useUser } from '@auth0/nextjs-auth0';
import { Button, Spacer } from '@nextui-org/react';
import { useEffect, useState } from 'react';
import { NewMessages } from '../components/Messages/NewMessages';
import { Message } from '../components/Messages/Message';
import JoinChildren from '../helpers/react-join-children';

const Messages = () => {
    const { user } = useUser();
    const [messages, setMessages] = useState([]);
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch('/api/messages')
            .then((res) => res.json())
            .then((data) => {
                setMessages(data);
                setLoading(false);
            });
    }, []);

    if (!user) {
        return (
            <>
                <Header hasResumeButtons={false} heading={'Message Centre'} description="" />
                <Button as="a" shadow color="success" href={`/api/auth/login?returnTo=/messages`}>
                    Login to send messages
                </Button>
            </>
        );
    }
    if (isLoading)
        return (
            <>
                <Header hasResumeButtons={false} heading={'Message Centre'} description="" />
                <p>Loading...</p>
            </>
        );

    // list of my messages and the server responses
    return (
        <>
            <Header hasResumeButtons={false} heading={'Message Centre'} description="" />
            <NewMessages onAddMessage={setMessages} />
            <Spacer />
            {JoinChildren(
                messages,
                (message) => (
                    <Message {...message} />
                ),
                () => (
                    <Spacer />
                )
            )}
        </>
    );
};

export default Messages;
