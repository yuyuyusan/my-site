<template>
  <div>
    <header>
      <div class="container">
        <div class="logo">
          <nuxt-link class="nav-link" to="/">
            YS
          </nuxt-link>
        </div>
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
    display: flex;
    align-items: center;
    justify-content: space-between;

    @include sp {
      width: min(100% - 40px, $pc-m);
    }

    .logo {
      a {
        font-size: 3rem;
        font-family: $f-roboto;
      }
    }
  }
}
</style>