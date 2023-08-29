<template>
  <div class="container d-flex justify-content-center align-items-center w-100">
    <div
      class="w-55 d-flex justify-content-center flex-column align-items-center text-center"
    >
      <div class="fonte-2-rem text-center">
        <p>{{ dadosPontuacao.pontos }}</p>
        <p>{{ dadosPontuacao.exibicao }}</p>
      </div>
      <CervejaAleatoria @clicouCervejaAleatoria="concederLitros"/>
      <img
        class="cursor-pointer img-tamanho"
        src="../../assets/images/logo/logo-beerclick-amarelo.png"
        alt="Clicar aqui para ganhar litros!"
        @click="concederPontosClicarCerveja"
      />
      <div class="fonte-1p5-rem">
        <span>Litros por Segundo: {{ dadosPontuacao.litrosPorSegundo }}</span>
      </div>
      <div class="fonte-1p5-rem">
        <span>Litros por Click: {{ dadosPontuacao.bonusPorClick }} </span>
      </div>
    </div>
    <div
      class="tamanho-cervejas d-flex justify-content-center flex-column overflow-auto"
    >
      <div class="text-center titulo-cervejas">CERVEJAS</div>
      <div
        class="w-95"
        v-for="cerveja in mocksEstilosCervejas"
        :key="cerveja.id"
      >
        <BotaoComprarCerveja
          class="margin-0p5"
          :nome="cerveja.nome"
          :icone="cerveja.icone"
          :preco="cerveja.preco"
          :descricaoCerveja="cerveja.descricao"
          :bloqueado="dadosPontuacao.pontos < cerveja.preco"
          :quantidadeComprada="cerveja.quantidadeComprada"
          :bonusCps="cerveja.bonusCps"
          :bonusClick="cerveja.bonusClick"
          @click="comprarCerveja(cerveja)"
        >
        </BotaoComprarCerveja>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Jogo",
  components: {},
  data() {
    return {
      dadosPontuacao: {
        pontos: 0,
        exibicao: "",
        bonusPorClick: 1,
        litrosPorSegundo: 0,
      },

      tela: {
        vertical: 0,
        horizontal: 0,
      },

      idLitrosPorSegundo: null,
      contadorLitrosPorSegundo: 0,

      //Mocks, excluir posteriormente
      mocksEstilosCervejas: [
        {
          id: "cervejaPilsen",
          nome: "Pilsen",
          icone:
            "https://external-preview.redd.it/zzJTZxX70dygXCrMSdpHMQKOXHmyBnBdYgL1kEEuuVs.png?auto=webp&s=7ec02f19e4227b9f5dd52df6ccf8ad26d609ebdb",
          preco: 10,
          descricao: "Cerveja pilsen",
          quantidadeComprada: 0,
          bonusCps: 1,
          bonusClick: 1,
          bloqueada: false,
        },

        {
          id: "cervejaWeiss",
          nome: "Weiss",
          icone:
            "https://external-preview.redd.it/zzJTZxX70dygXCrMSdpHMQKOXHmyBnBdYgL1kEEuuVs.png?auto=webp&s=7ec02f19e4227b9f5dd52df6ccf8ad26d609ebdb",
          preco: 16,
          descricao: "Cerveja weiss",
          quantidadeComprada: 0,
          bonusCps: 7,
          bonusClick: 5,
          bloqueada: false,
        },

        {
          id: "cervejaStout",
          nome: "Stout",
          icone:
            "https://external-preview.redd.it/zzJTZxX70dygXCrMSdpHMQKOXHmyBnBdYgL1kEEuuVs.png?auto=webp&s=7ec02f19e4227b9f5dd52df6ccf8ad26d609ebdb",
          preco: 27,
          descricao: "Cerveja stout",
          quantidadeComprada: 0,
          bonusCps: 8,
          bonusClick: 11,
          bloqueada: false,
        },

        {
          id: "cervejaSour",
          nome: "Sour",
          icone:
            "https://external-preview.redd.it/zzJTZxX70dygXCrMSdpHMQKOXHmyBnBdYgL1kEEuuVs.png?auto=webp&s=7ec02f19e4227b9f5dd52df6ccf8ad26d609ebdb",
          preco: 33,
          descricao: "Cerveja sour",
          quantidadeComprada: 0,
          bonusCps: 3,
          bonusClick: 7,
          bloqueada: false,
        },

        {
          id: "cervejaIpa",
          nome: "Ipa",
          icone:
            "https://external-preview.redd.it/zzJTZxX70dygXCrMSdpHMQKOXHmyBnBdYgL1kEEuuVs.png?auto=webp&s=7ec02f19e4227b9f5dd52df6ccf8ad26d609ebdb",
          preco: 55,
          descricao: "Cerveja ipa",
          quantidadeComprada: 0,
          bonusCps: 20,
          bonusClick: 12,
          bloqueada: false,
        },

        {
          id: "cervejaApa",
          nome: "Apa",
          icone:
            "https://external-preview.redd.it/zzJTZxX70dygXCrMSdpHMQKOXHmyBnBdYgL1kEEuuVs.png?auto=webp&s=7ec02f19e4227b9f5dd52df6ccf8ad26d609ebdb",
          preco: 61,
          descricao: "Cerveja apa",
          quantidadeComprada: 0,
          bonusCps: 11,
          bonusClick: 11,
          bloqueada: false,
        },

        {
          id: "cervejaBock",
          nome: "Bock",
          icone:
            "https://external-preview.redd.it/zzJTZxX70dygXCrMSdpHMQKOXHmyBnBdYgL1kEEuuVs.png?auto=webp&s=7ec02f19e4227b9f5dd52df6ccf8ad26d609ebdb",
          preco: 70,
          descricao: "Cerveja bock",
          quantidadeComprada: 0,
          bonusCps: 14,
          bonusClick: 22,
          bloqueada: false,
        },

        {
          id: "cervejaPorter",
          nome: "Porter",
          icone:
            "https://external-preview.redd.it/zzJTZxX70dygXCrMSdpHMQKOXHmyBnBdYgL1kEEuuVs.png?auto=webp&s=7ec02f19e4227b9f5dd52df6ccf8ad26d609ebdb",
          preco: 84,
          descricao: "Cerveja apa",
          quantidadeComprada: 0,
          bonusCps: 22,
          bonusClick: 16,
          bloqueada: false,
        },

        {
          id: "cervejaWitbier",
          nome: "Witbier",
          icone:
            "https://external-preview.redd.it/zzJTZxX70dygXCrMSdpHMQKOXHmyBnBdYgL1kEEuuVs.png?auto=webp&s=7ec02f19e4227b9f5dd52df6ccf8ad26d609ebdb",
          preco: 90,
          descricao: "Cerveja Wit",
          quantidadeComprada: 0,
          bonusCps: 11,
          bonusClick: 30,
          bloqueada: false,
        },

        {
          id: "cervejaLambic",
          nome: "Lambic",
          icone:
            "https://external-preview.redd.it/zzJTZxX70dygXCrMSdpHMQKOXHmyBnBdYgL1kEEuuVs.png?auto=webp&s=7ec02f19e4227b9f5dd52df6ccf8ad26d609ebdb",
          preco: 100,
          descricao: "Cerveja Lambic",
          quantidadeComprada: 0,
          bonusCps: 50,
          bonusClick: 50,
          bloqueada: false,
        },
      ],
    };
  },

  beforeDestroy() {
    clearInterval(this.idLitrosPorSegundo);
  },

  beforeMount() {
    this.gatilhoAdicionarLitrosPorSegundo();
  },

  mounted() {
    this.carregarInformacoes();
    this.calcularBonusCervejasCompradas();
    this.pegarResolucaoTela();
  },

  computed() {},

  methods: {
    comprarCerveja(cerveja) {
      if (this.dadosPontuacao.pontos < cerveja.preco) {
        return;
      }

      this.dadosPontuacao.pontos -= cerveja.preco;

      cerveja.quantidadeComprada++;
      this.recalcularPrecoAposCompra(cerveja);
      this.calcularBonusCervejasCompradas(cerveja);
      this.carregarInformacoes();
    },

    retornaCervejaUsuario() {
      this.dadosPontuacao.pontos === 1
        ? (this.dadosPontuacao.exibicao = "Litro")
        : (this.dadosPontuacao.exibicao = "Litros");
    },

    carregarInformacoes() {
      this.retornaCervejaUsuario();
    },

    concederPontosClicarCerveja() {
      this.dadosPontuacao.pontos += this.dadosPontuacao.bonusPorClick;
      this.carregarInformacoes();
    },

    calcularBonusCervejasCompradas(cerveja = null) {
      if (cerveja) {
        this.dadosPontuacao.bonusPorClick += cerveja.bonusClick;

        this.dadosPontuacao.litrosPorSegundo +=
          cerveja.bonusCps * cerveja.quantidadeComprada;
      }
    },

    recalcularPrecoAposCompra(cerveja) {
      const numerosGerados = this.$geracaoLitros.retornarMinimoMaximo(
        cerveja.nome
      );
      const valorSomar =
        Math.random() * (numerosGerados.maximo - numerosGerados.minimo) +
        numerosGerados.minimo;

      cerveja.preco += Math.trunc(valorSomar);
    },

    pegarResolucaoTela() {
      this.tela.vertical = window.innerHeight;
      this.tela.horizontal = window.innerWidth;
    },

    gatilhoAdicionarLitrosPorSegundo() {
      this.idLitrosPorSegundo = setInterval(
        this.adicionarCervejaPorSegundo,
        1000
      );
    },

    adicionarCervejaPorSegundo() {
      this.contadorLitrosPorSegundo++;
      this.dadosPontuacao.pontos += this.dadosPontuacao.litrosPorSegundo;
    },

    concederLitros() {
      this.dadosPontuacao.pontos += 1000
    }
  },
};
</script>

<style lang="scss" scoped src="./styles.scss" />
