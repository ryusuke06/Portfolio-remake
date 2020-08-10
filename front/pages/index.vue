<template>
  <div class="font">
    <p>{{ result }}Hello</p>
  	<nuxt-link to="/users/login">ログイン</nuxt-link>
    <ul id="dqmenu">
      <li class="top">ドラクエメニューの上枠</li>
      <li class="menu01"><a href="リンク先のURL">たたかう</a></li>
      <li class="menu06"><a href="リンク先のURL">はなす</a></li>
      <li class="menu14"><a href="リンク先のURL">ごあいさつ</a></li>
      <li class="menu16"><a href="リンク先のURL">おといあわせ</a></li>
      <li class="menu19"><a href="リンク先のURL">つかいかた</a></li>
      <li class="menu20"><a href="リンク先のURL">おしらせ</a></li>
      <li class="menu23"><a href="リンク先のURL">プロフィール</a></li>
      <li class="menu29"><a href="リンク先のURL">イベント</a></li>
      <li class="menu31"><a href="リンク先のURL">ログイン</a></li>
    </ul>
    <div class="blackboard question">
      <p>＊「ここに質問が入ります」</p>
    </div>
    <div class="clearfix">
      <div class="blackboard answer float-r">
        <p class="blink-before">はい</p>
        <p>いいえ</p>
      </div>
    </div>
  </div>
</template>

<script>
import Dqmenu from '@/assets/css/dqmenu.css'
import BlackFrame from '@/assets/css/black_frame.css'

export default {
  //ログインしていなくても入れるように
  auth: false,
  data: function(){
    return {
      result: 'no event.',
    };
  },
}
</script>

<style>
.font {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>