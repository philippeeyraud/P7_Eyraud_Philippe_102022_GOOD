<template>
  <h3>{{ title }}</h3>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import type { ProductInterface  } from './interfaces/product.interface'


const props = defineProps<{
  product: ProductInterface
}>()

const title = computed(() => props.product.name.toUpperCase())
</script>
<style lang="scss" scoped></style>
