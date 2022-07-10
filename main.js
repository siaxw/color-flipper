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
    "purple"
];

const colorName = document.getElementById('colorName');
const btn = document.getElementById('btn');
const bgc = document.querySelector('div.container__main');
const para = document.getElementById('main__p');



function color(){
    let a = colors[Math.floor(Math.random() * colors.length)];
    return a;
}

bgc.style.backgroundColor = color();

btn.addEventListener('click', () =>{
    let a = color();
    if(a == "red"){
        bgc.style.backgroundColor = "red";
    }else if(a == "blue"){
        bgc.style.backgroundColor = "blue";
    }else if(a == "yellow"){
        bgc.style.backgroundColor = "yellow";
        para.style.color = "black";
    }else if(a == "black"){
        bgc.style.backgroundColor = "black";
        para.style.color = "white";
    }else if(a == "orange"){
        bgc.style.backgroundColor = "orange";
    }else if(a == "pink"){
        bgc.style.backgroundColor = "pink";
    }else if(a == "gray"){
        bgc.style.backgroundColor = "gray";
    }else if(a == "white"){
        bgc.style.backgroundColor = "white";
        para.style.color = "black";
    }else if(a == "green"){
        bgc.style.backgroundColor = "green";
    }else if(a == "purple"){
        bgc.style.backgroundColor = "purple";
        para.style.color = "white";
    }
})

// bgc.style.backgroundColor = "blue";

