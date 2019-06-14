//create a character
//create location
//create a encounter - if kill card - then character is removed

var Table = require('cli-table');
var _ = require('lodash');
var male_names = ["Liam", "Noah", "William", "James", "Oliver"]
var female_names = ["Emma", "Olivia", "Ava", "Isabella", "Sophia"]
var location = ["Paris", "London", "Delhi"]
var encounter = ["joy", "trust", "fear", "surprise", "sadness", "disgust", "anger", "anticipation"];

var names = male_names.concat(female_names)
var table = new Table({head: ['Characters', 'Encounter']});

function rand(min, max) {
    return Math.floor(Math.random() * max) + min
}

for (var i = 0; i < 10; i++) {
//    table = new Table({head: ['TH 1 label', 'TH 2 label']});
    var names = _.shuffle(names);
    var ch1 = names[0];
    var ch2 = names[1];
    var e = _.shuffle(encounter);
    //    console.log(ch1 + "---*"+e[0]+"*---"+ch2);
    table.push([
             ch1 + ',' + ch2,
             e[0]
        ]

       
    );

     
}
console.log(table.toString());