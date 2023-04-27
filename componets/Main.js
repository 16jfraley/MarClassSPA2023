
import html from "html-literal";
import * as views from "./veiws";

export default (state) => html` ${views[state.view](state)} `;
