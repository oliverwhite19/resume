import { Card, Collapse, Text } from '@nextui-org/react';
import { format } from 'date-fns';
import { useState } from 'react';
import { toMessage } from '../../helpers';
import { MessageWithRelations } from '../../types';
import { NewMessages } from './NewMessages';

const Message = ({
    text,
    createdAt,
    response: initialResponse,
    author,
    id,
    isChild,
}: MessageWithRelations & { isChild: false }) => {
    const [response, setResponse] = useState(initialResponse);

    const addResponse = async (message) => {
        const response = await fetch(`/api/message/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(message),
        }).then((value) => value.json());
        setResponse(toMessage(response));
    };
    return (
        <Card variant="flat">
            <Card.Header>
                {author.nickname} {format(createdAt, 'p P')}
            </Card.Header>
            <Card.Body>
                <Text>{text}</Text>
            </Card.Body>
            {response ? (
                <>
                    <Card.Divider /> <Message {...response} isChild />
                </>
            ) : (
                !isChild && (
                    <Collapse title="" bordered contentLeft={<Text>Respond</Text>}>
                        <NewMessages title="" addMessage={addResponse} />
                    </Collapse>
                )
            )}
        </Card>
    );
};

export { Message };
