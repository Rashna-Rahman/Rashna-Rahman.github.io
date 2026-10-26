/* =============================================================
   Rashna Rahman Richita | Portfolio script
   EDIT THE SETTINGS BELOW. Everything else runs automatically.
   ============================================================= */

/* ---------- 1. Your links ----------
   Leave a value as "" to hide that link everywhere on the site. */
const LINKS = {
  github:   "https://github.com/Rashna-Rahman",
  linkedin: "https://www.linkedin.com/in/rashna-rahman-richita-b24a04343/",
  email:    "richita.rashna.cse@gmail.com",
  phone:    "+8801331766893"                 // used for the tap-to-call link
};

/* ---------- 2. Introduction video ----------
   Option A: put your file at assets/videos/introduction.mp4 (nothing to change here).
   Option B: paste a YouTube link below, e.g. "https://www.youtube.com/watch?v=XXXXXXXXXXX".
   If both exist, YouTube is used. */
const YOUTUBE_URL = "";

/* ---------- 2b. Documents ----------
   cv:          your CV file (already in place).
   coverLetter: leave "" until your cover letter is ready. Then save it as
                assets/documents/Cover_Letter.pdf and set:
                coverLetter: "assets/documents/Cover_Letter.pdf"
                The Cover Letter buttons appear automatically. */
const DOCUMENTS = {
  cv:          "assets/documents/CV.pdf",
  coverLetter: ""
};

/* ---------- 3. Projects ----------
   To add a project, copy one { ... } block, paste it at the end and edit it.
   type:     "Individual Project" or "Group Project" (creates the filter buttons)
   icon:     one of code, cpu, db, globe, shield, calendar, shapes, map
   color:    "blue" or "teal"
   github / demo: leave "" until you have a real link (the button stays hidden). */
const PROJECTS = [
  {
    title: "Glow At Home",
    type: "Individual Project",
    category: "Web Application",
    icon: "globe",
    color: "teal",
    summary: "Beauty service booking web app with user accounts, appointment booking and an admin panel.",
    description: "Developed a web-based beauty service booking application supporting user registration, login, service browsing, and appointment booking. Implemented an admin panel for viewing, accepting, and deleting customer bookings, and integrated Firebase Firestore for storing and managing booking data.",
    highlights: [
      "User registration, login and service browsing",
      "Appointment booking",
      "Admin panel for viewing, accepting and deleting bookings",
      "Firebase Firestore for storing and managing booking data"
    ],
    tech: ["React.js", "JavaScript", "HTML", "CSS", "Firebase Firestore", "Tailwind CSS", "Vite", "Lucide React"],
    github: "",
    demo: ""
  },
  {
    title: "Dream Maze",
    type: "Individual Project",
    category: "Browser Game",
    icon: "shapes",
    color: "blue",
    summary: "Browser-based maze game with multiple levels, generated mazes and unusual gameplay challenges.",
    description: "Developed an interactive browser-based maze game featuring multiple levels, dynamically generated mazes, scoring, lives, and gameplay challenges. Implemented gameplay mechanics including gravity shifts, reversed controls, disappearing walls, dark vision, rotating mazes, fake doors, teleportation, and morphing mazes.",
    highlights: [
      "Multiple levels with dynamically generated mazes",
      "Scoring and lives",
      "Gravity shifts, reversed controls and disappearing walls",
      "Dark vision, rotating and morphing mazes, fake doors and teleportation"
    ],
    tech: ["JavaScript", "HTML", "CSS", "Phaser 3", "Arcade Physics"],
    github: "",
    demo: ""
  },
  {
    title: "AIUB Make-Up Class Management System",
    type: "Individual Project",
    category: "Desktop Application",
    icon: "calendar",
    color: "teal",
    summary: "Desktop system for requesting and scheduling make-up classes, with separate student and faculty interfaces.",
    description: "Developed a desktop-based Make-Up Class Management System to simplify the process of requesting, managing, and scheduling make-up classes for students and faculty members. The application provides separate interfaces for students and faculty, with database connectivity for managing academic information and class requests.",
    highlights: [
      "Separate student and faculty login",
      "Make-up class requests by course, section, date and reason",
      "Request history and notifications with refresh",
      "Class scheduling by section, classroom, date and time slot (minimum 15 students)",
      "Oracle Database integration using JDBC"
    ],
    tech: ["Java", "Java Swing", "JDBC", "Oracle Database", "SQL"],
    github: "",
    demo: ""
  },
  {
    title: "Event Management System",
    type: "Group Project",
    category: "Desktop Application",
    icon: "calendar",
    color: "blue",
    summary: "Desktop event management application with separate interfaces for managers and employees.",
    description: "Developed a desktop-based event management application with separate interfaces for managers and employees. Implemented registration and login, event and package selection, task management, project status tracking, and database connectivity.",
    highlights: [
      "Separate manager and employee interfaces",
      "Registration and login",
      "Event and package selection, task management",
      "Project status tracking and database connectivity"
    ],
    tech: ["C#", ".NET", "Windows Forms", "SQL Server", "Visual Studio"],
    github: "",
    demo: ""
  },
  {
    title: "Computer Graphics & Animation Project",
    type: "Group Project",
    category: "Computer Graphics",
    icon: "shapes",
    color: "teal",
    summary: "Interactive 2D graphics application with animated scenes, lighting and smoke effects.",
    description: "Developed an interactive 2D computer graphics application containing multiple animated scenes and objects. Implemented moving cars and trains, day and night scenes, lighting, smoke effects, and keyboard and mouse interactions.",
    highlights: [
      "Multiple animated scenes and objects",
      "Moving cars and trains, day and night scenes",
      "Lighting and smoke effects",
      "Keyboard and mouse interactions"
    ],
    tech: ["C++", "OpenGL", "GLUT", "Computer Graphics"],
    github: "",
    demo: ""
  },
  {
    title: "Travel Management System",
    type: "Group Project",
    category: "Desktop Application",
    icon: "map",
    color: "blue",
    summary: "Java application for exploring domestic tour destinations and packages, with admin and manager interfaces.",
    description: "Developed a Java-based travel management application for exploring domestic tour destinations and packages. Implemented user registration and login, destination and package selection, passenger and member management, admin and manager interfaces, and payment functionality.",
    highlights: [
      "User registration and login",
      "Destination and package selection",
      "Passenger and member management",
      "Admin and manager interfaces, payment functionality"
    ],
    tech: ["Java", "Java Swing", "File Handling", "GUI Programming"],
    github: "",
    demo: ""
  }
];

