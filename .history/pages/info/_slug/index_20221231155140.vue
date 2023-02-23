
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
          <h1 class="title">{{ title }}</h1>
          <!-- <p class="publishedAt">{{ publishedAt }}</p> -->
          <div class="post" v-html="content"></div>
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
      `https://yushi.microcms.io/api/v1/info/${params.slug}`,
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

      .title {
        font-size: 3.2rem;
        text-align: center;
        margin-bottom: 40px;
      }

      .post {
        h2 {
          font-size: 2.4rem;
        }
        
        p {
          line-height: 1.7;
        }
      }
    }
  }
}
</style>