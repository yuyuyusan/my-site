
<template>
  <main class="singleMain">
    <section class="singleContent">
      <div class="container">
        <div class="inner">
          <figure class="picActive">
            <a :href="url" target="_blank" rel="noopenner" class="">
              <img :src="image.url" alt="">
            </a>
          </figure>
          <h2 class="title">{{ title }}</h2>
          <p class="date">{{ date }}</p>
          <div class="post" v-html="detail"></div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import axios from 'axios'

export default {
  layout: 'low',
  async asyncData({ params }) {
    const { data } = await axios.get(
      `https://yushi.microcms.io/api/v1/works/${params.slug}`,
      {
        headers: { 'X-MICROCMS-API-KEY': 'feb17f48f7204c99b8dd40af725e95d2311b' }
      }
    )
    return data
  },
  beforeRouteEnter(to, from, next) {
    if (from.name === null) {
      next(vm => {
        vm.styleObj.opacity = 1;
      });
    }
    else {
      // 遷移時にアニメーションを実行
      next(vm => vm.setImageData());
    }
  },
  methods: {
    setImageData() {
      const node = this.$refs.img;
      const wrapRect = this.$refs.detail.getBoundingClientRect();
      const itemRect = node.getBoundingClientRect();

      // 遷移後の画像の位置を取得
      const styleObj = {
        top: `${itemRect.top - wrapRect.top}px`,
        left: `${itemRect.left - wrapRect.left}px`,
        width: `${node.clientWidth}px`
      }

      node.style.opacity = 0;

      // ダミー画像に情報を渡す
      this.$nuxt.$emit('layoutImageMove', {
        styleObj: styleObj,
        node: node
      });

      // ページの不透明度を1にする
      anime({
        targets: this.styleObj,
        opacity: [0, 1],
        easing: 'easeInOutQuart',
        duration: 800
      });
    }
  }
}
</script>


<style lang="scss" scoped>
.singleContent {
  @include mb100;

  .container {
    @include contentWidth-s;
  }
}

.singleContent .container .inner {
  width: min(100%, 800px);
  margin: 0 auto;
  position: relative;

  h2 {
    font-size: 2.4rem;
    text-align: center;
    margin-bottom: 40px;
  }

  h3 {
    font-size: 2rem;
  }

  figure {
    border: 1px solid #ccc;
    margin-bottom: 40px;
  }

  .date {
    display: inline-block;
    margin-bottom: 40px;
    padding: 10px 30px;
    background: $navy;
    color: #fff;

    @include tab {
      font-size: 1.4rem;
      padding: 6px 20px;
      margin-bottom: 20px;
    }
  }

  .post {
    @include tab {
      font-size: 1.4rem;
    }

    p {
      line-height: 2 !important;
    }
  }
}
</style>