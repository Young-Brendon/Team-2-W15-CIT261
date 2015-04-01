function search(e) {
	e.preventDefault();
	var searchTerm = document.getElementById('searchTerm').value;
	searchTerm = searchTerm.split(' ').join('+');
	var script = document.createElement('script');
	script.src = 'https://itunes.apple.com/search?term='+searchTerm+'&entity=software&callback=handleApiResponse&limit=30';
	document.getElementsByTagName('head')[0].appendChild(script);
}

function handleApiResponse(data){
    console.log(data.results);

    // Get ul#list
    var list = document.getElementById("list");

    // Store data and display on the page
    var frag = document.createDocumentFragment();
    for (i = 0; i < data.results.length; i++) {
    	// APP NAME
    	var appName = document.createElement("li");
    	appName.innerHTML = "<h3>" + data.results[i].trackName + "</h3>";
    	frag.appendChild(appName);

    	// APP ICON
    	var appIcon = document.createElement("img");
    	appIcon.setAttribute('src', data.results[i].artworkUrl60);
    	frag.appendChild(appIcon);
    };
    list.appendChild(frag);
    
}

document.getElementById('searchBar').addEventListener(
    'submit', search, false
);