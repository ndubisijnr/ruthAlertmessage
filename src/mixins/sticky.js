export const stickyHeader = () => {
    const navTop = document.getElementById('header')
    document.addEventListener('scroll',()=> {
        if(window.scrollY > 2){
            navTop.style.position = 'fixed'
            navTop.style.top = '0'
            navTop.style.zIndex = '999'
            navTop.style.borderBottom = '1'
            navTop.style.borderBottomColor = '#A22C4D'
        }else{
            navTop.style.position = 'relative'
            navTop.style.backgroundColor = 'transparent'
        }
    })
}
