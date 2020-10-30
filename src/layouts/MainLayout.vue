<template>
  <q-layout view="hHh lpR fFf">

    <q-header class="bg-primary text-white" height-hint="98">

      <q-bar dark class="bg-primary text-white">
      <q-btn dense flat round icon="lens" size="8.5px" color="red" />
      <q-btn dense flat round icon="lens" size="8.5px" color="yellow" />
      <q-btn dense flat round icon="lens" size="8.5px" color="green" />
      <div class="col text-center text-weight-bold">
        Módulo: Totem de Recepcionista Restaurante Siglo XXI
      </div>
    </q-bar>

    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer bordered class="bg-grey-8 text-white">
      <q-toolbar>
              <q-tabs align="center">
                <q-route-tab to="/" label="Principal" />
              </q-tabs>
      </q-toolbar>
    </q-footer>

  </q-layout>
</template>

<script>


export default {
  name: 'MainLayout',
  components: {  },
  data () {
    return {
    }
  }
}
</script>
