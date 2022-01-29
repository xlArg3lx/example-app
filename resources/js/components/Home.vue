<template>
    <div class="container mt-4">
        <div class="row">
            <div class="col text-center">
                <h3>
                    Prueba conocimiento
                    <span class="badge bg-danger">CONSWARE</span>
                </h3>
            </div>
        </div>
        <div class="card" v-loading.fullscreen.lock="fullscreenLoading">
            <div class="card-header">Ingresar nueva tarea</div>
            <div class="card-body">
                <form class="row g-3" @submit.prevent="createTaks">
                    <div class="col-md-6">
                        <label for="inputEmail4" class="form-label"
                            >¿Que tarea deseas ingresar?</label
                        >
                        <div class="form-floating mb-3">
                            <input
                                type="text"
                                name="task"
                                v-model="formTask.task"
                                class="form-control"
                                id="floatingInput"
                            />
                            <label for="floatingInput">Ingresa nueva tarea</label>
                        </div>
                    </div>
                    <div class="col-6">
                        <label for="inputEmail4" class="form-label"
                            >Descripción</label
                        >
                        <div class="form-floating">
                            <textarea
                                class="form-control"
                                name="description"
                                placeholder="Leave a comment here"
                                v-model="formTask.description"
                                id="floatingTextarea"
                            ></textarea>
                            <label for="floatingTextarea">Breve descripción de tu tarea</label>
                        </div>
                    </div>
                    <div class="col-12">
                        <button type="submit" class="btn btn-danger">
                            <i class="fas fa-save"></i>
                            Guardar tarea
                        </button>
                        <router-link
                            class="btn btn-outline-secondary"
                            :to="{ name: 'task' }"
                        >
                            <i class="fas fa-arrow-circle-left"></i>
                            Regresar
                        </router-link>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "crear-tarea",
    data() {
        return {
            fullscreenLoading: false,
            formTask: {
                taks: "",
                description: "",
            },
        };
    },
    methods: {
        async createTaks() {
            this.fullscreenLoading = true;
            await this.axios
                .post(`/api/dailytask`, this.formTask)
                .then((response) => {
                    this.$message({
                        showClose: true,
                        message: "Tarea creada con exito.",
                        type: "success",
                    });
                    this.$router.push("/task");
                })
                .catch((error) => {
                    this.$message({
                        showClose: true,
                        message: "Error al intentar tarea.",
                        type: "error",
                    });
                    this.fullscreenLoading = false,
                    console.log(error);
                });
        },
    },
};
</script>
