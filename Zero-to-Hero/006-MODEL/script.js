'use strict'

const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
const btnCloseModal = document.querySelector('.close-modal')
const btnShowModal = document.querySelectorAll('.show-modal')



const closeModel = (e)=>{
    
    modal.classList.add('hidden')
    overlay.classList.add('hidden')

}

const openModel = ()=>{
    
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')
}

btnShowModal.forEach((btnShow)=>{
    btnShow.addEventListener('click',openModel)

})
 
btnCloseModal.addEventListener('click',closeModel) 

overlay.addEventListener('click',closeModel)


document.addEventListener('keydown',(e)=>{
    if(e.key === 'Escape' && !modal.classList.contains('hidden')){
        
         closeModel()
        
    }
    // e.key === 'Escape' ? closeModel  : ''
})



// dhfscscs asc scscascscsaczxc cac cascadasxcz fuckkkkk kjscsacsd gone if pressldkf