import { Button } from '@/components/ui/button.tsx';
import { LocalStorage } from '@wallet-ui/core';
import { useStorage } from '@wallet-ui/react';
import { useEffect, useState } from 'react';

export default function AppStorageFeature() {
    return (
        <div className="flex flex-col gap-4">
            <AppDemoUseStorageFeature />
            <AppDemoLocalStorageFeature />
        </div>
    );
}

const storage = new LocalStorage();

function AppDemoUseStorageFeature() {
    const [storageValue, setStorageValue] = useStorage({ key: 'key', defaultValue: 'val' });

    return (
        <div>
            <pre>useStorage: {storageValue}</pre>
            <Button onClick={() => setStorageValue(Date.now().toString())}>Update Value</Button>
        </div>
    );
}

function AppDemoLocalStorageFeature() {
    const [storageValue, setStorageValue] = useState<string | null>(null);

    const key = 'storage-key';

    async function getValue() {
        return storage.getItem(key).then(setStorageValue);
    }

    async function setValue() {
        storage.setItem(key, Date.now().toString());
        await getValue();
    }

    useEffect(() => {
        getValue();
    }, []);

    return (
        <div>
            <pre>LocalStorage: {storageValue}</pre>
            <Button onClick={() => setValue()}>Update Value</Button>
        </div>
    );
}
