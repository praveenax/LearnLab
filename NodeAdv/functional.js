var test = "hello world";

const R = require('ramda');

//console.log(test);
//
//console.log("this is test");
//
//console.log(`this is ${test}`);

function a1(bev){
    return `why ${bev}`;
}

function a2(fav){
    return `aged ${fav}`;
}

const c = R.compose(
    a1,
    a2
);

const result = c('milk');

//console.log(result);


const people = [
    {
        name:'Praveen',
        beverage:['coffee','tea']
    },
    {
        name:'Abe',
        beverage:['milk','vodka']
    }
];

console.log(people);
const fixBev = (str) => {
    console.log(str);
  str = str.replace('vodka','beer')  
    return str;
};

const help = (person) => ({
    name:person.name,
    beverage:person.beverage.map(fixBev)
});


const fixed = people.map(help);

console.log(fixed);

