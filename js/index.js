// Typewriter effect
var speed = 130; /* The speed/duration of the effect in milliseconds */

var descriptionsListCounter = 0;
var descriptionCounter = 0;
var descriptions = ['Tech Enthusiast', 'Developer', 'Finance Enthusiast', 'Formula 1 Fan', 'Car Lover'];
var reverse = false

function descriptionTypeWriter() {
    if (descriptionCounter <= descriptions[descriptionsListCounter].length
        && descriptionCounter >= 0
        && reverse) {
        if (descriptionCounter == 0) {
            document.getElementById("description").innerHTML = "&nbsp;";
            reverse = false
            if (descriptionsListCounter < descriptions.length - 1) {
                descriptionsListCounter += 1
            } else {
                descriptionsListCounter = 0
            }
        } else {
            document.getElementById("description").innerHTML = descriptions[descriptionsListCounter].substring(0, descriptionCounter);
            descriptionCounter--;
        }
    } else if (descriptionCounter < descriptions[descriptionsListCounter].length && !reverse) {
        document.getElementById("description").innerHTML += descriptions[descriptionsListCounter].charAt(descriptionCounter);
        descriptionCounter++;
    } else if (descriptionCounter == descriptions[descriptionsListCounter].length && !reverse) {
        reverse = true
    }
    setTimeout(descriptionTypeWriter, speed);
}

// End of typewriter effect

window.addEventListener('DOMContentLoaded', (event) => {
    descriptionTypeWriter();
});