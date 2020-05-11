import { Component } from '@angular/core';

declare var createjs

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Supplychain';
  optionArr = ["Extracter","Transporter","Processor","Refinery"]
  

  moveTo(obj,map,time){
    obj.to({ x: map.x }, time, createjs.Ease.getPowInOut(4))
  }

  moveObject(container){
    this.moveTo(createjs.Tween.get(container, { loop: true }),400,1000)
    
  }

  ngOnInit(){
    
  }

  ngOnInit2(){

    var stage = new createjs.Stage("demoCanvas");
    var circle = new createjs.Shape();
    circle.graphics.beginFill("DeepSkyBlue").drawCircle(0, 0, 50);
    circle.x = 100;
    circle.y = 100;

    var container = new createjs.Container();
    container.addChild(circle);
    container.x = 100;


    stage.addChild(container);
    stage.update();

    // this.moveObject(container)
    // createjs.Tween.get(container, { loop: true })
    //   .to({ x: 400 }, 1000, createjs.Ease.getPowInOut(4))
    //   .to({ alpha: 0, y: 175 }, 500, createjs.Ease.getPowInOut(2))
    //   .to({ alpha: 0, y: 225 }, 100)
    //   .to({ alpha: 1, y: 200 }, 500, createjs.Ease.getPowInOut(2))
    //   .to({ x: 100 }, 800, createjs.Ease.getPowInOut(2));

    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener("tick", stage);

    circle.addEventListener("click",function (){
      console.log("click worked")
    })
    circle.on("click",function (){
      console.log("click worked 2")
    })
  
  }
}
