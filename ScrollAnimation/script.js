const boxes = document.querySelectorAll('.box');


// adding event on scroll that is window event
window.addEventListener('scroll', checkBoxes);

checkBoxes();

function checkBoxes() {
    const triggerBottom = window.innerHeight/5*4;

    boxes.forEach(box => { 

        // Return the size of an element and its position relative to the viewport:

        const boxTop = box.getBoundingClientRect().top;

        if (boxTop<triggerBottom){
            box.classList.add('show');
        }
        else{
            box.classList.remove('show');
        }
        
    });

    }

