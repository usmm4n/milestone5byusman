"use strict";
// script.ts
document.addEventListener('DOMContentLoaded', () => {
    const generateResumeButton = document.getElementById('generateResume');
    const editResumeButton = document.getElementById('editResume');
    const copyLinkButton = document.getElementById('copyLink');
    const resumeForm = document.getElementById('resumeForm');
    const resumeOutput = document.getElementById('resumeOutput');
    const resumeContent = document.getElementById('resumeContent');
    const resumeLinkInput = document.getElementById('resumeLink');
    generateResumeButton.addEventListener('click', (event) => {
        event.preventDefault();
        const formData = new FormData(resumeForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const phone = formData.get('phone');
        const education = formData.get('education');
        const experience = formData.get('experience');
        const skills = formData.get('skills');
        // Handle profile image
        const profileImage = formData.get('profileImage');
        const imageUrl = profileImage ? URL.createObjectURL(profileImage) : '';
        resumeContent.innerHTML = `
            <img src="${imageUrl}" alt="Profile Image">
            <h3>${name}</h3>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <h4>Education</h4>
            <p>${education}</p>
            <h4>Experience</h4>
            <p>${experience}</p>
            <h4>Skills</h4>
            <p>${skills}</p>
        `;
        // Generate a link to the resume content (as a temporary solution)
        const blob = new Blob([resumeContent.innerHTML], { type: 'text/html' });
        const url = URL.createObjectURL(blob);
        resumeLinkInput.value = url;
        // Show the resume output and hide the form
        resumeOutput.style.display = 'block';
        resumeForm.style.display = 'none';
    });
    editResumeButton.addEventListener('click', () => {
        // Hide the resume output and show the form
        resumeOutput.style.display = 'none';
        resumeForm.style.display = 'block';
    });
    copyLinkButton.addEventListener('click', () => {
        // Copy the resume link to the clipboard
        resumeLinkInput.select();
        document.execCommand('copy');
    });
});
