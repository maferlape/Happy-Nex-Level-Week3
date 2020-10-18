// Create map

let map = L.map('mapid').setView([-20.4968552,-54.6361863], 13)

// Create and add tileLayer

L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
     {
         attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
     }
).addTo(map)


// Create icon

const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor:[29, 68]
})


// Create and add marker

let marker;

map.on('click', (event => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    //remove icon

    marker && map.removeLayer(marker)

    //add icon tileLayer

    marker = L.marker([lat, lng], {icon})
    .addTo(map)

}))

//adicionar o campo de fotos

function addPhotoField(){
    //pegar o container de fotos #images
    const container = document.querySelector('#images')

    //pegar o container para duplicar .new-image
    const fieldsContainer = document.querySelectorAll('.new-upload')

    //realizar o clone de la última image adicionada
    const newFieldContainer = fieldsContainer[fieldsContainer.length-1].cloneNode(true)

    //verificar si el campo esta vacio, se sim, nao adicionar ao container de image
    const input = newFieldContainer.children[0]

    if(input.value == ""){
        return
    }

    //limpiar o campo antes de clonar
    input.value = ""

    //adicionar o clone ao container de #images
    container.appendChild(newFieldContainer)
}

function deleteField(event){
    const span = event.currentTarget

    const fieldsContainer = document.querySelectorAll('.new-upload')

    if(fieldsContainer.length < 2){

        //limpiar o valor do campo
        span.parentNode.children[0].value = ""
        return

    }

    //deletar o campo

    span.parentNode.remove();

  
}


function toggleSelect(event){

    //retirar a class .active(dos botoes)
    document.querySelectorAll('.button-select button')
    .forEach(button => button.classList.remove('active'))

    //colocar a class .active nesse botao clicado
    const button = event.currentTarget
    button.classList.add('active')

    //actualizar o meu input hidde com o valor selecionado
    const input = document.querySelector('[name="open_on_weekends"]')

    //Verificar se sim ou nao
    input.value = button.dataset.value
}

function validate(event){
    //validar se lat e lng estao preenchidos
    const needsLatAndLng =  document.querySelector('[name=lat]').value =="";

    if(needsLatAndLng){
        event.preventDefault()
        alert('Seleccione um ponto do mapa')
    }
}
