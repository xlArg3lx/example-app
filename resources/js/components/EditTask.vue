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
            <div class="card-header">Editar tarea</div>
            <div class="card-body">
                <form class="row g-3" @submit.prevent="updateTask">
                    <div class="col-md-6">
                        <label for="inputEmail4" class="form-label"
                            >¿Que tarea deseas ingresar?</label
                        >
                        <div class="form-floating mb-3">
                            <input
                                type="text"
                                name="task"
                                v-model="formEditTask.task"
                                class="form-control"
                                id="floatingInput"
                            />
                            <label for="floatingInput"
                                >Ingresa nueva tarea</label
                            >
                        </div>
                    </div>
                    <div class="col-6">
                        <label for="inputEmail4" class="form-label"
                            >Seleccione estado</label
                        >
                        <select
                            class="form-select"
                            aria-label="Default select example"
                            v-model="formEditTask.status"
                        >
                            <option value="">Seleccione</option>
                            <option value="FINALIZADO">FINALIZADO</option>
                        </select>
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
                                v-model="formEditTask.description"
                                id="floatingTextarea"
                            ></textarea>
                            <label for="floatingTextarea"
                                >Breve descripción de tu tarea</label
                            >
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
    name: "editar-tarea",
    data() {
        return {
            fullscreenLoading: true,
            formEditTask: {
                task: "",
                description: "",
                status: "",
            },
        };
    },
    mounted() {
        this.mostrarTareas();
    },
    methods: {
        async mostrarTareas() {
            (this.fullscreenLoading = false),
                await this.axios
                    .get(`/api/dailytask/${this.$route.params.id}`)
                    .then((response) => {
                        const { task } = response.data;
                        const { description } = response.data;
                        const { status } = response.data;

                        this.formEditTask.task = task;
                        this.formEditTask.description = description;
                        this.formEditTask.status = status;
                    })
                    .catch((error) => {
                        console.log(error);
                    });
        },

        async updateTask() {
            await this.axios
                .put(
                    `/api/dailytask/${this.$route.params.id}`,
                    this.formEditTask
                )
                .then((response) => {
                    console.log(response);
                    this.$router.push({
                        name: "task",
                    });
                })
                .catch((error) => {
                    this.$message({
                        showClose: true,
                        message: "ERROR.",
                        type: "error",
                    });
                    console.log(error);
                });
        },
    },
};
</script>
