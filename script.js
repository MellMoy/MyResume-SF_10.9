// Add event listener to the collapsible buttons
const collapsibleButtons = document.querySelectorAll('.collapsible-button');

collapsibleButtons.forEach(button => {
    button.addEventListener('click', () => {
        const collapsibleContent = button.nextElementSibling;
        collapsibleContent.style.display = collapsibleContent.style.display === 'block'? 'none' : 'block';
    });
});

// Add event listener to the skill bars
const skillBars = document.querySelectorAll('.skillbar');

skillBars.forEach(skillBar => {
    const progress = skillBar.querySelector('.progress');
    const width = progress.style.width;
    progress.style.width = '0%';
    setTimeout(() => {
        progress.style.width = width;
    }, 1000);
});


const buttonLink = document.querySelector('.button-link');

buttonLink.addEventListener('click', () => {
    window.open(
        'https://github.com/MellMoy',
        '_blank' // <- This is what makes it open in a new window.
      );
});


