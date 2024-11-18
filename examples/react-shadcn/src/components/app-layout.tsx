import { ReactNode } from 'react';
import { AppFooter } from './app-footer.tsx';
import { AppHeader, AppHeaderLink } from './app-header.tsx';
import { ThemeProvider } from './theme-provider.tsx';

export function AppLayout({
    children,
    footer,
    links,
}: {
    children: ReactNode;
    footer: ReactNode;
    links: AppHeaderLink[];
}) {
    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <div className="flex flex-col h-full justify-between">
                <AppHeader links={links} />
                <main className="p-4 flex-grow">{children}</main>
                <AppFooter>{footer}</AppFooter>
            </div>
        </ThemeProvider>
    );
}
