let URL = 'https://icanhazdadjoke.com/slack'

fetch(URL)
    .then(response => response.json())
    .then(data => {
        const contenedor = document.querySelector('.caja-texto')
        const joke = data.attachments[0].text
        console.log(joke)
        contenedor.innerHTML = `
            <p class="chiste">${joke}</p>
        `
    })

const boton = document.querySelector('.btn');
boton.addEventListener('click', (e)=>{
    e.preventDefault(); 
    location.reload();
})