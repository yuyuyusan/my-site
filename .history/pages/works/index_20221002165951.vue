
<template>
  <main class="worksMain">

    <section class="lowMv">
      <h1>
        <span class="en">WORKS</span>
      </h1>
    </section>

    <section class="worksList">
      <div class="container">
        <transition-group tag="ul" name="list" class="list">
          <li class="listItem" v-for="content in contents" :key="content.id">
            <figure class="listItem__pic" @click="btnclick">
              <nuxt-link :to="`/works/${content.id}`">
                <img :src="content.image.url">
              </nuxt-link>
            </figure>
            <p class="date">{{ content.date }}</p>
            <h3>{{ content.title }}</h3>
          </li>
        </transition-group>
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
  methods: {
    btnclick(event) {
      alert('Hello ' + this.name + '!')
      if (event) {
        alert(event.target.tagName)
      }
    }
  },
}.mount('.worksList');
</script>


<style lang="scss" scoped>

.imgActive{
  width: 100%;
  transition: .1s;
}

.animePic-enter-active,
.animePic-leave-active {
  transition: opacity .5s;
}

.animePic-enter,
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