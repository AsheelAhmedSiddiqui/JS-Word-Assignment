let bold = document.getElementById("bold");
let italic = document.getElementById("italic");
let underline = document.getElementById("underline");
let strike = document.getElementById("strike");
let center = document.getElementById("center");
let right = document.getElementById("right");
let left = document.getElementById("left");
let textarea = document.getElementById("textarea");
let select = document.getElementById('fontsize');
let fontFamily = document.getElementById('fontFamily');

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
    else if(select.value == 24) {
        textarea.style.fontSize = "24px";
    }
    else if(select.value == 28) {
        textarea.style.fontSize = "28px";
    }
    else if(select.value == 32) {
        textarea.style.fontSize = "32px";
    }
    else {
        alert('no more font size')
    }
})

fontFamily.addEventListener('click', ()=> {
    if(fontFamily.value == 'serif') {
        textarea.style.fontFamily = "serif";
    }
    else if(fontFamily.value == 'sans-serif') {
        textarea.style.fontFamily = "sans-serif";
    }
    else if(fontFamily.value == 'monospace') {
        textarea.style.fontFamily = "monospace";
    }
    else if(fontFamily.value == 'fantasy') {
        textarea.style.fontFamily = "fantasy";
    }
    else if(fontFamily.value == 'cursive') {
        textarea.style.fontFamily = "cursive";
    }
    else if(fontFamily.value == 'verdana') {
        textarea.style.fontFamily = "verdana";
    }
    else if(fontFamily.value == 'arial') {
        textarea.style.fontFamily = "arial";
    }
    else if(fontFamily.value == 'impact') {
        textarea.style.fontFamily = "impact";
    }
})
