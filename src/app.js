/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";



const generadorDominio = (par1, par2, par3) => {
  
  const tag = document.querySelector("#dominio");
  let dominios = [];
  let extensiones = [".com", ".net",".us", ".io"]

  for(let i of par1){
    for(let x of par2){
      for(let k of par3){
        let randomext = Math.floor(Math.random()*extensiones.length);
        let dominio = i + x + k + extensiones[randomext];
        dominios.push(dominio);
        }
      }
    }
    return tag.innerHTML = 
    `<div class="container d-flex justify-content-center align-items-center vh-100">
      <ul class="list-group">
        ${dominios.map(item => `<li class="list-group-item">${item}</li>`).join('')}
      </ul>
    </div>`;


}
  const pronoun = ["the", "our"];
  const adj = ["great", "big"];
  const noun = ["jogger", "racoon"];

window.onload = function () {
    generadorDominio(pronoun, adj, noun);}
  