<template>
  <v-virtual-scroll
    :items="armors"
    :item-height="30"
    height="300"
    >
      <template v-slot="{ item }">
        <v-list-item :key="item.id" dark="dark">
          <v-list-item-content>
            <v-list-item-title>
              <span @click="selectOption(item.id)"><p class="blink-before">{{ item.option }}</p></span>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-virtual-scroll>
  </div>
</template>

<script>
export default{
  computed: {
    options() {
      return this.$store.state.test.options;
    },
  },
  methods: {
    selectOption(optionId) {
      this.$emit('selectOption', optionId)
    }
  }
}
</script>