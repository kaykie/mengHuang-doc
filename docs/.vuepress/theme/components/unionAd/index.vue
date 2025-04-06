<template>
  <div>
    <component :is="UnionAd" id="u6998996"></component>
  </div>
</template>

<script setup>
import { ref, onMounted,h } from 'vue';

const UnionAd = ref(null);

onMounted(async () => {
  if (typeof window !== 'undefined') {
    const unionAdVue = await import('union-ad-vue');
    const { createUnionAdComponent } = unionAdVue;
    UnionAd.value = createUnionAdComponent(h);
  }
});
</script>
          