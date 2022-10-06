
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
    layoutImageMove({node, styleObj}) {
      anime({
        targets: this.styleObj,
        top: styleObj.top,
        left: styleObj.left,
        width: styleObj.width,
        easing: 'easeInOutQuart',
        duration: 800,
        complete: () => {
          node.style.opacity = 1;
          this.styleObj = {
            top: '',
            left: '',
            width: ''
          }
        }
      });
    }
  }
}

</script>
<style lang="scss" scoped>
