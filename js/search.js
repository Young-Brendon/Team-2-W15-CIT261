function search(e) {
    // clear any previous search results
    var clear = document.getElementById('list');
    while(clear.firstChild) {
        clear.removeChild(clear.firstChild);
    }
    document.getElementById("instructions").style.visibility = "hidden";

    // JSONP API script
	e.preventDefault();
	var searchTerm = document.getElementById('searchTerm').value;
	searchTerm = searchTerm.split(' ').join('+');
	var script = document.createElement('script');
	script.src = 'https://itunes.apple.com/search?term='+searchTerm+'&entity=software&callback=handleApiResponse&limit=30';
	document.getElementsByTagName('head')[0].appendChild(script);
}

function handleApiResponse(data){
    // log iTunes search API data to console for reference
    console.log(data.results);

    // Get ul#list
    var list = document.getElementById("list");

    // loop thru JSON data and store needed parts
    var frag = document.createDocumentFragment();
    for (i = 0; i < data.results.length; i++) {
    	// Create tags and insert needed data in them (app name, app url, dev, dev url, etc)
    	var li = document.createElement("li");
    	li.innerHTML = "<a href=\"" + data.results[i].artworkUrl512 + "\" download>" + "<img src=\"" + data.results[i].artworkUrl100 + "\">" + "</a>" + "<a href=\"" + data.results[i].trackViewUrl + "\">" + "<h3>" + data.results[i].trackName + "</h3>" + "</a>" + "<a href=\"" + data.results[i].artistViewUrl + "\">" + "<p>" + data.results[i].sellerName + "</p>" + "</a>";
    	frag.appendChild(li);
    };
    list.appendChild(frag);
}

// a simple event listener for search bar
document.getElementById('searchBar').addEventListener(
    'submit', search, false
);

// count how many searches performed using localstorage
function searchCount() {
    // hide iphone keyboard onclick
    document.activeElement.blur();

    str_count = localStorage.getItem("count");

    if (str_count == null || str_count == "null"){
      count = 0;
    } else {
      count = parseInt(str_count);
    } // end if
    //increment count
    count++;
    //display count
    lblCounter = document.getElementById("lblCounter");
    lblCounter.innerHTML = "You have conducted " + count + " searches";
    
    //store count
    localStorage.setItem("count", count);
  } // end count

