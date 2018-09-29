object Demo {
  def main(args: Array[String]) {
    var a = 0;

    // An infinite loop.
    for( a <- 1 to 5 ){
      println( "Value of a: " + a );
    }
  }
}
