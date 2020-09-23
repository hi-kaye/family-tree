  
const familyTree = require('./family-tree')

describe('Family Tree', function () {
    test('I am in my family tree', function () {
        const me = familyTree[0]
        expect(me.name).toEqual('Kaye')
    })

    test('My brother is also there', function () {
        const brother = familyTree[1]
        expect(brother.name).toEqual('Ken')
    })

    test('My mum is in the tree', function () {
        const me = familyTree[0]
        const mum = me.parents[0]
        expect (mum.name).toEqual('Mylinh')
    })

    test('My dad is in the tree', function () {
        const brother = familyTree[1]
        const dad = brother.parents[1]
        expect (dad.name).toEqual('Cuong')
    
    })
    
    test('My mum is seventy years old', function () {
        const mum = familyTree[2]
        expect (mum.age).toEqual('70')
    })

    test('My grandma is over ninety years old', function (){
        const grandma = familyTree[4]
        expect (grandma.age) >= 90
    })

    test('Grandma May is younger than Grandpa Luong', function (){
        const grandma = familyTree[4]
        const grandpa = familyTree[5]
        expect (grandma.age)<=(grandpa.age)
    })
})