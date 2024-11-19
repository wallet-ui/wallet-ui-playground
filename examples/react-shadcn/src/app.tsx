import { LazyDemoFeature } from '@/features/demo';
import { LazyStorageFeature } from '@/features/storage';
import { Navigate, RouteObject, useRoutes } from 'react-router';
import { AppLayout } from './components/app-layout.tsx';

const routes: RouteObject[] = [
    { path: '', element: <Navigate to="/demo" replace /> },
    { path: '/demo', element: <LazyDemoFeature /> },
    { path: '/storage', element: <LazyStorageFeature /> },
];

export function App() {
    return (
        <AppLayout
            footer="@wallet/ui example React + Shadcn"
            links={[
                { to: '/demo', label: 'Demo' },
                { to: '/storage', label: 'Storage' },
            ]}
        >
            {useRoutes(routes)}
        </AppLayout>
    );
}
