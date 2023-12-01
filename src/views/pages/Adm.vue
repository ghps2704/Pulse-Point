<template>
    <div class="card">
        <div class="flex flex-column align-items-center">
            <span>Administração</span>
            <img src="layout/images/adm.jpg" class="w-5rem h-5rem" />
        </div>
        <div>
            <span>Informações Pessoais:</span>
            <div v-if="loading">
              <ProgressBar mode="indeterminate" style="height: 6px"></ProgressBar>
            </div>
            <div class="flex flex-column gap-2 pt-4" v-else>
                <InputText v-model="value" disabled :placeholder="response[0].name" />
                <InputText v-model="value" disabled :placeholder="response[0].contact_info" />
            </div>
        </div>
        <div class="pt-5">
            <span>Informações do sistema:</span>
            <div class="pt-3">
                <DataTable :value="response" tableStyle="min-width: 50rem">
                    <Column field="name" header="Administradores"></Column>
                    <Column field="contact_info" header="Informações"></Column>
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
      const url = 'http://localhost:3000/api/admins';
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
