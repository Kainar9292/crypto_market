<template>
  <ADivider />

  <ARow :justify="'center'" :align="'center'">
    <ACol class="text-center" :span="8"
      ><AStatistic title="Рыночная капитализация" :value="112893"
    /></ACol>
    <ACol class="text-center" :span="8"
      ><AStatistic title="Объём за 24ч" :value="112893"
    /></ACol>
    <ACol class="text-center" :span="8"
      ><AStatistic title="Доминирование" :value="112893"
    /></ACol>
  </ARow>

  <ADivider />

  <ARow :gutter="30">
    <ACol :span="8">
      <DefTable
        size="middle"
        :data-source="templateDate"
        :columns="columns"
        :bordered="true"
        :pagination="false"
      >
        <template #title>
          <div class="flex align-center">
            <img
              src="@/assets/icons/trendingIcon.png"
              alt="trendingIcon"
              class="w-20px mr-2"
            />
            <div>В тренде</div>
          </div>
        </template>
      </DefTable>
    </ACol>

    <ACol :span="8">
      <DefTable
        size="middle"
        :data-source="templateDate"
        :columns="columns"
        :pagination="false"
      >
        <template #title>
          <div class="flex align-center">
            <img src="@/assets/icons/time.png" alt="time" class="w-20px mr-2" />
            <div>Недавно добавленные</div>
          </div>
        </template>
      </DefTable>
    </ACol>

    <ACol :span="8">
      <DefTable
        :title="() => 'Недавно добавленные'"
        size="middle"
        :data-source="templateDate"
        :columns="columns"
        :pagination="false"
      />
    </ACol>
  </ARow>
</template>
<script lang="ts" setup>
const columns = [
  {
    dataIndex: "title",
    ellipsis: true,
  },
  {
    dataIndex: "count",
    ellipsis: true,
    align: "right",
  },
];

const templateDate = [
  { title: "Тестовое название", count: 1321321 },
  { title: "Тестовое название", count: 1321321 },
  { title: "Тестовое название", count: 1321321 },
  { title: "Тестовое название", count: 1321321 },
];
</script>
