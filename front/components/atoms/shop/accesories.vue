<template>
  <div class="blackboard answer">
    <ul>
      <li><strong>アクセサリー</strong></li>
        <v-virtual-scroll
          :items="accesories"
          :item-height="30"
          height="300"
        >
        <template v-slot="{ item }" dark="dark">
          <v-list-item :key="item.id">
            <v-list-item-content>
              <v-list-item-title>
                <span @click="pay(item)"><p class="blink-before">{{ item.name }}  {{ item.gold }}G</p></span>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-virtual-scroll>
    </ul>
  </div>
</template>

<script>
export default{
  data(){
    return {
      dark:true
    }
  },
  computed: {
    accesories() {
      return this.$store.state.shop.accesories
    },
  }
}
</script>