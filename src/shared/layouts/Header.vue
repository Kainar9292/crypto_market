<template>
  <ALayoutHeader>
    <AMenu
      v-model:selectedKeys="selectedKeys"
      theme="dark"
      mode="horizontal"
      class="container mx-auto"
    >
      <AMenuItem key="0">
        <RouterLink :to="{ name: 'Home.Main' }">
          <div class="w-full h-full">
            <img src="@/assets/icons/crypto_icon.png" alt="crypto_icon" class="w-35px" />
          </div>
        </RouterLink>
      </AMenuItem>
      <AMenuItem key="1">
        <RouterLink :to="{ name: 'Coin.Main' }">
          <span class="nav-text">Монеты</span>
        </RouterLink>
      </AMenuItem>
      <AMenuItem key="2">
        <RouterLink :to="{ name: 'Exchange.Main' }">
          <span class="nav-text">Список бирж</span>
        </RouterLink>
      </AMenuItem>
    </AMenu>
  </ALayoutHeader>
</template>

<script setup lang="ts">
defineProps({
  title: String,
});

const selectedKeys = ref<string[]>();
</script>
