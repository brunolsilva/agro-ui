<template>
  <div class="container">
    <div class="content">
        <div class="row">
            <div class="col-sm-12">
                <div class="card">
                    <div class="card-body">
                        <form @submit.prevent="geraCookie()">
                            <!-- Linha 1 -->
                            <h4 class="card-title">Login Dev</h4>
                            <hr class="mb-0">
                            <br>
                            <div class="row">
                                <div id="" class="col-md-2 col-sm-2" style="">
                                    <div class="form-group">
                                        <label for="">Tipo portal:</label>
                                        <select class="form-control input-sm" v-model="portal">
                                            <option></option>
                                            <option value="CORRETOR">Corretor</option>
                                            <option value="SISTEMAS">Sistemas</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-md-3 col-sm-3">
                                    <div class="form-group">
                                        <label for="">CPF:</label>
                                        <the-mask :mask="['###.###.###-##']" class="form-control input-sm" placeholder="CPF" v-model="cpf" />
                                    </div>
                                </div>
                                <div class="col-md-2 col-sm-2">
                                    <div class="form-group">
                                        <label for="">Usuário:</label>
                                        <input type="text" class="form-control input-sm" placeholder="Usuário" maxlength="10" v-model="usuario" />
                                    </div>
                                </div>
                                <div class="col-md-2 col-sm-2">
                                    <div class="form-group">
                                        <label for="">Parceiro primário:</label>
                                        <select class="form-control input-sm" v-model="parceiroPrimario">
                                            <option></option>
                                            <option value=""></option>
                                            <option value=""></option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-md-2 col-sm-2">
                                    <div class="form-group">
                                        <label for="">Parceiro secundário:</label>
                                        <select class="form-control input-sm" v-model="parceiroSecundario">
                                            <option></option>
                                            <option value=""></option>
                                            <option value=""></option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-12">
                                   <input type="submit" value="Login">
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
export default {
    data() {
        return {
            portal: 'SISTEMAS',
            cpf: null,
            parceiroPrimario: null,
            parceiroSecundario: null,
            usuario: null
        }
    },

    methods: {
        geraCookie() {
            if(this.portal === 'SISTEMAS') {
                this.$cookie.set('PORTAL_COOKIE', "TIPO_SITE=SISTEMAS", {expires: 1, domain: 'localhost'});
            } else {
                let perfil = "PERFIL=Portal Corretor";
                let idPNPrimario = "ID_PARCEIRO_NEGOCIO_PRIMARIO=";
                let codigoPNPrimario = "CODIGO_PARCEIRO_NEGOCIO_PRIMARIO=";
                let nomePNPrimario = "NOME_PARCEIRO_NEGOCIO_PRIMARIO=";
                let tipoPNPrimario = "TIPO_PARCEIRO_NEGOCIO_PRIMARIO=";

                let prepostoPNPrimario = "PREPOSTO_PARCEIRO_NEGOCIO_PRIMARIO=";
                let indicadorVendaPNPrimario = "INDICADORVENDA_PARCEIRO_NEGOCIO_PRIMARIO=";

                let idPNSecundario = "ID_PARCEIRO_NEGOCIO_SECUNDARIO=";
                let codigoPNSecundario = "CODIGO_PARCEIRO_NEGOCIO_SECUNDARIO=";
                let nomePNSecundario = "NOME_PARCEIRO_NEGOCIO_SECUNDARIO=";
                let tipoPNSecundario = "TIPO_PARCEIRO_NEGOCIO_SECUNDARIO=";

                this.$cookie.set('PORTAL_COOKIE', 'TIPO_SITE=CORRETOR', {expires: 1, domain: 'localhost'});
            }
        }
    }
}
</script>
