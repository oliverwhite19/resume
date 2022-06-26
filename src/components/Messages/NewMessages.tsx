import { Button, Input, Spacer, Text } from '@nextui-org/react';
import { useForm } from 'react-hook-form';

const NewMessages = ({ onAddMessage }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();
    const onSubmit = async (data) => {
        onAddMessage(
            await fetch('/api/messages', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            }).then((value) => value.json())
        );
        reset();
    };
    return (
        <>
            <Text h2>Send me a new message</Text>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input.Textarea fullWidth placeholder="Message..." {...register('message', { required: true })} />
                <Text color="error">{errors.message?.type === 'required' && 'Message is required'}</Text>
                <Spacer />
                <Button type="submit">Send Message</Button>
            </form>
        </>
    );
};

export { NewMessages };
