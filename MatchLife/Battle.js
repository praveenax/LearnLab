var _ = require('lodash');
//var factions = ["Baratheon", "Stark", "Targaryen"];
var factions = ["Baratheon", "Stark", "Targaryen", "Lannister", "Arryn", "Tully", "Greyjoy", "Tyrell", "Martell"];
//var factions = ["Spain", "Portugal", "England", "France", "HRE", "Denmark", "Scotland", "Poland", "Hungary", "Byzantium"];
var total_units = 500;
var total_supply = 3;
var unitMap = {};


function rand(min, max) {
    return Math.floor(Math.random() * max) + min
}

function roll() {
    return rand(1, 6);
}

function updateFaction() {
    var newFactions = [];
    for (var i in factions) {
        var val = unitMap[factions[i]]['units'];
        if (val != 0) {
            newFactions.push(factions[i]);
        }
    }

    factions = newFactions;
}

function fight(agg, def) {
//    console.log(agg + " X " + def);
    var atts = [];
    var defs = [];

    atts.push(roll())
    atts.push(roll())
    atts.push(roll())

    defs.push(roll());
    defs.push(roll());

    var sorted1 = _.sortBy(atts)
    var sorted2 = _.sortBy(defs)


    var att1 = sorted1[sorted1.length - 1]
    var att2 = sorted1[sorted1.length - 2]
    var def1 = sorted2[sorted2.length - 1]
    var def2 = sorted2[sorted2.length - 2]

    //reduce supply
    var supplyVal = unitMap[agg]['supply'];
    unitMap[agg]['supply'] = supplyVal - 1;

    //increase agg
    var aggVal = unitMap[agg]['agg'];
    unitMap[agg]['agg'] = aggVal + 1;

    //increase def
    var defVal = unitMap[def]['def'];
    unitMap[def]['def'] = defVal + 1;

    if (att1 > def1) {

        var unitCountDef = unitMap[def]['units'];
        if (unitCountDef - 1 >= 0) {
            unitMap[def]['units'] = unitCountDef - 1;
        }

    } else {
        var unitCountAgg = unitMap[agg]['units'];
        if (unitCountAgg - 1 >= 0) {
            unitMap[agg]['units'] = unitCountAgg - 1;
        }
    }

    if (att2 > def2) {

        var unitCountDef = unitMap[def]['units'];
        if (unitCountDef - 1 >= 0) {
            unitMap[def]['units'] = unitCountDef - 1;
        }

    } else {
        var unitCountAgg = unitMap[agg]['units'];
        if (unitCountAgg - 1 >= 0) {
            unitMap[agg]['units'] = unitCountAgg - 1;
        }
    }

    updateFaction();


}

factions.map((value, index) => {
    unitMap[value] = {}
    unitMap[value]['units'] = rand(total_units,700);
    unitMap[value]['supply'] = total_supply;
    unitMap[value]['glory'] = 0;
    unitMap[value]['agg'] = 0;
    unitMap[value]['def'] = 0;
})

console.log(unitMap);
var warOver = false;

var year = 0;
//fight,not fight, 
//for (var j = 0; j < 10; j++) {
while (!warOver) {
    year++;
    if (factions.length == 1) {
        console.log(factions[0] + " wins the Iron Throne! @ Year " + year);
        warOver = true;
        break;
    } else {
        var shuffled = _.shuffle(factions)

        var f1 = shuffled[0];
        var f2 = shuffled[1];
        var doFight = rand(1, 2);
        if (doFight == 1) {
            var supply = unitMap[f1]['supply'];
            if (supply - 1 > 0) {
                fight(f1, f2)
            } else {
                //                console.log('Warning');
            }

        } else {
            var supply = unitMap[f1]['supply'];
            supply = supply + 1;
            if (supply > 5) {
                unitMap[f1]['supply'] = 5;
            } else {
                unitMap[f1]['supply'] = supply;
            }

            var supply2 = unitMap[f2]['supply'];
            supply = supply + 1;
            if (supply > 5) {
                unitMap[f2]['supply'] = 5;
            } else {
                unitMap[f2]['supply'] = supply + 1;
            }

        }

    }

}

console.log(unitMap);
