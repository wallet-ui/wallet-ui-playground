import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { App } from './app.tsx';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter future={{ v7_relativeSplatPath: true, v7_startTransition: true }}>
            <App />
        </BrowserRouter>
    </StrictMode>,
);
