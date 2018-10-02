<template>
  <div class="container">
    <div class="content">
        <div class="row">
            <div class="col-sm-12">
                <div class="card">
                    <div class="card-body">
                        <form @submit.prevent="inclui()">
                            <!-- Linha 1 -->
                            <h4 class="card-title">Dados básicos</h4>
                            <div class="msg-error"></div>
                            <hr class="mb-0">
                            <br>
                            <div class="row">
                                <div id="" class="col-md-2 col-sm-2" style="">
                                <div class="form-group">
                                    <label for="">CPF/CNPJ:</label>
                                    <the-mask :mask="['###.###.###-##', '##.###.###/####-##']" class="form-control input-sm" placeholder="CPF/CNPJ" />
                                </div>
                                </div>
                                <div class="col-md-6 col-sm-6">
                                <div class="form-group">
                                    <label for="">Segurado:</label> <input type="text" class="form-control input-sm" placeholder="Nome" maxlength="300">
                                </div>
                                </div>
                                <div class="col-md-2 col-sm-2">
                                <div class="form-group">
                                    <label for="">Início Vigência:</label>
                                    <the-mask :mask="['##/##/####']" class="form-control input-sm" placeholder="DD/MM/YYYY" />
                                </div>
                                </div>
                                <div class="col-md-2 col-sm-2">
                                <div class="form-group">
                                    <label for="">Fim vigência:</label>
                                    <the-mask :mask="['##/##/####']" class="form-control input-sm" placeholder="DD/MM/YYYY" />
                                </div>
                                </div>
                            </div>

                            <!-- Linha 2 -->
                            <div class="row">
                                <div id="" class="col-md-2 col-sm-2" style="">
                                    <div class="form-group">
                                        <label for="">CEP:</label>
                                        <the-mask :mask="['#####-###']" class="form-control input-sm" placeholder="CEP" />
                                    </div>
                                </div>
                                <div class="col-md-6 col-sm-6">
                                    <div class="form-group">
                                        <label for="">Logradouro:</label> <input type="text" class="form-control input-sm" placeholder="Logradouro" maxlength="300">
                                    </div>
                                </div>
                                <div class="col-md-2 col-sm-2">
                                    <div class="form-group">
                                        <label for="">Número:</label> <input type="text" class="form-control input-sm" placeholder="Número" maxlength="300">
                                    </div>
                                </div>
                                <div class="col-md-2 col-sm-2">
                                    <div class="form-group">
                                        <label for="">Complemento:</label> <input type="text" class="form-control input-sm" placeholder="Complemento" maxlength="300">
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-4 col-sm-4">
                                    <div class="form-group">
                                        <label for="">Cidade:</label> <input type="text" class="form-control input-sm" placeholder="Cidade" maxlength="300">
                                    </div>
                                </div>
                                <div class="col-md-2 col-sm-2">
                                    <div class="form-group">
                                        <label for="">Estado:</label> 
                                         <select class="form-control input-sm">
                                            <option></option>
                                            <option>PR</option>
                                            <option>SP</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <br>
                            <h4 class="card-title">Dados da propriedade</h4>
                            <hr class="mb-0">
                            <br>
                            
                            <!-- Linha Propriedade -->
                            <div class="row">
                                 <div id="" class="col-md-12 col-sm-12" style="">
                                    <div class="form-group">
                                        <label for="">Nome da propriedade:</label>
                                        <input type="text" class="form-control input-sm" placeholder="Propriedade" maxlength="300">
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div id="" class="col-md-2 col-sm-2" style="">
                                    <div class="form-group">
                                        <label for="">CEP:</label>
                                         <the-mask :mask="['#####-###']" class="form-control input-sm" placeholder="CEP" />
                                    </div>
                                </div>
                                <div class="col-md-6 col-sm-6">
                                    <div class="form-group">
                                        <label for="">Logradouro:</label> <input type="text" class="form-control input-sm" placeholder="Logradouro" maxlength="300">
                                    </div>
                                </div>
                                <div class="col-md-2 col-sm-2">
                                    <div class="form-group">
                                        <label for="">Número:</label> <input type="text" class="form-control input-sm" placeholder="Número" maxlength="300">
                                    </div>
                                </div>
                                <div class="col-md-2 col-sm-2">
                                    <div class="form-group">
                                        <label for="">Complemento:</label> <input type="text" class="form-control input-sm" placeholder="Complemento" maxlength="300">
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-4 col-sm-4">
                                    <div class="form-group">
                                        <label for="">Cidade:</label> <input type="text" class="form-control input-sm" placeholder="Cidade" maxlength="300">
                                    </div>
                                </div>
                                <div class="col-md-2 col-sm-2">
                                    <div class="form-group">
                                        <label for="">Estado:</label> 
                                         <select class="form-control input-sm">
                                            <option></option>
                                            <option>PR</option>
                                            <option>SP</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-sm-12">
                                    <router-link :to="{ name : 'plantio' }">
                                        <b-button variant="primary" class="float-right" size="sm">
                                            <i class="fa fa-arrow-right"></i> Avançar
                                        </b-button>
                                    </router-link>
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
        this.$cookie.set('test', 'Hello world!', 1);
    }
}
</script>
