
const {sum, res, mul, div} = require('../calculator');
const {isPalindrome, isAnagram} = require('../palindrome');

describe('Group test using jest', () => {

    // single

    test('adds 1 + 2 to equal 3', () =>{
        expect(sum(1,2)).toBe(3);
    });
 
    test('res 3 - 2 to equal 1', () =>{
        expect(res(3,2)).toBe(1);
    });
 
    test('mul 5 * 2 to equal 10', () =>{
       expect(mul(5,2)).toBe(10);
    });
 
    test('div 8 / 0 to equal Void', () =>{
       expect(()=>div(8,0)).toThrow();
    });
 
    // foreach
 
    test.each([[1,1,2],[1,2,3],[0,0,0],[2,1,3],[1,-1,0]])(
        'test %i + %i = %i' , (a,b,expected) => {
           expect(sum(a,b)).toBe(expected);
        }  
    );
 
    test.each([[1,1,0],[1,2,-1],[0,0,0],[2,1,1],[1,-1,2]])(
        'test %i - %i = %i' , (a,b,expected) => {
            expect(res(a,b)).toBe(expected);
        }  
    );
 
    test.each([[1,1,1],[4,2,2],[6,3,2],[2,2,1],[10,5,2]])(
        'test %i / %i = %i' , (a,b,expected) => {
            expect(div(a,b)).toBe(expected);
        }  
    );
 
    test.each([[1,1,1],[1,2,2],[0,0,0],[2,10,20],[8,2,16]])(
        'test %i * %i = %i' , (a,b,expected) => {
            expect(mul(a,b)).toBe(expected);
        }  
    );
        
    test.each([["oso",true],["pepe",false],["abcdefedcba",true],["yuca",false],["gernfdjmmjdfnreg",true],["1001",true]])(
        'test %i palindrome: %i', (a,ret) => {
            expect(isPalindrome(a)).toBe(ret);
        }
    )
        
    test.each([["pepe","grillo",false],["azul","zula",true],["peco","opec",true]])(
        'test %i anona %i: %i', (a,b,ret) => {
            expect(isAnagram(a,b)).toBe(ret);
        }
    )

});