<template>
  <div>
    <v-btn class="mx-2 av_btn" fab dark large color="pink">
      <v-avatar width="64" height="64">
        <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
      </v-avatar>
    </v-btn>
  </div>
</template>

<script>
export default {
  name: 'ButtonTop'
}
</script>

<style lang="scss" scoped>
.av_btn {
  top: -32px;
}
</style>
