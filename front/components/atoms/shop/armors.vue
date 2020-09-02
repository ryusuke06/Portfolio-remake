<template>
  <div class="blackboard answer">
    <ul>
      <li><strong>ぼうぐ</strong></li>
        <v-virtual-scroll
          :items="armors"
          :item-height="30"
          height="300"
        >
        <template v-slot="{ item }">
          <v-list-item :key="item.id" dark="dark">
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
    armors() {
      return this.$store.state.shop.armors;
    },
  },
  methods: {
    pay(item){
      this.$emit('pay', item);
    },
  },
}
</script>