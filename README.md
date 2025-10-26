AboutMeWebsite - quick deploy guide
Files:
 - index.html
 - newday.css
 - script.js
 - Icon.png (your image)   <-- make sure this exists

How to test locally:
 1. Put all files in one folder.
 2. Double-click index.html or right-click -> Open with -> choose your browser.
 3. Test the form and the "Get a motivational quote" button (requires internet).

Publish online (free, easiest: GitHub Pages):
 A) Create a GitHub account (github.com) if you don't have one.
 B) Create a new repository (e.g., "aboutme-nishant").
 C) Upload all project files (you can drag-and-drop).
 D) Go to repository Settings -> Pages -> Source -> choose "main" branch and root folder (/) -> Save.
 E) After a minute, GitHub gives you a URL like: https://<your-username>.github.io/aboutme-nishant/
    Open it to see your site.

Other hosts: Netlify or Vercel allow drag-and-drop or linking the Git repo for continuous deploy.

Custom domain:
 - Buy a domain from a registrar (Namecheap, Google Domains).
 - In GitHub Pages/Netlify, add the domain in settings and follow their DNS instructions (create A/ALIAS or CNAME records).
 - The host will guide you; it may take up to 24-48 hours to propagate (DNS).

Security & firewall basics (for static sites):
 - Static sites on GitHub Pages/Netlify are served over HTTPS automatically.
 - There is no server to secure (no backend), so nd
