<template>
  <button
    class="w-100 cursor-pointer fundo-padrao transicao-padrao"
    :class="[
      { bloqueado },
      { pilsen: nome == 'Pilsen' },
      { weiss: nome == 'Weiss' },
      { stout: nome == 'Stout' },
      { sour: nome == 'Sour' },
      { ipa: nome == 'Ipa' },
      { apa: nome == 'Apa' },
      { bock: nome == 'Bock' },
      { porter: nome == 'Porter' },
      { witbier: nome == 'Witbier' },
      { lambic: nome == 'Lambic' },
    ]"
    :disabled="bloqueado"
  >
    <div class="d-flex align-items-center">
      <div class="w-30">
        <img
          class="tamanho-icone"
          :src="icone"
          :alt="descricaoCerveja || nome"
        />
      </div>
      <div class="w-30 mr-0p5">
        <div class="fundo-span">
          <span class="fonte-cervejas" :title="`Cerveja ${nome}`">{{ nome }}</span>
          <br />
          <span class="fonte-cervejas" :title="`Preço: ${preco}`">{{ preco }}</span>
        </div>
      </div>
      <div class="w-30">
        <div class="fundo-span">
          <span class="fonte-cervejas" :title="`Quantidade: ${quantidadeComprada}`">{{
            quantidadeComprada
          }}</span>
          <br />
          <span class="fonte-cervejas" v-if="quantidadeComprada == 1">Caneca</span>
          <span class="fonte-cervejas" v-else>Canecas</span>
        </div>
      </div>
    </div>
  </button>
</template>

<script>
export default {
  name: "BotaoComprarCerveja",

  data() {
    return {};
  },

  props: {
    nome: {
      type: String,
      default: "",
      required: true,
      description: "Utilizado para informar o nome do botão.",
    },

    icone: {
      type: String,
      default: "",
      required: true,
      description: "Utilizado para colocar algum ícone ao botão.",
    },

    preco: {
      type: Number,
      default: 0,
      required: true,
      description: "Utilizado para informar o preço do upgrade.",
    },

    descricaoCerveja: {
      type: String,
      default: "",
      required: true,
      description: "Utilizado para informar a descrição do upgrade.",
    },

    bloqueado: {
      type: Boolean,
      default: true,
      required: true,
      description:
        "Utilizado para informar se o upgrade está bloqueado ou não para ser comprado.",
    },

    quantidadeComprada: {
      type: Number,
      default: 0,
      required: true,
      description:
        "Utilizado para informar a quantidade que o usuário possui de uma cerveja.",
    },

    bonusCps: {
      type: Number,
      default: 0,
      required: true,
      description:
        "Utilizado para informar a quantidade de Litros por Segundo , que esse upgrade concede.",
    },

    bonusClick: {
      type: Number,
      default: 0,
      required: true,
      description:
        "Utilizado para informar a quantidade de Litros que esse upgrade concede ao clicar na cerveja.",
    },
  },

  watch: {},
};
</script>


<style lang="scss" scoped src="./styles.scss" />
