const labels =document.querySelectorAll(".form-control label");

labels.forEach(label => {
    label.innerHTML = label.innerText
    .split('') // split label text into array [e,m,a,i,l]
    .map((letter,index) => `<span style="transition-delay: ${index*50}ms">${letter}</span>`) // <span>e</span>  <span>m</span> and son on
    .join('') // Email
})

// OnEach index transaction delay is applied 
// style="transition-delay: ${index*50}ms"