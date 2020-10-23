
<template>
  <div class="q-pa-md doc-container">

    <div class="row justify-around">

     <TableCard :tables="tables" @asignThisTable="asignTable($event)"
     />
     <WaiterList :addTableTo="addTableTo" :removeTableFrom="removeTableFrom" @readyToServe="serveTable($event)"/>
     <BusyTableCard :busy_tables="busy_tables" @freeThisTable="unasign($event)"
     />

    </div>
  </div>
</template>
<script>
import TableCard from 'components/TableCard.vue'
import WaiterList from 'components/WaiterList.vue'
import BusyTableCard from 'components/BusyTableCard.vue'
import axios from 'axios'
//TODO: comunicarse con el hermano
export default {
  name: 'MainPage',
  components: {
    TableCard,
    WaiterList,
    BusyTableCard

  },
  data(){
    return {
      tables:[],
      busy_tables:[],
      waiterName:"",
      waiterSelected:false,
      tableSelected:{},
      removeTableFrom:"",
      addTableTo:"",
    }
  },
  created( ){
    axios
      .get('http://18.229.150.241:8081/admin/tables/',{ crossDomain: true })
      .then(response => (this.tables = response.data.tables))
      console.log(this.tables)
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
                  waiter:this.waiterName
                }
                this.busy_tables.push(busyTable)
                for (var i = 0; i < this.tables.length; i++) {
                    if(this.tables[i]==table)
                    this.tables.splice(i,1)
                  }
                  this.addTableTo = this.waiterName
                  this.waiterName=""
                  this.waiterSelected=false
                  this.tableSelected={}

             }else{
               this.tableSelected = table;

               }
             },
           unasign(table) {
             this.removeTableFrom = this.waiterName
             this.tables.push(table)
             for (var i = 0; i < this.busy_tables.length; i++) {
               if(this.busy_tables[i]==table)
                this.busy_tables.splice(i,1)
             }

           },
           serveTable(waiterName){
             this.waiterName = waiterName
             this.waiterSelected=true
             if(typeof this.tableSelected.id !== 'undefined' ){
               console.log("asignando tabla "+this.tableSelected.id)
               this.asignTable(this.tableSelected)

             }else{
               console.log("no hay tabla "+this.tableSelected.id)
             this.waiterSelected=true
             }
           },
         }
}


</script>

<style lang="scss">
.colu {
background: #DCDCDC;
border-radius: 10px;
padding: 1%;
}

.doc-container {
background: #F5F5F5;
border-radius: 10px;
padding: 1%;
}
</style>
