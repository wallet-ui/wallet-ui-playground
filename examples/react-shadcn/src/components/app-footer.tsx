import { ReactNode } from 'react';

export function AppFooter({ children }: { children: ReactNode }) {
    return <footer className="p-4 bg-gray-100 dark:bg-gray-900 text-xs text-center">{children}</footer>;
}
