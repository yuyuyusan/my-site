<template>
  <main class="aboutMain">
    <section class="lowMv">
      <h1>
        <span class="en">ABOUT</span>
      </h1>
    </section>

    <section class="aboutBase">
      <h2>漆川佑志</h2>

      <div class="container">
        <figure class="pic"><img src="../static/yu.jpg"></figure>
        <div class="inner">
          <div class="innerContent innerTop">
            <h3>略歴</h3>
            <p>
              2020年4月より勉強開始。2021年4月より未経験でWeb制作会社入社。
            </p>
          </div>
          <div class="innerContent innerBottom">
            <h3>趣味</h3>
            <p>
              昔はサッカーやっていて、現在は、スノーボードとアニメ漫画好きで、ギャップがすごいとよく言われます。
              業務終了後、土日祝ずっと勉強しているので、そろそろ趣味にコーディング勉強入れたいです。
            </p>
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
          <!-- <li class="listItem" v-for="content in contents" :key="content.id">
            <figure class="listItem__pic">
              <img :src="content.image.url">
            </figure>
            <h3>{{ content.title }}</h3>
          </li> -->

          <li class="listItem">
            <figure class="listItem__pic">
              <a href=""><img src="../static/img-01.jpg" alt=""></a>
            </figure>
            <h3>個別apiの取得がまだわからない</h3>
            <p class="listItem__text">困った絶対できるはず</p>
          </li>
          <li class="listItem">
            <figure class="listItem__pic">
              <a href=""><img src="../static/img-01.jpg" alt=""></a>
            </figure>
            <h3>実績のapiを取得・・</h3>
            <p class="listItem__text">困った絶対できるはず</p>
          </li>
        </ul>
        <div class="link">
          <a href="">実績一覧へ</a>
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
                現在経験年数1年弱です。HTMLはSEOを気にしつつ、SCSSでユーザビリティ意識しながらのコーディングができます。<br>
                JavaScript、PHPは基本的な構文は抑えています。フルスクラッチで書いて開発したことはまだありません。書いてあるのを調べながら読み解く流れです。<br>
                新しくでてきたものは、基本的には調べて多少時間はかかったとしても完成はできます。<br>
                ※最悪妥協してアナログみたいなやり方にします。<br>
                CMSに関しては大規模サイトは経験ないですが、0からオリジナルテーマは作成できます。現在は、Vue、Nuxt、ヘッドレスCMS（microCMS少々）勉強中です。
              </p>
            </div>
            <ul class="list">
              <li class="listItem" v-for="content in contents" :key="content.id">
                <figure class="listItem__pic">
                  <img :src="content.image.url">
                </figure>
                <progress class="listItem__bar" min="0" max="10" :value="content.level"></progress>
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
                今後は、データベースについて、React、WEBアプリも作りたいのでReact NativeもしくはFlutterを勉強しようと考えています。
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  </main>
</template>

<script>
import axios from 'axios'

export default {
  name: 'AboutPage',
  layout: 'low',
  data: () => {
    return {
      tab: 1,
    }
  },
  async asyncData() {
    const { data } = await axios.get(
      'https://yushi.microcms.io/api/v1/cord',
      {
        headers: { 'X-MICROCMS-API-KEY': 'feb17f48f7204c99b8dd40af725e95d2311b' }
      }
    )
    return data
  },
  // async asyncData() {
  //   const { data2 } = await axios.get(
  //     'https://yushi.microcms.io/api/v1/results',
  //     {
  //       headers: { 'X-MICROCMS-API-KEY': 'feb17f48f7204c99b8dd40af725e95d2311b' }
  //     }
  //   )
  //   return data2
  // },

  
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


.aboutBase {
  margin-bottom: 100px;

  h2 {
    text-align: center;
    font-size: 2.4rem;
    margin-bottom: 40px;
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

            @include tab {
              width: calc((100% - (40px * 1)) / 2);
            }

            &__pic {
              width: 60px;
            }

            &__bar {
              width: calc(100% - 60px);
            }
          }
        }
      }
    }
  }
}
</style>