import Header from '../components/Header';
import { useUser } from '@auth0/nextjs-auth0';
import { Button, Spacer } from '@nextui-org/react';
import { useEffect, useState } from 'react';
import { NewMessages } from '../components/Messages/NewMessages';
import { Message } from '../components/Messages/Message';
import joinChildren from '../helpers/joinChildren';
import { toMessage } from '../helpers';

const Messages = () => {
    const { user } = useUser();
    const [messages, setMessages] = useState([]);
    const [isLoading, setLoading] = useState(false);

    const addMessage = async (message) =>
        setMessages(
            await fetch('/api/messages', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(message),
            }).then((value) => value.json())
        );

    useEffect(() => {
        setLoading(true);
        fetch('/api/messages')
            .then((res) => res.json())
            .then((data) => {
                setMessages(data.map((d) => toMessage(d)));
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
    return (
        <>
            <Header hasResumeButtons={false} heading={'Message Centre'} description="" />
            <NewMessages addMessage={addMessage} title="Send me a message" />
            <Spacer />
            {joinChildren(
                messages,
                (message, index) => (
                    <Message key={index} {...message} />
                ),
                (index) => (
                    <Spacer key={index} />
                )
            )}
        </>
    );
};

export default Messages;
