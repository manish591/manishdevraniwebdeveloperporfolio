const moreProjectButton = document.querySelector('.moreproject');
const otherProjects = document.querySelector('.hide');

function showhide() {

    otherProjects.classList.toggle('hide');
    if (moreProjectButton.innerText === 'See Bonus Projects') {
        moreProjectButton.innerText = 'Hide Bonus Projects';
    } else {
        moreProjectButton.innerText = 'See Bonus Projects';
    }
}

moreProjectButton.addEventListener('click', showhide);