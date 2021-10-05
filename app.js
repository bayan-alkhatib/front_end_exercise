'use strict';

document.getElementById("menu-bar").addEventListener("click", displayNav);
const list=document.getElementById('navList')
let clicked=false

function displayNav(event){

   
    if (list.style.display==='flex'){
        list.style.display='none'  
    }else{
        list.style.display='flex'
    }

}






