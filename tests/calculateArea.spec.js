// UNCOMMENT THE CODE BELOW TO START

describe("Iteration 3", () => {
    describe("Function - calculateArea", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("should be defined", () => {
            expect(calculateArea).toBeDefined();
        });

        it("should take two arguments", () => {
            expect(calculateArea.length).toBe(2);
        });

        it("should return a number representing the area of a rectangle (the product of the two arguments)", () => {
            expect(calculateArea(2, 7)).toEqual(14);
            expect(calculateArea(9, 3)).toEqual(27);
            expect(calculateArea(50, 25)).toEqual(1250);
        });

        it("should return undefined if any of the arguments is not provided", () => {
            expect(divide(2)).toEqual(undefined);
            expect(divide()).toEqual(undefined);
            expect(divide(undefined, 1)).toEqual(undefined);
        });

        it("should return undefined if any of the two arguments is not a number", () => {
            expect(add(2, "7")).toBeUndefined();
            expect(add("9", 3)).toBeUndefined();
            expect(add("50", "25")).toBeUndefined();
        });
    })    
})

