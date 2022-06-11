import React from 'react';
import { ErrorTemplate } from '../components/Error/Template';

function Offline() {
    return <ErrorTemplate errorTitle="Offline" paragraph="You might be disconnected." anchorMessage="Retry" />;
}

export default Offline;
