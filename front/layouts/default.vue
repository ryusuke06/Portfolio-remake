<template>
  <v-app>
    <div>
      <Loading />
    </div>
    <nuxt />
  </v-app>
</template>

<script>
import Loading from "@/components/loading";
const axios = require('axios');

export default {
  components: {
    Loading,
  }
};
</script>