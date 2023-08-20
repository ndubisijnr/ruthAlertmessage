import cancel from './exit.svg'
import error from './error.svg'
import success from './success.svg'

const cancelImg = cancel
const errorImg = error
const successImg = success


 export const RuthdoAlert = (...props) => {
   
            const element1 = document.createElement('div')
            const rootElement = document.getElementById('app')
            rootElement.append(element1)


            element1.setAttribute('id', 'alertMessage')
            element1.setAttribute('style',
                'width:362px;\n' +
                'min-height: 78px;\n' +
                'z-index: 999999999;\n' +
                'position: fixed;\n' +
                `background: ${props[0]?.icon === 'success' ? '#BBE7AC' : '#F89191'};\n` +
                'border-radius: 8px;\n' +
                'top: 100px;\n' +
                'right: 50px;\n' +
                'padding: 10px;\n' +
                'display: flex;\n' +
                'align-items: center;\n' +
                'justify-content: center;\n' +
                'transform-origin: 0 0;\n' +
                'zoom: 75%;\n')
            element1.setAttribute('class', 'animate__animated animate__fadeInRight')
            const element2 = document.createElement('div')
            element1.append(element2)

            element2.setAttribute('style',
                'display: flex;\n ' +
                'align-items: center;\n' +
                'justify-content: space-around;\n' +
                'width: 100%;\n' +
                'height: inherit;\n')

            const  elementP = document.createElement('p')
            elementP.setAttribute('style',
                'font-size: 18px;\n ' +
                'line-height: 23px;\n' +
                'letter-spacing: -0.01em;\n' +
                `color: ${props[0]?.icon === 'success' ? '#415251' : '#FFFFFF'};\n` +
                'width: 70%;\n' +
                'font-family: \'IBM Plex Sans\';\n' +
                'font-style: normal;')

            elementP.textContent = props[0]?.title

            const elementClose = document.createElement('img')
            elementClose.setAttribute('src', cancelImg)
            elementClose.setAttribute('style', 'cursor:pointer')

            const elementType = document.createElement('img')
            elementType.setAttribute( 'src', props[0]?.icon === 'success' ? successImg : props[0]?.icon === 'error' ? errorImg : null)
            element2.append(elementType)
            element2.append(elementP)
            element2.append(elementClose)

            const removeElement = document.getElementById('alertMessage')

            const timeOut = props[0]?.timeout // auto modal dismissal timeout

            // on click modal dismissal events
            elementClose.addEventListener('click', () => {
                removeElement.setAttribute('class', 'animate__animated animate__fadeOutRight')
                setTimeout(() => {
                removeElement.remove()
            },1000)
            })


            function autoDismissal(){
                removeElement.setAttribute('class', 'animate__animated animate__fadeOutRight')
                setTimeout(() => {
                    removeElement.remove()
                },1000)
            }

            setTimeout(() => {
                autoDismissal()
            },timeOut ? timeOut : 3000)


        

}



