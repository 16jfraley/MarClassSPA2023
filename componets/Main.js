
import html from "html-literal";
import * as views from "./veiws";

export default () => html`
  ${views["Home"]()},
  ${views["Bio"]()},
  ${views["Pizza"]()},
  ${views["Order"]()}
`;
