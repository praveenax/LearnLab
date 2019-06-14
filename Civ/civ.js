//production/food/science/culture
var nation = {
    economy: 1,
    food: 1,
    science: 1,
    culture: 1,
    military: 1,
}

function rand(min, max) {
    return Math.floor(Math.random() * max) + min
}



var options = [1, 2, 3]
var optionMap = {
    1: "economy",
    2: "military",
    3: "culture",
}

//rand
for (var i = 1; i <= 10; i++) {
    console.log("Turn #" + i);
    var actionVal = rand(1, options.length);
    var action = optionMap[actionVal]

    switch (actionVal) {
        case 1:
            var val = nation[action];
            nation[action] = val + 1;
            break;
        case 2:
            var val = nation[action];
            nation[action] = val + 1;
            break;
        case 3:
            var val = nation[action];
            nation[action] = val + 1;
            break;
    }
}

console.log(nation);
