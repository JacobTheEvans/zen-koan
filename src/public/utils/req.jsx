import Axios from "axios";

class Requests {
  getKoans() {
    return Axios.get("http://localhost:8080/koans")
  }
}
export default Requests;
