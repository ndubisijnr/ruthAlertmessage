<template>
    <div class="nav_wrapper" id="header">
        <div class="nav">
            <slot name="children"></slot>
        </div>
    </div>
  
</template>

<script>
// import {stickyHeader} from "../../mixins/sticky";
export default {
    name:"NavBar",
  mounted() {
      // stickyHeader()
  }
}
</script>

<style scoped>
.nav_wrapper{
  width: 100%;
  padding-left:5.5rem;
  padding-right:5.5rem;
  background: transparent;
}

.nav{
  height: 72px;
  display: inline-block;
  /*position: relative;*/
  padding: 0.75rem 2rem;
  align-items: center;
  /*gap: 12.3125rem;*/
  border-radius: 2.5rem;
  background: #FFF;
  margin: 2rem 0;
  width: 100%;
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