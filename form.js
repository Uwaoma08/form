const myForm = document.querySelector('.full-form')
const boxParent = document.querySelectorAll('.box-parent')
const inputClasses = document.querySelectorAll('.input-class')
//const inputClassesArray = Array.from(document.querySelectorAll('.input-class'))

myForm.addEventListener('submit', (e) => {
    e.preventDefault()

    boxParent.forEach((box)=> {
        const inputClass = (box.querySelector('.input-class'))
        
        if(!inputClass.value){
        box.classList.toggle('has-error')
        } else {
            box.classList.toggle('has-success')
        }

        inputClass.value = ''
    })



})
