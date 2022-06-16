// Fichier créant une instance d'axios avec des params pas défauts
import axios from "axios";

/**
 * Configure les paramètres par default d'axios
 */
export default axios.create({
  //   baseURL: appConfig.API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
