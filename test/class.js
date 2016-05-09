describe("Class", function() {
    if (Class.find) {
        it('find debe encontrar', function() {
            var value = Class.find('window.Date', true);

            expect(typeof value).toEqual("function");
        });
    }

    if (Class.validateClassName) {
        it('validateClassName debe validar', function() {
            var value = Class.validateClassName('Axedia.Array.noClass');

            expect(value).toBe(true);
        });
    }
});
