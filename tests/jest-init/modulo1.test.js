const  modulo1 = require('./modulo1')

describe('basic feature', ()=>{
	it('should return the right value', ()=> {
		expect(modulo1.func1(10)).toBe(11)	
	})
	
	it('func2', ()=> {
	 	
	 	const cb = jest.fn()
	 	cb.mockReturnValue(2)
	 	expect(modulo1.func2(10, cb)).toBe(11)
	 	
	 	console.log(cb.mock)
	})
})
