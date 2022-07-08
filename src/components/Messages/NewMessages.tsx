import { Button, Input, Spacer, Text } from '@nextui-org/react';
import { useForm } from 'react-hook-form';

const NewMessages = ({ title, addMessage }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();
    const onSubmit = async (data) => {
        addMessage(data);
        reset();
    };
    return (
        <>
            {title && <Text h2>{title}</Text>}
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
