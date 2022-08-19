<template>
  <ALayout class="page-layout">
    <ALayout>
      <Header />
      <ALayoutContent class="content container mx-auto">
        <RouterView />
      </ALayoutContent>
    </ALayout>
  </ALayout>
</template>

<script setup lang="ts">
import Header from "@/shared/layouts/Header.vue";
</script>
