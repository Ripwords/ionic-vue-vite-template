<script lang="ts" setup>
const props = defineProps<{ msg: string }>()
</script>

<template>
  <ion-header>
    <ion-toolbar>
      <ion-title>
        {{ props.msg }}
      </ion-title>
    </ion-toolbar>
  </ion-header>
</template>