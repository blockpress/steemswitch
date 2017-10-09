var href, busy, cbb, sd, sdb, sswitch;
thisSite = window.location.hostname;
switch(thisSite) {
	case "steemit.com":
		addSwitchHeaderMenu(thisSite);
		break;
	case "busy.org":
		addSwitchHeaderMenu(thisSite);
		break;
	case "beta.chainbb.com":
		addSwitchHeaderMenu(thisSite);
		break;
	case "steemd.com":
		addSwitchHeaderMenu(thisSite);
		break;
	case "steemdb.com":
		addSwitchHeaderMenu(thisSite);
		break;
	default:
		//addSwitchToLinks(document) //TO DO later
		break;
}

/* function addSwitchToLinks(containerElement) {
	var a = containerElement.getElementsByTagName('a');
	for (var i = 0; i < a.length; i++) {
		var elem = a[i];
		href= elem.href;
		if(href.includes("https://steemit.com")) {
			elem.style.background = '#ddf';
			busy = document.createElement("a");
			cbb = document.createElement("a");
			sd = document.createElement("a");
			sdb = document.createElement("a");

			busy.href = href.replace('https://steemit.com','https://busy.org");
			cbb.href = href.replace('https://steemit.com','https://beta.chainbb.com");
			sd.href = href.replace('https://steemit.com','https://steemd.com");
			sdb.href = href.replace('https://steemit.com','https://steemdb.com");

			busy.appendChild(document.createTextNode('busy'));
			cbb.appendChild(document.createTextNode('chainbb'));
			sd.appendChild(document.createTextNode('steemd'));
			sdb.appendChild(document.createTextNode('steemdb')); 

			sswitch = document.createTextNode('[steemswitch]');
			sswitch = document.createTextNode('[view on:');
			
			sswitch.appendChild(busy);
			sswitch.appendChild(document.createTextNode(','));
			sswitch.appendChild(cbb);
			sswitch.appendChild(document.createTextNode(','));
			sswitch.appendChild(sd);
			sswitch.appendChild(document.createTextNode(','));
			sswitch.appendChild(sdb);

			sswitch.appendChild(document.createTextNode(']')); 

			elem.parentNode.appendChild(sswitch);
		}
	}
} */

function addSwitchHeaderMenu(thisSite) {
	var si, busy, cbb, sd, sdb, footer, header;
	var href = window.location.href;
	var menu = document.createElement("div");
	var htmlBody = document.getElementsByTagName('body')[0];
	menu.appendChild(document.createTextNode('View this page on: '));
	
	
	if(thisSite != 'steemit.com') {
		si = document.createElement("a");
		si.href = href.replace('https://'+thisSite,'https://steemit.com');
		si.appendChild(document.createTextNode('steemit'));
		menu.appendChild(si);
		menu.appendChild(document.createTextNode(' '));
	}	
	if(thisSite != 'busy.org') {
		busy = document.createElement("a");
		busy.href = href.replace('https://'+thisSite,'https://busy.org');
		busy.appendChild(document.createTextNode('busy'));
		menu.appendChild(busy);
		menu.appendChild(document.createTextNode(' '));
	}		
	if(thisSite != 'beta.chainbb.com') {
		cbb = document.createElement("a");
		cbb.href = href.replace('https://'+thisSite,'https://beta.chainbb.com');
		cbb.appendChild(document.createTextNode('chainbb'));
		menu.appendChild(cbb);
		menu.appendChild(document.createTextNode(' '));
		
	}		
	if(thisSite != 'steemd.com') {
		sd = document.createElement("a");
		sd.href = href.replace('https://'+thisSite,'https://steemd.com');
		sd.appendChild(document.createTextNode('steemd'));
		menu.appendChild(sd);
		menu.appendChild(document.createTextNode(' '));
	}		
	if(thisSite != 'steemdb.com') {
		sdb = document.createElement("a");
		sdb.href = href.replace('https://'+thisSite,'https://steemdb.com');
		sdb.appendChild(document.createTextNode('steemdb'));
		menu.appendChild(sdb);
		menu.appendChild(document.createTextNode(' ')); 
	}
	switch(thisSite) {
		case "steemit.com":
			var steemitHeader = document.getElementsByTagName('header')[0];
			steemitHeader.insertBefore(menu, steemitHeader.firstChild);
			break;
		case "busy.org":
			var busyHeader = document.getElementsByTagName('header')[0];
			busyHeader.insertBefore(menu, busyHeader.firstChild);
			break;
			break;
		case "beta.chainbb.com":
			htmlBody.insertBefore(menu, htmlBody.firstChild);
			break;
		case "steemd.com":
			htmlBody.insertBefore(menu, htmlBody.firstChild);
			break;
		case "steemdb.com":
			var steemdbHeader = document.getElementsByTagName('div')[0];
			while (steemdbHeader.firstChild) {
				steemdbHeader.removeChild(steemdbHeader.firstChild); // Removes the mobile menu we'd otherwise accidentally reveal
			}
			
			menu.style.display = 'block';
			menu.style.background = '#fff';
			menu.style.width = '100%';
			menu.style.position = 'relative';
			steemdbHeader.appendChild(menu);
			
			document.getElementsByTagName('div')[2].style.top = '1.5em';
			break;
	}
	
	//footer = menu.cloneNode(true);
	//htmlBody.appendChild(footer); 
}