/* =============================================================
   Site behaviour (no need to edit below this line)
   ============================================================= */
document.addEventListener("DOMContentLoaded", () => {
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
  const icon = (name) => `<svg class="icon" aria-hidden="true"><use href="#i-${name}"/></svg>`;
  const escapeHTML = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  requestAnimationFrame(() => document.documentElement.classList.add("loaded"));

  /* ---- Links from settings ---- */
  const hrefFor = {
    github: LINKS.github,
    linkedin: LINKS.linkedin,
    email: LINKS.email ? "mailto:" + LINKS.email : "",
    phone: LINKS.phone ? "tel:" + LINKS.phone : ""
  };
  $$("[data-config]").forEach((el) => {
    const href = hrefFor[el.dataset.config];
    if (href) el.href = href;
    else {
      const row = el.closest("[data-config-row]") || el.closest("li") || el;
      row.hidden = true;
    }
  });

  /* ---- Mobile menu ---- */
  const menuBtn = $("#menu-btn");
  const navLinks = $("#nav-links");
  const setMenu = (open) => {
    navLinks.classList.toggle("open", open);
    menuBtn.setAttribute("aria-expanded", String(open));
    $(".sr-only", menuBtn).textContent = open ? "Close menu" : "Open menu";
  };
  menuBtn.addEventListener("click", () => setMenu(menuBtn.getAttribute("aria-expanded") !== "true"));
  $$("a", navLinks).forEach((a) => a.addEventListener("click", () => setMenu(false)));
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && navLinks.classList.contains("open")) { setMenu(false); menuBtn.focus(); }
  });

  /* ---- Header shadow, back-to-top button ---- */
  const header = $("#header");
  const toTop = $("#to-top");
  const onScroll = () => {
    header.classList.toggle("scrolled", window.scrollY > 8);
    toTop.classList.toggle("show", window.scrollY > 700);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---- Active nav link + reveal animations ---- */
  const navAnchors = $$('#nav-links a[href^="#"]');
  if ("IntersectionObserver" in window) {
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navAnchors.forEach((a) => {
          const on = a.getAttribute("href") === "#" + entry.target.id;
          a.classList.toggle("active", on);
          on ? a.setAttribute("aria-current", "true") : a.removeAttribute("aria-current");
        });
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    navAnchors.forEach((a) => {
      const target = document.querySelector(a.getAttribute("href"));
      if (target) sectionObserver.observe(target);
    });

    const revealObserver = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) { entry.target.classList.add("visible"); obs.unobserve(entry.target); }
      });
    }, { rootMargin: "0px 0px -8% 0px" });
    $$(".reveal").forEach((el) => revealObserver.observe(el));
  } else {
    $$(".reveal").forEach((el) => el.classList.add("visible"));
  }

  /* ---- Projects: cards, filters, modal ---- */
  const grid = $("#project-grid");
  const filters = $("#filters");
  const empty = $("#empty-state");

  grid.innerHTML = PROJECTS.map((p, i) => `
    <article class="project-card" data-type="${escapeHTML(p.type)}">
      <div class="project-art ${p.color === "teal" ? "art-teal" : ""}" aria-hidden="true">
        <div class="project-icon">${icon(p.icon)}</div>
      </div>
      <div class="project-body">
        <p class="project-meta">${escapeHTML(p.category)}<span class="sep">·</span>${escapeHTML(p.type)}</p>
        <h3>${escapeHTML(p.title)}</h3>
        <p>${escapeHTML(p.summary)}</p>
        <ul class="chips" aria-label="Technologies">${p.tech.map((t) => `<li>${escapeHTML(t)}</li>`).join("")}</ul>
        <div class="project-actions">
          <button type="button" class="btn btn-outline btn-sm" data-open="${i}" aria-label="View details of ${escapeHTML(p.title)}">View Details</button>
          ${p.github ? `<a class="btn btn-ghost btn-sm" href="${escapeHTML(p.github)}" target="_blank" rel="noopener">${icon("github")}Code</a>` : ""}
          ${p.demo ? `<a class="btn btn-ghost btn-sm" href="${escapeHTML(p.demo)}" target="_blank" rel="noopener">Live demo</a>` : ""}
        </div>
      </div>
    </article>`).join("");

  const categories = ["All", ...new Set(PROJECTS.map((p) => p.type))];
  filters.innerHTML = categories.map((c, i) =>
    `<button type="button" class="filter-btn" data-filter="${escapeHTML(c)}" aria-pressed="${i === 0}">${escapeHTML(c)}</button>`
  ).join("");

  filters.addEventListener("click", (e) => {
    const btn = e.target.closest(".filter-btn");
    if (!btn) return;
    $$(".filter-btn", filters).forEach((b) => b.setAttribute("aria-pressed", String(b === btn)));
    let shown = 0;
    $$(".project-card", grid).forEach((card) => {
      const match = btn.dataset.filter === "All" || card.dataset.type === btn.dataset.filter;
      card.hidden = !match;
      if (match) shown++;
    });
    empty.hidden = shown > 0;
  });

  const modal = $("#project-modal");
  let lastFocus = null;

  grid.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-open]");
    if (!btn) return;
    const p = PROJECTS[Number(btn.dataset.open)];
    lastFocus = btn;
    $("#modal-icon").innerHTML = icon(p.icon);
    $("#modal-meta").textContent = `${p.category} · ${p.type}`;
    $("#modal-title").textContent = p.title;
    $("#modal-desc").textContent = p.description;
    $("#modal-highlights").innerHTML = p.highlights.map((h) => `<li>${escapeHTML(h)}</li>`).join("");
    $("#modal-tech").innerHTML = p.tech.map((t) => `<li>${escapeHTML(t)}</li>`).join("");
    $("#modal-links").innerHTML =
      (p.github ? `<a class="btn btn-primary btn-sm" href="${escapeHTML(p.github)}" target="_blank" rel="noopener">${icon("github")}View code</a>` : "") +
      (p.demo ? `<a class="btn btn-outline btn-sm" href="${escapeHTML(p.demo)}" target="_blank" rel="noopener">Live demo</a>` : "");
    if (typeof modal.showModal === "function") modal.showModal();
    else modal.setAttribute("open", "");
  });

  const closeModal = () => (typeof modal.close === "function" ? modal.close() : modal.removeAttribute("open"));
  $("#modal-close").addEventListener("click", closeModal);
  modal.addEventListener("click", (e) => { if (e.target === modal) closeModal(); }); // click on backdrop
  modal.addEventListener("close", () => lastFocus && lastFocus.focus());           // Escape also closes (built in)

  /* ---- Introduction video ---- */
  const video = $("#intro-video");
  const placeholder = $("#video-placeholder");
  const frame = $("#video-frame");

  const youtubeId = (() => {
    const m = YOUTUBE_URL.match(/(?:youtu\.be\/|v=|embed\/|shorts\/)([\w-]{11})/);
    return m ? m[1] : "";
  })();

  if (youtubeId) {
    video.remove();
    placeholder.hidden = true;
    const iframe = document.createElement("iframe");
    iframe.src = `https://www.youtube-nocookie.com/embed/${youtubeId}`;
    iframe.title = "Introduction video of Rashna Rahman Richita";
    iframe.allow = "accelerometer; encrypted-media; gyroscope; picture-in-picture";
    iframe.allowFullscreen = true;
    iframe.loading = "lazy";
    frame.appendChild(iframe);
  } else {
    // Placeholder stays visible unless the MP4 actually loads.
    video.addEventListener("loadedmetadata", () => { video.hidden = false; placeholder.hidden = true; });
    const fail = () => { video.hidden = true; placeholder.hidden = false; };
    video.addEventListener("error", fail);
    $("source", video).addEventListener("error", fail);
  }

  /* ---- Cover letter: show buttons only when it is set ---- */
  const hasCover = Boolean(DOCUMENTS.coverLetter);
  $$('[data-doc="cover"]').forEach((el) => {
    el.hidden = !hasCover;
    $$("a", el).concat(el.tagName === "A" ? [el] : []).forEach((a) => { if (hasCover) a.href = DOCUMENTS.coverLetter; });
  });
  $$('[data-doc-pending="cover"]').forEach((el) => { el.hidden = hasCover; });

  /* ---- Real downloads for CV / cover letter ----
     Browsers ignore the "download" attribute when the page is opened from a file
     (file://) and just show the PDF. This makes the button save the file instead. */
  const toast = $("#toast");
  let toastTimer;
  const showToast = (msg) => {
    toast.textContent = msg;
    toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("show"), 3200);
  };

  const saveBlob = (blob, filename) => {
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1500);
  };

  const base64ToBlob = (b64) => {
    const bytes = atob(b64);
    const arr = new Uint8Array(bytes.length);
    for (let i = 0; i < bytes.length; i++) arr[i] = bytes.charCodeAt(i);
    return new Blob([arr], { type: "application/pdf" });
  };

  const loadOfflineFiles = () => new Promise((resolve) => {
    if (window.OFFLINE_FILES) return resolve(window.OFFLINE_FILES);
    const s = document.createElement("script");
    s.src = "assets/documents/offline-files.js";
    s.onload = () => resolve(window.OFFLINE_FILES || {});
    s.onerror = () => resolve({});
    document.head.appendChild(s);
  });

  document.addEventListener("click", async (e) => {
    const link = e.target.closest("a[data-download]");
    if (!link) return;
    e.preventDefault();
    const path = link.getAttribute("href");
    const filename = link.getAttribute("download") || path.split("/").pop();
    try {
      const res = await fetch(path);
      if (!res.ok) throw new Error("HTTP " + res.status);
      saveBlob(await res.blob(), filename);
      showToast("Download started: " + filename);
    } catch {
      const offline = await loadOfflineFiles();
      if (offline[path]) {
        saveBlob(base64ToBlob(offline[path]), filename);
        showToast("Download started: " + filename);
      } else {
        window.open(path, "_blank", "noopener");
        showToast("Opened in a new tab. Use the download button there to save it.");
      }
    }
  });

  /* ---- Footer year ---- */
  $("#year").textContent = new Date().getFullYear();
});
