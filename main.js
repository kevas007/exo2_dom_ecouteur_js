let h1 = document.querySelector('h1');

let myFunction =()=>{
    h1.setAttribute('style', 'background-color: red; color:white;');
}

h1.addEventListener('dblclick',myFunction);


let h3 = document.querySelector('h3');

h3.addEventListener('mouseover',()=>{
    h3.innerText = h3.innerText.slice(h3.length,-1)
});

let p = document.querySelector('p');

p.addEventListener('click',()=>{
    if (p.style.cssText == "color: gold; background-color: blue;") {
        
        p.setAttribute('style','color:black; background-color:white;');
    } else {
        p.setAttribute('style','color:gold; background-color:blue;');
    }

})