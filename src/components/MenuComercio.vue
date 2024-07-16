<template>
    <div class="area0">
        <div class="menu">

            <div class="menu1">
                <a href="#"> <img class="logo" :src="logo"> </a>

                <div class="menu1-1">
                    <ul>
                        <li><a href="#">Collections</a></li>
                        <li><a href="#">Men</a></li>
                        <li><a href="#">Women</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
            </div>

            <div class="menu2">    

                <div class="areaqtd">
                    <a @click="apareceritemm" href="#"> <img class="carrin" :src="carrinho"> </a>
                    <div v-if="aparecer.showcomponent" 
                    class="qtdnum">{{ receivedData }}</div>
                </div>

                <a href="#"> <img class="usuario" :src="usuario"> </a> 
                  
            </div>
        </div>       
    </div>    
</template>

<script>
import {ref, onMounted} from 'vue'
import eventBus from './EventBus'
import { aparecer } from './aparecer'
import { apareceritem } from './state'
export default{

        setup(){

            const receivedData = ref('');

           onMounted(() =>{
            eventBus.on('data-to-tab-b', (data) =>{
                receivedData.value = data
            });
           });

            const apareceritemm = () =>{
                apareceritem()
            }

            return{
                aparecer,
                apareceritemm,
                receivedData
            }
        },

        name: "MenuComercio",
        props:['logo', 'carrinho', 'usuario'],

        data(){
            return{
                qtdcarro: true
            }
        },

        methods:{
            mostrarcart(){
                if(this.cart == false){
                    this.cart = true
                } else if(this.cart == true){
                    this.cart = false
                }
            }
        }
    }

</script>

<style>

.qtdnum{
    position: relative;
    width: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 500;
    margin-top: -30px;
    margin-left: -10px;
    border: solid 1px orange;
    background-color: orange;
    color: white;
    border-radius: 20px;
}

.areaqtd{
    border: solid 0px black;
    display: flex;
    width: 60px;
    height: 50px;
    align-items: center;
}

.carrofoto{
    border: solid 2px black;
    display: flex;
    align-items: center;
}

.itensnocarro{
    border: solid 2px black;
    width: 300px;
    height: 200px;
    position: relative;
    margin-left: 1100px;
}

.menu2 .usuario:hover{
    border: solid 3px orange;
    border-radius: 40px;
}

.usuario{
    width: 60px;
}

.quantidadecarro{
    border: solid 2px orange;
    width: 18px;
    height: 18px;
    background-color: orange;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    border-radius: 20px;
    margin-left: -500px;
}

body{
    margin: 0;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', 
    Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.menu2{
    border: solid 0px blue;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 230px;
}

.area0{
    border-left: solid 1px white;
    border-right: solid 1px white;
    border-top: solid 1px white;
    border-bottom: solid 1px gray;
    display: flex;
    justify-content: center;
}

.menu{
    border: solid 0px rgb(151, 151, 151);
    width: 1090px;
    height: 100px;
    display: flex;
    justify-content: space-between;
}

.logo{
    height: 25px;
}

.menu1{
    display: flex;
    justify-content: center;
    align-items: center;
    border: solid 0px orangered;
    width: 655px;
}

.menu1-1 ul, li {
    display: flex;
}

.menu1-1 ul li a{
    text-decoration: none;
    margin-left: 27px;
    font-weight: 600;
    font-size: 18px;
    color: gray;
}

.menu1-1 ul li a:hover{
    border-bottom: solid 4px orange;
}
</style>