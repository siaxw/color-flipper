const colors = [
    "red",
    "blue",
    "yellow",
    "black",
    "orange",
    "pink",
    "gray",
    "white",
    "green",
    "purple",
    "brown"
];

const colorName = document.getElementById('colorName');
const btn = document.getElementById('btn');
const bgc = document.querySelector('div.container__main');
const para = document.getElementById('main__p');
const colorTab = document.getElementById('color');


function color(){
    let a = colors[Math.floor(Math.random() * colors.length)];
    return a;
}

function randomColor(){
    let a = color();
    if(a == "red"){
        bgc.style.backgroundColor = "red";
        colorName.innerHTML = "red";
    }else if(a == "blue"){
        bgc.style.backgroundColor = "blue";
        colorName.innerHTML = "blue";
    }else if(a == "yellow"){
        bgc.style.backgroundColor = "yellow";
        para.style.color = "black";
        colorName.innerHTML = "yellow";
    }else if(a == "black"){
        bgc.style.backgroundColor = "black";
        para.style.color = "white";
        colorName.innerHTML = "black";
    }else if(a == "orange"){
        bgc.style.backgroundColor = "orange";
        colorName.innerHTML = "orange";
    }else if(a == "pink"){
        bgc.style.backgroundColor = "pink";
        colorName.innerHTML = "pink";
    }else if(a == "gray"){
        bgc.style.backgroundColor = "gray";
        colorName.innerHTML = "gray";
    }else if(a == "white"){
        bgc.style.backgroundColor = "white";
        para.style.color = "black";
        colorName.innerHTML = "white";
    }else if(a == "green"){
        bgc.style.backgroundColor = "green";
        colorName.innerHTML = "green";
    }else if(a == "purple"){
        bgc.style.backgroundColor = "purple";
        para.style.color = "white";
        colorName.innerHTML = "purple";
    }else if(a == "brown"){
        bgc.style.backgroundColor = "brown";
        colorName.innerHTML = "brown";
    }
}

bgc.style.color = randomColor();

btn.addEventListener('click', () =>{
    randomColor();
})


