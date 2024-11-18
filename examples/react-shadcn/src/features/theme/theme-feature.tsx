import { useTheme } from '@/components/theme-provider-context.tsx';
import { Theme } from '@/components/theme-provider.tsx';
import { Button } from '@/components/ui/button.tsx';

export default function AppThemeFeature() {
    const { theme, setTheme } = useTheme();
    const themes: Theme[] = ['system', 'dark', 'light'];

    return (
        <div>
            {themes.map(option => (
                <Button
                    size="sm"
                    key={option}
                    disabled={option === theme}
                    onClick={() => {
                        setTheme(option);
                    }}
                >
                    {option}
                </Button>
            ))}
        </div>
    );
}
