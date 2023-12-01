<template>
    <div class="card">
        <div class="flex flex-column align-items-center">
            <span>Médico</span>
            <img src="layout/images/med.jpg" class="w-5rem h-5rem" />
        </div>
        <div>
            <span>Informações Pessoais:</span>
            <div class="flex flex-column gap-2 pt-4">
                <InputText v-model="value" disabled placeholder="Luca Erichsen" />
                <InputText v-model="value" disabled placeholder="DAL213PD2" />
                <InputText v-model="value" disabled placeholder="Geral" />
            </div>
        </div>
        <div class="pt-5">
            <span>Pacientes:</span>
            <div class="pt-3">
                <DataTable :value="getDoctors" tableStyle="min-width: 50rem">
                    <Column field="name" header="Name"></Column>
                    <Column field="stats" header="Status"></Column>
                    <Column field="date" header="Data"></Column>
                </DataTable>
            </div>
        </div>
         <div class="pt-5">
            <span>Horário de consultas:</span>
            <div class="pt-3">
                <DataTable :value="getDoctors" tableStyle="min-width: 50rem">
                    <Column field="name" header="Name"></Column>
                    <Column field="stats" header="Status"></Column>
                    <Column field="date" header="Data"></Column>
                </DataTable>
            </div>
        </div>
    </div>
</template>

<script>

</script>

<style></style>
