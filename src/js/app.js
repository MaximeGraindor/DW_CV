//Quantity
let inputQuantityElt = document.querySelector('.quantity-input')
const divPriceTotalElt = document.querySelector('.content-total-price')
let priceTotalInt = parseInt(divPriceTotalElt.textContent) + 0.99
const inputUp = document.querySelector('.plus')
const inputDown = document.querySelector('.moins')

inputUp.addEventListener('click', () => {
    inputQuantityElt.value++
    priceTotalInt += 999.99
    divPriceTotalElt.innerHTML = Math.round(priceTotalInt*100)/100
})

inputDown.addEventListener('click', () => {
    if(inputQuantityElt.value <= 0){
        inputQuantityElt.value = 0
    }else{
        inputQuantityElt.value--
        if(priceTotalInt <= 0){
            priceTotalInt = 0
            divPriceTotalElt.innerHTML = priceTotalInt
        }
        priceTotalInt -= 999.99
        divPriceTotalElt.innerHTML = Math.round(priceTotalInt*100)/100
    }
})


//Informations
const descTitle = document.getElementById('description')
const avisTitle = document.getElementById('avis')
const retoursTitle = document.getElementById('retours')

const descElt = document.querySelector('.infos-description')
const avisElt = document.querySelector('.infos-avis')
const retourElt = document.querySelector('.infos-retour')


descTitle.addEventListener('click', () => {
    descElt.style.display = 'block'
    avisElt.style.display = 'none'
    retourElt.style.display = 'none'

    avisTitle.style.backgroundColor = 'white'
    retoursTitle.style.backgroundColor = 'white'

})

avisTitle.addEventListener('click', () => {
    descElt.style.display = 'none'
    avisElt.style.display = 'block'
    retourElt.style.display = 'none'

    descTitle.style.backgroundColor = 'white'
    retoursTitle.style.backgroundColor = 'white'
})

retoursTitle.addEventListener('click', () => {
    descElt.style.display = 'none'
    avisElt.style.display = 'none'
    retourElt.style.display = 'block'

    descTitle.style.backgroundColor = 'white'
    avisTitle.style.backgroundColor = 'white'
})


//gallery
itemgallery = document.querySelectorAll('.gallery-image')
bigImg = document.querySelector('.bigImg')
for (let i = 0; i < itemgallery.length; i++) {
    itemgallery[i].addEventListener('click', ()=>{
        bigImg.src = itemgallery[i].src
    })
}

//HEADER
imgMenuHeader = document.querySelector('.header-burgerMenu-link')
middleMenuHeader = document.querySelector('.header-middle')
closeMenuElt = document.querySelector('.close-menu')
imgMenuHeader.addEventListener('click', ()=>{
    middleMenuHeader.classList.toggle('menu-left')
})
closeMenuElt.addEventListener('click', ()=>{
    middleMenuHeader.classList.remove('menu-left')
})


//INFOS DEROULANTS
const infosTitle = document.querySelectorAll('.title-tab')

const infosDescription = document.querySelector('.infos-description')
const infosAvis = document.querySelector('.infos-avis')
const infosRetour = document.querySelector('.infos-retour')

arrowSpan = document.querySelectorAll('.title-tab-arrow')

function resizeInfos(){
    window.requestAnimationFrame(resizeInfos)
    if(window.innerWidth < 767){
        infosTitle[0].addEventListener('click', ()=>{
            infosDescription.classList.toggle('infos-deroulant')
            arrowSpan[0].classList.toggle('title-tab-arrow-down')
    
            infosAvis.classList.remove('infos-deroulant')
            infosRetour.classList.remove('infos-deroulant')
            arrowSpan[1].classList.remove('title-tab-arrow-down')
            arrowSpan[2].classList.remove('title-tab-arrow-down')
        })
    
        infosTitle[1].addEventListener('click', ()=>{
            infosAvis.classList.toggle('infos-deroulant')
            arrowSpan[1].classList.toggle('title-tab-arrow-down')
    
            infosDescription.classList.remove('infos-deroulant')
            infosRetour.classList.remove('infos-deroulant')
            arrowSpan[0].classList.remove('title-tab-arrow-down')
            arrowSpan[2].classList.remove('title-tab-arrow-down')
        })
    
        infosTitle[2].addEventListener('click', ()=>{
            infosRetour.classList.toggle('infos-deroulant')
            arrowSpan[2].classList.toggle('title-tab-arrow-down')
    
            infosDescription.classList.remove('infos-deroulant')
            infosAvis.classList.remove('infos-deroulant')
            arrowSpan[0].classList.remove('title-tab-arrow-down')
            arrowSpan[2].classList.remove('title-tab-arrow-down')
        })
    }
}

resizeInfos()



// FOOTER
const competence = document.querySelector('.competence')
const hobby = document.querySelector('.hobby')
const menuCompetence = document.querySelector('.menu-competence')
const menuHobby = document.querySelector('.menu-hobby')
console.log(menuCompetence, menuHobby);

competence.addEventListener('click', ()=>{
    menuCompetence.classList.toggle('down')
    menuHobby.classList.remove('down')
})

hobby.addEventListener('click', ()=>{
    menuHobby.classList.toggle('down')
    menuCompetence.classList.remove('down')
})

