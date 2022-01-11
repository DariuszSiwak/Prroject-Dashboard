const toggled = 'menu'
const closed = 'menu--closed'
const icon = 'button'

const menu = document.getElementsByClassName(toggled)[0]
const button = document.getElementsByClassName(icon)[0]

button.addEventListener('click',() => {
    if(menu.classList.contains(closed)) {
        menu.classList.add(toggled)
        menu.classList.remove(closed)

    }else{
        menu.classList.add(closed)
        menu.classList.remove(toggled)
    }

})
