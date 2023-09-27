const f1 = document.getElementById('1')
const f2 = document.getElementById('2')
const f3 = document.getElementById('3')
const f4 = document.getElementById('4')
const btns = document.querySelectorAll('.container div')
const iShare = document.querySelectorAll('.icons-share button')
const send = document.querySelector('#send')
const search = document.querySelector('#search')
const share = document.querySelector('#share')
const wpp = document.querySelector('#wpp')
console.log(btns)

const list = []
const listSearch = []
btns.forEach((item) => {
    item.addEventListener('click', () => {
        item.classList.toggle('select')
        const link = item.getAttribute('data-link')
        const link2 = item.getAttribute('data-search')
       
        if(item.classList.contains('select')){
            list.push(link)
            listSearch.push(link2)
           
        } else {
            list.pop(link)
            listSearch.pop(link2)
        }
        console.log(list, listSearch)
        
       
    })
    
    })

send.addEventListener('click', () => {
    if(list.length > 0) {
        if(list.length == 1){
            window.open(list[0])
        } else if (list.length == 2){
            window.open(list[0])
            window.open(list[1])
        } else if (list.length == 3){
            window.open(list[0])
            window.open(list[1])
            window.open(list[2])
        }  else if (list.length == 4){
            window.open(list[0])
            window.open(list[1])
            window.open(list[2])
            window.open(list[3])
        }
    } else {
        alert('Sem itens para pesquisar!')
    }
    
   
})

search.addEventListener('click', () => {
    if(listSearch.length > 0) {
        if(listSearch.length == 1){
            window.open(listSearch[0])
        } else if (listSearch.length == 2){
            window.open(listSearch[0])
            window.open(listSearch[1])
        } else if (listSearch.length == 3){
            window.open(listSearch[0])
            window.open(listSearch[1])
            window.open(listSearch[2])
        }  else if (listSearch.length == 4){
            window.open(listSearch[0])
            window.open(listSearch[1])
            window.open(listSearch[2])
            window.open(listSearch[3])
        }
    } else {
        alert('Sem itens para pesquisar na pesquisa 2!')
    }
})

share.addEventListener('click', () => {
          iShare.forEach((item) => {
            item.classList.toggle('active')
          })
})

wpp.addEventListener('click', () => {
    if(list.length || listSearch.length){
        const msg = "ola como vai"
        const numeroContato = '19993723677'
        const wppLink = encodeURIComponent(msg)
        const wppEnco =  `https://wa.me/${numeroContato}?text=${wppLink}`;
        window.open(wppEnco, '_blank')
    }
   
    
})










