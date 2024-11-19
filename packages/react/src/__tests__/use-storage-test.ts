import { act } from 'react';

import { renderHook } from '../test-renderer';
import { useStorage } from '../use-storage';

describe('useStorage', () => {
    it('should return the default value', () => {
        expect.assertions(1);
        const { result } = renderHook(() => useStorage({ defaultValue: 'defaultValue', key: 'test' }));
        // eslint-disable-next-line jest/no-conditional-in-test
        if (result.__type === 'error' || !result.current) {
            throw result.current;
        } else {
            const [value] = result.current;
            // eslint-disable-next-line jest/no-conditional-expect
            expect(value).toBe('defaultValue');
        }
    });

    it('should update a value', async () => {
        expect.assertions(2);
        const { result } = renderHook(() => useStorage({ defaultValue: 'defaultValue', key: 'test' }));
        // eslint-disable-next-line jest/no-conditional-in-test
        if (result.__type === 'error' || !result.current) {
            throw result.current;
        } else {
            const [value, setValue] = result.current;
            // eslint-disable-next-line jest/no-conditional-expect
            expect(value).toBe('defaultValue');

            await act(() => setValue('updated'));
            const [updatedValue] = result.current;

            // eslint-disable-next-line jest/no-conditional-expect
            expect(updatedValue).toBe('updated');
        }
    });
});
