export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".nojekyll","favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.tEqmjxNB.js","app":"_app/immutable/entry/app.UEfe_cm1.js","imports":["_app/immutable/entry/start.tEqmjxNB.js","_app/immutable/chunks/index.BhcPLpiJ.js","_app/immutable/chunks/singletons.4egLlIh0.js","_app/immutable/chunks/paths.1ZQnB2E4.js","_app/immutable/chunks/control.g9yvpsvX.js","_app/immutable/entry/app.UEfe_cm1.js","_app/immutable/chunks/preload-helper.0HuHagjb.js","_app/immutable/chunks/index.BhcPLpiJ.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
