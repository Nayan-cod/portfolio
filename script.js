// Typed Text
document.addEventListener('DOMContentLoaded', () => {
    const typed = new Typed('.typing-text', {
        strings: ['AI & ML Engineer', 'Backend Developer'],
        typeSpeed: 70,
        backSpeed: 70,
        backDelay: 1000,
        loop: true,
    });
});






document.addEventListener("DOMContentLoaded", function () {
    const aboutSection = document.querySelector("#about");
    const hiddenElements = document.querySelectorAll('.fade-in-hidden');

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("fade-in-visible");
                    if (entry.target.classList.contains("about-container")) { // Updated class check
                        entry.target.classList.add("fade-in");
                    }
                }
            });
        },
        { threshold: 0.1 } // Lower threshold
    );

    if (aboutSection) observer.observe(aboutSection);
    hiddenElements.forEach((el) => observer.observe(el));

    // Fallback: If no intersection observer support (rare) or fails, make visible
    setTimeout(() => {
        hiddenElements.forEach(el => el.classList.add('fade-in-visible'));
    }, 1000); // 1-second fallback just to be safe for "not shown" issue

    // Project Modal Logic
    const projectModal = new bootstrap.Modal(document.getElementById('projectModal'));
    const viewButtons = document.querySelectorAll('.view-details-btn');

    viewButtons.forEach(button => {
        button.addEventListener('click', function () {
            const title = this.getAttribute('data-title');
            const contentId = this.getAttribute('data-content-id');
            const link = this.getAttribute('data-link');

            const modalBody = document.querySelector('#projectModal .modal-body');

            // Set Title
            document.getElementById('projectModalLabel').textContent = title;

            // Set Link
            document.getElementById('projectModalLink').href = link;

            if (contentId) {
                // Rich Content Mode
                const contentTemplate = document.getElementById(contentId);
                if (contentTemplate) {
                    modalBody.innerHTML = contentTemplate.innerHTML;
                }
            } else {
                // Standard Content Mode (restore original structure if needed)
                const desc = this.getAttribute('data-desc');
                const skills = this.getAttribute('data-skills');

                modalBody.innerHTML = `
                    <p id="projectModalDesc" style="font-size: 1.1rem; line-height: 1.6;">${desc}</p>
                    <hr style="border-color: var(--light-text-clr); opacity: 0.2;">
                    <h6 style="color: var(--global-clr);">Skills Learned/Used:</h6>
                    <p id="projectModalSkills" style="color: var(--light-text-clr);">${skills}</p>
                `;
            }

            projectModal.show();
        });
    });

    // Image Modal Logic
    const imageModal = new bootstrap.Modal(document.getElementById('imageModal'));
    const viewCertButtons = document.querySelectorAll('.view-cert-btn');
    const modalImage = document.getElementById('modalImage');

    viewCertButtons.forEach(button => {
        button.addEventListener('click', function () {
            const imgSrc = this.getAttribute('data-img');
            modalImage.src = imgSrc;
            imageModal.show();
        });
    });
});





