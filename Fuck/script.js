function animaScroll(){
    const scrollItems = document.querySelectorAll('.scroll')
    const Half = window.innerHeight * 0.6
    scrollItems.forEach((item) => {
        const Top = item.getBoundingClientRect().top
        const isVisible = ((Top + 30) - Half) < 0;
        if(isVisible){
            item.classList.add('ativo')
        } else {
            item.classList.remove('ativo')
        }
        
        
    })
}
window.addEventListener('scroll',animaScroll)
animaScroll()