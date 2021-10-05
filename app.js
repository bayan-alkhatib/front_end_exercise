'use strict';

document.getElementById("menu-bar").addEventListener("click", displayNav);
const list=document.getElementById('navList')
let clicked=false

function displayNav(event){
   
    if (list.style.display==='none' ){
        list.style.display='flex'  
    }else{
        list.style.display='none'
    }
}

if (list.style.width>768){
    list.style.display='flex'
}



