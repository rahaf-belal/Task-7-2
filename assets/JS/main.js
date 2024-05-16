let section1 = document.querySelector('.section1');
let section1Images = document.querySelectorAll('.section1-2 img');
let sec1Img = document.querySelector('.sec1-img');

section1Images.forEach((img, index) => {
    img.addEventListener('click', () => {
        sec1Img.innerHTML = '';
        sec1Img.appendChild(section1Images[index].cloneNode(true));
        switch (index) {
            case 0:
                section1.style.backgroundColor = 'brown';
                break;
            case 1:
                section1.style.backgroundColor = '#5786df';
                break;
            case 2:
                section1.style.backgroundColor = '#22ad83';
                break;
            case 3:
                section1.style.backgroundColor = '#e1930f';
                break;
        }
    });
});

// ---------------------------------------------------------------------------

let isDarkMode = false;

function toggleDarkMode() {
    isDarkMode = !isDarkMode;
    let section = document.querySelector('.section2');
    if (isDarkMode) {
        section.classList.add('dark-mode');
    }
    else {
        section.classList.remove('dark-mode');
    }
}

// ---------------------------------------------------------------------------

let accordions = document.querySelectorAll(".accordion-wrapper .accordion");
accordions.forEach((acco) => {
    acco.onclick = () => {
        if (acco.classList.contains('active')) {
            acco.classList.remove('active');
            acco.querySelector('.accordion-content').style.display = 'none';
        } else {
            acco.classList.add('active');
            acco.querySelector('.accordion-content').style.display = 'block';
        }
    }
});

// ---------------------------------------------------------------------------

let stars = document.querySelectorAll(".fa-star");
let currentRating = 0;

stars.forEach((star, index) => {
    star.onclick = () => {
        currentRating = index + 1;
        updateStars();
    }
});

function updateStars() {
    stars.forEach((star, index) => {
        if (index < currentRating - 1) {
            star.classList.add('on');
        } else if (index === currentRating - 1) {
            star.classList.add('on');
        } else {
            star.classList.remove('on');
        }
    });
}