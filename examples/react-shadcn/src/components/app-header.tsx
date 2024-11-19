import { ThemeToggle } from '@/components/theme-toggle.tsx';
import { Link } from 'react-router-dom';

export interface AppHeaderLink {
    label: string;
    to: string;
}

export function AppHeader({ links }: { links: AppHeaderLink[] }) {
    return (
        <header className="p-4 bg-gray-100 dark:bg-gray-900">
            <nav className="flex justify-between">
                <div className="flex gap-2">
                    {links.map(link => (
                        <Link key={link.to} className={'px-4 py-2 bg-gray-300 dark:bg-gray-800'} to={link.to}>
                            {link.label}
                        </Link>
                    ))}
                </div>
                <ThemeToggle />
            </nav>
        </header>
    );
}
