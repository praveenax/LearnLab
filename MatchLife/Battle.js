var _ = require('lodash');
var factions = ["Baratheon", "Stark", "Targaryen", "Lannister", "Arryn", "Tully", "Greyjoy", "Tyrell", "Martell"];
var total_units = 5;
var unitMap = {};


function rand(min, max) {
    return Math.floor(Math.random() * max) + min
}

function roll() {
    return rand(1, 6);
}

function fight(agg, def) {
    console.log(agg + " X " + def);
    var atts = [];
    var defs = [];

    atts.push(roll())
    atts.push(roll())
    atts.push(roll())

    defs.push(roll());
    defs.push(roll());

    var sorted1 = _.sortBy(atts)
    var sorted2 = _.sortBy(defs)

    //    console.log(sorted1);
    //    console.log(sorted2);

    var att1 = sorted1[sorted1.length - 1]
    var att2 = sorted1[sorted1.length - 2]
    var def1 = sorted2[sorted2.length - 1]
    var def2 = sorted2[sorted2.length - 2]

    if (att1 > def1) {

        var unitCountDef = unitMap[def];
        if (unitCountDef - 1 >= 0) {
            unitMap[def] = unitCountDef - 1;
        }

    } else {
        var unitCountAgg = unitMap[agg];
        if (unitCountAgg - 1 >= 0) {
            unitMap[agg] = unitCountAgg - 1;
        }
    }

    if (att2 > def2) {

        var unitCountDef = unitMap[def];
        if (unitCountDef - 1 >= 0) {
            unitMap[def] = unitCountDef - 1;
        }

    } else {
        var unitCountAgg = unitMap[agg];
        if (unitCountAgg - 1 >= 0) {
            unitMap[agg] = unitCountAgg - 1;
        }
    }

    //    console.log(unitMap);
    var newFactions = [];
    for (var i in factions) {
        var val = unitMap[factions[i]];

        if (val != 0) {
            newFactions.push(factions[i]);
        }
    }

    factions = newFactions;

}

factions.map((value, index) => {
    unitMap[value] = total_units
})

var warOver = false
//for (var j = 0; j < 10; j++) {
while(!warOver) {
    if (factions.length == 1) {
        console.log(factions[0] + " wins the Iron Throne!");
        warOver = true;
        break;
    } else {
        var shuffled = _.shuffle(factions)

        var f1 = shuffled[0];
        var f2 = shuffled[1];
        fight(f1, f2)
    }

}

console.log(unitMap);
