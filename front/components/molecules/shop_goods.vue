<template>
  <section>
    <salesTalk @back="doBack" />
    <component :is="currentView" @wepons="isWepons" @armors="isArmors" @accesories="isAccesories" @pay="pay" />
    <!-- $emit(イベント名, 引数)で子から送られてきたメソッドを親のメソッドに紐付け -->
  </section>
</template>

<script>
import salesTalk from '../atoms/shop/sales_talk'
import goods from '../atoms/shop/goods'
import wepons from '../atoms/shop/wepons'
import armors from '../atoms/shop/armors'
import accesories from '../atoms/shop/accesories'

export default{
  components: {
  	salesTalk,
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
    doBack(){
      this.currentView = 'goods';
    },
    pay(buyItem){
      this.$store.commit('pay', buyItem);
    },
  }
}
</script>