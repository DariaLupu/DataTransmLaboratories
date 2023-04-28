function test(){
 console.log(sum(0)===0?"Passed":"Failed");
 console.log(sum(2)===3?"Passed":"Failed");
 console.log(sum(4)===10?"Passed":"Failed");
 console.log(sum()==="n is not a number"?"Passed":"Failed");
 console.log(sum(2.14)===3?"Passed":"Failed");
 console.log(sum(4.56)===10?"Passed":"Failed");
 }
 test ();
 
(function(){
 console.log(sum(0)===0?"Passed":"Failed");
 console.log(sum(2)===3?"Passed":"Failed");
 console.log(sum(4)===10?"Passed":"Failed");
 console.log(sum()==="n is not a number"?"Passed":"Failed");
 console.log(sum(2.14)===3?"Passed":"Failed");
 console.log(sum(4.56)===10?"Passed":"Failed");
 })();
 
 console.log("reapelare test");
 test ();
 