
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
      tables:[
        {
          id:1,
          desc:"hola 1",
          capacidad: 2
        },
        {
          id:2,
          desc:"hola 2",
          capacidad: 3
        },
        {
          id:3,
          desc:"hola 2",
          capacidad: 4
        },
        {
          id:4,
          desc:"hola 2",
          capacidad: 1
        },
        {
          id:5,
          desc:"hola 2",
          capacidad: 5
        },
        {
          id:6,
          desc:"hola 2",
          capacidad: 6
        },
        {
          id:7,
          desc:"hola 2",
          capacidad: 2
        },

      ],
      busy_tables:[],
      waiterName:"",
      waiterSelected:false,
      tableSelected:{},
      removeTableFrom:"",
      addTableTo:"",
    }
  },
  methods: {
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
