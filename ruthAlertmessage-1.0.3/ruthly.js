import cancel from './exit.svg'
import error from './error.svg'
import success from './success.svg'

const cancelImg = cancel
const errorImg = error
const successImg = success

let ruthItemArray = []


//point of entry
// export const RuthdoAlert = (...ruthToastProps) => {
//     const props = ruthToastProps[0]


//     const alert = (el, ruthItems) => {

//         ruthItems.forEach((element,index) => {
//         console.log(element)

//         el.setAttribute('id', `${index}-alertMessage`)

//         el.setAttribute('style',
//             'width:362px;\n' +
//             'min-height: 78px;\n' +
//             'z-index: 999999;\n' +
//             'position: relative;\n' +
//             `background: ${props[0]?.icon === 'success' ? '#BBE7AC' : '#F89191'};\n` +
//             'border-radius: 8px;\n' +
//             'top: 0;\n' +
//             'right: 0;\n' +
//             'padding: 10px;\n' +
//             'display: flex;\n' +
//             'align-items: center;\n' +
//             'justify-content: center;\n' +
//             'transform-origin: 0 0;\n' +
//             'zoom: 75%;\n' +
//             'margin-bottom:15px;')
//         el.setAttribute('class', 'animate__animated animate__fadeInRight')
//         const element2 = document.createElement('div')
//         el.appendChild(element2)
    
//         element2.setAttribute('style',
//             'display: flex;\n ' +
//             'align-items: center;\n' +
//             'justify-content: space-around;\n' +
//             'width: 100%;\n' +
//             'height: inherit;\n')
    
//         const  elementP = document.createElement('p')
//         elementP.setAttribute('style',
//             'font-size: 18px;\n ' +
//             'line-height: 23px;\n' +
//             'letter-spacing: -0.01em;\n' +
//             `color: ${props?.icon === 'success' ? '#415251' : '#FFFFFF'};\n` +
//             'width: 70%;\n' +
//             'font-family: \'IBM Plex Sans\';\n' +
//             'font-style: normal;')
    
//         elementP.textContent = props?.title
    
//         const elementClose = document.createElement('img')
//         elementClose.setAttribute('src', cancelImg)
//         elementClose.setAttribute('style', 'cursor:pointer')
//         elementClose.setAttribute('id', `${index}-close_ruthly`)
    
    
//         const elementType = document.createElement('img')
//         elementType.setAttribute( 'src', props?.icon === 'success' ? successImg : props?.icon === 'error' ? errorImg : null)
//         element2.append(elementType)
//         element2.append(elementP)
//         element2.append(elementClose) 
        
//         const removeElement = document.getElementById(`${index}-alertMessage`)


//         // on click modal dismissal events
//         function clickToClose(){
//             removeElement.setAttribute('class', 'animate__animated animate__fadeOutRight')
//                 setTimeout(() => {
//                 removeElement.remove()
//             },1000)
//         }

//          document.getElementById(`${index}-close_ruthly`).addEventListener('click', (e) => {
//             console.log(e, removeElement, boxArray)
//             clickToClose()
//             console.log(e, removeElement, boxArray)
//         })
        
        
//         function autoDismissal(){
//             removeElement.setAttribute('class', 'animate__animated animate__fadeOutRight')
//             setTimeout(() => {
//                 removeElement.remove()
//             },1000)
//         }
    
//         setTimeout(() => {
//             autoDismissal()
//         },props.timeout ? props.timeout : 3000)
        
        
//        });

//        return el
        
//     }

//     const parent = document.getElementById('app')
//     const ruthlyChildcoverDiv = document.createElement('div')
//     parent.append(ruthlyChildcoverDiv)
//     ruthlyChildcoverDiv.setAttribute('style', 'width:362px;\n' +
//     'z-index: 999999999;\n' +
//     'position: fixed;\n' +
//     'top: 100px;\n' +
//     'right: 50px;\n' +
//     'display: flex;\n' +
//     'align-items: center;\n' +
//     'justify-content: center;\n')
//     // Create main element
//     const element1 = document.createElement('div') 
//     ruthItemArray.push(element1)
//     ruthlyChildcoverDiv.appendChild(alert(element1, ruthItemArray))
// }


