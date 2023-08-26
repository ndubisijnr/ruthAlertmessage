<template>

  <div class="table-container">
    <div class="table">
      <div class="th">
        <div v-for="h in fields" :key="h.key" class="table-header">
          <p class="table-label">{{ h.label }}</p>
        </div>
      </div>
      <div class="tr">
        <div v-for="h in fields" :key="h.key" class="table-cell">
          <div class="table-row" v-for="j in data">
            <div class="table-value">
              <div style="display: flex;align-items: center;gap: 5px">
               <div>
                 <p>{{ j[h.key]}}</p>
               </div>

              <svg v-if="h.label === 'Domain Name'" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M15 8.25C14.8011 8.25 14.6103 8.32902 14.4697 8.46967C14.329 8.61032 14.25 8.80109 14.25 9V13.5C14.25 13.6989 14.171 13.8897 14.0303 14.0303C13.8897 14.171 13.6989 14.25 13.5 14.25H4.5C4.30109 14.25 4.11032 14.171 3.96967 14.0303C3.82902 13.8897 3.75 13.6989 3.75 13.5V4.5C3.75 4.30109 3.82902 4.11032 3.96967 3.96967C4.11032 3.82902 4.30109 3.75 4.5 3.75H9C9.19891 3.75 9.38968 3.67098 9.53033 3.53033C9.67098 3.38968 9.75 3.19891 9.75 3C9.75 2.80109 9.67098 2.61032 9.53033 2.46967C9.38968 2.32902 9.19891 2.25 9 2.25H4.5C3.90326 2.25 3.33097 2.48705 2.90901 2.90901C2.48705 3.33097 2.25 3.90326 2.25 4.5V13.5C2.25 14.0967 2.48705 14.669 2.90901 15.091C3.33097 15.5129 3.90326 15.75 4.5 15.75H13.5C14.0967 15.75 14.669 15.5129 15.091 15.091C15.5129 14.669 15.75 14.0967 15.75 13.5V9C15.75 8.80109 15.671 8.61032 15.5303 8.46967C15.3897 8.32902 15.1989 8.25 15 8.25Z" fill="black"/>
                <path d="M12.0004 3.75H13.1854L8.46794 8.46C8.39765 8.52972 8.34185 8.61267 8.30377 8.70407C8.2657 8.79546 8.24609 8.89349 8.24609 8.9925C8.24609 9.09151 8.2657 9.18954 8.30377 9.28093C8.34185 9.37233 8.39765 9.45528 8.46794 9.525C8.53766 9.5953 8.62062 9.65109 8.71201 9.68917C8.8034 9.72724 8.90143 9.74685 9.00044 9.74685C9.09945 9.74685 9.19748 9.72724 9.28888 9.68917C9.38027 9.65109 9.46322 9.5953 9.53294 9.525L14.2504 4.815V6C14.2504 6.19891 14.3295 6.38968 14.4701 6.53033C14.6108 6.67098 14.8015 6.75 15.0004 6.75C15.1994 6.75 15.3901 6.67098 15.5308 6.53033C15.6714 6.38968 15.7504 6.19891 15.7504 6V3C15.7504 2.80109 15.6714 2.61032 15.5308 2.46967C15.3901 2.32902 15.1994 2.25 15.0004 2.25H12.0004C11.8015 2.25 11.6108 2.32902 11.4701 2.46967C11.3295 2.61032 11.2504 2.80109 11.2504 3C11.2504 3.19891 11.3295 3.38968 11.4701 3.53033C11.6108 3.67098 11.8015 3.75 12.0004 3.75Z" fill="black"/>
              </svg>
              <p v-if="h.label === 'Domain Name' && j.is_primary === 1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 6 6" fill="none">
                  <circle cx="3" cy="3" r="3" fill="#7B61FF"/>
                  </svg>
                  <span class="primary">Primary</span>
              </p>

              <p class="connected" v-if="h.key === 'active'"> {{ j.active === 1 ? 'Connected' : "Not Connected" }}</p>
            </div>
            </div>
        </div>
      </div>
    </div>
  </div>
  </div>

</template>

<script>
import {convertToWord} from "../../mixins/lettersExtractor";
export default {
  name: "DomainTable",
  props:['data'],
  data(){
    return{
      fields:[
          {key:"domain", label:"Domain Name"},
          {key:"active", label:"Status"},
          {key:"created_at", label:"Date Added"},
          {key:"Action", label:"Action"},
      ],
      convertToWord
    }
  }
}
</script>

<style scoped>
.table-container {
  width: 100%;
  overflow-x: scroll;
  display: flex;
  justify-content: center;
}

.primary{
  color: #7B61FF;
  font-family: 'Product Sans';
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1rem; /* 114.286% */
  padding-left: 0.25rem;
}

.connected{
  border-radius: 1.5rem;
  background: #F2FDF7;
  display: inline-flex;
  padding: 0.375rem 0.625rem;
  align-items: flex-start;
  gap: 0.625rem;
  color: #159D54;
  font-family: 'Product Sans';
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1rem; /* 114.286% */
}

.table {
  border-collapse: collapse;
  width: 100%;
  margin: 0 auto;
}

.table-label{
  color:  #1D1E2C;

  /* medium/input/16px */
  font-family: 'Product Sans';
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.75rem; /* 175% */
  text-align: center;
  width: 100%;
}

.th {
  display: flex;
}

.table-header {
  flex: 1;
  background-color: #EFF2F7;
  text-align: left;
  font-weight: bold;
  display: flex;
  height: 3.5rem;
  padding: 1.25rem 1.5rem;
  align-items: center;
  gap: 13.75rem;
  width: 100%;
}

.tr {
  display: flex;
  width: auto;
  height: auto;
  padding: 1.25rem 1.5rem;
}



.table-cell {
  flex: 1;
}

.table-row {
  display: flex;
  align-items: center;
}

.table-value {
  margin: 0;
  width: 100%;
  text-align: center;
}

@media (max-width: 1024px) {
  .tr{
    width: auto;
  }
}

::-webkit-scrollbar{
  display: none;
}

</style>