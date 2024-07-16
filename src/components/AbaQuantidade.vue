<template>
    <div class="area10">
        <div class="menu0110">
            <div class="menu100">
                
            </div>

            <div v-if="state.showcomponent" class="menu200">
                <h3 class="cart">Cart</h3>
                <hr>

                <div  class="dentrodoitem">
                    <h3 v-if="this.receivedData ==0">Nenhum item adicionado</h3>
                    <div v-else-if="this.receivedData >=1">
                        <div class="dentroitem">
                            <div class="primeirasinfo">
                                <div class="areadentrofoto">
                                    <img class="amostra" :src="amostra">
                                </div>

                                <div class="areadentrodescri">
                                    <p class="fall">Fall Limited Edition Sneakers</p>
                                    <p class="valorfinal">$125.00 x {{ receivedData }} <b>${{ receivedData*125 }}.00</b></p>
                                </div>
                            </div>

                            <a class="check" href="#">Checkout</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref, onMounted} from 'vue'
import eventBus from './EventBus';

import { state } from './state';
    export default{
        name: "AbaQuantidade",
        props:['amostra'],

        setup(){

            const receivedData = ref('');

            onMounted(() =>{
                eventBus.on('data-to-tab-b', (data) =>{
                    receivedData.value = data
                })
            })

            return{
                state,
                receivedData
            }
        }
    }
</script>

<style>

.check{
    padding: 20px, 4px;
    background-color: orange;
    color: white;
    margin-top: 8px;
}

.primeirasinfo{
    display: flex;
}

.dentroitem{
    display: flex;
    flex-direction: column;
    margin-top: -18px;
}

.areadentrodescri{
    margin-top: -14px;
    margin-left: 10px;
}

.fall{
    font-size: 19px;
    color: gray;
}

.valorfinal{
    position: relative;
    margin-top: -14px;
    font-size: 17px;
    color: gray;
}

.valorfinal b{
    color: black;
}

.amostra{
    width: 60px;
    border-radius: 6px;
}

.area10{
   border: solid 0px gray;
    display: flex;
    justify-content: center;
    position: relative;
    margin-top: -605px;
}

.menu0110{
    border: solid 0px rgb(151, 151, 151);
    width: 1090px;
    height: 150px;
    display: flex;
    justify-content: space-between;
    margin-left: 100px;
}

.menu100{
    display: flex;
    justify-content: center;
    align-items: center;
    border: solid 0px orangered;
    width: 655px;
}

.menu200{
    border: solid 0px blue;
    width: 370px;
    height: 230px;
    background-color: white;
    border-radius: 8px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, 
    rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
    position: relative;
}

.dentrodoitem{
    border: solid 0px black;
    height: 148px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.cart{
    margin-left: 10px;
}

</style>