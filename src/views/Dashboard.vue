<template>
    <div>
        <div class="card" style="text-align: center">
            <span>Selecione a aba que deseja ter informações:</span>
            <div class="flex gap-3 pt-3 justify-content-center">
                <div>
                    <div class="pb-4">
                        <Button @click="$router.push('/med')" class="w-10rem h-10rem border-3 flex justify-content-center" outlined>
                            <div class="flex flex-column">
                                <span>Médico</span>
                                <img src="layout/images/med.jpg" alt="" />
                            </div>
                        </Button>
                    </div>
                    <div>
                        <Button @click="$router.push('/farm')" class="w-10rem h-10rem border-3 flex justify-content-center" outlined>
                            <div class="flex flex-column">
                                <span>Farmacêutico</span>
                                <img src="layout/images/farm.jpg" alt="" />
                            </div>
                        </Button>
                    </div>
                </div>
                <div>
                    <div class="pb-4">
                        <Button @click="$router.push('/adm')" outlined class="w-10rem h-10rem border-3 flex justify-content-center">
                            <div class="flex flex-column">
                                <span>Administração</span>
                                <img src="layout/images/adm.jpg" alt="" />
                            </div>
                        </Button>
                    </div>
                    <div>
                        <Button @click="$router.push('/pacientes')" outlined class="w-10rem h-10rem border-3 flex justify-content-center">
                            <div class="flex flex-column">
                                <span>Paciente</span>
                                <img src="layout/images/pill.jpg" alt="" />
                            </div>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style></style>
