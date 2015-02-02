# W15-CIT261

# iConGrabber
### retrieves hi-res itunes app icons by itunes URL

## How it works
**Homepage** - Basic homepage consists of a logo and an input field with a submit button - basically what you'd when you pull up Google or any other search engine. The user will paste the itunes URL of an app into the input field and hit submit.

**On submission** - Once the user clicks the submit button, the browser will check that the URL is valid using a simple CSS form validation. If the URL is valid and submits then we will store the unique ID from the URL using GET/POST. If for some reason it doesnt submit we will have a second error check in place that will return an message to try again.

**iTunes API** - Using the unique ID, we will search the iTunes API using that number, which will return a JSON file for the application that is being requested by the user. Using JavaScript, we will parse the iTunes JSON results and store in our own variables for use the app name, developer name, developer website, and the URL for the app icon image file.

**CSS3 Animation** - Using CSS3 animations, a loading bar will appear and load while the process of retreiving the image file is underway. This should be very very brief as the amount of data being exchanged is minimal.

**AJAX** - The response from the server and the processed JSON file results will be returned to the browser where we will fill in our HTML. The CSS3 loading bar will disappear and a full size app icon will appear in its place. Below the image will be text displaying "View in iTunes" that will link to the App Store page, the name of the developer which will link to their site, and some fair use accreditation. The user will then be able to right click on the icon and save the image to their computer.