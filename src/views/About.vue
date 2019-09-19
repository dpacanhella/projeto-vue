
<template>
  <div class="container-1" style="border: 1px solid red;margin:100px;height: 1000px">
    <div :class="getClass(n)" v-for="n in 10" :key="n">
      <h3> Col - {{n}} </h3>
      <p style="word-wrap: break-word;">A prática cotidiana prova que o fenômeno da Internet oferece uma interessante oportunidade para verificação das condições financeiras e administrativas exigidas</p>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    getClass (n) {
      return n >= 3 ? `coluna-3` : 'coluna-' + n
    }
  }
}
</script>

<style>

  .container-1{
    display: flex;
    flex-direction: row;
  }

  .coluna-1{

  }

  .coluna-2{

  }

  .coluna-3{
  }

</style>
