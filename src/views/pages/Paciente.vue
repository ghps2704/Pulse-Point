<template>
    <div class="card">
        <div class="flex flex-column align-items-center">
            <span>Paciente</span>
            <img src="layout/images/pill.jpg" class="w-5rem h-5rem" />
        </div>
        <div>
            <span>Informações Pessoais:</span>
            <div v-if="loading">
              <ProgressBar mode="indeterminate" style="height: 6px"></ProgressBar>
            </div>
            <div class="flex flex-column gap-2 pt-4" v-else>
                <InputText v-model="value" disabled :placeholder="response[0].patient_name" />
                <div class="flex gap-2">
                    <InputText v-model="value" class="w-full" disabled :placeholder="response[0].status" />
                    <InputText v-model="value" class="w-full" disabled :placeholder="response[0].last_updated" />
                </div>
                <!-- <InputText v-model="value" disabled placeholder="Pildo@hotmail.com" /> -->
            </div>
        </div>
        <!-- <div class="pt-5">
            <span>Últimas atualizações:</span>
            <div class="pt-3">
                <DataTable :value="getPacient" tableStyle="min-width: 50rem">
                    <Column field="patient_name" header="Name"></Column>
                    <Column field="status" header="Status"></Column>
                    <Column field="last_updated" header="Data"></Column>
                </DataTable>
            </div>
        </div> -->
        <div class="pt-5">
            <span>Consultas recentes:</span>
            <div class="pt-3">
                <DataTable :value="response" tableStyle="min-width: 50rem">
                    <Column field="patient_name" header="Name"></Column>
                    <Column field="status" header="Status"></Column>
                    <Column field="last_updated" header="Data"></Column>
                </DataTable>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      response: null,
      loading: true,
    };
  },
  created(){
    {
        this.fazerRequisicao();
    }
},
methods: {
    fazerRequisicao() {
      const url = 'http://localhost:3000/api/patient-status';
      const config = {
        headers: {
          'Access-Control-Allow-Origin': '*', 
        },
      };

      axios.get(url, config)
        .then(response => {
          this.response = response.data;
        },
        )
        .catch(error => {
          console.error('Erro na solicitação:', error);
        }).finally(() => {
          this.loading = false;
        });
    }
  },
};
</script>

<style></style>
