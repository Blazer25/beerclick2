import components from "./components";
import functions from "./functions";

export default {
  install(app) {
    app.use(components);
    app.use(functions);
  },
};
