<template>
  <div class="container">
    <div class="content">
        <div class="row">
            <div class="col-sm-12">
                <div class="card">
                    <div class="card-body">
                        <form @submit.prevent="inclui()">
                            <!-- Linha 1 -->
                            <h4 class="card-title">Cotação 42132131 - 33.164.021/0001-00 - TOKIO MARINE SEGURADORA S.A</h4>
                            <div class="msg-error"></div>
                            <hr class="mb-0">
                            <br>
                            <h4 v-show="true" class="card-title">Restrições não liberadas:</h4>
                            <b-button variant="primary" class="center" @click="liberarTodos();" size="sm">
                                <i class="fa fa-check"></i> Liberar todas
                            </b-button>
                            <br>
                            <div class="row">
                                <div class="col-md-12 col-sm-12">
                                    <div class="table-responsive-sm">
                                        <table class="table table-striped table-hover">
                                            <thead>
                                                <tr>
                                                    <th scope="col" style="width: 10%">#</th>
                                                    <th scope="col" style="width: 25%">Nível</th>
                                                    <th scope="col" style="width: 25%">Restrição</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <transition name="custom-classes-transition"
                                                leave-active-class="animated bounceOutRight">
                                                    <tr v-if="b1">
                                                        <td colspan="">Coberturas dam  faskdjmflsafmsldkfnls s dfkjslçdkfjlsdkfsdas fkjasdlfkjsdlk</td>
                                                        <td colspan="">5</td>
                                                        <td colspan=""><input id="1" name="" type="checkbox" @click="libera1()" /></td>
                                                    </tr>
                                                </transition>
                                                <transition name="custom-classes-transition"
                                                leave-active-class="animated bounceOutRight">
                                                <tr v-show="b2">
                                                    <td colspan="">Coberturas dam  faskdjmflsafmsldkfnls s dfkjslçdkfjlsdkfsdas fkjasdlfkjsdlk</td>
                                                    <td colspan="">5</td>
                                                    <td colspan=""><input id="2" name="" type="checkbox" @click="libera2()" /></td>
                                                </tr>
                                                </transition>
                                                <transition name="custom-classes-transition"
                                                leave-active-class="animated bounceOutRight">
                                                <tr v-show="b3">
                                                    <td colspan="">Coberturas dam  faskdjmflsafmsldkfnls s dfkjslçdkfjlsdkfsdas fkjasdlfkjsdlk</td>
                                                    <td colspan="">7</td>
                                                    <td colspan=""><input id="2" name="" type="checkbox" @click="libera3()" /></td>
                                                </tr>
                                                </transition>
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
            b1: true,
            b2: true,
            b3: true
        }
    },
    methods: {
        pesquisar: function() {
            console.log('oi');
        },
        get: function() {
            this.$router.push('bloqueio');
        },
        libera1: function() {
            this.b1 = false;
        },
        libera2: function() {
            this.b2 = false;
        },
        libera3: function() {
            this.b3 = false;
        },
        liberarTodos:function() {
            this.b1 = false;
            this.b2 = false;
            this.b3 = false;
        }
    }
}
</script>
<style scoped>
td { cursor: pointer; }
.slide-fade-leave-active {
  transition: all .6s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(0px);
  opacity: 0;
}
</style>