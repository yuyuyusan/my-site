
<template>
  <img
    :src="src"
    :style="styleObj"
    v-if="styleObj.width !== ''"
    class="tmp"
    alt=""
  >
</template>
<script>
export default {
  methods: {
    layoutImage({src, styleObj}) {
      this.src = src;
      this.styleObj = styleObj;
    }
  }
}

</script>
<style lang="scss" scoped>
