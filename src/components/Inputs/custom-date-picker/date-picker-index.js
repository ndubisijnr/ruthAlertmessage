import "./style.css"

class DatePicker {
    constructor(obj) {
        this.uid = obj.id
        this.startYear = obj.startYear
        this.endYear = obj.endYear
        this.defaultYearAndMouth = obj.defaultYearAndMouth
        this.currentYearAndMouth = this.defaultYearAndMouth

        this.datePickerInput = document.getElementById(this.uid)
        this.datePickerDiv=null
    }

    addHtml(){
        const html =  `
            <div class="data-picker-selector toggle-date-picker" id="${this.uid}-custom-date-picker">
                <div class="data-picker-selector-wrapper">
                    <div class="data-picker-selector-header">
                      <div class="selector-header">
                        <button class="data-picker-selector-previous"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                          <path d="M4.2 6.9994C4.2 6.59107 4.3575 6.18273 4.66667 5.87357L8.47 2.07023C8.63917 1.90107 8.91917 1.90107 9.08833 2.07023C9.2575 2.2394 9.2575 2.5194 9.08833 2.68857L5.285 6.4919C5.005 6.7719 5.005 7.2269 5.285 7.5069L9.08833 11.3102C9.2575 11.4794 9.2575 11.7594 9.08833 11.9286C8.91917 12.0977 8.63917 12.0977 8.47 11.9286L4.66667 8.12524C4.3575 7.81607 4.2 7.40773 4.2 6.9994Z" fill="#1D1E2C"/>
                        </svg></button>
            
                        <div class="selector-select">
                          <div class="month">
                            <select class="selector" id="${this.uid}-month-selector"></select>
                          </div>
                          <div class="year" id="year">
                            <select class="selector" id="${this.uid}-year-selector"></select>
                          </div>
                        </div>
            
                        <button class="data-picker-selector-next"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                          <path d="M9.8 7.0006C9.8 7.40893 9.6425 7.81727 9.33333 8.12643L5.53 11.9298C5.36083 12.0989 5.08083 12.0989 4.91167 11.9298C4.7425 11.7606 4.7425 11.4806 4.91167 11.3114L8.715 7.5081C8.995 7.2281 8.995 6.7731 8.715 6.4931L4.91167 2.68977C4.7425 2.5206 4.7425 2.2406 4.91167 2.07143C5.08083 1.90226 5.36083 1.90226 5.53 2.07143L9.33333 5.87476C9.6425 6.18393 9.8 6.59227 9.8 7.0006Z" fill="#1D1E2C"/>
                        </svg></button>
            
                      </div>
                    </div>
                    <div class="data-picker-selector-body">
                        <div class="selector-body-weeks">
                         
                            <p class="date-picker-unit">Mon</p>
                            <p class="date-picker-unit">Tues</p>
                            <p class="date-picker-unit">Weds</p>
                            <p class="date-picker-unit">Thurs</p>
                            <p class="date-picker-unit">Fri</p>
                            <p class="date-picker-unit">Sat</p>
                             <p class="date-picker-unit">Sun</p>
                        </div>
                        <div class="selector-body" id="${this.uid}-day-selector-body">
<!--                          <div class="selector-body-weeks">-->
<!--                          <p class="date-picker-unit day">1</p>-->
<!--                          <p class="date-picker-unit day">2</p>-->
<!--                          <p class="date-picker-unit day">3</p>-->
<!--                          <p class="date-picker-unit day">4</p>-->
<!--                          <p class="date-picker-unit day">5</p>-->
<!--                          <p class="date-picker-unit day">6</p>-->
<!--                          <p class="date-picker-unit day">7</p>-->
<!--                        </div>-->
<!--                          <div class="selector-body-weeks">-->
<!--                            <p class="date-picker-unit day">8</p>-->
<!--                            <p class="date-picker-unit day">9</p>-->
<!--                            <p class="date-picker-unit day">10</p>-->
<!--                            <p class="date-picker-unit day">11</p>-->
<!--                            <p class="date-picker-unit day">12</p>-->
<!--                            <p class="date-picker-unit day">13</p>-->
<!--                            <p class="date-picker-unit day">14</p>-->
<!--                          </div>-->
<!--                          <div class="selector-body-weeks">-->
<!--                            <p class="date-picker-unit day">15</p>-->
<!--                            <p class="date-picker-unit day">16</p>-->
<!--                            <p class="date-picker-unit day">17</p>-->
<!--                            <p class="date-picker-unit day">18</p>-->
<!--                            <p class="date-picker-unit day">19</p>-->
<!--                            <p class="date-picker-unit day">20</p>-->
<!--                            <p class="date-picker-unit day">21</p>-->
<!--                          </div>-->
<!--                          <div class="selector-body-weeks">-->
<!--                            <p class="date-picker-unit day">23</p>-->
<!--                            <p class="date-picker-unit day">24</p>-->
<!--                            <p class="date-picker-unit day">25</p>-->
<!--                            <p class="date-picker-unit day">26</p>-->
<!--                            <p class="date-picker-unit day">27</p>-->
<!--                            <p class="date-picker-unit day">28</p>-->
<!--                            <p class="date-picker-unit day">29</p>-->
<!--                          </div>-->
<!--                          <div class="selector-body-weeks">-->
<!--                            <p class="date-picker-unit day">30</p>-->
<!--                            <p class="date-picker-unit day">31</p>-->
<!--                            <p class="date-picker-unit day"></p>-->
<!--                            <p class="date-picker-unit day"></p>-->
<!--                            <p class="date-picker-unit day"></p>-->
<!--                            <p class="date-picker-unit day"></p>-->
<!--                            <p class="date-picker-unit day"></p>-->
<!--                          </div>-->
                    </div>
                    </div>
                </div>
           </div>
        `;
        this.datePickerInput.parentElement.insertAdjacentHTML('beforeend', html);
        this.datePickerDiv = document.getElementById(`${this.uid}-custom-date-picker`)
        this.setYearHeader()
        this.setupEventListeners()
    }

