
<template>
  <main class="worksMain">

    <section class="lowMv">
      <h1>
        <span class="en">WORKS</span>
      </h1>
    </section>

    <section class="worksList">
      <div class="container">
        <ul class="list">
          <li class="listItem" v-for="content in contents" :key="content.id">
            <figure class="listItem__pic">
              <nuxt-link :to="`/works/${content.id}`">
                <img :src="content.image.url" :style="styleObj" class="tmp" alt="">
              </nuxt-link>
            </figure>
            <p class="date">{{ content.date }}</p>
            <h3>{{ content.title }}</h3>
          </li>
        </ul>
      </div>
    </section>
  </main>
</template>

<script>
import axios from 'axios'

export default {
  layout: 'low',
  async asyncData() {
    const { data } = await axios.get(
      'https://yushi.microcms.io/api/v1/works?limit=30',
      {
        limit: 30,
        headers: { 'X-MICROCMS-API-KEY': 'feb17f48f7204c99b8dd40af725e95d2311b' }
      }
    )
    return data
  },
  methods: {
    layoutImageMove({ node, styleObj }) {
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
  },
  beforeRouteLeave(to, from, next) {
    // クリックした記事の情報を取得
    const component = this.$refs.item.find((x) => {
      return x.item.id === parseInt(to.params.id);
    });

    const node = component.$refs.img;

    const listRect = this.$refs.list.getBoundingClientRect();
    const itemRect = node.getBoundingClientRect();

    // 遷移前の画像の位置を取得
    const src = this.base + component.item.src;
    const styleObj = {
      top: `${itemRect.top - listRect.top}px`,
      left: `${itemRect.left - listRect.left}px`,
      width: `${node.clientWidth}px`
    }

    node.style.opacity = 0;

    // ダミー画像に位置と画像のURLを渡す
    this.$nuxt.$emit('layoutImage', {
      src: src,
      styleObj: styleObj
    });

    // ページを上部に移動
    anime({
      targets: '#__nuxt',
      scrollTop: 0,
      easing: 'easeInOutQuart',
      duration: 800
    });

    // ページの不透明度を0にアニメーション
    anime({
      targets: this.$refs.list,
      opacity: [1, 0],
      easing: 'easeInOutQuart',
      duration: 800,
      complete: () => next()
    });
  }
}
</script>


<style lang="scss" scoped>
/* enter-active -> enter-to の順番で書くのが大事*/
.animePic-enter-active {
  transition: opacity .5s;
  opacity: 0;
}

.animePic-enter-to {
  opacity: 1;
}

/* leave-active -> leave-to の順番で書くのが大事*/
.animePic-leave-active {
  transition: opacity .5s;
  opacity: 1;
}

.animePic-leave-to {
  opacity: 0;
}


.lowMv {
  background: url(../../static/low_mv.jpg)center center / cover;
  @include mb100;
  @include p100;

  h1 {
    @include contentWidth-s;
    font-size: 3.6rem;
    text-align: center;
  }
}


.worksList {
  @include mb100;

  .container {
    @include contentWidth-s;
  }
}

.worksList {
  .list {
    display: flex;
    flex-wrap: wrap;
    gap: 60px 30px;
    margin: 0 auto;
    position: relative;

    @include tab {
      gap: 40px 20px;
    }

    &Item {
      width: calc((100% - (30px * 2)) / 3);

      @include tab {
        width: calc((100% - (30px * 1)) / 2);
      }

      &__pic {
        border: 1px solid #ccc;
        margin-bottom: 20px;
        position: relative;

        img {
          aspect-ratio: 3/2;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      .date {
        font-size: 1.4rem;

        @include tab {
          font-size: 1.2rem;
        }
      }

      h3 {
        font-size: 1.6rem;

        @include tab {
          font-size: 1.4rem;
        }
      }
    }
  }
}
</style>