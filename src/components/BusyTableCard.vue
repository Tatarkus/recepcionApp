<template>
  <div class="q-pa-md q-gutter-sm col-4">
 <q-banner rounded class="bg-red-5 text-white text-center">

   Mesas ocupadas


 </q-banner>
  <div class="colu col-4">
    <div class="row">
    <q-card class="my-card mifila"

    v-for="table in busy_tables"
    :key="table.table_num">
    <q-card-section>
      <div class="text-center text-h6">Mesa {{ table.id }}</div>
      <div class="text-subtitle2">Atiende</div>
      <div class="text-subtitle3">{{table.waiter}}</div>
    </q-card-section>
<!--emit-->
    <q-separator />
      <q-card-actions vertical>
        <q-btn flat color="red" @click="freeTable(table)"> Liberar</q-btn>
       </q-card-actions>
     </q-card>
   </div>
  </div>
</div>
</template>
<script>
export default {
  name: 'BusyTableCard',
  props: {
    busy_tables: {}
  },
  methods: {
    freeTable(table){
      this.$emit('freeThisTable',table)
    }
  }
}


</script>

  <style lang="sass" scoped>
  .my-card
    width: 100%
    max-width: 180px
    margin-bottom: 10px




  </style>
  <style lang="scss" scoped>
  .mifila {
    margin-left: 10px
    }

  </style>
