<template>
  <main class="topMain">
    <section id="topMv" class="topMv">
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
          <li v-for="info in info.contents" :key="info.id" class="listItem">
            <nuxt-link :to="`/info/${info.id}`">
              <p class="date" :datetime="info.publishedAt"
                v-text="$dateFns.format(new Date(info.publishedAt), 'yyyy.MM.dd')">
              </p>
              <h3>{{ info.title }}</h3>
            </nuxt-link>
          </li>
        </ul>
      </div>
    </section>

  </main>
</template>

<script>

export default {
  layout: 'default',
  async asyncData({ $microcms }) {
    const info = await $microcms.get({
      endpoint: 'info',
    })
    return {
      info,
    }
  },
  data() {
    return {
      object: [
        {
          en: "ABOUT",
          jp: "自身について",
          numClass: "listItem--01",
          link: "/about"
        },
        {
          en: "WORKS",
          jp: "実績一覧",
          numClass: "listItem--02",
          link: "/works"
        },
        {
          en: "INFO",
          jp: "お知らせ",
          numClass: "listItem--03",
          link: "/info"
        }
      ]
    };
  },
}
</script>

<style lang="scss" scoped>
.topMv {
  background: rgba($navy , .2);
  padding: 100px 0 0;

  @include tab {
    padding: 80px 0;
  }

  .container {
    @include contentWidth-l;

    h1 {
      margin-bottom: 80px;
      font-size: 12.8rem;
      color: #fff;
      font-family: $f-roboto;
      letter-spacing: 2px;

      @include pc-m {
        font-size: 6.4rem;

        @include pc-s {
          margin-bottom: 60px;
          font-size: 5.4rem;

          @include sp {
            font-size: 3.2rem
          }
        }
      }
    }

    .wrap {
      width: min(100%, 1400px);
      margin: 0 auto;

      .list {
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
    }
  }
}

.topNews {
  background: $navy;
  padding: 120px 0 0;
  margin-top: -60px;

  @include tab {
    margin-top: 0;
    padding: 60px 0 0;
  }

  .container {
    @include contentWidth-s;

    h2 {
      a {
        display: flex;
        align-items: center;
        gap: 10px;
        justify-content: flex-end;
        font-size: 1.6rem;
        color: #fff;

        svg {
          width: 16px;
          fill: #fff;
        }
      }
    }

    .list {

      &Item {
        a {
          display: block;
          color: #fff;
          padding-bottom: 20px;
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          gap: 30px;

          &:last-child {
            margin-bottom: 0;
          }

          .date {
            font-weight: bold;
            font-size: 1.4rem;
          }

          h3 {
            font-size: 1.6rem;
            font-weight: 400;
          }
        }
      }
    }
  }
}
</style>