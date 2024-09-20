const toggleSkillsButton = document.getElementById('toggleSkills')!;
const skillsSection = document.getElementById('skills')!;

toggleSkillsButton.addEventListener('click', () => {
 
  if (skillsSection.style.display === 'none' || skillsSection.style.display === '') {
    skillsSection.style.display = 'block'; 
  } else {
    skillsSection.style.display = 'none'; 
  }
});
