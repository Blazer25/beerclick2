export default {
  retornarMinimoMaximo(nomeCerveja, multiplicador = 1) {
    const cervejas = {
      Pilsen: { minimo: 1, maximo: 22 },
      Weiss: { minimo: 1, maximo: 40 },
      Stout: { minimo: 40, maximo: 70 },
      Sour: { minimo: 70, maximo: 100 },
      Bock: { minimo: 125, maximo: 150 },
      Porter: { minimo: 200, maximo: 230 },
      Witbier: { minimo: 250, maximo: 320 },
      Lambic: { minimo: 400, maximo: 550 },
      Apa: { minimo: 700, maximo: 910 },
      Ipa: { minimo: 800, maximo: 1150 },
      default: { minimo: 1, maximo: 100 },
    };

    const cervejaSelecionada = cervejas[nomeCerveja] || cervejas.default;

    const minimo = cervejaSelecionada.minimo * multiplicador;
    const maximo = cervejaSelecionada.maximo * multiplicador;

    return { minimo, maximo };
  },
};
