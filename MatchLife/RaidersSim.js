//simulate raiders game like 

//raid or harvest. -- two types of locations - harvest area & attack area

//locations can be blocked by another player

var _ = require('lodash');

var harvestLocations = ["GateHouse", "Silversmith", "Barracks"];
var free_harvestLocations = ["GateHouse"];
var occupied_harvestLocations = ["Silversmith", "Barracks"];


var locationDetails = {
    "Silversmith": {
        "operation": function (player) {
            return player.money = (player.money + 3)
        },

    },
    "Mill": {
        "operation": function (player) {
            return player.food = (player.food + 2)
        },

    },
    "GateHouse": {
        "operation": function (player) {
            return player.food = (player.food + 2)
        },

    }
}

var playerTest = {
    money: 4,
    food: 1
}

var test1 = locationDetails["Mill"].operation(playerTest)
var test2 = locationDetails["Silversmith"].operation(playerTest)
console.log(test1);
console.log(test2);
