import { isCore } from '../core';

describe('core test', () => {
    it('should pass', () => {
        expect(isCore()).toBeTruthy();
    });
});
