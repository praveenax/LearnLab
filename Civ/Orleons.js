//types of workers
//locations where the workers can be assigned
//earn money
//on worker levels

class Worker {
    constructor(obj) {
        this.type = obj['type'];
        this.class = obj['class'];
    }
}

class Location {
    constructor(obj) {
        this.type = obj.type
        this.name = obj.name;
        this.reqTypes = obj.reqTypes;
    }
}

class Player {
    constructor(obj) {
        this.color = obj['color'];
        
    }
}

function rand(min, max) {
    return Math.floor(Math.random() * max) + min
}

var workerTypes = [{
    type: 1,
    class: "Farmer"
}, {
    type: 2,
    class: "Trader"
}, {
    type: 3,
    class: "Soldier"
}, {
    type: 4,
    class: "Boatman"
}];
var locationTypes = [
    {
        type: 1,
        name: "Farm",
        reqTypes: [1, 2]
    },
    {
        type: 2,
        name: "Castle",
        reqTypes: [1, 2, 3]
    },
    {
        type: 3,
        name: "Market",
        reqTypes: [2, 3]
    },
    {
        type: 4,
        name: "Port",
        reqTypes: [1, 4]
    },
    ];

var w = new Worker(workerTypes[rand(0,workerTypes.length-1)]);
var l = new Location(locationTypes[rand(0,locationTypes.length-1)]);
console.log(w);
console.log(l);
