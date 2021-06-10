function fullDisplay(elmnt) {
    if (screen.width >= 768) {
        document.getElementById("overlay").hidden = false;
        document.getElementById("overlay").children[0].children[0].src = elmnt.src.replace("compressed", "uncompressed")
    }
}

function hideFullDisplay(elmnt) {
    if (screen.width >= 768) {
        elmnt.hidden = true;
    }
}


// Lazy loading image with IntersectionObserver API
function handleIntersection(entries) {
    entries.map((entry) => {
        if (entry.isIntersecting) {
            entry.target.src = entry.target.dataset.src;
            entry.target.classList.add('loaded')
            observer.unobserve(entry.target);
        }
    });
}

const images = document.querySelectorAll('.lazyload');
const observer = new IntersectionObserver(handleIntersection);

for (let i = 0; i < images.length; i++) {
    const image = images[i];
    observer.observe(image)
}

