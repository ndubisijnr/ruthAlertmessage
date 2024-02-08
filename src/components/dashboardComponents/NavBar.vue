<template>
    <div class="nav_wrapper" id="header">
        <div class="nav">
            <slot name="children"></slot>
            
        </div>
    </div>
  
</template>

<script>
import {stickyHeader} from "../../mixins/sticky";

export default {
    name:"NavBar",
  mounted() {
      stickyHeader()
  }
}
</script>

<style scoped>

.nav_wrapper{
  width: 100%;
  background: #FFF;
  padding: 0 5.5rem;
  display: flex;
  justify-content: center;
}

.nav{
  //height: 72px;
  display: inline-block;
  /*position: relative;*/
  width: 90rem;
  //padding: 1rem 0;
  border-radius: 0;
  //border: solid crimson;
  /* m1 */
  /* box-shadow: 0px 18px 40px 0px rgba(30, 30, 30, 0.08); */
}

@media (max-width: 1024px) {
  .nav_wrapper{
    padding-left:1.5rem;
    padding-right:1.5rem;

  }
}
</style>