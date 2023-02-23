<template>
  <main class="topMain">
    <Welcome />
    <section id="topMv" class="topMv">
      <div class="photoScroll">
        <div class="photoWrap">
          <ul class="photo photo--01">
            <li v-for="(photo, index) in photos" :key="index" class="photoItem">
              <img :src="photo.img" alt="">
            </li>
          </ul>
        </div>
        <div class="photoWrap">
          <ul class="photo photo--02">
            <li><img src="random-01.jpg"></li>
          </ul>
        </div>
      </div>

      <div class="container">
        <h1>SHITSUKAWA YUSHI</h1>
        <div class="wrap">
          <ul class="list">
            <li v-for="(item, index) in object" :key="index" class="listItem" :class="item.numClass">
              <nuxt-link class="listItem__link" :to="item.link">
                <h2>
                  <span class="en">{{ item.en }}</span>
                  <span class="jp">{{ item.jp }}</span>
                </h2>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path
                    d="M256 0C114.6 0 0 114.6 0 256c0 141.4 114.6 256 256 256s256-114.6 256-256C512 114.6 397.4 0 256 0zM358.6 278.6l-112 112c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25L290.8 256L201.4 166.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l112 112C364.9 239.6 368 247.8 368 256S364.9 272.4 358.6 278.6z" />
                </svg>
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section class="topNews">
      <div class="container">
        <h2>
          <nuxt-link class="listItem__link" to="/info">
            <span class="jp">一覧ページへ</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path
                d="M256 0C114.6 0 0 114.6 0 256c0 141.4 114.6 256 256 256s256-114.6 256-256C512 114.6 397.4 0 256 0zM358.6 278.6l-112 112c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25L290.8 256L201.4 166.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l112 112C364.9 239.6 368 247.8 368 256S364.9 272.4 358.6 278.6z" />
            </svg>
          </nuxt-link>
        </h2>
        <ul class="list">
          <li class="listItem" v-for="content in contents" :key="content.id">
            <nuxt-link :to="`/info/${content.id}`">
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
import axios from 'axios';
export default {
  layout: 'default',
  async asyncData() {
    const { data } = await axios.get(
      'https://yushi.microcms.io/api/v1/info?limit=3', {
      headers: { 'X-MICROCMS-API-KEY': 'feb17f48f7204c99b8dd40af725e95d2311b' }
    },
    )
    return data
  },
  data() {
    return {
      script: [{
        src: 'common.js'
      }
      ],
      object: [{
        en: "ABOUT",
        jp: "自身について",
        numClass: "listItem--01",
        link: "/about"
      }, {
        en: "WORKS",
        jp: "実績一覧",
        numClass: "listItem--02",
        link: "/works"
      }, {
        en: "NOTES",
        jp: "雑記",
        numClass: "listItem--03",
        link: "/info"
      }
      ],
      photos: [{
        img: "photo-01.jpg"
      }, {
        img: "photo-02.jpg"
      }, {
        img: "photo-03.jpg"
      }, {
        img: "photo-04.jpg"
      }, {
        img: "photo-05.jpg"
      }, {
        img: "photo-06.jpg"
      }, {
        img: "photo-07.jpg"
      }, {
        img: "photo-08.jpg"
      }, {
        img: "photo-09.jpg"
      }, {
        img: "photo-10.jpg"
      }, {
        img: "photo-11.jpg"
      }, {
        img: "photo-12.jpg"
      }, {
        img: "photo-13.jpg"
      }, {
        img: "photo-14.jpg"
      }, {
        img: "photo-15.jpg"
      }
      ]
    };
  },

};

</script>

<style lang="scss" scoped>
.topMv {
  background: linear-gradient(to top, $navy 0%, $navy 60px, rgba($navy , .5) 60px, rgba($navy , .5) 100%);
  position: relative;
  overflow-y: hidden;
  @include tab {
    background: linear-gradient(to top, $navy 0%, $navy 400px, rgba($navy , .5) 400px, rgba($navy , .5) 100%);
  }
}

.topMv .photoScroll {
  width: 100%;
  height: 420px;
  position: absolute;
  top: 0;
  left: 0;
  animation: scroll 10s infinite linear;
  z-index: -1;

  &:after {
    content: "";
    background: $navy;
    pointer-events: none;
    position: absolute;
    bottom: 0;
    height: 300%;
    left: 0;
    right: 0;
    top: 0;
    z-index: 1;
    animation: fadeIn 10s cubic-bezier(.36, .78, .23, .99) infinite;
  }
}

@keyframes scroll {
  0% {
    transform: translateY(0);
  }

  100% {
    transform: translateY(-30%);
  }
}

@keyframes fadeIn {
  0% {
    transform: translateY(-100%);
  }

  80% {
    transform: translateY(-100%);
  }

  100% {
    transform: translateY(0);
  }
}

.topMv .photoScroll .photoWrap {
  position: relative;
}

