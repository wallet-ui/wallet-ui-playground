import { LocalStorage } from '../storage';

describe('core test', () => {
    it('should pass', () => {
        // const l = new LocalStorage();
        // const x = await l.getItem('test');
        // expect(l).toBeDefined();
        // expect(x).toBeDefined();
        expect(LocalStorage).toBeDefined();
    });
});
