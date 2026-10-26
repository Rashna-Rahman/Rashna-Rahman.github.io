# Rashna Rahman Richita — Personal Portfolio

A responsive, light-themed personal portfolio website for **Rashna Rahman Richita**, Computer Science and Engineering undergraduate at American International University-Bangladesh (AIUB).

Built with plain **HTML, CSS and JavaScript**. You don't need Node.js, a build step, a database or a server. It runs by opening `index.html`, and it can be hosted for free on GitHub Pages.

---

## 1. Folder structure

```
portfolio/
├── index.html                 ← all page text and sections
├── css/
│   └── style.css              ← all design (colors at the very top)
├── js/
│   └── script.js              ← links, video, projects (settings at the very top)
├── assets/
│   ├── images/profile.jpg     ← your portrait
│   ├── documents/CV.pdf       ← your CV (already included)
│   ├── documents/offline-files.js ← saved copy for offline downloads
│   ├── documents/Cover_Letter.pdf ← add later
│   ├── videos/                ← put introduction.mp4 here later
│   └── icons/favicon.svg      ← browser tab icon
├── tools/offline-copy-maker.html ← refreshes the offline copy
└── README.md
```

## 2. Open the site on your computer

- **Simplest:** double-click `index.html`.
- **In VS Code:** open the `portfolio` folder, install the **Live Server** extension, right-click `index.html`, then choose **Open with Live Server**. The page reloads automatically each time you save.

## 3. Where to change what

| I want to change… | Open this file | Where |
|---|---|---|
| Name, headline, intro text, About text, “At a glance” card | `index.html` | `HERO` and `ABOUT` sections |
| Skills | `index.html` | `SKILLS` section, edit the `<li>` items |
| Projects (add, edit, links) | `js/script.js` | `PROJECTS` list at the top |
| GitHub / LinkedIn / email / phone links | `js/script.js` | `LINKS` at the top |
| Introduction video | `assets/videos/` or `js/script.js` | see section 6 |
| Research, education, achievements, certification | `index.html` | the matching section |
| Colors | `css/style.css` | `:root` block at the very top |
| Section order | `index.html` | move a whole `<section> … </section>` block |

## 4. Replace the profile photo

Save your new photo as `assets/images/profile.jpg`, replacing the old file. A portrait photo (taller than wide, about 4:5) looks best. The site crops it automatically.

## 5. CV and cover letter

**CV:** your CV is at `assets/documents/CV.pdf`. Every **Download CV** button (header, mobile menu, hero, Contact) saves this file as `Rashna_Rahman_Richita_CV.pdf`. The Contact section also has a **View** button that opens it in a new tab.
To update it, replace `assets/documents/CV.pdf` with your new CV, keeping the name exactly `CV.pdf`.

**Cover letter:** the Contact section shows “Cover Letter — Coming soon” until you add it.
1. Save your cover letter as a PDF named `Cover_Letter.pdf`.
2. Put it in `assets/documents/`.
3. Open `js/script.js` and set:
   ```js
   const DOCUMENTS = {
     cv:          "assets/documents/CV.pdf",
     coverLetter: "assets/documents/Cover_Letter.pdf"
   };
   ```
4. Refresh. A **Cover Letter** button appears in the hero, and View and Download buttons appear in Contact.

**Why downloads work even offline:** when `index.html` is opened by double-clicking (a `file://` address), browsers ignore normal download links and just show the PDF. The site handles this itself:
- On GitHub Pages or Live Server it downloads the real file from `assets/documents/`.
- When opened by double-clicking, it uses a saved copy in `assets/documents/offline-files.js`.

If you replace your CV or add your cover letter **and** you demo by double-clicking, refresh that saved copy:
open `tools/offline-copy-maker.html`, choose your PDFs, click **Create offline-files.js**, and move the downloaded file into `assets/documents/` (replace the old one). Without this step, the offline Download button opens the PDF in a new tab instead.

## 6. Add your introduction video

**Option A: your own video file**
1. Export the video as **MP4 (H.264)**. Most phone and editing apps do this by default.
2. Rename it to `introduction.mp4`.
3. Put it in `assets/videos/`.
4. Refresh the page. The player appears automatically.

