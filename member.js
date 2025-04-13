function skillsMember() {
    const member = document.querySelector('.member');
    const skills = document.querySelector('.skills');
    const skillsMember = document.querySelector('.skills-member');
    const skillsMemberList = document.querySelector('.skills-member-list');

    member.addEventListener('click', () => {
        skills.classList.toggle('active');
        skillsMember.classList.toggle('active');
        skillsMemberList.classList.toggle('active');
    });
}