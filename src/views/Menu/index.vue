<template>
  <div class="container">
    <div class="modal" v-if="modais.sobreJogo">
      <ModalPadrao v-if="modais.sobreJogo" @fechar-modal="fecharModalSobreJogo">
        <p class="tituloModal">{{ dadosSobreJogo.titulo }}</p>
        <p class="textoModal">{{ dadosSobreJogo.texto }}</p>
        <BotaoPadrao
          class="botao"
          :texto="'Ok'"
          @click="fecharModalSobreJogo"
        />
      </ModalPadrao>
    </div>

    <div class="modal" v-if="modais.dicas">
      <ModalPadrao
        v-if="modais.dicas"
        @fechar-modal="fecharModalDicas"
      >
        <p class="tituloModal">{{ dicas.titulo }}</p>
        <p class="textoModal">{{ dicas.texto }}</p>
        <BotaoPadrao
          class="botao"
          :texto="'Ok'"
          @click="fecharModalDicas"
        />
      </ModalPadrao>
    </div>

    <main>
      <img
        class="img"
        src="../../assets/images/logo/logo-beerclick-amarelo.png"
        alt="Logo BeerClick"
      />

      <p class="beerclick">BEERCLICK</p>

      <BotaoPadrao class="mb-05" :texto="'Jogar'" @click="jogar" />
      <BotaoPadrao
        class="mb-05"
        :texto="'Sobre o Jogo'"
        @click="abrirModalSobreJogo"
      />
      <BotaoPadrao
        class="mb-05"
        :texto="'Dicas...'"
        @click="abrirModalDicas"
      />
      <!-- <BotaoPadrao class="mb-05" :texto="'Sair'" @click="sair"/> -->
    </main>

    <footer class="footer">
      <span> Versão: 1.0.0 </span>

      <span class="desenvoledor"> Desenvolvido por: João Eugênio </span>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Menu",

  data() {
    return {
      modais: {
        sobreJogo: false,
        dicas: false,
      },

      dadosSobreJogo: {
        titulo: "Sobre o BeerClick",
        texto:
          "Jogo desenvolvido para aqueles que amam uma boa cerveja, videogames e programação. A base para o desenvolvimento deste jogo foi o Cookie Clicker, jogo ondê você clica em um biscoitão e ganhar biscoitos por isso, podendo a cada click melhorar no jogo. O BeerClick ainda está em fase de desenvolvimento, muitas coisas irão mudar por aqui no futuro. Jogo está sendo desenvolvido utilizando HTML5, CCS3, JavaScript e VueJS3. Espero que aproveitem...",
      },

      dicas: {
        titulo: "Dicas :)",
        texto:
          "A cada 30 segundos existe 50% de chance de uma cerveja aleatória aparecer na tela, ela permanece na tela por 8 segundos, clique nela para ganhar 1000 litros."
      },
    };
  },

  methods: {
    jogar() {
      this.$router.push("/jogo");
    },

    abrirModalDicas() {
      this.modais.dicas = true;
    },

    abrirModalSobreJogo() {
      this.modais.sobreJogo = true;
    },

    fecharModalSobreJogo() {
      this.modais.sobreJogo = false;
    },

    fecharModalDicas() {
      this.modais.dicas = false;
    },

    sair() {
      window.close();
    },
  },
};
</script>

<style lang="scss" scoped src="./styles.scss" />
