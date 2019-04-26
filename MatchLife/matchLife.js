//every round - collect lands/soldier/weapon of different types.
//at the end of 5 rounds - check the score for all players. highest player wins
//parameters - fire[red], land[brown], water[blue], air[white], death[black],life[green]
//gen land cards - Mountain, Swamp, Beach, Grassland, Desert
//gen power cards - War, Policy, Festival, Wonder, Poetry
//gen weapon cards - Spear, Sword, Dagger, Bow
var _ = require('lodash');
const emojic = require("emojic"),
    colorIt = require("color-it")

var types = ["Fire", "Water", "Air", "Death", "Plant"]
var lands = ["Mountain", "Swamp", "Beach", "Grassland", "Desert"]
var power = ["War", "Policy", "Festival", "Wonder", "Poetry"]
var weapon = ["Spear", "Sword", "Dagger", "Bow", "Knight"]
const emoji = require('node-emoji');

var emojiMap = {
    "Fire": ':fire:',
    "Water": ':droplet:',
    "Air": ':tornado:',
    "Death": ':skull:',
    "Plant": ':seedling:',
}

function rand(min, max) {
    return Math.floor(Math.random() * max) + min
}

var totalCards = 10;
var cards = [];

var shuffled = _.shuffle(types)

for (var i = 0; i < totalCards; i++) {
    var _types = [];
    for (var j = 0; j < 3; j++) {
        var topic = shuffled[j];
        console.log(emojiMap[topic]);
        _types.push({
            icon:emojiMap[topic],
            name: topic,
            value: rand(1, 5)
        });
    }

    cards.push({
        type: _types,
        land: lands[rand(0, lands.length)],
        power: power[rand(0, power.length)],
        weapon: weapon[rand(0, weapon.length)],
    });
}

//console.log(JSON.stringify(cards));
console.log(emoji.get('fire'));
