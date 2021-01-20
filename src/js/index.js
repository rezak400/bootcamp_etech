//! Function untuk Redirect
let redirect = (url) => {
    window.location.href = `./${url}.html`
}

//! Repeat DOMMMM

//! Ambil selector dari HTML
let containerHome = document.getElementById('container');
let containerCatalog = document.getElementById('container-catalog');

//! Tentukan isi dari div yang akan di ulang
let catalogHome = `<div onclick="redirect('catalog')" class="hover:opacity-50 h-48  bg-no-repeat bg-center bg-shoe-2 bg-cover cursor-pointer" ></div>`
let catalog = `<div onclick="redirect('detail')" class="hover:opacity-50 cursor-pointer h-56  bg-no-repeat bg-center bg-shoe-4 bg-cover"></div>`

//! Function untuk repeat element
let repeat = (element, index, container) => {
    let lemari = ``
    for(let i=0; i<index; i++){
        lemari += element  
    }
    container.innerHTML=lemari
}

//! Function yang akan dijalankan pada body onload()
let repeatCatalogHome =  (index) => repeat(catalogHome,index,containerHome)
let repeatCatalog =  (index) => repeat(catalog,index,containerCatalog)

//! Function toggle tab
let addToggle = (index) => {
    let element = document.querySelectorAll('#tab')[index];
    console.log(element)
    element.classList.toggle("bg-secondary")
}
