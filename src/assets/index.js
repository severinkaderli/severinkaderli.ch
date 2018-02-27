//import "!?name=./[name].[ext]!./manifest.json";
import "!file-loader?name=assets/images/[name].[ext]!./images/favicon.png";
import "!file-loader?name=assets/images/[name].[ext]!./images/512x512.png";
import "./styles/style.scss";

if ('serviceWorker' in navigator) {
	window.addEventListener('load', function() {
		navigator.serviceWorker.register('/sw.js');
	});
}

import "./styles/unhide.scss";