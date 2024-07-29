let daoETH = document.querySelector("#daoETH");
let daoUSD = document.querySelector("#daoUSD");
let daoADMIN1 = document.querySelector("#daoADMIN1");



//PRECIO ETH - ACTUALIZAR
let ethPrice = 3350;

//CANTIDAD ETH - ACTUALIZAR
daoETH = 0.1045;



daoUSD = Math.round(daoETH*ethPrice);
daoADMIN1 = Math.round(daoUSD/3);

document.querySelector("#daoETH").innerHTML = daoETH;
document.querySelector("#daoUSD").innerHTML = daoUSD;
document.querySelector("#daoADMIN1").innerHTML = daoADMIN1;
document.querySelector("#daoADMIN2").innerHTML = daoADMIN1;
document.querySelector("#daoADMIN3").innerHTML = daoADMIN1;
