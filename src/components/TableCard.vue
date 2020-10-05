<template>
  <div class="q-pa-md q-gutter-sm col-4">
 <q-banner rounded class=" bg-blue-5 text-white text-center">

   Mesas disponibles


 </q-banner>

  <div class="colu col-4">

    <div class="row">
    <q-card class="my-card mifila"

    v-for="table in tables"
    :key="table.id">
    <q-card-section >
      <div class="text-center text-h6">Mesa {{ table.id }}</div>
      <div class="text-subtitle2 text-center">{{ table.capacidad }} personas</div>
    </q-card-section>
<!--emit-->
    <q-separator />
      <q-card-actions vertical>
        <q-btn flat @click="asign(table)"> Asignar</q-btn>
         <q-btn flat color="green" @click="asign(table)">Reservar</q-btn>
       </q-card-actions>
     </q-card>
  </div>
  </div>
  </div>
</template>
<script>

export default {
  name: 'TableCard',
  props: {
    tables: {}
  },
  methods: {
    asign(table){
      this.$emit('asignThisTable',table)

    },
    data () {
    return {

    }
  }
  }
}


</script>

<style lang="sass" scoped>
.my-card
    width: 100%
    min-width: 100px
    max-width: 180px
    margin-bottom: 10px
</style>
<style lang="scss" scoped>
.mifila {
  margin-left: 10px;
  }

</style>
