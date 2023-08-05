const btnDrop = document.querySelector('.btn-drop')
const drop = document.querySelector('.drop')
const modal = document.querySelector('.modal')
const containerModal = document.querySelector('.mod-container')
const closeM = document.querySelector('.close')


btnDrop.addEventListener('click', () => {
   drop.classList.toggle('ativo')
})

document.addEventListener('click', (event) => {
const element = event.target
if(!btnDrop.contains(element) && !drop.contains(element)){
    drop.classList.remove('ativo')
}
})

document.addEventListener('click', (event) => {
    const element = event.target
    if(!containerModal.contains(element) && !modal.contains(element)){
        containerModal.classList.remove('ativo')
    }
    })


function modalOpen(){
containerModal.classList.add('ativo')


}

function closeModal(){
    containerModal.classList.remove('ativo')
}


function outModal(event){
    event.preventDefault()
    const el = event.target
    if(el != this)
    closeModal()
 }


function animaScroll(){
    const scrollItems = document.querySelectorAll('.scroll')
    if(scrollItems.length){
        scrollItems.forEach((s) => {
            
            const topSec = s.getBoundingClientRect().top
            const isVisible = ((topSec + 1) - (window.innerHeight * 0.6)) < 0
            

           if(isVisible){
            s.classList.add('ativo')
           } else {
            s.classList.remove('ativo')
           }

        })
    }


    






    
}
window.addEventListener('scroll', animaScroll)
animaScroll()






closeM.addEventListener('click',closeModal)
modal.addEventListener('click', modalOpen)
containerModal.addEventListener('click', outModal)

