//console.dir(document)
//console.log(document.domain)

//console.log(document.title)
//document.title="Moj prvi sajt"

//console.dir(document.head)
//console.log(document.all)
//console.log(document.all[8])

//document.all[8].textContent="Drugi naslov"

console.log(document.forms);
console.log(document.forms[0]);

console.log(document.getElementsByClassName("list-item"));

let items=document.getElementsByClassName("list-item");

items[3].textContent="promenila sam listu";
items[2].style.backgroundColor="purple";
for(let i =0 ;i<items.length;i++){
    if(i%2==0) items[i].style.backgroundColor="grey";
    else items[i].style.backgroundColor="lightgrey";
}

let drugiLink = document.querySelector(".list-item");
console.log(drugiLink)

drugiLink.style.backgroundColor = "red"

let lista = document.querySelectorAll(".list-item")
console.log(lista)

lista[2].textContent = "neznam sta"



