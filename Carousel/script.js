const controls = document.querySelectorAll('.control')

const items = document.querySelectorAll('.item')
let currentItem = 0

const maxItems = items.length

controls.forEach((control) => {
    control.addEventListener('click', (e) => {
         const isLeft = control.classList.contains("arrow-left")
        
         /*definindo botoes right e left*/ 
        if(isLeft){
             currentItem -= 1;
        }else {
            currentItem += 1;
        }

          /*se for maior ou igual max item volte ao index 0*/ 
        if(currentItem >= maxItems){
            currentItem = 0;
        }

        

        /*se for menor que 0 volte ao ultimo item*/
        if (currentItem < 0){
            currentItem = maxItems - 1;
        }


         /*atualizando o item selecionado*/
        items.forEach((item) => {
            item.classList.remove('current-item')

            /*usando o contador currentItem, e o metodo scrollintoview, se navega no overflow-x */
            items[currentItem].scrollIntoView({
                inline:"center",
                behavior:"smooth"
            })

            items[currentItem].classList.add("current-item")
        })

        console.log("clicked", isLeft, currentItem)
    })

   
})