const mult = require('../src/mult') 

it('should return correct multi', () => {
    const result = mult(2, 5)
    expect(result).toBe(10)
})