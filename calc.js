   //калькулятор
   var op;
   function min (event) {
    console.log(event.target.classList);
     if (event.target.classList.contains('div4')) {
          func();
         };
       };

   function pl (event) {
     if (event.target.classList.contains('div5')) {
            func();
         };
       };
      
       const cmin = document.querySelectorAll(".minus");
       for (let i = 0; i < cmin.length; i++) {
         cmin[i].addEventListener("click", min);
       }

       const cpl = document.querySelectorAll(".plus");
       for (let i = 0; i < cpl.length; i++) {
         cpl[i].addEventListener("click", pl);
       }

   function prover(cif,nom) {
     if (cif>=0){
       document.getElementById(nom).innerHTML = cif;
     } else{
       document.getElementById(nom).innerHTML = 0;
     }
   }

     function func() {
     var result;
     var num1 = Number(document.getElementById("result").textContent);
       switch (op) {
         case '+630':
         var nomer="cf1";
         var cifra = Number(document.getElementById("cf1").textContent);
         cifra=cifra+1;
         prover(cifra,nomer);
         result = num1 + 630;
           break;
         case '-630':
         var nomer="cf1";
         var cifra = Number(document.getElementById("cf1").textContent);
         if (cifra!=0){
          cifra=cifra-1;
          prover(cifra,nomer);
          result = num1 - 630;
         }
           break;
       case '+250':
         var nomer="cf2";
         var cifra = Number(document.getElementById("cf2").textContent);
         cifra=cifra+1;
         prover(cifra,nomer);
         result = num1 + 250;
           break;
         case '-250':
         var nomer="cf2";
         var cifra = Number(document.getElementById("cf2").textContent);
         if (cifra!=0){
          cifra=cifra-1;
          prover(cifra,nomer);
          result = num1 - 250;
         }
           break;
       case '+300':
         var nomer="cf3";
         var cifra = Number(document.getElementById("cf3").textContent);
         cifra=cifra+1;
         prover(cifra,nomer);
         result = num1 + 300;
           break;
         case '-300':
         var nomer="cf3";
         var cifra = Number(document.getElementById("cf3").textContent);
         if (cifra!=0){
          cifra=cifra-1;
          prover(cifra,nomer);
          result = num1 - 300;
         }
           break;
       case '+365':
         var nomer="cf4";
         var cifra = Number(document.getElementById("cf4").textContent);
         cifra=cifra+1;
         prover(cifra,nomer);
         result = num1 + 365;
           break;
         case '-365':
         var nomer="cf4";
         var cifra = Number(document.getElementById("cf4").textContent);
         if (cifra!=0){
          cifra=cifra-1;
          prover(cifra,nomer);
          result = num1 - 365;
         }
           break;
       }
     if (result>=0){
     document.getElementById("result").innerHTML = result;
     } 
     }
        
     //переход на главную
     var glav = document.getElementById("glav");
     if (glav) {
       glav.addEventListener("click", function (e) {
         window.location.href = 'index.html';
       });
     }