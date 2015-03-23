# W15-CIT261

# iConGrabber
### retrieves hi-res iTunes store app icons using Apple’s iTunes API

## How it works
**Homepage** - Basic homepage consists of a logo and an input field (acting as a search bar) with a submit button - basically what you'd when you pull up Google or any other search engine. The user search the name of an app into the input field and hit submit.

**On submission** - Once the user clicks the submit button, the iTunes API will be called and it will query the App Store database using the stored search terms.

**iTunes API** - The iTunes API will return JSON data for the relevant apps found. Each app in the app store has a unique six-digit ID number. Using this ID and JavaScript, we will parse the JSON results and store in our own variables for use the app name, developer name, developer website, and the URL for the app icon image file.

**CSS3 Animation** - Using CSS3 animations, a loading bar will appear and load while the process of retreiving the image file is underway. This should be very very brief as the amount of data being exchanged is minimal. We can also use CSS in creating the interface which will be similar to the iTunes v12. The search results will be in a grid layout and when you click on the image it will expand with information about the app, developer, links, etc, as well as a download button.

**AJAX** - The response from the server and the processed JSON file results will be returned to the browser where we will fill in our HTML. The CSS3 loading bar will disappear and the searched app icon(s) will appear in its place. Below the image will be text displaying "View in iTunes" that will link to the App Store page, the name of the developer which will link to their site, and some fair use accreditation.