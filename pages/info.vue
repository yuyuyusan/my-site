
<template>
  <div class="wrapper">
    <section class="lowMv">
      <h1>
        <span class="en">INFORMATION</span>
      </h1>
    </section>

    <section class="infoList">
      <ul class="list">
        <li class="listItem" v-for="content in contents" :key="content.id">
          <p class="date" :datetime="content.publishedAt"
            v-text="$dateFns.format(new Date(content.publishedAt), 'yyyy.MM.dd')"></p>
          <h3>{{ content.title }}</h3>
        </li>
      </ul>
    </section>
  </div>
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
</style>