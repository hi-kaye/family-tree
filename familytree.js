childOf = function() {return this.parents.map(parent => parent.name).join(' & ') || 'unknown'}

const kaye = {name: 'Kaye', parents: [], childOf}
const ken = {name: 'Ken', parents: [], childOf}

const gen1 = [kaye, ken]

const mum = {name: 'Mylinh', parents: [], childOf}
const dad = {name:'Cuong', parents: [], childOf}

const gen2 = [mum,dad]

const grandma = {name:'May', parents: [], childOf}
const grandpa = {name:'Luong', parents: [], childOf}

const gen3 = [grandma, grandpa]

gen1[0].parents[0] = mum
gen1[0].parents[1] = dad
gen1[1].parents[0] = mum
gen1[1].parents[1] = dad
gen2[0].parents[0] = grandma
gen2[1].parents[1] = grandpa

kaye.childOf()
