import { LocalStorage, Storage } from '@wallet-ui/core';
import { useEffect, useState } from 'react';

export interface useStorageProps<T> {
    defaultValue: T;
    key: string;
    storage?: Storage;
}

export function useStorage<T>({
    defaultValue,
    key,
    storage = new LocalStorage(),
}: useStorageProps<T>): [T, (value: T) => Promise<void>] {
    const [state, setState] = useState<T>(defaultValue);

    useEffect(() => {
        const initializeState = async () => {
            try {
                const value = await storage.getItem(key);
                if (value !== null) {
                    setState(JSON.parse(value));
                } else {
                    setState(defaultValue);
                }
            } catch (error) {
                console.error('Failed to retrieve data from storage:', error);
                setState(defaultValue);
            }
        };

        void initializeState();
    }, [key, defaultValue, storage]);

    async function setValue(newValue: T) {
        try {
            await storage.setItem(key, JSON.stringify(newValue));
            setState(() => newValue);
        } catch (error) {
            console.error('Failed to save data to storage:', error);
        }
    }

    return [state, setValue];
}
