<template>
    <div class="areadentro">
        <div class="area1">
            <div class="esquerda">
                <div class="area1-1">
                    <img class="sapato1" :src="sapato1">
                </div>

                <div class="area1-2">
                    <a @click="mostrarfoto1" href="#"> <img :src="figura1"> </a>
                    <a @click="mostrarfoto2" href="#"> <img class="img" :src="figura2"> </a>
                    <a @click="mostrarfoto3" href="#"> <img class="img" :src="figura3"> </a>
                    <a @click="mostrarfoto4" href="#"> <img class="img" :src="figura4"> </a>
                </div>
            </div>

            <div class="direita">
                <h4>SNEAKER COMPANY</h4>
                <h1>Fall Limited Edition <br> Sneakers</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and 
                typesetting industry. Lorem Ipsum has been the industry's 
                standard dummy text ever since the 1500s, when  specimen book.</p>

                <div class="valor">
                    <h3>$125.00</h3>
                    <div>50%</div>
                </div>

                <h5 class="prc"><s>$250.00</s></h5>

                <div class="quantidades">
                    <div class="qtd">
                        <a @click="menos" v-on:click="sumirqtd" href="#">-</a>
                        <h3>{{ contador }}</h3>
                        <a @click="mais" v-on:click="sumirqtd" href="#">+</a>
                    </div>

                    
                    <a @click="add" v-on:click="sendData" class="carr" href="#">
                        <img :src="carrinho">    
                        <a href="#" @click="alteraaba">Add to cart</a>
                    </a>
                    
                </div>
            </div>
        </div>
    </div>

    <div class="areafoto" v-if="aparecefoto" @click="sumirfoto">
        <img v-if="aparecefoto1" :src="foto1">
        <img v-if="aparecefoto2" :src="foto2">
        <img v-if="aparecefoto3" :src="foto3">
        <img v-if="aparecefoto4" :src="foto4">
    </div>
 
</template>

<script>
import eventBus from './EventBus'
import { apareceraba, sumircontador } from './aparecer'
export default{

    setup(){
        const alteraaba = () =>{
            apareceraba()
        }

        const sumirqtd = () =>{
            sumircontador()
        }

        return{
            alteraaba,
            sumirqtd
        }
    },

        name: "ItemProduto",
        props:['sapato1', 'figura1', 'figura2', 'figura3', 
        'figura4', 'carrinho', 'foto1', 'foto2', 'foto3', 
        'foto4', 'itemadicionado'],

        methods:{

            sendData(){
                const data = this.contador;
                eventBus.emit('data-to-tab-b', data)
            },

            mais(){
                this.contador++
            },

            menos(){
                this.contador--
                if(this.contador <= 0){
                    this.contador = 0
                }
            },

            mostrarfoto1(){
                this.aparecefoto = true
                this.aparecefoto1 = true
                this.aparecefoto2 = false
                this.aparecefoto3 = false
                this.aparecefoto4 = false
            },

            mostrarfoto2(){
                this.aparecefoto = true
                this.aparecefoto1 = false
                this.aparecefoto2 = true
                this.aparecefoto3 = false
                this.aparecefoto4 = false
            },

            mostrarfoto3(){
                this.aparecefoto = true
                this.aparecefoto1 = false
                this.aparecefoto2 = false
                this.aparecefoto3 = true
                this.aparecefoto4 = false
            },

            mostrarfoto4(){
                this.aparecefoto = true
                this.aparecefoto1 = false
                this.aparecefoto2 = false
                this.aparecefoto3 = false
                this.aparecefoto4 = true
            },

            sumirfoto(){
                this.aparecefoto = false
            },

            add(){
                if(this.contador == 0){
                    this.adicionado = false
                } else if(this.contador >=1){
                    this.adicionado = true
                }
            }
        },

        data(){
            return{
                contador: 0,
                aparecefoto: false,
                aparacefoto1: false,
                aparacefoto2: false,
                aparacefoto3: false,
                aparacefoto4: false,
                adicionado: false
            }
        },
        
    }
</script>

<style>

.check{
    width: 300px;
    height: 45px;
    background-color: orange;
    text-align: center;
    text-decoration: none;
    color: white;
    font-weight: 500;
    border-radius: 5px;
    margin-left: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.qtdnocarro p{
    color: white;
    font-weight: 600;
}

.areafoto{
    display: flex;
    justify-content: center;
    align-items: center;
}

.areafoto img{
    width: 500px;
}

.areacart{
    border: solid 0px black;
    width: 100%;
    height: 285px;
    display: flex;
    margin-top: -600px;
}

.areacart1{
    border: solid 0px red;
    width: 68%;
}

.areacart3{
    border: solid 0px blue;
    width: 16%;
}

.nenhum{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
}

.areafoto{
    border: solid 0px red;
    height: 716px;
    background-color: rgba(0, 0, 0, 0.678);
    position: relative;
    margin-top: -710px;
}

.areadentro{
    border: solid 0px yellow;
    height: 604px;
    display: flex;
    justify-content: center;
    margin-top: 0px;
}

.esquerda{
    border: solid 0px green;
    height: 580px;
}

.area1{
    border: solid 0px green;
    width: 980px;
    display: flex;
    align-items: center;
}

.area1-1{
    border: solid 0px blue;
    margin-bottom: 30px;
}

.area1-2{
    border: solid 0px black;
    width: 450px;
    height: 100px;
}

.area1-2 img{
    width: 90px;
    border-radius: 8px;
}

.area1-2 img:hover{
    border: solid 4px orange;
}

.direita{
    border: solid 0px black;
    margin-left: 60px;
}

.direita h4{
    color: orange;
}

.valor{
    display: flex;
    align-items: center;
    font-weight: 600;
    font-size: 18px;
    margin-top: -20px;
}

.valor div{
    margin-left: 15px;
    background-color: rgb(252, 203, 114);
    color: rgb(255, 153, 0);
    font-weight: 600;
    border-radius: 4px;
    font-size: 16px;
}

.prc{
    color: rgb(170, 170, 170);
    margin-top: -12px;
    font-size: 15px;
}

.quantidades{
    border: solid 0px orange;
    display: flex;
    width: 370px;
    justify-content: space-between;
}

.qtd{
    border: solid 0px black;
    border-radius: 6px;
    display: flex;
    width: 130px;
    height: 40px;
    justify-content: space-around;
    align-items: center;
    background-color: rgb(238, 238, 238);
}

.qtd a{
    color: orange;
    text-decoration: none;
    font-weight: 600;
    font-size: 25px;
}

.carr{
    border: solid 0px black;
    width: 200px;
    height: 40px;
    background-color: orange;
    border-radius: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: white;
    font-weight: 600;
}

.carr img{
    width: 18px;
}

.carr a{
    margin-left: 20px;
    text-decoration: none;
    color: rgb(104, 104, 104);
    font-size: 17px;
}

.img{
    margin-left: 26px;
    border-radius: 8px;
}

.sapato1{
    width: 440px;
    border-radius: 8px;
}
</style>