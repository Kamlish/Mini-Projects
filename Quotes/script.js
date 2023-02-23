// Fetch API using Promises

const joke = document.querySelector("#quotes")
const btn = document.querySelector("#btn")


const quotes = () =>{
    const setHeaders = {
        headers: {
            'X-RapidAPI-Key': 'd556b2775fmsh59515b77f027818p1a25c6jsn7753e74132aa',
            'X-RapidAPI-Host': 'famous-quotes4.p.rapidapi.com'
            }
        }
        fetch('https://famous-quotes4.p.rapidapi.com/random?category=education&count=1',setHeaders).then(response => response.json())
        .then(data => joke.innerHTML = data.map(a=>a.text))
        .catch(err => err);
        
    }
    btn.addEventListener("click", quotes);
    quotes();
    
    