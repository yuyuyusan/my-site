
<template>
  <main class="infoMain">

    <section class="lowMv">
      <h1>
        <span class="en">INFORMATION</span>
      </h1>
    </section>

    <section class="infoList">
      <div class="container">
        <ul class="list">
          <li class="listItem" v-for="content in contents" :key="content.id">
            <nuxt-link :to="`/${content.id}`">
              <p class="date" :datetime="content.publishedAt"
                v-text="$dateFns.format(new Date(content.publishedAt), 'yyyy.MM.dd')"></p>
              <h3>{{ content.title }}</h3>
            </nuxt-link>
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
      'https://yushi.microcms.io/api/v1/info/',
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
  background: url(../static/low_mv.jpg)center center / cover;
  @include mb100;
  @include p100;

  h1 {
    @include contentWidth-s;
    font-size: 3.6rem;
    text-align: center;
  }
}


.infoList {
  @include mb100;

  .container {
    @include contentWidth-s;

    .list {
      width: min(100%, 800px);
      margin: 0 auto;

      &Item {
        margin-bottom: 20px;
        padding-bottom: 20px;
        border-bottom: 2px dotted $blue;
      }
    }
  }
}
</style>