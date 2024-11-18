import { Button } from '@/components/ui/button.tsx';
import { isCore } from '@wallet-ui/core';
import { useState } from 'react';

export default function AppDemoFeature() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <Button onClick={() => setCount(count => count + 1)}>count is {count}</Button>
            <Button
                onClick={() => {
                    const result = isCore();
                    alert(`Is Core: ${result}`);
                }}
            >
                Use Core Library
            </Button>
        </div>
    );
}