**Option B: YouTube**
Open `js/script.js` and paste your link:
```js
const YOUTUBE_URL = "https://www.youtube.com/watch?v=XXXXXXXXXXX";
```

Until either option is set, visitors see the “My introduction video is coming soon.” placeholder, never a broken player.

> Large videos make the site slow and GitHub rejects files over 100 MB. Keep the MP4 short (1–2 minutes) or use YouTube.

## 7. Update GitHub and LinkedIn links

In `js/script.js`:
```js
const LINKS = {
  github:   "https://github.com/Rashna-Rahman",
  linkedin: "https://www.linkedin.com/in/rashna-rahman-richita-b24a04343/",
  ...
};
```
Any link left as `""` is **hidden** everywhere: hero, contact and footer.

## 8. Edit projects and skills

**Projects:** in `js/script.js`, each project is one `{ ... }` block in the `PROJECTS` list. To add one, copy a block, paste it after the last one (keep the comma between blocks), and edit the text.
- `type` ("Individual Project" or "Group Project") creates the filter buttons automatically.
- `category` is the small label shown on the card (e.g. Web Application).
- `github` and `demo`: put a real URL to show a **Code** or **Live demo** button. Leave it `""` to hide the button.
- `icon`: `code`, `cpu`, `db`, `globe`, `shield`, `calendar`, `shapes` or `map`.

**Skills:** in `index.html`, each category is an `<article class="skill-card">`. Add or remove `<li>` items, or copy a whole card to make a new category.

## 9. Change the theme colors

At the top of `css/style.css`:
```css
:root {
  --accent: #1f3fbf;   /* main blue */
  --teal:   #0d8a7b;   /* secondary accent */
  --bg:     #fbfbfd;   /* page background */
  ...
}
```
Changing a value here updates the whole site.

## 10. Upload to GitHub

1. On GitHub, create a **new public repository**, for example `portfolio`. Do not add a README there.
2. Open a terminal **inside the `portfolio` folder** and run:

```bash
git init
git add .
git commit -m "Initial portfolio website"
git branch -M main
git remote add origin https://github.com/Rashna-Rahman/REPOSITORY-NAME.git
git push -u origin main
```

Replace **`REPOSITORY-NAME`** with the actual name of the repository you created.

## 11. Turn on GitHub Pages

1. In your repository, open **Settings → Pages**.
2. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
3. Choose branch **main** and folder **/ (root)**, then click **Save**.

## 12. Find your website address

After a minute or two, the Pages settings page shows your link. It will look like:
```
https://rashna-rahman.github.io/REPOSITORY-NAME/
```
If you name the repository `Rashna-Rahman.github.io`, the address is simply `https://rashna-rahman.github.io/`.

The site only becomes public after you create the repository and enable Pages. All paths in this project are relative, so it works from either address.

## 13. Update the site later

Edit your files, then run:
```bash
git add .
git commit -m "Describe what you changed"
git push
```
GitHub Pages republishes automatically within a minute or two.

---

## Checklist

**Working now**
- Responsive layout (desktop, laptop, tablet, mobile), sticky header and mobile menu
- Smooth scrolling and active section highlighting in the navigation
- Download CV buttons (header, mobile menu, hero, Contact) that really download the file, also offline
- Cover letter option (appears once you set `DOCUMENTS.coverLetter`)
- GitHub, email and phone links
- Project cards generated from `js/script.js`, Individual / Group filters, empty state
- Project detail popup: close button, Escape key, click outside
- Video placeholder that switches to the player when the file exists, plus optional YouTube support
- Contact section with email, phone, GitHub and LinkedIn links (no form)
- Back-to-top button, footer year updates automatically
- Keyboard focus styles, skip link, reduced-motion support

**Needs your input**
- Cover letter → `assets/documents/Cover_Letter.pdf` and `DOCUMENTS.coverLetter`
- Introduction video → `assets/videos/introduction.mp4` or `YOUTUBE_URL`
- Project GitHub or demo links → `github` / `demo` in `PROJECTS` (hidden until added)
- Publishing → create the repository and enable GitHub Pages (sections 10–12)
