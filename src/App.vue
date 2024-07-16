<template>
  <MenuComercio :logo="imagem1" :carrinho="carro" :usuario="pessoa"/>
  <itemProduto :sapato1="primeiro" :figura1="img1" :figura2="img2" 
  :figura3="img3" :figura4="img4" :carrinho="comprar" 
  :foto1="mostra1" :foto2="mostra2" 
  :foto3="mostra3" :foto4="mostra4"
  :itemadicionado="produtoadd"/>
  <AbaQuantidade :amostra="mostrando1"/>
</template>

<script>
import MenuComercio from './components/MenuComercio.vue';
import ItemProduto from './components/ItemProduto.vue';
import AbaQuantidade from './components/AbaQuantidade.vue';
export default {
  name: 'App',
  components: {
    MenuComercio,
    ItemProduto,
    AbaQuantidade
  },

  data(){
    return{
      imagem1: './img/logo.png',
      carro: './img/icon-cart.png',
      pessoa: './img/image-avatar.png',
      primeiro: './img/image-product-1.jpg',
      img1: './img/image-product-1.jpg',
      img2: './img/image-product-2.jpg',
      img3: './img/image-product-3.jpg',
      img4: './img/image-product-4.jpg',
      comprar: './img/icon-cart.png',
      mostra1: 'img/image-product-1.jpg',
      mostra2: 'img/image-product-2.jpg',
      mostra3: 'img/image-product-3.jpg',
      mostra4: 'img/image-product-4.jpg',
      produtoadd: 'img/image-product-1.jpg',
      mostrando1: './img/image-product-1.jpg'
    }
  }
}
</script>

<style>
</style>
