import definitions from "./definitions.json" with { type: "json" };
import meta from "./meta.js";
import registerGlobal from "./register.js";

export { definitions, meta };
export default definitions;

registerGlobal(definitions);
