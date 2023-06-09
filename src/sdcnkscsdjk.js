'use strict';
const user = {
    fName: 'jhon',
    lName: 'Doe',
    age: 20,
    email: 'Doe@example.com',
}
const arrObj = Object.entries(user)
console.log(arrObj)
const map = new Map(arrObj);
console.log(map)
const arrArr = [
    [NaN, '10'], 
    [20, '20'], 
    [30, '30']
];
const arrMap =new Map(arrArr);
console.log(arrMap);
arrMap.set(40, '40');
arrMap.set(40, '50');
console.log(arrMap);
console.log(arrMap.get(NaN));
console.log(arrMap.has(NaN));
console.log(arrMap.delete(NaN));
console.log(arrMap.get(NaN));
// console.log(arrMap.clear(NaN));
console.log(arrMap.size);
arrMap.forEach((el) => console.log('${key}: ${el}'));

for (const key in arrMap){
    console.log(key)
}
// set
const str = 'Butterfly'
const arr =[10,20,30]
const set =new Set(arr);
