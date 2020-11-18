<template>

  <div class="q-pa-md doc-container">
    <div class="text-center row justify-around banner-row">
      <q-banner rounded class="banner-tables bg-blue-5 text-white">
      Mesas Libres
      </q-banner>

      <q-banner rounded class="banner-waiters bg-cyan-5 text-white">
      Meseros
      </q-banner>

      <q-banner rounded class="banner-busy bg-red-5 text-white">
      Mesas Ocupadas
      </q-banner>
    </div>

    <div class="row justify-around">

      <div class="mydiv col-3 bg-grey-4">
        <TableCard :tables="free_tables" @asignThisTable="asignTable($event)"
        />
      </div>

      <div class="mydiv col-3 bg-grey-4">
        <WaiterList :waiters="waiters" :addTableTo="addTableTo" :removeTableFrom="removeTableFrom" @readyToServe="serveTable($event)"/>
      </div>

      <div class="mydiv col-3 bg-grey-4">
        <BusyTableCard :busy_tables="busy_tables" @freeThisTable="unasign($event)"
        />  
     </div>

    </div>

     <div class="row reservation-div justify-around">
      <ReservationCard :reservations="reservations"/>
      </div>
    </div>
  
</template>
<script>
import TableCard from 'components/TableCard.vue'
import WaiterList from 'components/WaiterList.vue'
import BusyTableCard from 'components/BusyTableCard.vue'
import ReservationTableCard from 'components/ReservationCard.vue'
import axios from 'axios'
import ReservationCard from '../components/ReservationCard.vue'
//TODO: comunicarse con el hermano
export default {
  name: 'MainPage',
  components: {
    TableCard,
    WaiterList,
    BusyTableCard,
    ReservationCard

  },
  data(){
    return {
      tables:[],
      waiters:[],
      free_tables:[],
      busy_tables:[],
      reservations:[],
      waiter:"",
      waiterSelected:false,
      tableSelected:{},
      removeTableFrom:"",
      addTableTo:"",
    }
  },
  created( ){
    axios.all([
      axios.get('http://18.229.150.241:8081/admin/tables/',{ crossDomain: true }),
      axios.get('http://18.229.150.241:8081/admin/waiters/',{ crossDomain: true }),
      axios.get('http://localhost:8082/reservations/today/',{ crossDomain: true })
      
    ])  
    .then(axios.spread((tableRes, waiterRes,resRes) => {
        this.tables = tableRes.data.tables,
        this.waiters=waiterRes.data,
        this.reservations=resRes.data,  
        this.tables.forEach(table => {
          if(table.waiterId === null){
            this.free_tables.push(table)
          } else{
           this.waiters.forEach(waiter => {  
             if(waiter.id === table.waiterId){

              table.waiter = waiter.name
              this.busy_tables.push(table)
               
             }
           });
            
          }
        })
      }))
    },
  methods: {
    //TODO: Implement API communication using AXIOS
           asignTable(table, reservation) {
             if(this.waiterSelected)
              {
                var busyTable=
                {
                  id:table.id,
                  isReserved:reservation,
                  waiter:this.waiter.name +" "+this.waiter.lastName
                }
                var updateTable=
                {
                  customerId:table.customerId,
                  waiterId:this.waiter.id,
                  
                }
                this.busy_tables.push(busyTable)
                console.log(this.free_tables)
                for (var i = 0; i < this.tables.length; i++) {
                    if(this.free_tables[i]==table)
                    this.free_tables.splice(i,1)
                  }
                  axios
                  .put('http://18.229.150.241:8081/admin/tables/'+busyTable.id,updateTable)
                  this.addTableTo = this.waiter
                  this.waiter=""
                  this.waiterSelected=false
                  this.tableSelected={}

             }else{
               this.tableSelected = table;

               }
             },
           unasign(table) {
             this.removeTableFrom = this.waiter
             table.waiterId=null
             table.customerId=null
             this.free_tables.push(table)
             axios
              .put('http://18.229.150.241:8081/admin/tables/'+table.id,table)
             for (var i = 0; i < this.busy_tables.length; i++) {
               if(this.busy_tables[i]==table)
                this.busy_tables.splice(i,1)
             }

           },
           serveTable(waiter){
             this.waiter = waiter
             this.waiterSelected=true
             if(typeof this.tableSelected.id !== 'undefined' ){
               //console.log("asignando mesa "+this.tableSelected.id)
               this.asignTable(this.tableSelected)

             }else{
               //console.log("no hay tabla "+this.tableSelected.id)
             this.waiterSelected=true
             }
           },
         }
}


</script>