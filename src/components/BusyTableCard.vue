<template>
  <div>
    <q-card class="my-card mifila"
    v-for="table in busy_tables"
    :key="table.table_num">

      <q-card-section>
        <div class="text-center text-h6">Mesa {{ table.id }}</div>
        <div class="text-subtitle2">Atiende</div>
        <div class="text-subtitle3">{{table.waiter}}</div>
      </q-card-section>

      <q-separator />

      <q-card-actions vertical>
        <q-btn flat color="red" @click="freeTable(table)"> Liberar</q-btn>
      </q-card-actions>
    </q-card>
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
