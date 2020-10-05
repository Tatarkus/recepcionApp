<template>
  <div class="q-pa-md">
    <q-option-group
      v-model="separator"
      inline
      class="q-mb-md"

    />

    <q-table
      title="Reservas"
      :data="data"
      :columns="columns"
      row-key="name"
      :separator="separator"
    />
  </div>
</template>

<script>
export default {
  data () {
    return {
      separator: 'vertical',

      columns: [
        {
          name: 'desc',
          required: true,
          label: 'Nombre Cliente',
          align: 'left',
          field: row => row.name,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'id', label: 'Identificador', field: 'id', sortable: true },
        { name: 'reserva', label: 'Número Reserva', field: 'reserva' },
        { name: 'fecha', label: 'Fecha Reserva', field: 'reserva' },

      ],
      data: [
        {
          name: 'Carlos G. Valderrama',
          id: 1595516,
          reserva: "K-0923",
          fecha: "12/10/24 20:30",
        }
      ]
    }
  }
}
</script>
