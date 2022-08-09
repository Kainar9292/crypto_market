<template>
  <ALayout class="page-layout">
    <ALayout>
      <Header />
      <ALayoutContent class="content">
        <RouterView />
      </ALayoutContent>
    </ALayout>
  </ALayout>
</template>

<script setup lang="ts">
import Header from "./../components/Header.vue";
import { useRoute } from "vue-router";
const route = useRoute();
</script>
