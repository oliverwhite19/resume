// pages/profile.js

import { useUser } from '@auth0/nextjs-auth0';

const Profile = () => {
    const { user, error, isLoading } = useUser();

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>{error.message}</div>;

    if (user) {
        console.log(user);
        return (
            <div>
                <div>
                    Welcome {user.name}! <a href="/api/auth/logout">Logout</a>
                </div>

                <pre>{JSON.stringify(user, null, 2)}</pre>
            </div>
        );
    }

    return <a href="/api/auth/login">Login</a>;
};

export default Profile;
