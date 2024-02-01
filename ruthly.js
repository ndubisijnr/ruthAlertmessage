import errorIcon from './assets/svgs/error.js'
import exitIcon from './assets/svgs/exit.js'
import successIcon from './assets/svgs/success.js'
import closeIcon from './assets/svgs/close.js'

// default icons
const cancelImg = exitIcon()
const errorImg = errorIcon()
const successImg = successIcon()
const closeImg = closeIcon()

// define props 
const defaultProps = ['icon', 'title', 'timeout']
var advancedProps = {
    header: 'An Error Occured',
    headerColor: '#fff',
    subtext: 'Some thing went wrong',
    subtextColor: '#fff',
    svg: true,
    svgColor: '#fff',
    svgStroke: "",
    backgroundColor: "#EB001B",
}

// define toast array to hold multiple toast
var toastArr = []

const createToastObj = (props) => {
    // Create main element
    var toastObj = document.createElement('div')
    toastObj.style.backgroundColor = props.backgroundColor

    // props check prevalance 

    // if svg is true 
    if (props.svg) {
        // create next child elements 
        var iconCenter = document.createElement('div')
        // add classes to elements
        iconCenter.classList.add('ruth_alert_base_icon_center');
        // ** add or create items to each child elements 
        iconCenter.innerHTML = errorImg
        // ** append children to main element in order
        toastObj.appendChild(iconCenter)
    }

    // create next child elements 
    var statusText = document.createElement('div')
    var closeButton = document.createElement('button')
    // add classes to elements 
    toastObj.classList.add('ruth_alert_base_status_wrapper');
    statusText.classList.add('ruth_alert_base_status_text');
    closeButton.classList.add('ruth_alert_base_close_button');

    // ** add or create items to each child elements 

    // statusText
    var pHead = document.createElement('p')
    var subtext = document.createElement('span')

    pHead.classList.add('ruth_alert_base_status_text-head');
    pHead.innerHTML = props.header
    pHead.style.color = props.headerColor

    subtext.classList.add('ruth_alert_base_status_text-subtext');
    subtext.innerHTML = props.subtext
    subtext.style.color = props.subtextColor

    statusText.appendChild(pHead)
    statusText.appendChild(subtext)

    // closeButton
    closeButton.setAttribute('title', 'Close Toast')
    closeButton.innerHTML = closeImg

    // ** append children to main element in order
    toastObj.appendChild(statusText)
    toastObj.appendChild(closeButton)

    return toastObj
}

// get the body tag
const rootElement = document.body;
// create toast wrapper 
const toastWrapper = document.createElement('div');
// set base class and id for wrapper element 
toastWrapper.classList.add('ruth_alert_base_wrapper');
toastWrapper.id = 'alertMessage';

// attach toast to body 
rootElement.appendChild(toastWrapper);

const RuthdoAlert = (props = null) => {

    return {
        showError() {

        },

        open() {
            if (toastArr.length) {
                var advP = structuredClone(advancedProps)
                // mutate the prop with accepted variables 
                if (props && typeof props === 'object') {
                    Object.entries(props).forEach(([key, value]) => {
                        if (advP.hasOwnProperty(key)) {
                            advP[key] = value
                        }
                    })
                }
                // pushes the object to the main arr 
                toastArr.push(advP)
                // creates the singular toast item 
                var toastItem = createToastObj(advP)
                // appends to the mother wrapper 
                toastWrapper.appendChild(toastItem)
            } else {
                var advP = structuredClone(advancedProps)
                // mutate the prop with accepted variables 
                if (props && typeof props === 'object') {
                    Object.entries(props).forEach(([key, value]) => {
                        if (advP.hasOwnProperty(key)) {
                            advP[key] = value
                        }
                    })
                }
                // pushes the object to the main arr 
                toastArr.push(advP)
                // creates the singular toast item 
                var toastItem = createToastObj(advP)
                // appends to the mother wrapper 
                toastWrapper.appendChild(toastItem)
            }
        }
    }



}

export default RuthdoAlert


