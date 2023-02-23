const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');


let load = 0;

let int = setInterval(blurring,0)

function blurring() {
    load++;

    if (load > 99){
        clearInterval(int);
    }

    loadText.innerText = `${load}%`
    // The innerText property sets or returns the text content of an element.
    // When you set the innerText property, all child nodes are removed and replaced by only one new text node.

    loadText.style.opacity = scale( load, 0, 100, 1, 0)
    // Load text disappear when value reaches 100

    bg.style.filter = `blur(${scale(load,0, 100, 30, 0)}px)`
    // set value to css property filter in style.css file 
}


//https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers

function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}