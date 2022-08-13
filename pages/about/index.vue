<template>
  <main class="aboutMain">
    <section class="lowMv">
      <h1>
        <span class="en">ABOUT</span>
      </h1>
    </section>

    <section class="aboutBase">
      <h2 id="observerTitleActive">漆川佑志</h2>

      <div class="container" id="observerTitle">
        <figure class="pic"><img src="../../static/yu.jpg"></figure>
        <div class="inner">
          <div v-for="(self, index) in self" :key="index" class="innerContent" :class="self.boxClass">
            <h3>{{ self.title }}</h3>
            <p>{{ self.desc }}</p>
          </div>
        </div>
      </div>
    </section>


    <section id="aboutWorks" class="aboutWorks">
      <div class="container">
        <h2>
          <span class="en">WORKS</span>
          <span class="jp">実績</span>
        </h2>

        <ul class="list">
          <li v-for="results in results.contents" :key="results.id" class="listItem">
            <figure class="listItem__pic">
              <nuxt-link :to="`/works/${results.id}`">
                <img :src=results.image.url alt="">
              </nuxt-link>
            </figure>
            <p class="date" :datetime="results.publishedAt"
              v-text="$dateFns.format(new Date(results.publishedAt), 'yyyy.MM.dd')">
            </p>
            <h3>{{ results.title }}</h3>
          </li>
        </ul>
        <div class="link">
          <nuxt-link to="works">実績一覧へ</nuxt-link>
        </div>
      </div>
    </section>


    <section class="aboutSkill">
      <div class="container">
        <h2>
          <span class="en">SKILLS</span>
          <span class="jp">スキル</span>
        </h2>
        <ul class="contentButton">
          <li :class="{ clickActive: tab === 1 }" @click="tab = 1">コーディング</li>
          <li :class="{ clickActive: tab === 2 }" @click="tab = 2">その他</li>
        </ul>

        <div class="content">
          <div v-show="tab === 1" class="contentItem">
            <div class="wrap">
              <p>
                <span>SKILLS</span>
                現在、経験年数1年4ヶ月です。HTMLはSEOを気にしつつ、SCSSでユーザビリティ意識しながらのコーディングができます。レスポンシブデザインはPCのデザインが基本上がってきて、自分で考えて作成しているので対応できます。<br>
                JavaScript、PHPは基本的な構文は抑えています。フルスクラッチで書いて開発したことはまだありません。書いてあるのを、実装しようとしているものを、調べながら読み解く流れです。<br>
                新しくでてきたものは、基本的には調べて多少時間はかかったとしても完成はできます。<br>
                ※最悪妥協して非効率なやり方でも完成させます。<br>
                CMSに関しては大規模サイトは経験ないですが、WordPressを0からオリジナルテーマは作成できます。現在は、Vue、Nuxt、ヘッドレスCMS（microCMS）勉強中です。
              </p>
            </div>
            <ul class="list">
              <li v-for="(skill, index) in skill" :key="index" class="listItem">
                <figure class="listItem__pic">
                  <img :src="skill.icon" />
                </figure>
                <progress class="listItem__bar" min="0" max="10" :value="skill.level"></progress>
                <p class="listItem__desc">{{ skill.desc }}</p>
              </li>
            </ul>
          </div>

          <div v-show="tab === 2" class="contentItem">
            <div class="wrap">
              <p>
                <span>OTHER</span>
                デザインについては、UIは苦手ですがUXは意見できるくらいのレベルです。デザイン用語、デザインツール、UXの基本は抑えています。<br>
                パッケージ管理はgulpは使ってなく、npm scriptsのみです。<br>
                サーバー等の知識は基本は知っている状態です。<br>
                今後は、Vue,Nuxtを勉強しつつ、データベースについて、React、アプリも作りたいのでReact NativeもしくはFlutterを勉強しようと考えています。
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: 'AboutPage',
  layout: 'low',
  data: () => {
    return {
      // タブ切り替え
      tab: 1,
      // 自己紹介
      self: [
        {
          boxClass: "innerTop",
          title: "略歴",
          desc: "2020年4月より勉強開始。2021年4月より業務未経験でWeb制作会社入社。"
        },
        {
          boxClass: "innerBottom",
          title: "略歴",
          desc: "昔はサッカーやっていて、現在は、スノーボードとアニメ漫画好きで、ギャップがすごいとよく言われます。業務終了後、土日祝ずっと勉強しているので、そろそろ趣味にコーディング勉強入れてもいいですか。"
        }
      ],
      // スキル
      skill: [
        {
          icon: "icon-html.svg",
          level: "8",
          desc: "SEOを意識しながらのコーディングができます。多少htaccessなども修正して、ページ速度を速くすることも可能です。"
        },
        {
          icon: "icon-css.svg",
          level: "8"
        },
        {
          icon: "icon-js.svg",
          level: "5"
        },
        {
          icon: "icon-php.svg",
          level: "5"
        },
        {
          icon: "icon-jquery.svg",
          level: "5"
        },
        {
          icon: "icon-ts.svg",
          level: "1"
        },
        {
          icon: "icon-wp.svg",
          level: "7"
        },
        {
          icon: "icon-vue.svg",
          level: "2"
        },
        {
          icon: "icon-nuxt.svg",
          level: "2"
        }
      ]
    }
  },
  async asyncData({ $microcms }) {
    const results = await $microcms.get({
      endpoint: 'works',
    })
    return {
      results,
    }
  }
}

