
<template>
  <main class="worksMain">

    <section class="lowMv">
      <h1>
        <span class="en">test</span>
      </h1>
    </section>

    
    </section>
  </main>
</template>

<script>
export default {
  beforeRouteEnter(to, from, next) {
    if(from.name === null) {
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