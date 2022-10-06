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
          <li class="listItem" v-for="content in contents" :key="content.id">
            <figure class="listItem__pic">
              <nuxt-link :to="`/works/${content.id}`">
                <img :src="content.image.url">
              </nuxt-link>
            </figure>
            <p class="date">{{ content.date }}</p>
            <h3>{{ content.title }}</h3>
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
                現在、経験年数1年5ヶ月です。レスポンシブデザインはPCのデザインが基本上がってきて、自分で考えて作成しているので対応できます。<br>
                初めてのことに関しては、書いてあるものを、実装しようとしているものを、調べながら読み解く流れです。<br>
                基本的には調べて多少時間はかかったとしても完成はできます。<br>
                ※最悪妥協して非効率なやり方でも完成させます。<br>
                CMSに関しては大規模サイトは経験ないですが、WordPressを0からオリジナルテーマは作成できます。現在は、Vue、Nuxt、ヘッドレスCMS（microCMS）勉強中です。
              </p>
            </div>
            <ul class="list">
              <li v-for="(skill, index) in skill" :key="index" class="listItem"
                :class="{ skillActive: modal === skill.num }" @click="modal = skill.num">
                <figure class="listItem__pic">
                  <img :src="skill.icon" />
                </figure>
                <progress class="listItem__bar" min="0" max="10" :value="skill.level">
                </progress>
                <span class="skillActive">{{ skill.level }}/10</span>
              </li>
            </ul>

            <div class="listItem__desc" v-for="(skill, index) in skill" :key="index" v-show="modal === skill.num"
              @click="modal = skillClose">
              <div class="bg">
                <h4>
                  {{ skill.title }}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                    <path
                      d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z" />
                  </svg>
                </h4>
                <div class="inner">
                  <figure><img :src="skill.icon" :alt="skill.title" /></figure>
                  <p>{{ skill.desc }}</p>
                </div>
              </div>
            </div>
          </div>

          <div v-show="tab === 2" class="contentItem">
            <div class="wrap">
              <p>
                <span>OTHER</span>
                デザインについては、UIは少々苦手ですがUXはデザイナーにも意見などしていて、デザイン用語、デザインツール、UXの基本は抑えています。<br>
                パッケージ管理はgulpは使ってなく、npm scriptsのみです。<br>
                サーバー等の知識は基本は知っている状態です。<br>
                今後は、Vue,Nuxtを勉強しつつ、React、データベースについて、アプリも作りたいのでReact NativeもしくはFlutterを勉強しようと考えています。
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
  async asyncData() {
    const { data } = await axios.get(
      'https://yushi.microcms.io/api/v1/works?limit=3',
      {
        headers: { 'X-MICROCMS-API-KEY': 'feb17f48f7204c99b8dd40af725e95d2311b' }
      }
    )
    return data
  },
  data: () => {
    return {
      // タブ切り替え
      tab: 1,
      modal: false,
      // 自己紹介
      self: [
        {
          boxClass: "innerTop",
          title: "略歴",
          desc: "2020年4月より勉強開始。2021年4月よりWEB業界、業務未経験でWeb制作会社入社。"
        },
        {
          boxClass: "innerBottom",
          title: "趣味",
          desc: "スノーボード、散歩、漫画、昔はアニメ鑑賞でしたが、現在は仕事の影響でアニメの映像を鑑賞と言葉を聴くことです。"
        }
      ],
      // スキル
      skill: [
        {
          icon: "../icon-html.svg",
          title: "HTML",
          level: "8",
          num: "1",
          desc: "SEOを意識しながらのコーディングができます。htaccessなども修正して、ページ速度改善なども可能です。pugなどは使用したことがまだありません。"
        },
        {
          icon: "../icon-css.svg",
          title: "CSS",
          level: "8",
          num: "2",
          desc: "自分の形は、FLOCSS+自分流でdartscssを使用しています。モダンなcssはcolissを毎週見ているので、取り入れています。svgに関しては、svg spriteを使用しており、アニメーションは業務では、あまり使用する機会がなく休日に勉強しています。"
        },
        {
          icon: "../icon-js.svg",
          title: "Vanilla js",
          level: "5",
          num: "3",
          desc: "vanilla jsの基本の形は抑えていますが、業務でもあまり使用しないため、開発などフルスクラッチでの経験はありません。案件で使用する場面では、あえて新しい事を調べて少しずつ勉強しています。現在webGL、Intersection Observer、beforeRouteLeave（ナビゲーションゲート）を次は学ぼうと考えています。"
        },
        {
          icon: "../icon-php.svg",
          title: "PHP",
          level: "5",
          num: "4",
          desc: "JavaScriptと同じく、基本の形は抑えていますが、経験業務はWordPressと修正案件での自作フォーム(smartyを使用)のみです。ほとんどWordpressがメインです。今後は自作フォームなどの理解を深めて行こうと思っています。"
        },
        {
          icon: "../icon-jquery.svg",
          title: "jQuery",
          level: "6",
          num: "5",
          desc: "初めての学習がjQueryでしたので、vanilla jsよりは理解が深いです。ただ業務を重ねていくうちに脱jQueryしようと思い始め基本的には使わない方向性で制作に取り組んでいます。"
        },
        {
          icon: "../icon-ts.svg",
          title: "TypeScript",
          level: "1",
          num: "6",
          desc: "まだ勉強しておらず、JavaScriptとの並行して勉強していくのか、どうするのかで止まっています。"
        },
        {
          icon: "../icon-wp.svg",
          title: "WordPress",
          level: "8",
          num: "7",
          desc: "案件がWordPressが多いため、オリジナルテーマを0から作成できます。1回だけTCDのテーマから制作がありましたが、オリジナルテーマのほうがやりやすいです。がっちりめのECサイトの経験はないのですが、機能少なめなECサイトの制作は業務で経験しました。"
        },
        {
          icon: "../icon-vue.svg",
          title: "Vue.js",
          level: "3",
          num: "8",
          desc: "このサイトで初めて触りました。かなり使いやすい印象で、今後も使用していこうと考え、業務でも取り入れるようにしています。"
        },
        {
          icon: "../icon-nuxt.svg",
          title: "Nuxt.js",
          level: "3",
          num: "9",
          desc: "Vueと同じく初めて触り現在、todoなどを作成しつつ、理解を深めて行こうと思っています。"
        },
        {
          icon: "../icon-git.svg",
          title: "git",
          level: "4",
          num: "10",
          desc: "会社でgitを使用していないため、共同で使用したことがありません。個人で管理していますが、基本操作は理解しています。"
        }
      ],
    }
  },
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
  }
}

