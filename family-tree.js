const me = {name: 'Kaye', parents: [], age: '25'}
const brother = {name: 'Ken', parents: [], age: '46'}

const gen1 = [me, brother]

const mum = {name: 'Mum', parents: [], age: '70'}
const dad = {name:'Dad', parents: [], age: '75'}

const gen2 = [mum,dad]

const grandma = {name:'Grandma', parents: [], age: '96'}
const grandpa = {name:'Grandpa', parents: [], age: '99'}

const gen3 = [grandma, grandpa]

gen1[0].parents[0] = mum
gen1[0].parents[1] = dad
gen1[1].parents[0] = mum
gen1[1].parents[1] = dad
gen2[0].parents[0] = grandma
gen2[1].parents[1] = grandpa

module.exports = [me, brother, mum, dad, grandma, grandpa]
