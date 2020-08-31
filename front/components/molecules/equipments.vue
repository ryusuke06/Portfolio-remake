<template>
  <div>
  	<ul>
      <p><wepon /></p>
      <p><armor /></p>
      <p><accesories /></p>
    </ul>
  </div>
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