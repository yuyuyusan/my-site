<template>
  <div>
    <header>
      <div class="container">
        <!-- nav -->
        <HeaderNav />
      </div>
    </header>
    <!-- main content -->
    <nuxt />
    <!-- footer -->
    <Footer />
  </div>
</template>


<script>
export default {
}
</script>
<style lang="scss" scoped>
header {

  .container {
    width: min(100% - 80px, $pc-m);
    margin: 0 auto;

    @include sp {
      width: min(100% - 40px, $pc-m);
    }
  }
}
</style>