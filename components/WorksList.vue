<template>
  <ul class="list">
    <li class="listItem" v-for="content in contents" :key="content.id">
      <figure class="listItem__pic">
        <img :src="content.image.url">
      </figure>
      <h3>{{ content.title }}</h3>
    </li>
  </ul>
</template>

<script>
export default {
  async asyncData() {
    const { data } = await axios.get(
      'https://yushi.microcms.io/api/v1/results/',
      {
        headers: { 'X-MICROCMS-API-KEY': 'feb17f48f7204c99b8dd40af725e95d2311b' }
      }
    )
    return data
  },
}
</script>

<style lang="scss" scoped>
.list {
  display: flex;
  gap: 40px;
  flex-wrap: wrap;
  margin-bottom: 40px;

  @include pc-s {
    gap: 20px;

    @include tab {
      display: block;
    }
  }

  &Item {
    width: calc((100% - (40px * 2)) / 3);

    @include pc-s {
      width: calc((100% - (40px * 2)) / 3);

      @include tab {
        width: min(100%, 480px);
        margin: 0 auto 30px;

      }
    }

    &:last-child {
      @include tab {
        margin-bottom: 0;
      }
    }

    &__pic {
      margin-bottom: 20px;

      img {
        aspect-ratio: 3/2;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    h3 {
      text-align: center;
      font-size: 1.6rem;
      margin-bottom: 10px;
    }

    &__text {
      font-size: 1.4rem;
      line-height: 1.6;
    }
  }
}
</style>
