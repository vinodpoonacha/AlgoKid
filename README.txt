ALGO KID — Installable PWA package
===================================

This folder is a complete Progressive Web App. Once it's served from a web
address (https://...), Chrome/Edge/Safari will offer to INSTALL it, and it
will run FULL-SCREEN and OFFLINE with the Algo robot icon.

Files:
  index.html            The whole app (self-contained).
  manifest.json         App name, colors, icons (makes it installable).
  service-worker.js     Caches the app so it works with no internet.
  icons/                App icons (192, 512, maskable, apple, favicon).

IMPORTANT: Opening index.html directly as a file (file:///...) will NOT show
the Install option and the service worker will NOT run. That is a browser
security rule — a PWA must be served over https (or http://localhost).

--------------------------------------------------------------------
EASIEST WAYS TO PUT IT ONLINE (pick one)
--------------------------------------------------------------------

A) Netlify Drop (no coding)
   1. Go to  https://app.netlify.com/drop
   2. Drag this whole folder onto the page (or zip it and drop the zip).
   3. You get an https link. Open it in Chrome.
   4. Chrome menu (three dots) -> "Install app" / "Add to Home screen".

B) Cloudflare Pages / GitHub Pages
   - Upload the folder contents to a repo/project and enable Pages.
   - Open the resulting https link and Install from the browser menu.

C) Test offline on your own computer first (optional, needs Python)
   1. Open a terminal in this folder.
   2. Run:   python3 -m http.server 8000
   3. Visit  http://localhost:8000  in Chrome.
   4. Install from the menu; then turn off Wi-Fi to confirm it still works.

--------------------------------------------------------------------
INSTALLING ON DEVICES (after it has an https link)
--------------------------------------------------------------------
  Android (Chrome):  Menu -> "Install app" (or "Add to Home screen").
  iPhone/iPad (Safari): Share -> "Add to Home Screen".
  Desktop (Chrome/Edge): Install icon in the address bar, or
                         Menu -> Cast, save and share -> Install page as app.

The app saves stars, streaks, badges and progress on each device.
No data leaves the device; there are no ads and no accounts.