</script>

<style lang="scss" scoped>
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


.aboutBase {
  margin-bottom: 100px;

  h2 {
    text-align: center;
    font-size: 2.4rem;
    margin-bottom: 40px;
    background-image: linear-gradient(45deg,
        rgb(37, 47, 255) 0%,
        rgb(124, 192, 226) 100%,
        rgb(37, 47, 255) 200%);
    background-clip: text;
  }

  .container {
    @include contentWidth-s;
    display: flex;
    gap: 40px;

    @include tab {
      display: block;
    }

    .pic {
      width: 200px;

      @include tab {
        margin: 0 auto 40px;
      }
    }

    .inner {
      width: calc(100% - 200px);
      border: 1px solid #000;
      padding: 40px;

      @include pc-s {
        padding: 40px 20px;

        @include tab {
          width: calc(100%);
        }
      }

      &Content {
        margin-bottom: 40px;

        &:last-child {
          margin-bottom: 0;
        }

        h3 {
          margin-bottom: 15px;
          font-size: 1.8rem;
        }

        p {
          line-height: 1.6;

          @include tab {
            font-size: 1.4rem;
          }
        }
      }
    }
  }
}

.aboutWorks {
  @include p100;
  background: $lightBlue;

  .container {
    @include contentWidth-s;

    h2 {
      text-align: center;
      margin-bottom: 40px;
      line-height: 1;

      .en {
        font-size: 2.4rem;
        display: block;
      }

      .jp {
        font-size: 1.4rem;
      }
    }

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
          font-size: 1.6rem;
          margin-bottom: 10px;
        }

        &__text {
          font-size: 1.4rem;
          line-height: 1.6;
        }
      }
    }

    .link {
      text-align: center;

      a {
        display: inline-block;
        width: 200px;
        background: $navy;
        color: #fff;
        padding: 20px 0;
      }
    }
  }
}

.aboutSkill {
  @include p100;

  .container {
    @include contentWidth-s;

    h2 {
      text-align: center;
      margin-bottom: 40px;
      line-height: 1;

      .en {
        font-size: 2.4rem;
        display: block;
      }

      .jp {
        font-size: 1.4rem;
      }
    }

    progress {
      -webkit-appearance: none;
    }

    ::-webkit-progress-bar {
      background-color: #ccc;
    }

    ::-webkit-progress-value {
      background-color: $skyBlue;
    }

    .contentButton {
      width: min(100%, 600px);
      margin: 0 auto 60px;
      display: flex;
      gap: 30px;

      li {
        width: 50%;
        padding: 30px 0;
        text-align: center;
        border: 1px solid #000;

        &:hover {
          cursor: pointer;
        }
      }

      .clickActive {
        background: $blue;
        color: #fff;
        border: none;
      }
    }

    .content {
      &Item {
        .wrap {
          position: relative;

          p {
            width: min(100%, 600px);
            margin: 0 auto 60px;
            line-height: 2;
            letter-spacing: 1px;

            @include tab {
              font-size: 1.4rem;
              line-height: 1.6;
            }

            span {
              font-family: $f-roboto;
              font-weight: bold;
              font-size: 20rem;
              color: rgba(0, 0, 0, .05);
              line-height: 1;
              position: absolute;
              top: -40px;
              left: 0;
              letter-spacing: 0;

              @include tab {
                font-size: 10rem;

                @include sp {
                  font-size: 6rem;
                }
              }
            }
          }
        }

        .list {
          display: flex;
          gap: 40px;
          flex-wrap: wrap;

          &Item {
            width: calc((100% - (40px * 2)) / 3);
            display: flex;
            gap: 20px;
            align-items: center;
            position: relative;

            &:hover .listItem__desc {
              opacity: 1;
            }

            @include tab {
              width: calc((100% - (40px * 1)) / 2);
            }

            &__pic {
              width: 60px;
            }

            &__bar {
              width: calc(100% - 60px);
            }

            &__desc {
              padding: 20px;
              opacity: 0;
              position: absolute;
              top: 0;
              left: 0;
              background: $lightBlue;
            }
          }
        }
      }
    }
  }
}
</style>