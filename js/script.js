// function getCapitalized(a){
//   var cap=a.toUpperCase();
//   return cap;
// }
// var output=getCapitalized("hgijkbijkiuj");
// alert(output);
// function getCube(b){
//   var cube=b*b*b;
//   return cube;
// }
// var output1=getCube(5);
// var output1=getCube(10);
// var output1=getCube(15);
// alert(output1);
// function printTable(n){
//   for (var i=1;i<10;i++){
//     document.write(n+"*"+i+"="+n*i+"</br>");
//   }
// }


// for (var i=1;i<10;i++){
// printTable(i);
// }

$.ajax({
method:'get',
url:'https://raw.githubusercontent.com/umpirsky/country-list/master/data/ne_NP/country.json',
success:function(data){
//alert(data);da
  var parsed=$.parseJSON(data);
  console.log(parsed)
  for(var a in parsed){
    document.write(parsed[a]+"</br>");
  }
},
error:function(data){

}
});

setInterval(displayTime,1000);
alert (displayTime);
