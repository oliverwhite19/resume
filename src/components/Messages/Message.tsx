import { Card, Text } from '@nextui-org/react';
import { MessageWithRelations } from '../../types';

const Message = ({ text, response }: MessageWithRelations) => {
    return (
        <Card isHoverable>
            <Card.Body>
                <Text>{text}</Text>
            </Card.Body>
            {response && (
                <>
                    <Card.Divider /> <Message {...response} />
                </>
            )}
        </Card>
    );
};

export { Message };
