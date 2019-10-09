<template>
<body>
  <Navbar />
  <router-view />
</body>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
export default {
  name: "app",
  components: {Navbar},
  data() {
    return {};
  }
};
</script>

<style>

</style>
