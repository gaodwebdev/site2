

  function doAdd(){
  var value1=new Number(document.getElementById("Value1").value);
  var value2=new Number(document.getElementById("Value2").value);
  document.getElementById("Result").setAttribute("value", value1 + value2);
  }
  function doSub(){
  var value1=new Number(document.getElementById("Value1").value);
  var value2=new Number(document.getElementById("Value2").value);
  document.getElementById("Result").setAttribute("value", value1 - value2);
  }
  function doMult(){
  var value1=new Number(document.getElementById("Value1").value);
  var value2=new Number(document.getElementById("Value2").value);
  document.getElementById("Result").setAttribute("value", value1 * value2);
  }
  function doDiv(){
  var value1=new Number(document.getElementById("Value1").value);
  var value2=new Number(document.getElementById("Value2").value);
  document.getElementById("Result").setAttribute("value", value1 / value2);
  }
function alert(){

    document.write("this is the second");

}


