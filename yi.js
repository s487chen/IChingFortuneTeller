const data =  require('./gua.json');
const res = data['gua'][Math.floor(Math.random()*64)];
const xiang = res['gua-xiang'];

const l1 = '-'.repeat(16)+'\n|'+' '.repeat(14)+'|\n'+'-'.repeat(16);
const l2 = '-'.repeat(6)+' '.repeat(4)+'-'.repeat(6)+'\n|'+' '.repeat(4)+'|    |'+' '.repeat(4)+'|\n'+'-'.repeat(6)+' '.repeat(4)+'-'.repeat(6);

console.log(res['gua-name']);
console.log(res['gua-detail']);

let j = 0;
for(let x of xiang) {
    if(x==='1') {
        console.log(l1+"    "+ res['yao-detail'][j++]); 
    } else {
        console.log(l2+"    "+ res['yao-detail'][j++]);
    }
}


