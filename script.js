const button = document.querySelector('.btn')
const popup = document.querySelector('.container')
const cross = document.querySelector('.cross')

button.addEventListener('click', () => {
    popup.classList.add('open')
})

cross.addEventListener('click', () => {
    popup.classList.remove('open')
})
