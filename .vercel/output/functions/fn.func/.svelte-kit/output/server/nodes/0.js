import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0._Ld_sI_V.js","_app/immutable/chunks/index.BhcPLpiJ.js","_app/immutable/chunks/config.IX8X3kk1.js","_app/immutable/chunks/paths.1ZQnB2E4.js"];
export const stylesheets = ["_app/immutable/assets/0.eNqJEI-d.css"];
export const fonts = ["_app/immutable/assets/manrope-all-400-normal.apRf3hlD.woff","_app/immutable/assets/manrope-cyrillic-400-normal.Atu_samd.woff2","_app/immutable/assets/manrope-greek-400-normal.VSnfPhXv.woff2","_app/immutable/assets/manrope-latin-ext-400-normal.U-vIMTT8.woff2","_app/immutable/assets/manrope-latin-400-normal.W-ePsMn0.woff2","_app/immutable/assets/jetbrains-mono-all-400-normal.Y2cFL997.woff","_app/immutable/assets/jetbrains-mono-cyrillic-400-normal.hZLu4BSx.woff2","_app/immutable/assets/jetbrains-mono-latin-ext-400-normal.G8NpFPag.woff2","_app/immutable/assets/jetbrains-mono-latin-400-normal.uqDu_vPq.woff2"];