.aboutSkill .container {
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
}

.aboutSkill .container .contentButton {
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

.aboutSkill .container .content {
  &Item {
    .wrap {
      position: relative;
    }
  }
}

.aboutSkill .container .content .wrap p {
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

.aboutSkill .container .content .list {
  display: flex;
  gap: 40px;
  flex-wrap: wrap;

  &Item {
    width: calc((100% - (40px * 2)) / 3);
    display: flex;
    gap: 20px;
    align-items: center;
    position: relative;

    @include tab {
      width: calc((100% - (40px * 1)) / 2);
    }

    &:hover {
      cursor: pointer;
    }

    &:hover .skillActive {
      opacity: 1;
      visibility: visible;
    }

    .skillActive {
      opacity: 0;
      visibility: hidden;
      font-size: 1.2rem;
      font-family: $f-roboto;
      font-weight: 500;
      position: relative;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
    }
  }
}

.aboutSkill .container .content .contentItem .listItem {
  &__pic {
    width: 60px;
  }

  &__bar {
    width: calc(100% - 60px);
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

  &__desc {
    width: 100%;
    height: 100vh;
    padding: 20px;
    background: rgba(0, 0, 0, .5);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
  }
}

.aboutSkill .container .content .contentItem .bg {
  width: min(100% - 40px, 560px);
  height: 60%;
  padding: 40px;
  position: absolute;
  inset: 0;
  margin: auto;
  background: $lightBlue;

  h4 {
    margin-bottom: 15px;
    padding-bottom: 5px;
    border-bottom: 1px solid $blue;
    display: flex;
    align-items: center;
    justify-content: space-between;

    svg {
      width: 16px;
    }
  }

  .inner {
    height: 100%;
    padding-bottom: 40px;
    display: flex;
    align-items: flex-start;
    gap: 30px;

    figure {
      width: 140px;

      img {
        aspect-ratio: 1/1;
        width: 100%;
        height: 100%;
      }
    }

    p {
      width: calc(100% - 140px);
      height: 100%;
      line-height: 2;
      font-size: 1.4rem;
      overflow-y: scroll;
    }
  }
}
</style>