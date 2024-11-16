const btn=document.getElementById("btn");
const url=document.getElementById("url");
const name=document.getElementById("name");
const year=document.getElementById("year");
btn.addEventListener("click", function(){
 url.innerHTML = `https://localhost:8080/ &${name.value}&${year.value}`;
}