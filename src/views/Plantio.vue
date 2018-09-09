<template>
  <div class="container">
    <div class="content">
        <div class="row">
            <div class="col-sm-12">
                <div class="card">
                    <div class="card-body">
                        <form @submit.prevent="inclui()">
                            <!-- Linha 1 -->
                            <h4 class="card-title">Dados do plantio</h4>
                            <div class="msg-error"></div>
                            <hr class="mb-0">
                            <br>
                            <div class="row">
                                <div id="" class="col-md-2 col-sm-2" style="">
                                <div class="form-group">
                                    <label for="">Data prevista do plantio:</label>
                                    <the-mask :mask="['##/##/####']" class="form-control input-sm" placeholder="DD/MM/YYYY" />
                                </div>
                                </div>
                                <div class="col-md-2 col-sm-2">
                                <div class="form-group">
                                    <label for="">Data provável do plantio:</label>
                                    <the-mask :mask="['##/##/####']" class="form-control input-sm" placeholder="DD/MM/YYYY" />
                                </div>
                                </div>
                                <div class="col-md-1 col-sm-1">
                                    <div class="form-group">
                                        <label>Custeio:</label>
                                        <div class="material-switch">
                                            <input id="custeio" name="" type="checkbox"  />
                                            <label class="label-info" for="custeio"></label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-2 col-sm-2">
                                    <div class="form-group">
                                        <label for="">Modalidade:</label>
                                        <select class="form-control input-sm">
                                            <option>Selecione</option>
                                            <option>Custeio</option>
                                            <option>Produtividade</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-md-2 col-sm-2">
                                    <div class="form-group">
                                        <label for="">Cultura:</label>
                                        <select class="form-control input-sm">
                                            <option>Selecione</option>
                                            <option>Morango</option>
                                            <option>Uva</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-md-2 col-sm-2">
                                    <div class="form-group">
                                        <label for="">Produtividade média:</label>
                                        <input type="text" class="form-control input-sm" placeholder="" maxlength="300">
                                    </div>
                                </div>
                                <div class="col-md-1 col-sm-1">
                                    <div class="form-group">
                                        <label for="">Irrigada:</label>
                                        <div class="material-switch">
                                            <input id="irrigada" name="" type="checkbox"  />
                                            <label class="label-info" for="irrigada"></label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Linha 2 -->
                            <div class="row">
                                <div id="" class="col-md-2 col-sm-2" style="">
                                    <div class="form-group">
                                        <label for="">Nível de cobertura:</label>
                                        <select class="form-control input-sm">
                                            <option>Selecione</option>
                                            <option>50%</option>
                                            <option>60%</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-md-2 col-sm-2">
                                    <div class="form-group">
                                        <label for="">Possui outros seguros na mesma área:</label>
                                        <div class="material-switch">
                                            <input id="seguros" name="" type="checkbox"  />
                                            <label class="label-info" for="seguros"></label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-2 col-sm-2">
                                   <div class="form-group">
                                        <label for="">Cultura anterior:</label>
                                        <select class="form-control input-sm">
                                            <option>Selecione</option>
                                            <option>Milho</option>
                                            <option>Soja</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-md-1 col-sm-1">
                                    <div class="form-group">
                                        <label for="">Lavoura plantada:</label>
                                        <div class="material-switch">
                                            <input id="lavouraPlantada" name="" type="checkbox"  />
                                            <label class="label-info" for="lavouraPlantada"></label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-1 col-sm-1">
                                    <div class="form-group">
                                        <label for="">Controle fitossanitário:</label> 
                                        <div class="material-switch">
                                            <input id="controleFitossanitario" name="" type="checkbox"  />
                                            <label class="label-info" for="controleFitossanitario"></label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-2 col-sm-2">
                                    <div class="form-group">
                                        <label for="">Cultivares:</label> 
                                        <select class="form-control input-sm">
                                            <option>Selecione</option>
                                            <option>Grupo 1</option>
                                            <option>Grupo 2</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <br>
                            <h4 class="card-title">Complemento</h4>
                            <hr class="mb-0">
                            <br>
                            
                            <!-- Linha Propriedade -->
                            <div class="row">
                                 <div id="" class="col-md-2 col-sm-2" style="">
                                    <div class="form-group">
                                        <label for="">Área total:</label>
                                        <input type="text" class="form-control input-sm" placeholder="Área total" maxlength="300">
                                    </div>
                                </div>
                                <div id="" class="col-md-2 col-sm-2" style="">
                                    <div class="form-group">
                                        <label for="">Área segurada:</label>
                                        <input type="text" class="form-control input-sm" placeholder="Área segurada" maxlength="300">
                                    </div>
                                </div>
                                <div id="" class="col-md-2 col-sm-2" style="">
                                    <div class="form-group">
                                        <label for="">Textura:</label>
                                        <select class="form-control input-sm">
                                            <option>Selecione</option>
                                            <option>Tipo 1</option>
                                            <option>Tipo 2</option>
                                        </select>
                                    </div>
                                </div>
                                <div id="" class="col-md-2 col-sm-2" style="">
                                    <div class="form-group">
                                        <label for="">Tipo de semente:</label>
                                        <select class="form-control input-sm">
                                            <option>Selecione</option>
                                            <option>Certificada</option>
                                            <option>Própria</option>
                                        </select>
                                    </div>
                                </div>
                                <div id="" class="col-md-2 col-sm-2" style="">
                                    <div class="form-group">
                                        <label for="">Técnica de plantio:</label>
                                        <select class="form-control input-sm">
                                            <option>Selecione</option>
                                            <option>Convencional</option>
                                            <option>Direto</option>
                                        </select>
                                    </div>
                                </div>
                                <div id="" class="col-md-2 col-sm-2" style="">
                                    <div class="form-group">
                                        <label for="">Valor Pretendido:</label>
                                        <input type="text" class="form-control input-sm" placeholder="Valor pretendido" maxlength="300">
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div id="" class="col-md-2 col-sm-2" style="">
                                    <div class="form-group">
                                        <label for="">Custo estimado/Ha:</label>
                                        <input type="text" class="form-control input-sm" placeholder="Custo estimado" maxlength="300">
                                    </div>
                                </div>
                                <div class="col-md-1 col-sm-1">
                                    <div class="form-group">
                                        <label for="">Subvenção estadual:</label> 
                                        <div class="material-switch">
                                            <input id="subvencaoEstadual" name="" type="checkbox"  />
                                            <label class="label-info" for="subvencaoEstadual"></label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-1 col-sm-1">
                                    <div class="form-group">
                                        <label for="">Subvenção federal:</label> 
                                        <div class="material-switch">
                                            <input id="subvencaoFederal" name="" type="checkbox"  />
                                            <label class="label-info" for="subvencaoFederal"></label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                             <br>
                            <h4 class="card-title">Coberturas</h4>
                            <br>
                            
                            <!-- Linha Coberturas -->
                            <div class="row">
                                <div class="col-md-12 col-sm-12">
                                    <div class="table-responsive-sm">
                                        <table class="table table-striped">
                                            <thead>
                                                <tr>
                                                    <th scope="col" style="width: 8.33%"></th>
                                                    <th scope="col" style="width: 66.66%">Cobertura</th>
                                                    <th scope="col" style="width: 25%">LMI</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope="row" colspan="">
                                                        <div class="material-switch">
                                                            <input id="cobertura0" name="" type="checkbox" />
                                                            <label class="label-info" for="cobertura0"></label>
                                                        </div>
                                                    </th>
                                                    <td colspan="">Incêndio</td>
                                                    <td colspan="">
                                                        <input type="text" class="form-control input-sm" placeholder="LMI" maxlength="300">
                                                    </td>
                                                </tr>
                                                 <tr>
                                                    <th scope="row" colspan="">
                                                        <div class="material-switch">
                                                            <input id="cobertura1" name="" type="checkbox" />
                                                            <label class="label-info" for="cobertura1"></label>
                                                        </div>
                                                    </th>
                                                    <td colspan="">Granizo</td>
                                                    <td colspan="">
                                                        <input type="text" class="form-control input-sm" placeholder="LMI" maxlength="300">
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                 </div>
                            </div>

                            <div class="row">
                                <div class="col-sm-12">
                                     <router-link :to="{ name : 'dados' }">
                                        <b-button variant="primary" class="float-left" size="sm">
                                            <i class="fa fa-arrow-left"></i> Voltar
                                        </b-button>
                                    </router-link>
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