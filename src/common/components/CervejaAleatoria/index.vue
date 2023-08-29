<template>
  <div>
    <img
      v-if="mostrarCerveja"
      class="square"
      :style="estiloCervejaCss"
      src="../../../assets/images/logo/logo-beerclick-amarelo.png"
      alt="Cerveja aleatória"
      @click="clicouNaCerveja"
    />
  </div>
</template>

<script>
export default {
  name: "CervejaAleatoria",

  data() {
    return {
      mostrarCerveja: false,
      estiloCervejaCss: {},
    };
  },
  methods: {
    sortearNumero() {
      return Math.random() * 100;
    },
    criarCervejaAleatoria() {
      if (this.sortearNumero() > 50) {
        this.mostrarCerveja = true;

        const maxX = window.innerWidth - 100;
        const maxY = window.innerHeight - 100;
        const x = Math.random() * maxX;
        const y = Math.random() * maxY;

        this.estiloCervejaCss = {
          left: `${x}px`,
          top: `${y}px`,
        };

        setTimeout(() => {
          this.mostrarCerveja = false;
        }, 8000);
      }
    },

    clicouNaCerveja() {
      this.mostrarCerveja = false;
      this.$emit("clicouCervejaAleatoria");
    }
  },
  mounted() {
    this.criarCervejaAleatoria();
    setInterval(this.criarCervejaAleatoria, 30000);
  },
};
</script>

<style lang="scss" scoped src="./styles.scss" />

