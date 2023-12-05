<script>
import MobileBottomNav from "@/components/dashboardComponents/MobileBottomNav.vue";
import NavBar from "@/components/dashboardComponents/NavBar.vue";

export default {
  name: "DashboardPreview",
  components: {NavBar, MobileBottomNav}
}
</script>

<template>
  <div class="wrapper">
    <div class="inner-wrapper">
      <div>
        <div class="m6-0">
          <img src="../../assets/logo.svg" />
          <div class="navigation-links" id="nav">
            <div class="links-item">
              <span class="links">Dashboard</span>
            </div>
        </div>
      </div>
        <div class="dashboard_content animate__animated animate__fadeIn"></div>
    </div>
  </div>
  </div>
</template>

<style scoped>

</style>