export interface Storage {
    getItem(key: string): Promise<string | null>;

    removeItem(key: string): Promise<void>;

    setItem(key: string, value: string): Promise<void>;
}

export class LocalStorage implements Storage {
    // eslint-disable-next-line @typescript-eslint/require-await
    async getItem(key: string): Promise<string | null> {
        return localStorage.getItem(key);
    }

    // eslint-disable-next-line @typescript-eslint/require-await
    async setItem(key: string, value: string): Promise<void> {
        localStorage.setItem(key, value);
    }

    // eslint-disable-next-line @typescript-eslint/require-await
    async removeItem(key: string): Promise<void> {
        localStorage.removeItem(key);
    }
}
