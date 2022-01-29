<template>
    <div class="container-fluid">
        <br />
        <!-- Page Heading -->
        <!--Criterios de busqueda -->
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">
                    <h4>
                        Registro total
                        <span class="badge bg-secondary">TAREAS</span>
                    </h4>
                </h5>
                <label for="inputPassword5" class="form-label">Buscar</label>
                <div class="row g-3">
                    <div class="col">
                        <input
                            v-model="filBqTask.task"
                            @keyup.enter="getTask"
                            type="text"
                            class="form-control"
                            placeholder="Buscar tarea"
                        />
                    </div>
                    <div class="col">
                        <button
                            type="button"
                            class="form-control btn btn-danger"
                            @click.prevent="getTask"
                            v-loading.fullscreen.lock="fullscreenLoading"
                        >
                            <i class="fa fa-search"> </i>
                            Buscar
                        </button>
                    </div>
                    <div class="col">
                        <button
                            type="button"
                            @click.prevent="limpiarCriteriosBsq"
                            class="form-control btn btn-outline-secondary"
                        >
                            <i class="fa fa-eraser"> </i>
                            Limpiar
                        </button>
                    </div>
                    <div class="col">
                        <router-link
                            class="btn btn-outline-danger"
                            :to="{ name: 'home' }"
                        >
                            <i class="fas fa-plus-circle"></i>
                            Agregar tarea
                        </router-link>
                    </div>
                </div>
                <div id="passwordHelpBlock" class="form-text">
                    Debes ingresar la información del documento el cual deseas
                    buscar, el sistema te arrojará resultados con las
                    coincidencias mas exactas.
                </div>
            </div>
        </div>
        <br />

        <template v-if="listTaskPaginate.length">
            <!--Tabla de registros -->
            <table
                ref="tableUsers"
                class="table table-striped table-hover text-center"
            >
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">TAREA</th>
                        <th scope="col">STATUS</th>
                        <th scope="col">DESCRIPCION</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in listTaskPaginate" :key="index">
                        <td v-text="item.id"></td>
                        <td v-text="item.task"></td>
                        <td v-text="item.status"></td>
                        <td v-text="item.description"></td>
                        <td>
                            <router-link
                                class="btn btn-outline-danger"
                                :to="{
                                    name: 'editTask',
                                    params: { id: item.id },
                                }"
                            >
                                <i class="fas fa-edit"></i>
                            </router-link>
                        </td>
                    </tr>
                </tbody>
            </table>
            <!--Paginación -->
            <nav aria-label="Page navigation example">
                <ul class="pagination pagination-sm justify-content-center">
                    <li class="page-item" v-if="pageNumber > 0">
                        <a class="page-link" @click.prevent="prevPage"
                            >Anterior</a
                        >
                    </li>
                    <li
                        class="page-item"
                        v-for="(page, index) in pagesList"
                        :key="index"
                        :class="[page == pageNumber ? 'active' : '']"
                    >
                        <a class="page-link" @click.prevent="selectPage(page)">
                            {{ page + 1 }}
                        </a>
                    </li>
                    <li class="page-item" v-if="pageNumber < pageCount - 1">
                        <a class="page-link" @click.prevent="nextPage"
                            >Siguiente</a
                        >
                    </li>
                </ul>
            </nav>
        </template>
        <template v-else>
            <el-alert
                title="Lo sentimos, no encontramos información"
                type="warning"
                show-icon
                :closable="false"
            >
            </el-alert>
        </template>
    </div>
</template>

<script>
export default {
    mounted() {
        this.getTask();
    },
    data() {
        return {
            filBqTask: {
                task: "",
            },
            listTask: [],
            fullscreenLoading: false,
            pageNumber: 0,
            perPage: 5,
        };
    },
    computed: {
        //Obtener el número de paginas
        pageCount() {
            let a = this.listTask.length,
                b = this.perPage;
            return Math.ceil(a / b);
        },
        listTaskPaginate() {
            let inicio = this.pageNumber * this.perPage,
                fin = inicio + this.perPage;
            return this.listTask.slice(inicio, fin);
        },
        pagesList() {
            let a = this.listTask.length,
                b = this.perPage;
            let pageCount = Math.ceil(a / b);
            let count = 0,
                pagesArray = [];

            while (count < pageCount) {
                pagesArray.push(count);
                count++;
            }
            return pagesArray;
        },
    },
    methods: {
        limpiarCriteriosBsq() {
            this.filBqTask.task = "";
        },
        limpiarBandejaUsuarios() {
            this.listTask = [];
        },
        async getTask() {
            this.fullscreenLoading = true;
            var url = `api/dailytask`;
            await axios
                .get(url, {
                    params: {
                        task: this.filBqTask.task,
                    },
                })
                .then((response) => {
                    this.inicializarPaginacion();
                    this.listTask = response.data;
                    this.fullscreenLoading = false;
                });
        },
        netxPage() {
            this.pageNumber++;
        },
        prevPage() {
            this.pageNumber--;
        },
        selectPage(page) {
            this.pageNumber = page;
        },
        inicializarPaginacion() {
            this.pageNumber = 0;
        },
    },
};
</script>
