<template>
  <div>
    <nav class="headerNav" id="headerNav">
      <ul class="list">
        <li>
          <nuxt-link class="nav-link" to="/about">ABOUT</nuxt-link>
        </li>
        <li>
          <nuxt-link class="nav-link" to="/works">WORKS</nuxt-link>
        </li>
        <li>
          <nuxt-link class="nav-link" to="/info">NOTES</nuxt-link>
        </li>
      </ul>
    </nav>
    <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
      <path
        d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z" />
    </svg> -->
  </div>
</template>




<script>
export default {
}
</script>
<style lang="scss" scoped>
.headerNav {
  ul {
    height: 80px;
    display: flex;
    gap: 50px;
    justify-content: center;
    align-items: center;

    li {
      a {
        font-size: 1.6rem;
        font-weight: 500;
        color: #fff;
      }
    }
  }
}

svg {
  width: 40px;
  position: fixed;
  top: 20px;
  right: 20px;
}
</style>
