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

kaye.parents[0] = mum
kaye.parents[1] = dad
ken.parents[0] = mum
ken.parents[1] = dad
mum.parents[0] = grandma
mum.parents[1] = grandpa

kaye.childOf()
