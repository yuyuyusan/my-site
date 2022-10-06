
<template>
  <main class="singleMain">
    <section class="singleContent">
      <div class="container">
        <div class="inner">
          <transition name="animePic">
            <figure class="picActive">
              <a :href="url" target="_blank" rel="noopenner" class="">
                <img :src="image.url" alt="">
              </a>
            </figure>
          </transition>
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
  }
}
</script>


<style lang="scss" scoped>
.animePic-enter {
  opacity: 0;
}
.animePic-enter-active {
  transition: all 1s ease;
  position: absolute;
  top: 50%;
  left: 50%; 
}

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