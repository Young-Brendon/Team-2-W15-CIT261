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

    // loop thru JSON data and store needed parts
    var frag = document.createDocumentFragment();
    for (i = 0; i < data.results.length; i++) {
    	// Create tags and insert needed data in them (app name, app url, dev, dev url, etc)
    	var li = document.createElement("li");
    	li.innerHTML = "<a href=\"" + data.results[i].trackViewUrl + "\">" + "<img src=\"" + data.results[i].artworkUrl100 + "\">" + "</a>" + "<h3>" + data.results[i].trackName + "</h3>"  + "<p>" +"<a href=\"" + data.results[i].sellerUrl + "\">" + data.results[i].sellerName + "</a>" + "</p>" + "<p>" + "<a href=\"" + data.results[i].artworkUrl512 + "\" download>" + "DOWNLOAD" + "</a>" + "</p>";
    	frag.appendChild(li);
    };
    list.appendChild(frag);
    
}

document.getElementById('searchBar').addEventListener(
    'submit', search, false
);