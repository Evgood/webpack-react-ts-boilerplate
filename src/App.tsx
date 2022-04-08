import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import RootRoutes from './routes/routes';

function App() {
    return (
        <BrowserRouter>
            <RootRoutes />
        </BrowserRouter>
    );
}

export default App;
