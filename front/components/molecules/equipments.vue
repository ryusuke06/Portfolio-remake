<template>
  <section>
  	<ul>
      <p><wepon /></p>
      <p><armor /></p>
      <p><accesory /></p>
    </ul>
  </section>
</template>

<script>
import wepon from '../aroms/equipments/wepon'
import armor from '../aroms/equipments/armor'
import accesory from '../aroms/equipments/accesory'

export default {
  components: {
    wepon,
    armor,
    accesory,
  }
}