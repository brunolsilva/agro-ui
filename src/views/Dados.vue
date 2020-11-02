<template>
  <div class="container">
    <div class="content">
        <div class="row">
            <div class="col-sm-12">
                <div class="card">
                    <div class="card-body">
                        <form @submit.prevent="inclui()">
                            <!-- Linha 1 -->
                            <h4 class="card-title">Liberação de restrições</h4>
                            <div class="msg-error"></div>
                            <hr class="mb-0">
                            <br>
                            <div class="row">
                                <div id="" class="col-md-3 col-sm-3" style="">
                                    <div class="form-group">
                                        <label for="">Número da cotação:</label> <input type="text" class="form-control input-sm" placeholder="Número da cotação" maxlength="300">
                                    </div>
                                </div>
                                <div id="" class="col-md-3 col-sm-3" style="">
                                    <div class="form-group">
                                        <label for="">Produto:</label>
                                        <select type="text" class="form-control input-sm" placeholder="Número da cotação" maxlength="300">
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-12">
                                    <b-button variant="primary" class="center" @click="pesquisar();" size="sm">
                                        <i class="fa fa-search"></i> Pesquisar
                                    </b-button>
                                </div>
                            </div>
                            <br>
                            <h4  v-show="true" class="card-title">Cotações encontradas:</h4>
                            <br>
                            <div class="row">
                                <div class="col-md-12 col-sm-12">
                                    <div class="table-responsive-sm">
                                        <table class="table table-striped table-hover">
                                            <thead>
                                                <tr>
                                                    <th scope="col" style="width: 10%">Nº</th>
                                                    <th scope="col" style="width: 25%">Produto</th>
                                                    <th scope="col" style="width: 25%">Segurado</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr @click="get();">
                                                    <td colspan="">42132131</td>
                                                    <td colspan="">1851</td>
                                                    <td colspan="">33.164.021/0001-00 - TOKIO MARINE SEGURADORA S.A</td>
                                                </tr>
                                                <tr @click="get();">
                                                    <td colspan="">32132132</td>
                                                    <td colspan="">1852</td>
                                                    <td colspan="">33.164.021/0001-00 - TOKIO MARINE SEGURADORA S.A</td>
                                                </tr>
                                                <tr @click="get();">
                                                    <td colspan="">29156165</td>
                                                    <td colspan="">1850</td>
                                                    <td colspan="">33.164.021/0001-00 - TOKIO MARINE SEGURADORA S.A</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
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
   data: function() {
         return {
            b2: true
        }
    },
    methods: {
        pesquisar: function() {
            console.log('oi');
        },
        get: function() {
            this.$router.push('bloqueio');
        }
    }
}
</script>
<style scoped>
td { cursor: pointer; }
</style>