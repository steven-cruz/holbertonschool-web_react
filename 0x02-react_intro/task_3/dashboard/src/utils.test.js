import { getFullYear, getFooterCopy, getLatesNotification } from './utils';

describe('Test Utils', () => {
    it('verify that the function returns the current year correctly', () => {
        expect(getFullYear()).toBe(new Date().getFullYear());
    });

    it('ckecks the return when the argument is true', () => {
        expect(getFooterCopy(true)).toBe('Holberton School');
    });

    it('ckecks the return when the argument is false', () => {
        expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
    });

    it('checking the returned string for getLatestNotification', () => {
        expect(getLatesNotification()).toBe('<strong>Urgent requirement</strong> - complete by EOD');
    });
})
