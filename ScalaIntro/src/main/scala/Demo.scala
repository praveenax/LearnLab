class Point(val xc:Int,val xy:Int){
  var x = xc
  var y = xy

  def sum(): Unit ={
//    print(x+y)
    var sum:Int = x+y
    return sum
  }


}


object Demo{
  def main(args:Array[String]){
//    print("tst")
    val pt = new Point(10,20)
    var sum = pt.sum()
    print(pt.sum())
  }
}