export const RuthdoAlert = (...ruthToastProps) => {
    const props = ruthToastProps[0];
    const parent = document.getElementById('app');
    const ruthlyChildcoverDiv = document.createElement('div');
    parent.append(ruthlyChildcoverDiv);
    ruthlyChildcoverDiv.setAttribute('style', 'width:362px;\n' +
        'z-index: 999999999;\n' +
        'position: fixed;\n' +
        'top: 100px;\n' +
        'right: 50px;\n' +
        'display: flex;\n' +
        'align-items: center;\n' +
        'justify-content: center;\n');

    // Create main element
    const element1 = document.createElement('div');
    ruthlyChildcoverDiv.appendChild(element1);

    // Function to create individual alert elements
    const createAlert = (el, props, index) => {
        el.setAttribute('id', `${index}-alertMessage`);
        el.setAttribute('style',
            'width:362px;\n' +
            'min-height: 78px;\n' +
            'z-index: 999999;\n' +
            'position: relative;\n' +
            `background: ${props?.icon === 'success' ? '#BBE7AC' : '#F89191'};\n` +
            'border-radius: 8px;\n' +
            'top: 0;\n' +
            'right: 0;\n' +
            'padding: 10px;\n' +
            'display: flex;\n' +
            'align-items: center;\n' +
            'justify-content: center;\n' +
            'transform-origin: 0 0;\n' +
            'zoom: 75%;\n' +
            'margin-bottom:15px;');
        el.setAttribute('class', 'animate__animated animate__fadeInRight');

        const element2 = document.createElement('div');
        el.appendChild(element2);

        element2.setAttribute('style',
            'display: flex;\n ' +
            'align-items: center;\n' +
            'justify-content: space-around;\n' +
            'width: 100%;\n' +
            'height: inherit;\n');

        const elementP = document.createElement('p');
        elementP.setAttribute('style',
            'font-size: 18px;\n ' +
            'line-height: 23px;\n' +
            'letter-spacing: -0.01em;\n' +
            `color: ${props?.icon === 'success' ? '#415251' : '#FFFFFF'};\n` +
            'width: 70%;\n' +
            'font-family: \'IBM Plex Sans\';\n' +
            'font-style: normal;');
        elementP.textContent = props?.title;

        const elementClose = document.createElement('img');
        elementClose.setAttribute('src', cancelImg);
        elementClose.setAttribute('style', 'cursor:pointer');
        elementClose.setAttribute('id', `${index}-close_ruthly`);

        const elementType = document.createElement('img');
        elementType.setAttribute('src', props?.icon === 'success' ? successImg : props?.icon === 'error' ? errorImg : null);
        element2.append(elementType);
        element2.append(elementP);
        element2.append(elementClose);

        const removeElement = document.getElementById(`${index}-alertMessage`);

        // Function to close the alert
        function clickToClose() {
            removeElement.setAttribute('class', 'animate__animated animate__fadeOutRight');
            setTimeout(() => {
                removeElement.remove();
            }, 1000);
        }

        // Event listener to close the alert on click
        document.getElementById(`${index}-close_ruthly`).addEventListener('click', (e) => {
            clickToClose();
        });

        // Function to dismiss the alert after a timeout
        function autoDismissal() {
            removeElement.setAttribute('class', 'animate__animated animate__fadeOutRight');
            setTimeout(() => {
                removeElement.remove();
            }, props.timeout ? props.timeout : 3000);
        }

        autoDismissal(); // Initiate auto-dismissal
    };

    createAlert(element1.cloneNode(true), props, index);


    // Loop through ruthToastProps and create alert elements
    // ruthToastProps.forEach((props, index) => {
    //     createAlert(element1.cloneNode(true), props, index);
    // });
};
