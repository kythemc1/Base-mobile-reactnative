describe('Mock functions', () => {
    it('can create mock functions', () => {
        const fn = () => {
            const x = 1;
            const y = 2;
            return x + y;
        };

        const result = fn();
        expect(result).toBe(3); // TRUE
        console.log('kết quả', fn());
    // expect(fn).toHaveBeenCalled(); // TRUE
    // expect(fn).toHaveBeenCalledWith(10); // TRUE
    });
});
