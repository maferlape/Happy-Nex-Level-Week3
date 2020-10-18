const options = {
    dragging:false,
    touchZoom:false,
    doubleClickZoon:false,
    scrollWheelZoon: false,
    zoomControl: false
}

//get values from html
const lat = document.querySelector('span[data-lat]').dataset.lat
const lng = document.querySelector('span[data-lng]').dataset.lng


// Create map

let map = L.map('mapid',options).setView([lat,lng], 13)

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
    iconAnchor:[29, 68],
    popupAnchor:[170,2]
})

// Create and add marker
L
.marker([lat, lng], {icon})
.addTo(map)

function selectImage(event){
    const button= event.currentTarget
    console.log(button)

    //remover todas as classes .active

    const buttons = document.querySelectorAll(".images button")
    buttons.forEach(removeActiveClass)

    function removeActiveClass(button){
        button.classList.remove("active")
    }

    //selecionar o image clicada
    const image = button.children[0]
    const imageContainer = document.querySelector(".orphanage-details > img")

    //atualizar o container de image

    imageContainer.src = image.src

    //adicionar a classe .active para este botao
    button.classList.add('active')

}