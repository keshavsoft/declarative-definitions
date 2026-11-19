import meta from "./meta.js";

const registerGlobal = (definitions) => {
  if (typeof globalThis === "undefined") return;

  globalThis.ks ??= {};
  globalThis.ks.declarative ??= {};
  globalThis.ks.declarative.definitions = { meta, data: definitions };
};

export default registerGlobal;
