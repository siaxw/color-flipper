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

const hexColors = [
    "#fefdb0",
    "#746cc0",
    "#ff1199",
    "#95a7c0",
    "#6a8b88",
    "#602171",
    "#ff9342",
    "#2e5090",
    "#3c69e7",
    "#4f407c"
];

const colorName = document.getElementById('colorName');
const hexColorName = document.getElementById('hexColorName');
const btn = document.getElementById('btn');
const btn1 = document.getElementById('btn1')
const bgc = document.querySelector('div.container__main');
const hexBgc = document.querySelector('div.container__main1');
const para = document.getElementById('main__p');
const colorTab = document.getElementById('colorTab');
const hexTab = document.getElementById('hexTab');

hexBgc.style.display = "none";

hexTab.addEventListener('click', () =>{
    bgc.style.display = "none";
    hexBgc.style.display = "flex";
    hexTab.style.color = "#11cbff";
    colorTab.style.color = "black";
});

colorTab.addEventListener('click', () =>{
    hexBgc.style.display = "none";
    bgc.style.display = "flex";
    colorTab.style.color = "#11cbff";
    hexTab.style.color = "black";
})


function color(){
    let a = colors[Math.floor(Math.random() * colors.length)];
    return a;
}

function hexColor(){
    let a = hexColors[Math.floor(Math.random() * hexColors.length)];
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


function randomHexColor(){
    let a = hexColor();
    if(a == "#fefdb0"){
        hexBgc.style.backgroundColor = "#fefdb0";
        hexColorName.innerHTML = "#fefdb0";
    }else if(a == "#746cc0"){
        hexBgc.style.backgroundColor = "#746cc0";
        hexColorName.innerHTML = "#746cc0";
    }else if(a == "#ff1199"){
        hexBgc.style.backgroundColor = "#ff1199";
        hexColorName.innerHTML = "#ff1199";
    }else if(a == "#95a7c0"){
        hexBgc.style.backgroundColor = "#95a7c0";
        hexColorName.innerHTML = "#95a7c0";
    }else if(a == "#6a8b88"){
        hexBgc.style.backgroundColor = "#6a8b88";
        hexColorName.innerHTML = "#6a8b88";
    }else if(a == "#602171"){
        hexBgc.style.backgroundColor = "#602171";
        hexColorName.innerHTML = "#602171";
    }else if(a == "#ff9342"){
        hexBgc.style.backgroundColor = "#ff9342";
        hexColorName.innerHTML = "#ff9342"
    }else if(a == "#2e5090"){
        hexBgc.style.backgroundColor = "#2e5090";
        hexColorName.innerHTML = "#2e5090"
    }else if(a == "#3c69e7"){
        hexBgc.style.backgroundColor = "#3c69e7";
        hexColorName.innerHTML = "#3c69e7";
    }else if(a == "#4f407c"){
        hexBgc.style.backgroundColor = "#4f407c";
        hexColorName.innerHTML = "#4f407c"
    }
}


hexBgc.style.backgroundColor = randomHexColor();

btn1.addEventListener('click', () =>{
    randomHexColor();
})