    setupEventListeners(){
        document.getElementById(`${this.uid}-year-selector`).addEventListener('change', (e) => {
           this.currentYearAndMouth = e.target.value + this.currentYearAndMouth.substr(4,3)
            this.setYearHeader()
            // console.log(this.currentYearAndMouth)
        })
        document.getElementById(`${this.uid}-month-selector`).addEventListener('change', (e) => {
            this.currentYearAndMouth = this.currentYearAndMouth.substr(0,5)  +  e.target.value
            this.setYearHeader()
            console.log(this.currentYearAndMouth)
        })


    }

    setYearHeader(){

        document.getElementById(`${this.uid}-month-selector`).innerHTML = '';

        document.getElementById(`${this.uid}-year-selector`).innerHTML ='';


        const startYear = +this.startYear.substr(0,4)
        const endYear = +this.endYear.substr(0,4)
        const currentYear = +this.currentYearAndMouth.substr(0,4)

        for(let i=startYear; i<=endYear; i++){
        const option = document.createElement('option')
        option.value = i;
        option.text = i;
        document.getElementById(`${this.uid}-year-selector`).appendChild(option)

    }

        let iterationDate = window.moment(new Date(this.startYear));
        let iterationDateYYYYMM = iterationDate.format('YYYY-MM');
        const endDate = window.moment(new Date(this.endYear))
        let endDateDateYYYYMM = endDate.format('YYYY-MM')

        while(iterationDateYYYYMM <= endDateDateYYYYMM){
            if(+iterationDate.format('YYYY') === currentYear){
                const option = document.createElement('option')
                option.value = iterationDate.format('MM');
                option.text = iterationDate.format('MMMM');
                document.getElementById(`${this.uid}-month-selector`).appendChild(option)
            }
            iterationDate = iterationDate.add(1,'months')
            iterationDateYYYYMM = iterationDate.format('YYYY-MM');
        }

        if(this.startYear.substr(0,7) > this.currentYearAndMouth){
            this.currentYearAndMouth = this.startYear.substr(0,7)

        }
        else if(this.endYear.substr(0,7) < this.currentYearAndMouth){
            this.currentYearAndMouth = this.endYear.substr(0,7)
        }
        document.getElementById(`${this.uid}-month-selector`).value = this.currentYearAndMouth.substr(5,2)

        document.getElementById(`${this.uid}-year-selector`).value = currentYear


        this.renderDays()
    }

    renderDays() {
        console.log(document.querySelectorAll(`#${this.uid}-day-selector-body .selector-body-weeks`))

        const monthArray=[]
        const firstDayOfTheMonth = this.firstWeekDayOfTheMonth()
        const daysInMonth = this.daysInCurrentMonth()

        for(let i=1; i<firstDayOfTheMonth; i++){
            monthArray.push('');
        }

        for(let i=1; i<=daysInMonth; i++){
            monthArray.push(i);
        }

        if(monthArray.length % 7 !== 0){
            const trailingEmptySlots = 7 - monthArray.length % 7;
            for(let i=1; i<=trailingEmptySlots; i++){
                monthArray.push('');
            }
        }



        monthArray.forEach((day,index) => {
           if(index % 7 === 0){
               const newRow = `<div class="selector-body-weeks"></div>`

               document.getElementById(`${this.uid}-day-selector-body`).insertAdjacentHTML('beforeend', newRow)
           }

           const calenderRows = document.querySelectorAll(`#${this.uid}-custom-date-picker .selector-body-weeks`)
            // console.log(calenderRows)

            const calenderRowsCount = calenderRows.length
            const newDay = `<p class="date-picker-unit day">${day}</p>`

            calenderRows[calenderRowsCount - 1].insertAdjacentHTML('beforeend', newDay)

        });
    }

    firstWeekDayOfTheMonth(){
        return window.moment(new Date(this.currentYearAndMouth)).isoWeekday()
    }

    daysInCurrentMonth(){
        return window.moment(new Date(this.currentYearAndMouth)).daysInMonth()
    }
}

export default DatePicker