<template>
  <component :is="currentView" />
</template>

<script>
import goods from '../atoms/shop/goods'
import wepons from '../atoms/shop/wepons'
import armors from '../atoms/shop/armors'
import accesories from '../atoms/shop/accesories'

export default{
  components: {
  	goods,
  	wepons,
  	armors,
  	accesories,
  },
  data(){
  	return {
      currentView: 'goods',
    }
  },
  methods: {
    isWepons(){
      this.currentView = 'wepons';
    },
    isArmors(){
      this.currentView = 'armors';
    },
    isAccesories(){
      this.currentView = 'accesories';
    },
  }
}
</script>