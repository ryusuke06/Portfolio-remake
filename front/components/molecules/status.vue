<template>
  <section>
  	<ul>
      <p><lv /></p>
      <p><exp /></p>
      <p><gold /></p>
      <p><job /></p>
    </ul>
  </section>
</template>

<script>
import lv from '../aroms/status/lv'
import exp from '../aroms/status/exp'
import gold from '../aroms/status/gold'
import job from '../aroms/status/job'

export default {
  components: {
    lv,
    exp,
    gold,
    job,
  }
}