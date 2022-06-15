// pages/profile.js

import { useUser } from '@auth0/nextjs-auth0';

const Profile = () => {
    const { user, error, isLoading } = useUser();

    if (isLoading)
        return (
            <main>
                <p>Loading...</p>
            </main>
        );
    if (error)
        return (
            <main>
                <p>{error.message}</p>
            </main>
        );

    if (user) {
        return (
            <main>
                <div>Welcome {user.name}!</div>

                <pre>{JSON.stringify(user, null, 2)}</pre>
            </main>
        );
    }

    return <main></main>;
};

export default Profile;
