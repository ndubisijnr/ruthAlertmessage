
class Ruthly {
    constructor(obj){
        this.title = obj.title
    }

    

        
    doAlert() {
    
    document.getElementById('btn').addEventListener('click',()=>{
        alert('hello')
    })

    const rootElement = document.body //finds a element id named app

    const rootDiv = document.createElement('div')  //creates root div

    const script = document.querySelector('script')
    
    rootElement.insertBefore(rootDiv, script)  // appends root div to the root element
}

} 








// export const Ruth = ({...props}, ...style) => {

//     let properties = props[0]

//     //let styles = style[0] coming soon


//     const isAuthDismissal = properties.dismiss

//     const rootElement = document.body //finds a element id named app

//     const rootDiv = document.createElement('div')  //creates root div

//     rootElement.append(rootDiv) // appends root div to the root element

//     function vex(properties){
//         console.log(rootElement)

//         rootDiv.setAttribute('id', 'ruthly-div')  // set root div element id

//         if(properties.icon === 'success'){ // set root element based on icon specifications
//             rootDiv.setAttribute('style',
//             'width:362px;\n' +
//             'min-height: 78px;\n' +
//             'z-index: 999999999;\n' +
//             'position: fixed;\n' +
//             `background: #BBE7AC;\n` +
//             'border-radius: 8px;\n' +
//             'top: 100px;\n' +
//             'right: 50px;\n' +
//             'padding: 10px;\n' +
//             'display: flex;\n' +
//             'align-items: center;\n' +
//             'justify-content: center;\n' +
//             'transform-origin: 0 0;\n' +
//             'zoom: 75%;\n')
//         }else{
//             rootDiv.setAttribute('style',
//             'width:362px;\n' +
//             'min-height: 78px;\n' +
//             'z-index: 999999999;\n' +
//             'position: fixed;\n' +
//             `background: #F89191;\n` +
//             'border-radius: 8px;\n' +
//             'top: 100px;\n' +
//             'right: 50px;\n' +
//             'padding: 10px;\n' +
//             'display: flex;\n' +
//             'align-items: center;\n' +
//             'justify-content: center;\n' +
//             'transform-origin: 0 0;\n' +
//             'zoom: 75%;\n')
//         }
        
//         rootDiv.setAttribute('class', 'animate__animated animate__fadeInRight') // adds the animation class 


//         const element2 = document.createElement('div') // create a second div element 

//         rootDiv.append(element2) // and appends it to the root div

//         element2.setAttribute('style',
//             'display: flex;\n ' +
//             'align-items: center;\n' +
//             'justify-content: space-around;\n' +
//             'width: 100%;\n' +
//             'height: inherit;\n')

//         const  elementP = document.createElement('p')

//         if(properties.icon === 'success'){ // sets paragraphs text color based on specifications
//             elementP.setAttribute('style',
//                 'font-size: 18px;\n ' +
//                 'line-height: 23px;\n' +
//                 'letter-spacing: -0.01em;\n' +
//                 `color: #415251;\n` +
//                 'width: 70%;\n' +
//                 'font-family: \'IBM Plex Sans\';\n' +
//                 'font-style: normal;')

//         }
//         else{

//             elementP.setAttribute('style',
//             'font-size: 18px;\n ' +
//             'line-height: 23px;\n' +
//             'letter-spacing: -0.01em;\n' +
//             `color:#FFFFFF;\n` +
//             'width: 70%;\n' +
//             'font-family: \'IBM Plex Sans\';\n' +
//             'font-style: normal;')
//         }
            
        
//         // assigning paragraph text 

//         elementP.textContent = properties.title



//         const elementClose = document.createElement('img') // this create close icon img type

//         elementClose.setAttribute('src', cancelImg) // assigns the src to the imported image

//         elementClose.setAttribute('style', 'cursor:pointer') // set the element style cursor to be pointed

//         // create image tag for specifying icon pop up type

//         const elementType = document.createElement('img') 

//         // sets icon image based on specifications

//         if(properties.icon === 'success'){ 
//             elementType.setAttribute( 'src', successImg)
//         }else if(properties.icon === 'error'){
//             elementType.setAttribute( 'src',  errorImg)
//         }else{
//             elementType.setAttribute( 'src', null)
//         }

//         element2.append(elementType) // add the icon type
//         element2.append(elementP) // add the pop up message
//         element2.append(elementClose) //  add the close icon


//         const removeElement = document.getElementById('ruthly-div') // getting the id of the parent element

//         const timeOut = properties.timeout // auto modal dismissal timeout

//         // on click modal dismissal events
//         elementClose.addEventListener('click', () => {
//             removeElement.setAttribute('class', 'animate__animated animate__fadeOutRight')
//             setTimeout(() => {
//                 removeElement.remove()
//             },1000)
//         })
//         function autoDismissal(){
//             removeElement.setAttribute('class', 'animate__animated animate__fadeOutRight')
//             setTimeout(() => {
//                 removeElement.remove()
//             },1000)
//         }


//         if(!isAuthDismissal){
//             //do nothing
//         }else{
//             if(timeOut){
//                 setTimeout(() => {
//                     autoDismissal()
//                 },timeOut) 
//             }else{
//                 setTimeout(() => {
//                     autoDismissal()
//                 },3000)
//             }
            
//         }


//     }

   

//     return { vex };
// }


// export default Ruth

// Ruth.vex()
