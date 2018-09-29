object HelloWorld {
//  def main(args: Array[String]) {

  def f(n :Int): Unit ={
    var a = 0
    for(a <- 1 to n){
      println("Hello World");
    }
  }

  def printListReplication(): Unit ={
    var n = scala.io.StdIn.readInt();
    var arr:Array[Int] = new Array(n);
    var i=0
    for(i <- 1 to n-1){
      arr(i) = scala.io.StdIn.readInt()
    }

    var x=0
    var y=0
    for(x <- 1 to arr.length){
      for(y <- 1 to n){
        println(arr(x))
      }
    }

  }

  def main(args: Array[String]) {
//    println("Hello, world!")
//    val s:String = "Praveen test"
//    print(s)
//    f(4)
    printListReplication()
  }
}
