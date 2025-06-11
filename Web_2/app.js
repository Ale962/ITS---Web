const arr1 = [1,2,3]
console.log(arr1,...arr1)
const arr2 = [...arr1]
arr1.push(4)
arr1.unshift(0)
console.log(arr1)
console.log(arr2)

const prof={
    'first name':'Rob',
    cognome: 'Del',
    eta: 48,
    indirizzo:{
        citta:'Roma',
        via:'Cesare Pavese'
    } 
}

console.log(prof.indirizzo.via)

const prof1=new Object();
prof1.cognome='Del';
prof1.nome='Rob';
console.log(prof1);

function Persona(){
    this.nome='';
    this.cognome='';
}

const rob=new Persona();

console.log();

const arr3 = [1, 2, 3]