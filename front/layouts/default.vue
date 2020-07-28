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

export default {
  components: {
    Loading,
  }
};
</script>