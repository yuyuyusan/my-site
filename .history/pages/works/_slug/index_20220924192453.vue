
<template>
  <main class="singleMain">
    <section class="lowMv">
      <h1>
        <span class="en">INFORMATION</span>
      </h1>
    </section>

    <section class="singleContent">
      <div class="container">
        <div class="inner">
          <h2 class="title">{{ title }}</h2>
          <figure>
            <a :href="url" target="_blank" rel="noopenner" class="">
              <img :src="image.url" alt="">
            </a>
          </figure>
          <p class="date">{{ date }}</p>
          <div class="post" v-html="detail"></div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import axios from 'axios'
import { platform } from 'os';

export default {
  layout: 'low',
  transition: {
    name: 'picture',
  },
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
.lowMv {
  background: url(../../../static/low_mv.jpg)center center / cover;
  @include mb100;
  @include p100;

  h1 {
    @include contentWidth-s;
    font-size: 3.6rem;
    text-align: center;
  }
}

.singleContent {
  @include mb100;

  .container {
    @include contentWidth-s;

    .inner {
      width: min(100%, 800px);
      margin: 0 auto;

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
  }
}
</style>