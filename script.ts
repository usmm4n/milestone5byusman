// script.ts
document.addEventListener('DOMContentLoaded', () => {
    const generateResumeButton = document.getElementById('generateResume') as HTMLButtonElement;
    const editResumeButton = document.getElementById('editResume') as HTMLButtonElement;
    const copyLinkButton = document.getElementById('copyLink') as HTMLButtonElement;
    const resumeForm = document.getElementById('resumeForm') as HTMLFormElement;
    const resumeOutput = document.getElementById('resumeOutput') as HTMLDivElement;
    const resumeContent = document.getElementById('resumeContent') as HTMLDivElement;
    const resumeLinkInput = document.getElementById('resumeLink') as HTMLInputElement;

    generateResumeButton.addEventListener('click', (event) => {
        event.preventDefault();

        const formData = new FormData(resumeForm);

        const name = formData.get('name') as string;
        const email = formData.get('email') as string;
        const phone = formData.get('phone') as string;
        const education = formData.get('education') as string;
        const experience = formData.get('experience') as string;
        const skills = formData.get('skills') as string;

        // Handle profile image
        const profileImage = formData.get('profileImage') as File;
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
