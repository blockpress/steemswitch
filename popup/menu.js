function onCreated(tab) {
  console.error(`Created new tab: ${tab.id}`);
  window.close();
}

function onError(error) {
  console.error(`Error: ${error}`);
  window.close();
}

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("steemswitch")) {
        var destinationName = e.target.textContent;
        var destination;

			  switch(destinationName) {
			    case "Steemit":
			      destination = "https://steemit.com";
			      break;
			    case "Busy":
			      destination = "https://busy.org";
			      break;
			    case "Chainbb":
			      destination = "https://beta.chainbb.com";
			      break;
          case "Utopian":
  			      destination = "https://utopian.io";
  			      break;
          case "Yehey":
      			  destination = "https://yehey.org";
      			  break;
			    case "Steemd":
			      destination = "https://steemd.com";
			      break;
			    case "Steemdb":
			      destination = "https://steemdb.com";
			      break;
			  }

        var gettingActiveTab = browser.tabs.query({active: true, currentWindow: true});
        gettingActiveTab.then((tabs) => {
					  var thisUrl = tabs[0].url;

					  // This pattern will be used to get a hostname from the url
					  var pattern=/(.+:\/\/)?([^\/]+)(\/.*)*/i;
					  var arr=pattern.exec(thisUrl);
					  var thisSite = arr[2];

					  var newUrl = thisUrl.replace('https://'+thisSite,destination);

						var creating = browser.tabs.create({
							url:newUrl
						});
						creating.then(onCreated, onError);
        });
  }
});
