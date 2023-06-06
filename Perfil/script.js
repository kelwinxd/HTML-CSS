const Links = document.querySelectorAll('.lista a')

function ativarLink(link){
    const url = location.href
    const href = link.href
    

    if(url.includes(href)){
         link.classList.add("ativo")
         
    }
}



Links.forEach(ativarLink)