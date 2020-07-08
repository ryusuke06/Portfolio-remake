<template>
  <v-container fluid fill-height>
    <v-row
      class="text-center"
    >
      <v-col cols="12">
        {{ msg }}
      </v-col>
      <v-col cols="12">
        <v-btn
          color="primary"
          @click="getMsg"
        >
          Click Me!!
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    msg: ''
  }),
  methods: {
    getMsg () {
      this.$axios.$get('/v1').then(res => (this.msg = res.msg))
    }
  }
}
</script>