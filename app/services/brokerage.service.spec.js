
import brokerageService from "./brokerage.service";

test('brokerage is an object', ()=>{
 expect(typeof brokerageService).toBe('object');

});

test('brokerage function exists', ()=>{
 expect(typeof brokerageService.generate).toBe('function');

});

// An example generate an error 
test('generate return an object', ()=>{
    expect(typeof brokerageService.generate).toBe('object');
   
   });