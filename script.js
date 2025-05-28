document.addEventListener("DOMContentLoaded", function () {
  // Mobile menu toggle
  const mobileMenu = document.getElementById("mobile-menu");
  const navLinks = document.getElementById("nav-links");

  mobileMenu.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
    navLinks.classList.toggle("show");
  });

  // Close mobile menu when clicking on a link
  document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("active");
      navLinks.classList.remove("show");
    });
  });

  // Back to top button
  const backToTop = document.getElementById("backToTop");
  window.addEventListener("scroll", () => {
    backToTop.style.display = window.scrollY > 300 ? "block" : "none";
  });
  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Contact form submission
  document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    document.getElementById("formMessage").textContent = "Thank you! Your message has been sent.";
    this.reset();
    setTimeout(() => {
      document.getElementById("formMessage").textContent = "";
    }, 3000);
  });

  // Project filtering
  const filterButtons = document.querySelectorAll(".filter-btn");
  const projectsGrid = document.getElementById("projects-grid");

  // Sample project data (can be replaced with API call or JSON file)
  const projects = [
    {
      title: "FoodieExpress",
      description: "A food ordering site with cart, checkout, and responsive UI.",
      category: "web",
      image: "images/foodie-express.jpg",
      links: {
        demo: "https://dilshanrathnayake.github.io/project_6/",
        code: "https://github.com/DilshanRathnayake/project_6.git"
      }
    },
    {
      title: "React_project",
      description: "An interactive React Project",
      category: "web",
      image: "images/math-quiz.jpg",
      links: {
        demo: "#",
        code: "https://github.com/DilshanRathnayake/React_project.git"
      }
    },
    {
      title: "Web_project",
      description: "My first web project using HTMl and CSS.",
      category: "web",
      image: "images/weather-app.jpg",
      links: {
        demo: "https://dilshanrathnayake.github.io/Web-project/"
        code: "https://github.com/DilshanRathnayake/web-project.git"
      }
    },
    {
      title: "Task Manager",
      description: "Productivity app to organize daily tasks with drag-and-drop.",
      category: "app",
      image: "images/task-manager.jpg",
      links: {
        demo: "#",
        code: "#"
      }
    },
    {
      title: "Space Invaders Game",
      description: "Classic arcade game built with JavaScript.",
      category: "game",
      image: "images/space-invaders.jpg",
      links: {
        demo: "#",
        code: "#"
      }
    },
    {
      title: "Portfolio Website",
      description: "Responsive portfolio website with modern design.",
      category: "web",
      image: "images/portfolio.jpg",
      links: {
        demo: "#",
        code: "#"
      }
    }
  ];

  // Load projects
  function loadProjects(filter = "all") {
    projectsGrid.innerHTML = "";
    
    const filteredProjects = filter === "all" 
      ? projects 
      : projects.filter(project => project.category === filter);
    
    filteredProjects.forEach(project => {
      const projectCard = document.createElement("div");
      projectCard.className = "project-card";
      projectCard.dataset.category = project.category;
      
      projectCard.innerHTML = `
        <img src="${project.image}" alt="${project.title}" class="project-img">
        <div class="project-content">
          <h3>${project.title}</h3>
          <p>${project.description}</p>
          <div class="project-links">
            <a href="${project.links.demo}" target="_blank">Live Demo</a>
            <a href="${project.links.code}" target="_blank">View Code</a>
          </div>
        </div>
      `;
      
      projectsGrid.appendChild(projectCard);
    });
  }

  // Initialize with all projects
  loadProjects();

  // Add event listeners to filter buttons
  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      // Remove active class from all buttons
      filterButtons.forEach(btn => btn.classList.remove("active"));
      // Add active class to clicked button
      button.classList.add("active");
      
      // Filter projects
      const filter = button.dataset.filter;
      loadProjects(filter);
    });
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
});


