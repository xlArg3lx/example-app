<template>
    <div v-loading.fullscreen.lock="fullscreenLoading">
        <br /><br /><br /><br />
        <div class="text-center">
            <h6>REGISTRO DE TAREAS DIARIAS</h6>
            <span>INICIO DE SESIÓN</span>
        </div>
        <div class="container card w-50">
            <div class="card-body row align-items-center">
                <form>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label"
                            >Correo electrónico</label
                        >
                        <input
                            type="email"
                            class="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            v-model="data.email"
                        />
                        <div id="emailHelp" class="form-text">
                            Nunca compartiremos tu correo electrónico con nadie
                            más.
                        </div>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label"
                            >Contraseña</label
                        >
                        <input
                            type="password"
                            class="form-control"
                            id="exampleInputPassword1"
                            v-model="data.password"
                        />
                    </div>
                    <div class="d-grid gap-2">
                        <button
                            @click.prevent="login"
                            type="submit"
                            :disabled="isLogging"
                            :loading="isLogging"
                            class="btn btn-success"
                        >
                            <b>
                                {{
                                    isLogging
                                        ? "Iniciando sesión..."
                                        : "Iniciar Sesion"
                                }}
                            </b>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            fullscreenLoading: false,
            data: {
                email: "",
                password: "",
            },
            isLogging: false,
        };
    },
    methods: {
        async login() {
            if (this.data.email.trim() == "")
                return console.log("Email is required");
            if (this.data.password.trim() == "")
                console.log("Password is required");
            if (this.data.password.length < 6)
                console.log("Incorrect login details");
            this.isLogging = true;
            const res = await this.axios.post(`/api/admin_login`, this.data);
            if (res.status === 200) {
                // this.fullscreenLoading = true;
                window.location = "/";
            } else {
                if (res.status === 401) {
                } else if (res.status == 422) {
                    for (let i in res.data.errors) {
                        console.log("Invalid credential");
                    }
                } else {
                    this.swr();
                }
            }
            this.isLogging = false;
        },
    },
};
</script>
