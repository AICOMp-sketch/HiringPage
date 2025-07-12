// Auto-fill the position title in the form when Apply Now is clicked
const applyButtons = document.querySelectorAll('.apply-btn');
const applicantRoleInput = document.getElementById('applicantRole');

applyButtons.forEach(button => {
  button.addEventListener('click', () => {
    const role = button.getAttribute('data-role');
    applicantRoleInput.value = role;
    document.getElementById('applicationForm').scrollIntoView({ behavior: 'smooth' });
  });
});

// Handle form submission
document.getElementById('hireForm').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Your application has been submitted successfully!');
  this.reset();
});