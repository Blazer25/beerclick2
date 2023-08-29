import geracaoLitros from './geracaoLitros'
import retornarMocks from './retornarMocks'


export default {
  install(app) {
    app.config.globalProperties.$geracaoLitros = geracaoLitros;
    app.config.globalProperties.$retornarMocks = retornarMocks;
  }
}