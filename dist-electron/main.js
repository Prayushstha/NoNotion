import { BrowserWindow as e, app as t } from "electron";
import { fileURLToPath as n } from "url";
import r from "path";
//#region electron/main.ts
var i = r.dirname(n(import.meta.url));
function a() {
	let t = new e({
		width: 1200,
		height: 800,
		webPreferences: { preload: r.join(i, "preload.js") }
	});
	process.env.VITE_DEV_SERVER_URL ? t.loadURL(process.env.VITE_DEV_SERVER_URL) : t.loadFile(r.join(i, "../dist/index.html"));
}
t.whenReady().then(a), t.on("window-all-closed", () => {
	process.platform !== "darwin" && t.quit();
}), t.on("activate", () => {
	e.getAllWindows().length === 0 && a();
});
//#endregion
export {};
