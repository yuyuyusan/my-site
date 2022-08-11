
<template>
  <div>
    <form>
      <dl>
        <dd><label for="subject">件名</label></dd>
        <dt>
          <input id="subject" name="subject" type="text" />
        </dt>
      </dl>
      <dl>
        <dd><label for="name">お名前</label></dd>
        <dt>
          <input id="name" name="name" type="text" />
        </dt>
      </dl>
      <dl>
        <dd><label for="message">お問い合わせ内容</label></dd>
        <dt>
          <textarea id="message" name="message" />
        </dt>
      </dl>
      <button type="submit">送信する</button>
    </form>
  </div>
</template>

<script>

export default {
  layout: "low"
}
</script>