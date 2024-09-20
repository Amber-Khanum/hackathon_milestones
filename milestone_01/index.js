// Select the button and the skills section from the DOM
var toggleSkillsButton = document.getElementById('toggleSkills');
var skillsSection = document.getElementById('skills');
// Add a click event listener to the button
toggleSkillsButton.addEventListener('click', function () {
    // Check the current display style of the skills section
    if (skillsSection.style.display === 'none' || skillsSection.style.display === '') {
        skillsSection.style.display = 'block'; // Show the section
    }
    else {
        skillsSection.style.display = 'none'; // Hide the section
    }
});
