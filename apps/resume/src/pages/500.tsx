import React from 'react';
import { ErrorTemplate } from '../components/Error/Template';

function ServerError() {
    return <ErrorTemplate errorTitle="500" paragraph="Something went wrong." anchorMessage="Go to main" />;
}

export default ServerError;
