<template>
    <div class="card">
        <div class="flex flex-column align-items-center">
            <span>Farmacêutico</span>
            <img src="layout/images/farm.jpg" class="w-5rem h-5rem" />
        </div>
        <div>
            <span>Informações Pessoais:</span>
            <div class="flex flex-column gap-2 pt-4">
                <InputText v-model="value" disabled placeholder="Luca Erichsen" />
                <InputText v-model="value" disabled placeholder="Pildo" />
            </div>
        </div>
        <div class="pt-5">
            <span>Informações do sistema:</span>
            <div class="pt-3">
                <DataTable :value="pacientes" tableStyle="min-width: 50rem">
                    <Column field="name" header="Registro de pacientes"></Column>
                    <Column field="date" header="Registro de Remédios"></Column>
                </DataTable>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            pacientes: [
                {
                    name: 'João',
                    stats: 'Em espera',
                    date: '12/12/2021'
                },
                {
                    name: 'Maria',
                    stats: 'Em espera',
                    date: '12/12/2021'
                },
                {
                    name: 'José',
                    stats: 'Em espera',
                    date: '12/12/2021'
                }
            ]
        };
    }
};
</script>

<style></style>
