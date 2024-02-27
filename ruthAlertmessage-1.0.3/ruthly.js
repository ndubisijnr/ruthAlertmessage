import cancel from './exit.svg'
import error from './error.svg'
import success from './success.svg'

const cancelImg = cancel
const errorImg = error
const successImg = success

let boxArray = []

//  export const RuthdoAlert = (...props) => {

//             const element1 = document.createElement('div')
//             const rootElement = document.getElementById('app')
//             rootElement.append(element1)

 
//             const timeOut = props[0]?.timeout // auto modal dismissal timeout    
    
//             element1.setAttribute('id', 'alertMessage')
//             element1.setAttribute('style',
//                 'width:362px;\n' +
//                 'min-height: 78px;\n' +
//                 'z-index: 999999999;\n' +
//                 'position: fixed;\n' +
//                 `background: ${props[0]?.icon === 'success' ? '#BBE7AC' : '#F89191'};\n` +
//                 'border-radius: 8px;\n' +
//                 'top: 100px;\n' +
//                 'right: 50px;\n' +
//                 'padding: 10px;\n' +
//                 'display: flex;\n' +
//                 'align-items: center;\n' +
//                 'justify-content: center;\n' +
//                 'transform-origin: 0 0;\n' +
//                 'zoom: 75%;\n')
//             element1.setAttribute('class', 'animate__animated animate__fadeInRight')
//             const element2 = document.createElement('div')
//             element1.append(element2)
    
//             element2.setAttribute('style',
//                 'display: flex;\n ' +
//                 'align-items: center;\n' +
//                 'justify-content: space-around;\n' +
//                 'width: 100%;\n' +
//                 'height: inherit;\n')
    
//             const  elementP = document.createElement('p')
//             elementP.setAttribute('style',
//                 'font-size: 18px;\n ' +
//                 'line-height: 23px;\n' +
//                 'letter-spacing: -0.01em;\n' +
//                 `color: ${props[0]?.icon === 'success' ? '#415251' : '#FFFFFF'};\n` +
//                 'width: 70%;\n' +
//                 'font-family: \'IBM Plex Sans\';\n' +
//                 'font-style: normal;')
    
//             elementP.textContent = props[0]?.title
    
//             const elementClose = document.createElement('img')
//             elementClose.setAttribute('src', cancelImg)
//             elementClose.setAttribute('style', 'cursor:pointer')
//             elementClose.setAttribute('id', 'close_ruthly')
    
    
//             const elementType = document.createElement('img')
//             elementType.setAttribute( 'src', props[0]?.icon === 'success' ? successImg : props[0]?.icon === 'error' ? errorImg : null)
//             element2.append(elementType)
//             element2.append(elementP)
//             element2.append(elementClose)

//             const removeElement = document.getElementById('alertMessage')


//                 // on click modal dismissal events
//                 function clickToClose(){
//                     removeElement.setAttribute('class', 'animate__animated animate__fadeOutRight')
//                         setTimeout(() => {
//                         removeElement.remove()
//                     },1000)
//                 }

//                 document.getElementById('close_ruthly').addEventListener('click', (e) => {
//                     console.log(e, removeElement, boxArray)
//                     clickToClose()
//                     console.log(e, removeElement, boxArray)
//                 })

//                 function autoDismissal(){
//                     removeElement.setAttribute('class', 'animate__animated animate__fadeOutRight')
//                     setTimeout(() => {
//                         removeElement.remove()
//                     },1000)
//                 }

//                 setTimeout(() => {
//                     autoDismissal()
//                 },timeOut ? timeOut : 3000)
        
             
    

//             if(boxArray.length > 0){
//                 autoDismissal()
//                 boxArray = []
//                 return; 
//             }else{
//                 boxArray.push({})
//                 console.log('push', boxArray)
//                 addToBoxArray()
//             }



       


        

// }


export const RuthdoAlert = (...props) => {
    if(boxArray.length > 0){
        console.log('a modal is present', boxArray)
        autoDismissal()
        boxArray = []
        return;
    }else{
        console.log('push', boxArray)

        const rootElement = document.getElementById('app')
        const element1 = document.createElement('div')
        const ruthlyChildcoverDiv = document.createElement('div')
        
        rootElement.append(ruthlyChildcoverDiv)

        ruthlyChildcoverDiv.appendChild(element1)

        const timeOut = props[0]?.timeout; // auto modal dismissal timeout 

        ruthlyChildcoverDiv.setAttribute('style', 'width:362px;\n' +
        'z-index: 999999999;\n' +
        'position: fixed;\n' +
        'top: 100px;\n' +
        'right: 50px;\n' +
        'display: flex;\n' +
        'align-items: center;\n' +
        'justify-content: center;\n')

        element1.setAttribute('id', `alertMessage`)
        element1.setAttribute('style',
            'width:362px;\n' +
            'min-height: 78px;\n' +
            'z-index: 999999;\n' +
            'position: relative;\n' +
            `background: ${props[0]?.icon === 'success' ? '#BBE7AC' : '#F89191'};\n` +
            'border-radius: 8px;\n' +
            'top: 0;\n' +
            'right: 0;\n' +
            'padding: 10px;\n' +
            'display: flex;\n' +
            'align-items: center;\n' +
            'justify-content: center;\n' +
            'transform-origin: 0 0;\n' +
            'zoom: 75%;\n' +
            'margin-bottom:15px;')
        element1.setAttribute('class', 'animate__animated animate__fadeInRight')
        const element2 = document.createElement('div')
        element1.appendChild(element2)

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
        elementClose.setAttribute('id', `close_ruthly`)


        const elementType = document.createElement('img')
        elementType.setAttribute( 'src', props[0]?.icon === 'success' ? successImg : props[0]?.icon === 'error' ? errorImg : null)
        element2.append(elementType)
        element2.append(elementP)
        element2.append(elementClose)

        const removeElement = document.getElementById(`alertMessage`)

        // on click modal dismissal events
        function clickToClose(){
            removeElement.setAttribute('class', 'animate__animated animate__fadeOutRight')
            setTimeout(() => {
                removeElement.remove()
            },1000)
        }

        document.getElementById(`close_ruthly`).addEventListener('click', (e) => {
            console.log(e, removeElement, boxArray)
            clickToClose(removeElement) // Pass removeElement as an argument
            console.log(e, removeElement, boxArray)
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
            
        boxArray.push(ruthlyChildcoverDiv)
        console.log('a modal was added', boxArray)
    }

        
}
