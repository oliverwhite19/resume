import React from 'react';
import { ErrorTemplate } from '../components/Error/Template';

function NotFound() {
    return <ErrorTemplate errorTitle="404" paragraph="This page could not be found." anchorMessage="Go to main" />;
}
export default NotFound;
