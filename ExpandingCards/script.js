const panels = document.querySelectorAll('.panel');

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeAllActivepanels();
        panel.classList.add('active');
        
})
})

function removeAllActivepanels (){
    panels.forEach(panel => {
        panel.classList.remove('active');
    })

}
