
// Fade in animation for sections
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".fade-in-section");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    {
      threshold: 0.2,
      rootMargin: "0px"
    }
  );

  sections.forEach((section) => {
    observer.observe(section);
  });

  // Timeline interaction (only on experience.html)
  if (window.location.pathname.includes('experience.html')) {
    const experienceDetails = {
      "kitopi": `<strong>Brand Marketing Manager | Kitopi LLC | 2023 – Present</strong><br><br>
        Leading strategic marketing activations and data-driven multi-channel campaigns across a $20M brand portfolio in GCC markets...`,
      "wild": `<strong>Brand & Communications Manager | Wild & The Moon | 2020 - 2023</strong><br><br>
        Spearheaded growth and building brand excellence through innovative 360-degree marketing strategies...`,
      "letswork": `<strong>Community Manager | Letswork | 2020</strong><br><br>
        Partnered with hospitality brands and influencers to enhance brand visibility...`,
      "tamimi": `<strong>Management Trainee | Al Tamimi & Company | 2019 – 2020</strong><br><br>
        Supported business strategy, compliance, marketing teams, and other stakeholders...`,
      "fitze": `<strong>Events Intern | Fitze | 2017 – 2019</strong><br><br>
        Assisted in event planning and coordination to deliver seamless experiences...`
    };

    document.querySelectorAll(".timeline-item").forEach(item => {
      item.addEventListener("click", () => {
        const key = item.getAttribute("data-key");
        const detailsElement = document.getElementById("experience-details");
        
        if (detailsElement && experienceDetails[key]) {
          detailsElement.innerHTML = experienceDetails[key];
          
          if (window.innerWidth <= 768) {
            detailsElement.scrollIntoView({ behavior: 'smooth' });
          }
        }
      });
    });
  }
});
