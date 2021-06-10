// Swipe gesture
// Code snippet adapted from https://gist.github.com/SleepWalker/da5636b1abcbaff48c4d

const gestureZone = document.getElementsByTagName('html')[0];
const swipeSensitivity = 0.4

let touchstartX = 0;
let touchstartY = 0;
let touchendX = 0;
let touchendY = 0;

gestureZone.addEventListener('touchstart', function(event) {
    touchstartX = event.changedTouches[0].screenX;
    touchstartY = event.changedTouches[0].screenY;
}, false);

gestureZone.addEventListener('touchend', function(event) {
    touchendX = event.changedTouches[0].screenX;
    touchendY = event.changedTouches[0].screenY;
    handleGesture();
}, false); 

function handleGesture() {
    const currentPath = window.location.pathname;

    switch (currentPath) {
        case '/':
            // Swipe left
            if (touchstartX - touchendX >= gestureZone.clientWidth * swipeSensitivity) {
                window.location.href = '/about.html';
            }
            break;

        case '/about.html':
            // Swipe left
            if (touchstartX - touchendX >= gestureZone.clientWidth * swipeSensitivity) {
                window.location.href = '/projects.html';
            }

            // Swipe right
            if (touchendX - touchstartX >= gestureZone.clientWidth * swipeSensitivity) {
                window.location.href = '/shots.html';
            }
            break;
        
        case '/projects.html':
            // Swipe left
            if (touchstartX - touchendX >= gestureZone.clientWidth * swipeSensitivity) {
                window.location.href = '/shots.html';
            }

            // Swipe right
            if (touchendX - touchstartX >= gestureZone.clientWidth * swipeSensitivity) {
                window.location.href = '/about.html';
            }
            break;

        case '/shots.html':
            // Swipe left
            if (touchstartX - touchendX >= gestureZone.clientWidth * swipeSensitivity) {
                window.location.href = '/about.html';
            }

            // Swipe right
            if (touchendX - touchstartX >= gestureZone.clientWidth * swipeSensitivity) {
                window.location.href = '/projects.html';
            }
            break;
    
        default:
            break;
    }

    // if (touchendY <= touchstartY) {
    //     console.log('Swiped up');
    // }
    
    // if (touchendY >= touchstartY) {
    //     console.log('Swiped down');
    // }
    
    // if (touchendY === touchstartY) {
    //     console.log('Tap');
    // }
}

// End of swipe gesture