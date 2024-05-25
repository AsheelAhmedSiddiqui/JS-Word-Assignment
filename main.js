let bold = document.getElementById("bold");
let italic = document.getElementById("italic");
let underline = document.getElementById("underline");
let strike = document.getElementById("strike");
let center = document.getElementById("center");
let right = document.getElementById("right");
let left = document.getElementById("left");
let textarea = document.getElementById("textarea");
let select = document.getElementById('fontsize');

bold.addEventListener("click", () => {
  textarea.style.fontWeight = "bold";
});

italic.addEventListener("click", () => {
  textarea.style.fontStyle = "italic";
});

underline.addEventListener("click", () => {
  textarea.style.textDecoration = "underline";
});

strike.addEventListener("click", () => {
  textarea.style.textDecoration = "line-through";
});

left.addEventListener('click', ()=> {
    textarea.style.textAlign = "left";
})
center.addEventListener('click', ()=> {
    textarea.style.textAlign = "center";
})
right.addEventListener('click', ()=> {
    textarea.style.textAlign = "right";
})

select.addEventListener('click', ()=> {
    if(select.value == 11) {
        textarea.style.fontSize = "11px";
    }
    else if(select.value == 12) {
        textarea.style.fontSize = "12px";
    }
    else if(select.value == 13) {
        textarea.style.fontSize = "13px";
    }
    else if(select.value == 14) {
        textarea.style.fontSize = "14px";
    }
    else if(select.value == 15) {
        textarea.style.fontSize = "15px";
    }
    else if(select.value == 16) {
        textarea.style.fontSize = "16px";
    }
    else if(select.value == 17) {
        textarea.style.fontSize = "17px";
    }
    else if(select.value == 18) {
        textarea.style.fontSize = "18px";
    }
    else if(select.value == 19) {
        textarea.style.fontSize = "19px";
    }
    else if(select.value == 20) {
        textarea.style.fontSize = "20px";
    }
})
