const { test, expect } = require('@jest/globals')
const getInfo=require('./index.js')
describe("getInfo",()=>{
    it('age can not be less than 0', ()=>{
        let persons = [
            {
                name:"John",
                age: -16
            },
            {
                name:"John",
                age: 16
            },
            {
                name:"John",
                age: 11
            }
        ]
        expect(getInfo(persons)).toBe("age cannot be less than 0 or bigger than 140")
    }),
    it('age can not be begger than 140', ()=>{
        let persons = [
            {
                name:"John",
                age: 160
            },
            {
                name:"John",
                age: 16
            },
            {
                name:"John",
                age: 11
            }
        ]
        expect(getInfo(persons)).toBe("age cannot be less than 0 or bigger than 140")
    }),
    it('empty array', ()=>{
        let persons = []
        expect(getInfo(persons)).toBe("0 elements in the array")
    }),
    it('age values 44,55,0,11,45', ()=>{
        let persons = [
            {
                name:"John",
                age: 44
            },
            {
                name:"John",
                age: 55
            },
            {
                name:"John",
                age: 0
            },
            {
                name:"John",
                age: 11
            }, 
            {
                name:"John",
                age: 45
            }
            
        ]
        expect(getInfo(persons)).toBe(31)
    })
}
)