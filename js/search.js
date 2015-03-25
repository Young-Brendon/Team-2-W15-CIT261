function search(e) {
	e.preventDefault();
	var searchTerm = document.getElementById('searchTerm').value;
	searchTerm = searchTerm.split(' ').join('+');
	var script = document.createElement('script');
	script.src = 'https://itunes.apple.com/search?term='+searchTerm+'&entity=software&callback=handleApiResponse';
	document.getElementsByTagName('head')[0].appendChild(script);
}

function handleApiResponse(data){
    console.log(data.results);
}

document.getElementById('searchBar').addEventListener(
    'submit', search, false
);