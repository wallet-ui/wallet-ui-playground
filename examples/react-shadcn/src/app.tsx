import { LazyDemoFeature } from '@/features/demo';
import { LazyThemeFeature } from '@/features/theme';
import { Navigate, RouteObject, useRoutes } from 'react-router';
import { AppLayout } from './components/app-layout.tsx';

const routes: RouteObject[] = [
    { path: '', element: <Navigate to="/demo" replace /> },
    { path: '/demo', element: <LazyDemoFeature /> },
    { path: '/theme', element: <LazyThemeFeature /> },
];

export function App() {
    return (
        <AppLayout
            footer="@wallet/ui example React + Shadcn"
            links={[
                { to: '/demo', label: 'Demo' },
                { to: '/theme', label: 'Theme' },
            ]}
        >
            {useRoutes(routes)}
        </AppLayout>
    );
}
