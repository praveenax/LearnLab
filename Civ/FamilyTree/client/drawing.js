var GAP = 200
var board_GAP = 25

function connectorV(N){
    var line = new createjs.Shape();
    line.graphics.beginFill("Grey").drawRect(2*board_GAP+GAP/2, N*GAP + N*25, 10 , GAP)

    line.x = 0
    line.y = 20

    return line

}

function sibConnector(N){
    var container = new createjs.Container();
    var line_hor = new createjs.Shape();
    line_hor.graphics.beginFill("Grey").drawRect(N*(GAP/2)+50, GAP-50, GAP/2+10, 10)

    // line_hor.x = 0
    // line_hor.y = 20

    var line_ver = new createjs.Shape();
    line_ver.graphics.beginFill("Grey").drawRect(N*(GAP/2)+45 + (GAP/2+10), GAP-50, 10, 50)

    // line_ver.x = 0
    // line_ver.y = 20

    container.addChild(line_hor,line_ver)
    return container
}

function connectorH(){
   
    var line = new createjs.Shape();
    line.graphics.beginFill("Grey").drawRect(board_GAP+25, 0, GAP, 10)

    line.x = 0
    line.y = 20

    return line

}
function couple(M, F) {
    var container = new createjs.Container();

    var line = connectorH();
    
    M.x = 0
    F.x = GAP

    //if children
    var childrenConnector = connectorV(1)
    var childContainer = person("Father", board_GAP+GAP/2-20, GAP);
    var sublingConnector = sibConnector(1)
    var sublingConnector2 = sibConnector(2)
    var childContainer2 = person("Uncle", 2*(board_GAP+GAP/2-20), GAP);
    var childContainer3 = person("Uncle2", 3*(board_GAP+GAP/2-20), GAP);

    var containerArr = []
    containerArr.push(line)
    containerArr.push(M)
    containerArr.push(F)
    containerArr.push(connectorV(0))
    containerArr.push(connectorV(1))
    containerArr.push(connectorV(2))
    containerArr.push(sublingConnector)
    containerArr.push(sublingConnector2)
    containerArr.push( sibConnector(3))
    containerArr.push(childContainer)
    containerArr.push(childContainer2)
    containerArr.push(childContainer3)
    containerArr.push( person("Praveen", 4*(board_GAP+GAP/2-20), GAP))
    


    for(var i=0;i<containerArr.length;i++){
        container.addChild(containerArr[i])
    }

    // container.addChild(line, M, F,childrenConnector,childContainer,sublingConnector,sublingConnector2,childContainer2,childContainer3)

    return container

}

function person(name, X, Y) {
    var container = new createjs.Container();

    var nameBoard = new createjs.Shape();
    nameBoard.graphics.beginFill("DeepSkyBlue").drawRect(board_GAP, 0, 50, 50)
    var text = new createjs.Text(name, "20px Arial", "#ff7700");
    nameBoard.x = 0
    nameBoard.y = 0

    text.x = 20;
    text.y = 70;
    text.textBaseline = "alphabetic";



    container.addChild(nameBoard, text);
    container.x = X;
    container.y = Y;

    return container
}

function createCouple(n) {
    var personContainer = person("Grandpa", 0, 0);
    var personContainer2 = person("Grandma", 0, 0);

    var coupleContainer = couple(personContainer, personContainer2)
    coupleContainer.x = n * 300
    return coupleContainer
}

function init() {
    var stage = new createjs.Stage("demoCanvas");
    var circle = new createjs.Shape();
    circle.graphics.beginFill("DeepSkyBlue").drawCircle(0, 0, 50);
    circle.x = 100;
    circle.y = 100;
    // stage.addChild(circle);


    // stage.addChild(nameBoard);
    // stage.addChild(text);

    var coupleContainer = createCouple(0)
    // var coupleContainer2 = createCouple(1)


    stage.addChild(coupleContainer);

    stage.update();
}

$(document).ready(function () {
    init()

})