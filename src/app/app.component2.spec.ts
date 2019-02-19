describe('textStringTest', () => {
    let expected = '';
    let notExpected = '';
    let expectmatch = null;

    beforeEach(() => {
        expected = 'textString';
        notExpected = 'hello';
        expectmatch = new RegExp(/^hello/);
    });
    afterEach(() => {
        expected = '';
        notExpected = '';
    });
    it('test if textString is textString', 
        () => expect('textString').toBe(expected)
    );
    it('test if textString is not textString', 
        () => expect('textString').not.toBe(notExpected)
    );
    it('test if hellotext starts with hello', 
        () => expect('hellotext').toMatch(expectmatch)
    );
});