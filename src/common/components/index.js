import BotaoPadrao from "./BotaoPadrao/index.vue";
import ModalPadrao from "./ModalPadrao/index.vue";
import BotaoComprarCerveja from "./BotaoComprarCerveja/index.vue";
import CervejaAleatoria from "./CervejaAleatoria/index.vue";

export default {
  install(app) {
    app.component("BotaoPadrao", BotaoPadrao);
    app.component("ModalPadrao", ModalPadrao);
    app.component("BotaoComprarCerveja", BotaoComprarCerveja);
    app.component("CervejaAleatoria", CervejaAleatoria);
  },
};
