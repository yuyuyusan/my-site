
<template>
  <main class="infoMain">

    <section class="lowMv">
      <h1>
        <span class="en">WORKS</span>
      </h1>
    </section>

    <section class="infoList">
      <div class="container">
        <ul class="list">
          <li class="listItem" v-for="content in contents" :key="content.id">
            <figure class="listItem__pic">
              <transition name="animePic">
                <nuxt-link :to="`/works/${content.id}`">
                  <img :src="content.image.url">
                </nuxt-link>
              </transition>
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
  transition: {
    name: "animePic",
  },
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
}
</script>


<style lang="scss" scoped>
.animePic-leave-active {
  opacity: 0;
}

.animePic-leave-active {
  transition: opacity 1s;
}
.animePic-enter-active {
  opacity: 0;
}

.animePic-enter-active {
  transition: opacity 1s;
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


.infoList {
  @include mb100;

  .container {
    @include contentWidth-s;
  }
}

.infoList {
  .list {
    display: flex;
    flex-wrap: wrap;
    gap: 60px 30px;
    margin: 0 auto;

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