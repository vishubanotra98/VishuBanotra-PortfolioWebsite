const data = window.portfolioData;

const icon = (name) => {
  const brandIcons = {
    github: "fa-brands fa-github",
    linkedin: "fa-brands fa-linkedin",
  };

  if (brandIcons[name]) {
    return `<i class="${brandIcons[name]}" aria-hidden="true"></i>`;
  }

  return `<i data-lucide="${name}" aria-hidden="true"></i>`;
};

function renderProfile() {
  const { profile } = data;

  document.querySelectorAll('[data-profile-link="github"]').forEach((link) => {
    link.href = profile.github;
  });

  document
    .querySelectorAll('[data-profile-link="linkedin"]')
    .forEach((link) => {
      link.href = profile.linkedin;
    });

  document.querySelectorAll('[data-profile-link="email"]').forEach((link) => {
    link.href = `mailto:${profile.email}`;
  });

  document.querySelectorAll('[data-profile-text="email"]').forEach((item) => {
    item.textContent = profile.email;
  });
}

function renderSkills() {
  const skillsGrid = document.querySelector("#skillsGrid");

  skillsGrid.innerHTML = data.skills
    .map(
      (group) => `
        <article class="skill-card">
          <div class="card-icon">${icon(group.icon)}</div>
          <h3>${group.title}</h3>
          <div class="pill-list">
            ${group.items.map((item) => `<span>${item}</span>`).join("")}
          </div>
        </article>
      `,
    )
    .join("");
}

function renderExperience() {
  const timeline = document.querySelector("#experienceTimeline");

  timeline.innerHTML = data.experience
    .map(
      (item) => `
        <article class="timeline-item">
          <span class="timeline-dot"></span>
          <div class="timeline-period">${item.period}</div>
          <div class="timeline-content">
            <p>${item.company}</p>
            <h3>${item.role}</h3>
            <ul class="experience-list">
              ${item.bullets.map((bullet) => `<li>${bullet}</li>`).join("")}
            </ul>
            <div class="stack-list timeline-stack">
              ${item.stack.map((stackItem) => `<span>${stackItem}</span>`).join("")}
            </div>
          </div>
        </article>
      `,
    )
    .join("");
}

function renderProjects() {
  const projectGrid = document.querySelector("#projectGrid");

  projectGrid.innerHTML = data.projects
    .map((project) => {
      const projectLinks = [
        project.liveUrl &&
          `<a href="${project.liveUrl}" class="text-link" target="_blank" rel="noreferrer">
    Live Demo ${icon("arrow-up-right")}
  </a>`,

        project.repositories?.frontend &&
          `<a href="${project.repositories.frontend}" class="text-link" target="_blank" rel="noreferrer">
    Frontend ${icon("github")}
  </a>`,

        project.repositories?.backend &&
          `<a href="${project.repositories.backend}" class="text-link" target="_blank" rel="noreferrer">
    Backend ${icon("github")}
  </a>`,
      ]
        .filter(Boolean)
        .join("");

      return `
        <article class="project-card">
          <div class="project-meta">
            <span>${project.type}</span>
            <span>${project.year}</span>
          </div>
          <h3>${project.name}</h3>
          <p>${project.description}</p>
          <ul class="project-highlights">
            ${project.highlights.map((highlight) => `<li>${highlight}</li>`).join("")}
          </ul>
          <div class="stack-list">
            ${project.stack.map((item) => `<span>${item}</span>`).join("")}
          </div>
          ${projectLinks ? `<div class="project-links">${projectLinks}</div>` : ""}
        </article>
      `;
    })
    .join("");
}

function setupReveals() {
  const revealItems = document.querySelectorAll(
    ".reveal, .skill-card, .timeline-item, .project-card",
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16 },
  );

  revealItems.forEach((item, index) => {
    item.style.setProperty("--reveal-delay", `${Math.min(index * 55, 360)}ms`);
    observer.observe(item);
  });
}

function setupHeaderState() {
  const header = document.querySelector(".site-header");

  window.addEventListener(
    "scroll",
    () => {
      header.classList.toggle("is-scrolled", window.scrollY > 18);
    },
    { passive: true },
  );
}

renderProfile();
renderSkills();
renderExperience();
renderProjects();
setupReveals();
setupHeaderState();

window.addEventListener("load", () => {
  if (window.lucide) {
    window.lucide.createIcons();
  }
});
