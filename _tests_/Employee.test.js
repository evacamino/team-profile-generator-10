const Employee = require('../lib/Employee')

describe('Employee Test Suite', ()=>{
        it("should not set any properties if they are not provided", () => {
            const employee = new Employee();
            
            expect(employee.getName()).toBeUndefined();
            expect(employee.getId()).toBeUndefined();
            expect(employee.getEmail()).toBeUndefined();
        })

        it("should not set an email if it is not provided",()=>{
            const employee = new Employee("Sally", 25);
            const actualEmail = employee.getEmail();

            expect(actualEmail).toBeUndefined()
        })

        it('should return a name', () => {
            const expectedName = 'Lottie';

            const employee = new Employee (expectedName);

            const actualName = employee.getName();

            expect(actualName).toEqual(expectedName);    
        })
        it('should return an ID', () =>{
            const expectedId = 10
            const employee = new Employee('',expectedId);
            const actualId = employee.getId();
            expect(actualId).toEqual(expectedId);
        })
})