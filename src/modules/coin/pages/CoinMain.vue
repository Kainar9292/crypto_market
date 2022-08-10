<template>
 <ADivider/>

  <ARow :justify="'center'" :align="'center'">
    <ACol class="text-center" :span="8"><AStatistic title="Рыночная капитализация" :value="112893" style="margin-right: 50px" /></ACol>
    <ACol class="text-center" :span="8"><AStatistic title="Объём за 24ч" :value="112893" style="margin-right: 50px" /></ACol>
    <ACol class="text-center" :span="8"><AStatistic title="Доминирование" :value="112893" style="margin-right: 50px" /></ACol>
  </ARow>


 <ADivider/>
     
  <DefTable :data-source="templateDate" :columns="columns"/>

</template>

<script lang="ts" setup>
  
const columns = [
    {
    title: 'Наименование',
    dataIndex: 'title',
    ellipsis: true,
  },
  {
    title: 'Количество',
    dataIndex: 'count',
    ellipsis: true,
  },
]

const templateDate = [
  {title: 'Тестовое название', count: 1321321}, 
  {title: 'Тестовое название', count: 1321321}, 
  {title: 'Тестовое название', count: 1321321}, 
  {title: 'Тестовое название', count: 1321321}, 
]

</script>