<template>
  <div>
    <q-card style="width: 100% "
      v-for="reservation in reservations.reservations"
      :key="reservation.customerId"
    >       
       <q-card-section class="items-center no-wrap">
          <div>
            <div class="text-center">Nombre: {{reservation.name}}</div>
            <div class="text-center">ID Cliente: {{reservation.userId}}</div>
             <div class="text-center">Hora: {{reservation.reservationTime}}</div>
           
          </div>
       </q-card-section>

      <q-separator />

      <q-card-actions horizontal>
        <q-btn flat color="green" @click="asign(table)" >Reservar</q-btn>
         <q-btn flat color="red" @click="asign(table)" >Eliminar</q-btn>

      </q-card-actions>


    </q-card>
</div>

</template>


<script>

import io from 'socket.io-client';

export default {
  name: 'ReservationCard',
  props: {
    reservations: {}
  },
  data () {
    return {
       socket: io("http://localhost:3001"),
       seamless: false
    }
  },
  computed: {
    contentSize () {
      return this.moreContent ? 150 : 5
    }
  },
  methods: {
    asign(table){
      this.$emit('asignThisTable',table)

    }
  },
  created(){
    console.log(this.reservations)
  },
  mounted() {
      this.socket.on('newReservation', (data) => {
       console.log("new reservation PogChamp")
       console.log(data);
      });
    }
  }
</script>
