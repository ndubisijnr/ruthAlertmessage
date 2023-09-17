import DatePicker from "./date-picker-index";
export const custom_date_picker = () => {


    let activatedDatePickers = []

    const datepickerInputs = []
    const datepickerElements = document.getElementsByClassName('date-picker-wrapper')
    for(let i=0;i<datepickerElements.length;i++){
        datepickerInputs.push(datepickerElements[i])
    }

    const close_date_picker = () => {
        if(activatedDatePickers){
            activatedDatePickers.forEach(active => {
                active.datePickerDiv.setAttribute('style',`display:none`)
                activatedDatePickers = []
            })

        }
    }

    datepickerInputs.forEach(datepickerInput => {
        if(datepickerInput){
            const inputElement = datepickerInput.querySelector('input')
            const icon = datepickerInput.querySelector('svg')
            if(inputElement || icon){
                const ID = datepickerInput.querySelector('input').id
                const active_iconId = document.getElementById(datepickerInput.querySelector('svg').id)

                let toggleState = false

                active_iconId.addEventListener('click', (e) => {
                    e.stopPropagation()
                    toggleState = !toggleState
                    const active = activatedDatePickers.find(activated => activated.uid === ID)
                    close_date_picker()
                    if(!active){
                        const datepicker = new DatePicker({
                            id:ID,
                            startYear:"2018-11-30",
                            endYear:"2023-11-01",
                            defaultYearAndMouth:"2021-03"
                        })
                        activatedDatePickers.push(datepicker)
                        datepicker.addHtml();
                        datepicker.datePickerDiv.style.display = 'inline-block'
                        // console.log(datepicker)
                        datepicker.datePickerDiv.addEventListener('click', (event)=> {
                            event.stopPropagation()
                        })
                        // datepicker.datePickerInput
                        //     .addEventListener('click', (e) => {
                        //         e.stopPropagation()
                        // })

                    }
                    else{
                        close_date_picker()
                    }
                })
            }
        }

    })



// const fromDateString = "2023-11-01"
// const fromEndString = "2025-01-01"
// const fromDateString = "2023-11-01"
// const fromEndString = "2025-01-01"
//
// const fromStartYear = +fromDateString.substr(0,4)
// const fromEndYear = +fromEndString.substr(0,4)
//
// for(let i=fromStartYear; i<=fromEndYear; i++){
//     const option = document.createElement('option')
//     option.value = i;
//     option.text = i;
//     document.getElementById('year-selector').appendChild(option)
//
// }
//
// document.querySelector(`#${this?.id}`)
//     .addEventListener('focus', () => {
//         document.querySelector(`#${this?.id}-custom-date-picker`).classList.add('toggle-date-picker')
//     })
//
// document.querySelector(`#${this?.id}-custom-date-picker`)
//     .addEventListener('click', (e) => {
//         e.stopPropagation()
//     })
//

//
// document.querySelector(`#date-picker-wrapper`)
//     .addEventListener('click', () => {
//         document.querySelector(`#${this?.id}-custom-date-picker`).classList.remove('toggle-date-picker')
//     })
//
// document.querySelector(`#overall`)
//     .addEventListener('click', () => {
//         document.querySelector(`#${this?.id}-custom-date-picker`).classList.remove('toggle-date-picker')
//     })
    document.querySelector('#overall')
        .addEventListener('click', () => {
            close_date_picker()
        })


}

