<template>
  <div class="q-pa-md">
    <q-option-group
      v-model="separator"
      inline
      class="q-mb-md"
    />

    <q-table
      title="Meseros"
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
          name: 'name',
          required: true,
          label: 'Nombre',
          align: 'left',
          field: row => row.name,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'last_name', align: 'center', label: 'Apellido', field: 'last_name', sortable: true },
        { name: 'run', label: 'RUN', align: 'center', field: 'run' },
        { name: 'avaliability', align: 'center', label: 'Disponible', field: 'avaliability' },

      ],
      data: [
        {
          name: 'Matías Alonso',
         last_name: "Fuentes",
          run: "17.305.233-2",
          avaliability: "Sí"
        },
        {
          name: 'Tomás',
         last_name: "Farias",
          run: "20.821.123-9",
          avaliability: "Sí"
        },
        {
          name: 'Lucas',
         last_name: "Aedo",
          run: "19.530.912-4",
          avaliability: "Sí"
        },
        {
          name: 'Roberto',
         last_name: "Ffrench-Davis",
          run: "20.010.987-2",
          avaliability: "Sí"
        }
      ]
    }
  }
}
</script>