.topMv .photoScroll .photoWrap .photo {
  display: flex;
  gap: 10px;
  align-items: flex-start;
  flex-wrap: wrap;
  position: absolute;
  top: 0;
  left: 0;

  @include tab {
    gap: 5px;
  }

  &.photo--01 {
    animation: photoHidden-01 20s forwards infinite;
  }

  &.photo--02 {
    animation: photoHidden-02 20s forwards infinite;

    li {
      img {
        widows: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
}

@keyframes photoHidden-01 {
  0% {
    opacity: 1;
  }

  49% {
    opacity: 1;
  }

  50% {
    opacity: 0;
  }

  100% {
    opacity: 0;
  }
}

@keyframes photoHidden-02 {
  0% {
    opacity: 0;
  }

  49% {
    opacity: 0;
  }

  50% {
    opacity: 1;
  }

  100% {
    opacity: 1;
  }
}

.topMv .photoScroll .photoWrap .photo .photoItem {
  width: calc((100% - (10px * 3)) / 4);
  border: 1px solid rgba($navy , .5);
  overflow: hidden;
  position: relative;

  @include tab {
    width: calc((100% - (5px * 2)) / 3);
  }

  &:after {
    content: "";
    background: $navy;
    bottom: 0;
    left: 0;
    pointer-events: none;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 1;
  }

  &:nth-child(3n + 1):after {
    animation: imgHidden 1s cubic-bezier(.36, .78, .23, .99) forwards;
  }

  &:nth-child(3n + 2):after {
    animation: imgHidden 2s cubic-bezier(.36, .78, .23, .99) forwards;
  }

  &:nth-child(3n + 3):after {
    animation: imgHidden 2.5s cubic-bezier(.36, .78, .23, .99) forwards;
  }

  &:nth-child(even) {
    margin-top: 40px;

    @include tab {
      margin-top: 10px;
    }
  }

  img {
    aspect-ratio: 3/2;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

@keyframes imgHidden {
  0% {
    transform: translateY(0);
  }

  100% {
    transform: translateY(-100%);
  }
}


.topMv .container {
  @include contentWidth-l;

  h1 {
    height: 420px;
    font-size: 12.8rem;
    color: #fff;
    font-family: $f-roboto;
    letter-spacing: 2px;
    display: flex;
    align-items: center;

    @include pc-m {
      font-size: 6.4rem;

      @include pc-s {
        font-size: 5.4rem;

        @include tab {
          height: 280px;
          font-size: 4.2rem;
        }

        @include sp {
          height: 240px;
          font-size: 3rem
        }
      }
    }
  }
}

.topMv .container .wrap {
  width: min(100%, 1400px);
  margin: 0 auto;
}

.topMv .container .wrap .list {
  display: flex;
  gap: 50px;

  @include pc-s {
    gap: 20px;

    @include tab {
      margin: 0 auto;
      width: min(100%, 480px);
      display: block;
    }
  }

  &Item {
    width: calc((100% - (50px * 2)) / 3);

    @include pc-s {
      width: calc((100% - (20px * 2)) / 3);

      @include tab {
        width: calc(100%);
        margin-bottom: 30px;
      }
    }

    &:last-child {
      @include tab {
        margin-bottom: 0;
      }
    }

    &--01 {
      background: $lightBlue;

      h2 {
        color: $blue;
      }

      svg {
        fill: $blue;
      }
    }

    &--02 {
      background: $skyBlue;

      h2 {
        color: $lightBlue;
      }

      svg {
        fill: $lightBlue;
      }
    }

    &--03 {
      background: $blue;

      h2 {
        color: $skyBlue;
      }

      svg {
        fill: $skyBlue;
      }
    }

    a {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 40px 30px;

      @include pc-s {
        padding: 40px 20px;
      }

      h2 {
        line-height: 1;

        .en {
          display: block;
          font-size: 3.2rem;
          font-family: $f-roboto;

          @include pc-s {
            font-size: 2.4rem;
          }
        }

        .jp {
          font-size: 1.4rem;
        }
      }

      svg {
        width: 30px;
      }
    }
  }
}

.topNews {
  background: $navy;
  padding: 60px 0 0;

  .container {
    @include contentWidth-s;
  }
}

.topNews .container h2 {
  a {
    display: flex;
    align-items: center;
    gap: 10px;
    justify-content: flex-end;
    font-size: 1.6rem;
    color: #fff;
    @include tab {
      margin-bottom: 40px;
    }

    svg {
      width: 16px;
      fill: #fff;
    }
  }
}

.topNews .container .list {
  &Item {
    padding-bottom: 10px;
    margin-bottom: 10px;
    @include tab {
      padding-bottom: 20px;
      margin-bottom: 20px;
      border-bottom: 1px dotted rgba(255,255,255);
    }
    &:last-child {
      margin-bottom: 0;
      @include tab {
        border: none;
      }
    }
    a {
      display: block;
      color: #fff;
      display: flex;
      align-items: center;
      gap: 30px;
      @include tab {
        display: block;
      }


      .date {
        font-family: $f-roboto;
        font-weight: 500;
        font-size: 1.4rem;
        @include tab {
          margin-bottom: 4px;
        }
      }

      h3 {
        font-size: 1.6rem;
      }
    }
  }
}
</style>