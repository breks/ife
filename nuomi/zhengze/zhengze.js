'use strict'

document.getElementById("jiaoyan1").addEventListener("click",()=>{
      console.log(document.getElementById("input1").value);
      let shuru=document.getElementById("input1").value;
      let fankui1=document.getElementById("fankui");
      let num=/^1(3|4|5|8)\d{9}$/;
      if(num.test(shuru)){fankui1.innerHTML="验证成功";}
      else{fankui1.innerHTML="失败";}

})


document.getElementById("jiaoyan2").addEventListener("click",()=>{
      let str=document.getElementById("input2").value;
      let strfu=/(\b\w+\b)\s+\1/;
      if(strfu.test(str)){fankui2.innerHTML="验证成功";}
      else{fankui2.innerHTML="验证失败";}
 
	})