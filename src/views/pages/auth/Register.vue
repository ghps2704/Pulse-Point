<template>
    <div class="surface-ground flex align-items-center justify-content-center min-h-screen min-w-screen overflow-hidden">
        <div class="flex flex-column align-items-center justify-content-center">
            <img :src="logoUrl" alt="Pulse Point logo" class="mb-5 w-6rem flex-shrink-0" />
            <div style="border-radius: 56px; padding: 0.3rem; background: linear-gradient(180deg, red 10%, rgba(33, 150, 243, 0) 30%)">
                <div class="w-full surface-card py-8 px-5 sm:px-8" style="border-radius: 53px">
                    <div class="text-center mb-5">
                        <img src="/layout/images/userRed.jpg" alt="Image" height="50" class="mb-3" />
                        <div class="text-900 text-3xl font-medium mb-3">Vamos fazer seu cadastro?</div>
                        <span class="text-600 font-medium">Por favor, Informe seus dados:</span>
                    </div>

                    <div>
                        <label for="email1" class="block text-900 text-xl font-medium mb-2">Nome</label>
                        <InputText id="email1" type="text" placeholder="Insira seu nome completo" class="w-full md:w-30rem mb-5" style="padding: 1rem" v-model="userData.name" />
                        <label for="email1" class="block text-900 text-xl font-medium mb-2">Email</label>
                        <InputText id="email1" type="text" placeholder="Insira seu email" class="w-full md:w-30rem mb-5" style="padding: 1rem" v-model="userData.email" />

                        <label for="email1" class="block text-900 text-xl font-medium mb-2">CPF</label>
                        <InputText id="email1" type="text" placeholder="Insira seu CPF" class="w-full md:w-30rem mb-5" style="padding: 1rem" v-model="userData.document" />
                        <label for="email1" class="block text-900 text-xl font-medium mb-2">Data de nascimento</label>
                        <InputText id="email1" type="text" placeholder="00/00/0000" class="w-full md:w-30rem mb-5" style="padding: 1rem" v-model="userData.date" />
                        <label for="email1" class="block text-900 text-xl font-medium mb-2">Endereço</label>
                        <InputText id="email1" type="text" placeholder="Insira seu endereço" class="w-full md:w-30rem mb-5" style="padding: 1rem" v-model="userData.adress" />

                        <label for="email1" class="block text-900 text-xl font-medium mb-2">Celular</label>
                        <InputText id="email1" type="text" placeholder="Insira seu celular" class="w-full md:w-30rem mb-5" style="padding: 1rem" v-model="userData.phone" />

                        <label for="password1" class="block text-900 font-medium text-xl mb-2">Senha</label>
                        <Password id="password1" v-model="userData.password" placeholder="Insira sua senha" :toggleMask="true" class="w-full mb-3" inputClass="w-full" :inputStyle="{ padding: '1rem' }"></Password>

                        <div class="flex align-items-center justify-content-between mb-5 gap-5">
                            <div class="flex align-items-center">
                                <Checkbox v-model="checked" id="rememberme1" binary class="mr-2"></Checkbox>
                                <label for="rememberme1">Lembrar</label>
                            </div>
                            <a class="font-medium no-underline ml-2 text-right cursor-pointer" style="color: red">Esqueceu a senha?</a>
                        </div>
                        <Button label="Registrar" class="w-full p-3 text-xl bg-red-700 border-none"></Button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            userData: {
                name: '',
                document: '',
                adress: '',
                phone: '',
                date: '',
                email: '',
                password: ''
            },
            checked: false,
            logoUrl: 'layout/images/logo-white.svg'
        };
    },

    methods: {
        async enviarPost() {
            try {
                // Substitua 'sua_url_aqui' pela URL real para a qual você deseja fazer a solicitação POST
                const response = await axios.post('sua_url_aqui', {
                    // Adicione os dados que você deseja enviar no corpo da solicitação
                    key1: 'value1',
                    key2: 'value2'
                });
                console.log('Resposta do servidor:', response.data);
            } catch (error) {
                console.error('Erro ao fazer a solicitação da criação:', error);
            }
        }
    }
};
</script>

<style></style>
