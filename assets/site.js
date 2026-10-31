(() => {
"use strict";
const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ---------- icons ---------- */
const I = {
  qr:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><path d="M14 14h3v3M21 14v.01M14 21h3M21 18v3h-1"/></svg>',
  phone:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="6" y="2.5" width="12" height="19" rx="3"/><path d="M10.5 18.5h3"/></svg>',
  chat:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M4 5h16v11H9l-5 4z"/><path d="M8 9.5h8M8 12.5h5"/></svg>',
  bell:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M6 16V11a6 6 0 1 1 12 0v5l1.5 2h-15z"/><path d="M10 20.5a2 2 0 0 0 4 0"/></svg>',
  broom:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M14 3l-3.5 9M6 21l2-8.5h8L18 21z"/><path d="M10 21v-3M14 21v-3"/></svg>',
  food:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M3 16h18M5 16a7 7 0 0 1 14 0M12 9V7M4 19h16"/></svg>',
  wrench:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M15 4a5 5 0 0 0-5.6 6.6L3.5 16.5 7.5 20.5l5.9-5.9A5 5 0 0 0 20 9l-3 3-3-3z"/></svg>',
  sos:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 3l9.5 17h-19z"/><path d="M12 10v4.5M12 17.2v.01"/></svg>',
  desk:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M4 18h16M6 18v-6h12v6M12 12V8M9 8h6"/><circle cx="12" cy="5.5" r="1.5"/></svg>',
  dash:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="4" width="18" height="16" rx="2.5"/><path d="M7 16v-3M11 16V9M15 16v-5M19 8"/></svg>',
  card:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="5" width="18" height="14" rx="2.5"/><circle cx="9" cy="11" r="2"/><path d="M6 16c.6-1.4 1.7-2 3-2s2.4.6 3 2M15 10h3M15 13h3"/></svg>',
  bill:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M6 3h12v18l-2-1.5-2 1.5-2-1.5-2 1.5-2-1.5L6 21z"/><path d="M9 8h6M9 11.5h6M9 15h3"/></svg>',
  check:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="4" y="4" width="16" height="16" rx="3"/><path d="M8.5 12.5l2.5 2.5 4.5-5"/></svg>',
  users:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="9" cy="8.5" r="3.2"/><path d="M3.5 19c.8-3 3-4.5 5.5-4.5s4.7 1.5 5.5 4.5"/><circle cx="17" cy="9.5" r="2.4"/><path d="M15.8 14.6c2.2.2 3.8 1.6 4.4 4"/></svg>',
  clock:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/></svg>',
  bolt:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M13 3L5 13.5h6L10 21l8-10.5h-6z"/></svg>',
  layers:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 3l9 5-9 5-9-5z"/><path d="M3 12.5l9 5 9-5M3 16.5l9 5 9-5"/></svg>',
  sparkle:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 3c.7 4.5 2.5 6.3 7 7-4.5.7-6.3 2.5-7 7-.7-4.5-2.5-6.3-7-7 4.5-.7 6.3-2.5 7-7z"/></svg>',
  wifi:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M3 9.5a13 13 0 0 1 18 0M6 13a8.5 8.5 0 0 1 12 0M9 16.5a4 4 0 0 1 6 0"/><circle cx="12" cy="19.5" r="1" fill="currentColor"/></svg>',
  plug:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M9 3v5M15 3v5M6.5 8h11v3a5.5 5.5 0 0 1-11 0zM12 16.5V21"/></svg>',
  pad:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3.5" y="4" width="17" height="16" rx="3"/><path d="M3.5 15h17M12 15v5"/></svg>',
  monitor:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="4" width="18" height="12" rx="2"/><path d="M9 20h6M12 16v4"/><path d="M10.5 8.5l3.5 1.5-3.5 1.5z" fill="currentColor"/></svg>',
  keyboard:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="2.5" y="6" width="19" height="12" rx="2.5"/><path d="M6 10h.01M9 10h.01M12 10h.01M15 10h.01M18 10h.01M6 13h.01M18 13h.01M8.5 15h7"/></svg>',
  mic:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5.5 11a6.5 6.5 0 0 0 13 0M12 17.5V21"/></svg>',
  apps:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="4" y="4" width="6.5" height="6.5" rx="1.8"/><rect x="13.5" y="4" width="6.5" height="6.5" rx="1.8"/><rect x="4" y="13.5" width="6.5" height="6.5" rx="1.8"/><path d="M16.75 13.5v6.5M13.5 16.75H20"/></svg>',
  sliders:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M5 4v16M12 4v16M19 4v16"/><circle cx="5" cy="14" r="2" fill="var(--ink)"/><circle cx="12" cy="8" r="2" fill="var(--ink)"/><circle cx="19" cy="16" r="2" fill="var(--ink)"/></svg>',
  clip:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="5" y="4.5" width="14" height="16.5" rx="2.5"/><rect x="9" y="3" width="6" height="3.5" rx="1"/><path d="M8.5 11h7M8.5 14.5h5"/></svg>',
  folder:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M12 10.5v5M9.5 13l2.5 2.5 2.5-2.5"/></svg>',
  key:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="8" cy="15" r="4"/><path d="M11 12l8.5-8.5M16 7l2.5 2.5M14 9l2 2"/></svg>',
  shield:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 3l7.5 3v5.5c0 4.5-3.2 8.3-7.5 9.5-4.3-1.2-7.5-5-7.5-9.5V6z"/><path d="M9 12l2.2 2.2L15.5 10"/></svg>',
  home:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M4 11l8-6.5 8 6.5V20H4z"/><path d="M9 16a4.2 4.2 0 0 1 6 0M10.8 18.2a1.6 1.6 0 0 1 2.4 0"/></svg>',
  tray:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M3 14l2.5-8h13L21 14v5H3z"/><path d="M3 14h5l1 2h6l1-2h5"/></svg>',
  battery:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="7.5" width="16" height="9" rx="2"/><path d="M21 10.5v3"/><path d="M11.5 9.5l-2 3h3l-2 3"/></svg>',
  share:'<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="18" cy="5.5" r="2.5"/><circle cx="6" cy="12" r="2.5"/><circle cx="18" cy="18.5" r="2.5"/><path d="M8.2 10.8l7.6-4.1M8.2 13.2l7.6 4.1"/></svg>',
  globe:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="8.5"/><path d="M3.5 12h17M12 3.5c2.5 2.6 3.5 5.4 3.5 8.5s-1 5.9-3.5 8.5c-2.5-2.6-3.5-5.4-3.5-8.5s1-5.9 3.5-8.5z"/></svg>'
};

/* ---------- product data ---------- */
const P = {
  "qr-connect": {
    name:"QR Connect", short:"QR Connect", color:"#3ee0ff", cat:"Hospitality · SaaS", status:"Live",
    one:"Guests scan a QR code in the room and reach every hotel service from their own phone. No app to install.",
    tags:["No app download","Works on any smartphone","Real-time staff alerts"],
    card:"Guest-to-hotel communication through a QR scan. No app needed.",
    before:["Guests call reception and wait on hold","Requests get lost between shifts and departments","Reception has no easy way to reach a guest outside the room","Guests won't download yet another hotel app"],
    after:["One scan opens the hotel's service page in the browser","Each request goes straight to the right team","Guests can add WhatsApp so reception can reach them directly","Guests see their requests in one place"],
    feats:[
      ["qr","Scan to connect","A QR code in each room opens a web page tied to that room. Nothing to install, nothing to sign up for."],
      ["bell","Service requests","Housekeeping, laundry, maintenance or anything else, each one tap away."],
      ["phone","Call reception","One tap calls the front desk from the guest's own phone. Calls are recorded for quality and security."],
      ["chat","WhatsApp contact","Guests can add their WhatsApp number so reception can contact them directly."],
      ["clock","Requests tab","Guests see every request they've sent on their Requests tab."],
      ["dash","Staff dashboard","One screen for incoming requests, routed by department."]
    ],
    flow:[["Scan","The guest scans the QR code placed in the room."],["Choose","A light web page opens with the hotel's services."],["Request","The guest taps a service or sends a message."],["Respond","The right team is alerted and handles it."]],
    who:["Hotels","Resorts","Serviced apartments","Hostels","Guest houses"],
    demo:"qr"
  },
  "gym-erp": {
    name:"GYM ERP", short:"GYM ERP", color:"#ffb547", cat:"Fitness · SaaS", status:"Live",
    one:"Run your whole gym from one dashboard: memberships, billing, attendance and day-to-day operations.",
    tags:["Memberships & plans","Billing & renewals","Attendance"],
    card:"Memberships, billing, attendance and operations in one system.",
    before:["Membership records kept in registers and spreadsheets","Renewals missed, payments chased by phone","No clear view of who actually shows up","Owners spend evenings on admin work"],
    after:["Every member, plan and payment in one place","Renewals and dues tracked automatically","Attendance logged at every visit","A dashboard that shows how the business is doing"],
    feats:[
      ["card","Membership management","Create plans, enroll members and see each member's status at a glance."],
      ["bill","Billing & renewals","Invoices, payments and upcoming renewals, tracked without spreadsheets."],
      ["check","Attendance","Log check-ins and see daily footfall and member consistency."],
      ["users","Staff & trainers","Manage your team, roles and trainer assignments."],
      ["bell","Reminders","Members get notified about renewals and dues, so you don't have to call."],
      ["dash","Business insights","Revenue, active members and growth in one clean dashboard."]
    ],
    flow:[["Set up","Add your plans, pricing and staff."],["Enroll","Register members and assign their plans."],["Run","Attendance and billing are tracked every day."],["Grow","Use the numbers to keep members and plan ahead."]],
    who:["Gyms","Fitness studios","CrossFit boxes","Yoga centres","Multi-branch chains"],
    demo:null
  },
  "fasway": {
    name:"Fasway", short:"Fasway", color:"#4f8cff", cat:"Productivity · Windows · Mac · Android", status:"v1.3.1", icon:"/fasway.png",
    tagline:"Your phone is now your laptop's remote.",
    one:"Fasway turns your Android phone into a touchpad, a keyboard, a voice typist and a remote control for your Windows laptop or Mac. Scan a QR code once, and from then on your phone connects on its own whenever you're on the same Wi-Fi.",
    tags:["Version 1.3.1","Windows 10 / 11 & macOS","Android app or any phone browser"],
    card:"Your phone becomes a touchpad, keyboard, voice typist and remote for your laptop.",
    before:["Getting up every time you need to pause, scroll or click","Typing long text on a laptop that's across the room","Emailing yourself files and copied text","Re-pairing every time the laptop's IP address changes"],
    after:["Touchpad, keyboard and remote right on your phone","Connects on its own whenever you're on the same Wi-Fi","Clipboard and files move both ways in a tap","Everything stays on your local network, except voice recognition"],
    featTitle:"Eight tools in one app.",
    feats:[
      ["pad","Touchpad","Move, tap, right-click, scroll with two fingers and drag, just like a real trackpad. Adjust speed, acceleration and natural scrolling."],
      ["monitor","Live screen preview","See your laptop's screen on your phone, with sound, and control it by touch. Pinch to zoom up to 6×, go full screen in landscape, and pick from 480p up to 1080p."],
      ["keyboard","Live keyboard","Every letter appears on the laptop instantly. Works with any phone keyboard, including autocorrect, swipe, Hindi and emoji, plus Ctrl/Alt/Shift/Win, arrows, F-keys and one-tap Copy, Paste, Undo and Save."],
      ["mic","Voice typing","Speak in English, Hindi or Hinglish and Fasway types wherever your cursor is. Hinglish comes out in Roman script or Devanagari, and you can review the text before sending it."],
      ["apps","Apps & quick actions","One-tap buttons to open apps or websites, type saved text, press shortcuts or run multi-step macros. Switch, minimize or close laptop windows, and open links in the laptop's browser."],
      ["sliders","Laptop controls","Battery, CPU and RAM at a glance, with charger and low-battery alerts. Control Spotify, YouTube, VLC and more with artwork and a seek bar. Volume, brightness, lock, sleep, restart and shut down."],
      ["clip","Shared clipboard","Copy on the laptop and paste on your phone, or the other way round. Pick “Copy to laptop” from any app's text menu, or tap “Send clipboard” in the notification shade."],
      ["folder","File transfer","Send files from phone to laptop, or right-click in Windows Explorer and choose “Send to phone”. Drag files onto the Fasway window and see live progress, speed and time left."]
    ],
    security:[
      ["check","You approve every new phone","A QR code or link on its own can't control your laptop."],
      ["key","Each phone gets its own secret key","The laptop stores only a hash of it, and you can remove a phone at any time."],
      ["shield","Encrypted, with certificate pinning","The Android app checks it's really your laptop, so an impostor can't pretend to be it."],
      ["home","Stays on your local network","Only voice recognition uses Google's speech service."]
    ],
    just:[
      ["wifi","Finds your laptop by itself","On any Wi-Fi, even after its IP address changes."],
      ["tray","Runs quietly in the system tray","And can start with Windows."],
      ["battery","Saves battery","The screen stream runs only while you're looking at it."]
    ],
    platforms:[
      {os:"Windows",ver:"Windows 10 / 11",side:"Laptop",note:"Includes laptop sound on your phone."},
      {os:"macOS",ver:"Apple Silicon & Intel",side:"Laptop",note:"First launch: click “Open Anyway” in System Settings → Privacy & Security, since the app isn't signed by Apple yet."},
      {os:"Android",ver:"Native app",side:"Phone",note:"Full experience, including the shared clipboard shortcuts."},
      {os:"Any phone browser",ver:"No install needed",side:"Phone",note:"Works best in Chrome. Voice typing needs Chrome and an internet connection."}
    ],
    flow:[["Install","Install Fasway on your laptop and open it. A QR code appears."],["Scan","Scan the QR code with the Fasway Android app, or with your phone camera to use the web version."],["Approve","Approve your phone on the laptop. You're connected."]],
    who:["Students","Presenters","Couch & bed laptop users","Hindi & Hinglish typists","Movie nights"],
    demo:"fw", cta:"Get Fasway", contactH:"Questions about Fasway?"
  },
  "smart-hardware": {
    name:"Smart Room Device", short:"Smart Room Device", color:"#45e3b5", cat:"Hardware · IoT", status:"Hardware",
    full:"Smart Hotel Communication Hardware",
    one:"A wireless device that replaces the old room telephone. Guests press one button to reach reception, housekeeping, room service, maintenance or emergency help.",
    tags:["Wireless","One-press buttons","Emergency priority"],
    card:"A wireless button device that replaces hotel room telephones.",
    before:["Room phones need wiring and an exchange","Guests don't know extension numbers","Language barriers on calls","Emergency calls queue behind routine ones"],
    after:["Wireless device, no phone lines to run","A clear button for each service","Works for every guest, in any language","Emergency alerts get top priority"],
    feats:[
      ["desk","Dedicated buttons","Reception, housekeeping, room service, maintenance and emergency, each with its own button."],
      ["wifi","Wireless","No phone lines or exchange needed. Install it on a desk or bedside table."],
      ["sos","Emergency priority","The emergency button triggers a priority alert to staff straight away."],
      ["dash","Staff alerts","Each press shows up on the staff side with the room number and request type."],
      ["users","Anyone can use it","No numbers to dial, no language barrier. One press does it."],
      ["plug","Built to replace","Designed as a modern replacement for traditional room telephones."]
    ],
    flow:[["Press","The guest presses a service button."],["Alert","The request reaches staff with the room number."],["Route","It goes to the right department."],["Resolve","Staff respond, and emergencies jump the queue."]],
    who:["Hotels","Hospitals & clinics","Senior living","Resorts","Service apartments"],
    demo:"hw"
  }
};
const ORDER = ["qr-connect","gym-erp","fasway","smart-hardware"];

/* ---------- build bento ---------- */
const bento = document.getElementById("bento");
bento.innerHTML = ORDER.map(id => { const p=P[id]; return `
  <a class="pcard" href="/${id}/" style="--c:${p.color}">
    <canvas class="mini" data-mini="${id}" width="264" height="264" aria-hidden="true"></canvas>
    <div class="pcard-top"><span class="chip ${p.status!=="In development"?"live":""}">${p.cat}</span></div>
    <div class="pcard-foot">
      <div style="display:flex;flex-direction:column;gap:12px;min-width:0">
        <h3>${p.name}</h3><p>${p.card}</p>
      </div>
      <span class="go" aria-hidden="true">→</span>
    </div>
  </a>`;}).join("");

/* ---------- product view ---------- */
const MAIL_TO="hello@eazenet.online";
function contactForm(pre,selected,cta){
  const opts=[...ORDER.map(k=>P[k].name),"A custom project"];
  return `<form class="contact-card" data-contact novalidate>
        <div class="row2">
          <div class="field"><label for="${pre}-name">Name</label><input id="${pre}-name" name="name" required autocomplete="name" placeholder="Your name"></div>
          <div class="field"><label for="${pre}-email">Email</label><input id="${pre}-email" name="email" type="email" required autocomplete="email" placeholder="you@company.com"></div>
        </div>
        <div class="field"><label for="${pre}-product">Interested in</label>
          <select id="${pre}-product" name="product">${opts.map(o=>`<option${o===selected?" selected":""}>${o}</option>`).join("")}</select></div>
        <div class="field"><label for="${pre}-msg">Message</label><textarea id="${pre}-msg" name="message" placeholder="Tell us what you want to make simpler"></textarea></div>
        <input type="text" name="_honey" tabindex="-1" autocomplete="off" aria-hidden="true" style="position:absolute;left:-9999px">
        <button class="btn btn-primary" type="submit" style="justify-content:center">${cta} <span class="arr">→</span></button>
        <div data-out aria-live="polite"></div>
      </form>`;
}
document.getElementById("contactForm").outerHTML=contactForm("cf","QR Connect","Send message");
const pv = document.getElementById("view-product");
function renderProduct(id){
  const p=P[id], idx=ORDER.indexOf(id), next=P[ORDER[(idx+1)%ORDER.length]], nid=ORDER[(idx+1)%ORDER.length];
  document.documentElement.style.setProperty("--p",p.color);
  const hint = p.demo==="hw" ? `<span class="hint">Tap a button on the device</span>` : `<span class="hint">Drag to rotate</span>`;
  let demo="";
  if(p.demo==="qr") demo = `
  <section class="band solid"><div class="wrap phone-demo">
    <div class="phone qa-phone" aria-label="Interactive QR Connect guest page">
      <div class="qa">
        <div class="qa-top"><span class="qa-logo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="6" y="3" width="12" height="18" rx="1.5"/><path d="M9.5 7h1M13.5 7h1M9.5 10.5h1M13.5 10.5h1M9.5 14h1M13.5 14h1M11 21v-3h2v3"/></svg></span><b>The Ramaya Hotel</b></div>
        <div class="qa-body" id="qaHome">
          <img class="qa-hero" src="/qr-hotel.jpg" alt="Hotel banner showing Room No. 301 and a welcome message" width="514" height="232">
          <div class="qa-card">
            <div id="qaWa"><button type="button" class="qa-link" id="qaWaBtn">+ Add WhatsApp</button><p class="qa-sub">Add WhatsApp no. so Reception can contact you directly</p></div>
            <hr>
            <button type="button" class="qa-call" id="qaCall">${I.phone}Call Reception</button>
            <p class="qa-note">Calls are recorded for quality and security.</p>
          </div>
          <p class="qa-h">Hotel services</p>
          <div class="qa-grid" id="qrSvc">
            <button type="button" data-s="Housekeeping"><span class="t t1">${I.sparkle}</span>Housekeeping</button>
            <button type="button" data-s="Laundry"><span class="t t2"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M8 3l-5 3 2 4 2-1v12h10V9l2 1 2-4-5-3a4 4 0 0 1-8 0z"/></svg></span>Laundry</button>
            <button type="button" data-s="Maintenance"><span class="t t3">${I.wrench}</span>Maintenance</button>
            <button type="button" data-s="Something else"><span class="t t4">${I.chat}</span>Something else</button>
          </div>
          <div id="qrToast" class="qa-toasts" aria-live="polite"></div>
        </div>
        <div class="qa-body" id="qaReq" hidden>
          <p class="qa-h">Your requests</p>
          <ol class="qa-list" id="qaList"><li class="qa-empty">No requests yet. Tap a service on Home.</li></ol>
        </div>
        <nav class="qa-nav"><button type="button" class="on" data-tab="qaHome"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 11l8-7 8 7v9H4z"/><path d="M10 20v-5h4v5"/></svg>Home</button><button type="button" data-tab="qaReq"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M6 3h9l3 3v15H6z"/><path d="M9 10h6M9 13.5h6M9 17h4"/></svg>Requests<i id="qaBadge" hidden>0</i></button></nav>
      </div>
    </div>
    <div style="display:flex;flex-direction:column;gap:20px;min-width:0">
      <span class="eyebrow" style="color:var(--p)">Try it</span>
      <h2 class="h2">This is what your guest sees.</h2>
      <p class="lede">This is the QR Connect guest page. Tap a service, add a WhatsApp number or open the Requests tab. In a real hotel, each request reaches the right team. Nothing here is sent anywhere.</p>
    </div>
  </div></section>`;
  if(p.demo==="fw") demo = `
  <section class="band solid"><div class="wrap">
    <div class="sec-head"><div><span class="eyebrow" style="color:var(--p)">Try it</span><h2 class="h2">Drag on the phone. Watch the laptop.</h2></div>
    <p class="lede">Drag on the touchpad to move the cursor, tap to click, and type in the box to send text. This preview runs in the page, so nothing actually connects.</p></div>
    <div class="fw-demo">
      <div class="lap" aria-label="Example laptop screen">
        <div class="lap-screen" id="fwScreen">
          <div class="win"><div class="win-bar"><i></i><i></i><i></i><span>notes.txt</span></div><div class="win-body" id="fwDoc">Typed from my phone: <span class="caret"></span></div></div>
          <div class="dock" id="fwDock"><span class="app" data-a="Browser">${I.globe}</span><span class="app" data-a="Files">${I.folder}</span><span class="app" data-a="Music">${I.monitor}</span></div>
          <div class="lap-media" id="fwMedia"><b></b><span>Now playing · Lo-fi beats</span></div>
          <svg class="cursor" id="fwCursor" viewBox="0 0 20 20"><path d="M3 2l13 7.5-6 1.2L7.2 17z" fill="#fff" stroke="#0b1530" stroke-width="1.3" stroke-linejoin="round"/></svg>
        </div>
        <div class="lap-base"></div>
      </div>
      <div class="phone fw-phone">
        <div class="screen">
          <div class="hotel"><span><img src="/fasway.png" alt="" width="16" height="16" style="vertical-align:-3px;border-radius:4px"> Fasway</span><span style="color:#45e3b5">● Connected</span></div>
          <div class="tp" id="fwPad"><span class="finger" id="fwFinger"></span>Touchpad</div>
          <div class="tp-btns"><button type="button" id="fwL">Click</button><button type="button" id="fwR">Right-click</button></div>
          <div class="fw-q"><button type="button" data-q="play">⏯ Play</button><button type="button" data-q="copy">Copy</button><button type="button" data-q="clear">Clear</button></div>
          <label for="fwIn" class="sr" style="font-size:11px;color:#8d9aba">Live keyboard</label>
          <input class="fw-in" id="fwIn" autocomplete="off" placeholder="Type here, it appears on the laptop">
        </div>
      </div>
    </div>
  </div></section>`;
  if(p.demo==="hw") demo = `
  <section class="band solid"><div class="wrap">
    <div class="sec-head"><div><span class="eyebrow" style="color:var(--p)">Try it</span><h2 class="h2">One press. The right person knows.</h2></div>
    <p class="lede">Press a button on the device. Requests appear in the staff feed with the room number. Room 304 is an example.</p></div>
    <div class="demo">
      <div class="pad" id="hwPad">
        <button type="button" data-b="0">${I.desk}Reception</button>
        <button type="button" data-b="1">${I.broom}Housekeeping</button>
        <button type="button" data-b="2">${I.food}Room service</button>
        <button type="button" data-b="3">${I.wrench}Maintenance</button>
        <button type="button" data-b="4" class="sos">${I.sos}Emergency</button>
      </div>
      <div class="feed"><div class="feed-head"><span>Staff feed</span><b>● Live</b></div><ol id="hwFeed" data-lenis-prevent>
        <li><i></i><span>Housekeeping · Room 212</span><span class="t">example</span></li>
      </ol></div>
    </div>
  </div></section>`;

  pv.innerHTML = `
  <div class="p-hero"><div class="wrap"><div class="p-copy">
    <div class="crumb"><a href="/#products">Products</a><span>/</span><span style="color:var(--p)">${p.cat}</span></div>
    ${p.icon?`<img class="p-icon" src="${p.icon}" alt="${p.name} app icon" width="56" height="56">`:""}
    <h1 class="p-name"><span class="pgrad">${p.name}</span></h1>
    ${p.tagline?`<p class="p-tag">${p.tagline}</p>`:""}
    ${p.full?`<p class="eyebrow" style="color:var(--muted)">${p.full}</p>`:""}
    <p class="lede" style="color:#c3cde4">${p.one}</p>
    <div class="tags">${p.tags.map(t=>`<span class="chip">${t}</span>`).join("")}</div>
    <div class="cta-row">
      ${p.cta?`<button class="btn btn-primary" type="button" data-jump="pv-platforms">${p.cta} <span class="arr">→</span></button>`:`<button class="btn btn-primary" type="button" data-jump="contact-p">Book a demo <span class="arr">→</span></button>`}
      <button class="btn btn-ghost" type="button" data-share>${I.share} Share</button>
      ${hint}
    </div>
  </div></div></div>

  <section class="band solid"><div class="wrap">
    <div class="sec-head"><div><span class="eyebrow" style="color:var(--p)">Why it exists</span><h2 class="h2">The old way vs. the ${p.short} way.</h2></div></div>
    <div class="split">
      <div class="ps before"><span class="k">Before</span><ul>${p.before.map(x=>`<li>${x}</li>`).join("")}</ul></div>
      <div class="ps after"><span class="k">With ${p.short}</span><ul>${p.after.map(x=>`<li>${x}</li>`).join("")}</ul></div>
    </div>
  </div></section>

  ${demo}

  <section class="band"><div class="wrap">
    <div class="sec-head"><div><span class="eyebrow" style="color:var(--p)">What you can do</span><h2 class="h2">${p.featTitle||"Everything in one place."}</h2></div></div>
    <div class="feats ${p.feats.length===8?"four":""}">${p.feats.map(f=>`<div class="feat"><span class="ic">${I[f[0]]}</span><h3>${f[1]}</h3><p>${f[2]}</p></div>`).join("")}</div>
  </div></section>

  ${p.security?`<section class="band solid"><div class="wrap">
    <div class="sec-head"><div><span class="eyebrow" style="color:var(--p)">Trust</span><h2 class="h2">Private by design. Easy by default.</h2></div></div>
    <div class="trust">
      <div class="tcol hi"><h3 class="h3">Private and secure by design</h3><ul class="tlist">${p.security.map(x=>`<li><span class="ic">${I[x[0]]}</span><b>${x[1]}</b><span>${x[2]}</span></li>`).join("")}</ul></div>
      <div class="tcol"><h3 class="h3">Just works</h3><ul class="tlist">${p.just.map(x=>`<li><span class="ic">${I[x[0]]}</span><b>${x[1]}</b><span>${x[2]}</span></li>`).join("")}</ul></div>
    </div>
  </div></section>`:""}

  ${p.platforms?`<section class="band" id="pv-platforms"><div class="wrap">
    <div class="sec-head"><div><span class="eyebrow" style="color:var(--p)">Available for</span><h2 class="h2">Your laptop. Your phone.</h2></div><p class="lede">Fasway runs on the laptop and pairs with an Android phone, or any phone browser with no install.</p></div>
    <div class="plats">${p.platforms.map(x=>`<div class="plat"><span class="side">${x.side}</span><h3>${x.os}</h3><span class="ver">${x.ver}</span><span class="soon">Download link coming soon</span><p>${x.note}</p></div>`).join("")}</div>
  </div></section>`:""}

  <section class="band solid"><div class="wrap">
    <div class="sec-head"><div><span class="eyebrow" style="color:var(--p)">${p.platforms?"Get started":"How it works"}</span><h2 class="h2">${p.platforms?"Connected in "+p.flow.length+" steps.":p.flow.length+" steps, start to finish."}</h2></div></div>
    <div class="flow" style="--n:${p.flow.length}">${p.flow.map((f,i)=>`<div class="fstep"><span class="dot">${String(i+1).padStart(2,"0")}</span><h3>${f[0]}</h3><p>${f[1]}</p></div>`).join("")}</div>
  </div></section>

  <section class="band"><div class="wrap" style="display:flex;flex-direction:column;gap:28px">
    <span class="eyebrow" style="color:var(--p)">Made for</span>
    <div class="audience">${p.who.map(w=>`<span>${w}</span>`).join("")}</div>
  </div></section>

  <section class="band solid" style="padding-top:0"><div class="wrap">
    <a class="next" href="/${nid}/" style="--c:${next.color}">
      <div style="display:flex;flex-direction:column;gap:10px"><span class="eyebrow" style="color:${next.color}">Next product</span><span class="h2">${next.name}</span><span class="muted">${next.card}</span></div>
      <span class="btn btn-ghost">View ${next.short} <span class="arr">→</span></span>
    </a>
  </div></section>

  <section class="band solid" id="contact-p"><div class="wrap contact">
    <div style="display:flex;flex-direction:column;gap:24px;min-width:0">
      <span class="eyebrow" style="color:var(--p)">${p.contactH?"Contact":"Get a demo"}</span>
      <h2 class="h2">${p.contactH||"See "+p.short+" in action."}</h2>
      <p class="lede">Send us a message and our team will get back to you.</p>
      <div class="mail-line"><span>${MAIL_TO}</span></div>
    </div>
    ${contactForm("pf",p.name,p.contactH?"Send message":"Book a demo")}
  </div></section>`;

  if(p.demo==="qr"){
    const toast=document.getElementById("qrToast"),list=document.getElementById("qaList"),badge=document.getElementById("qaBadge");let n=0;
    const say=(html)=>{const el=document.createElement("div");el.className="qa-toast";el.innerHTML=`<i></i><span>${html}</span>`;toast.prepend(el);while(toast.children.length>1)toast.lastChild.remove();setTimeout(()=>el.remove(),3200);};
    document.getElementById("qrSvc").addEventListener("click",e=>{const b=e.target.closest("button");if(!b)return;
      say(`<b>${b.dataset.s}</b> request sent to reception`);
      const em=list.querySelector(".qa-empty");if(em)em.remove();
      const li=document.createElement("li");li.innerHTML=`<b>${b.dataset.s}</b><span>Room 301 · ${new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}</span><em>Sent</em>`;list.prepend(li);
      n++;badge.textContent=n;badge.hidden=false;});
    document.getElementById("qaCall").addEventListener("click",()=>say("Calling reception…"));
    const wa=document.getElementById("qaWa");
    document.getElementById("qaWaBtn").addEventListener("click",()=>{wa.innerHTML=`<label class="qa-sub" for="qaWaIn">WhatsApp number</label><div class="qa-wa"><input id="qaWaIn" inputmode="tel" placeholder="+91 98765 43210"><button type="button" id="qaWaSave">Save</button></div>`;
      const inp=document.getElementById("qaWaIn");inp.focus();document.getElementById("qaWaSave").addEventListener("click",()=>{const v=inp.value.trim()||"+91 98765 43210";wa.innerHTML=`<p class="qa-link" style="cursor:default">✓ WhatsApp added</p><p class="qa-sub">Reception can now contact you on ${v.replace(/</g,"&lt;")}</p>`;});});
    pv.querySelector(".qa-nav").addEventListener("click",e=>{const b=e.target.closest("button");if(!b)return;
      pv.querySelectorAll(".qa-nav button").forEach(x=>x.classList.toggle("on",x===b));
      ["qaHome","qaReq"].forEach(id=>document.getElementById(id).hidden=id!==b.dataset.tab);});
  }
  if(p.demo==="fw") wireFasway();
  pv.querySelectorAll("[data-jump]").forEach(jb=>jb.addEventListener("click",()=>{const t=document.getElementById(jb.dataset.jump);if(t)goTo(t);}));
  pv.querySelector("[data-share]").addEventListener("click",e=>shareProduct(id,e.currentTarget));
  if(p.demo==="hw"){
    document.getElementById("hwPad").addEventListener("click",e=>{
      const b=e.target.closest("button"); if(!b) return; hwPress(+b.dataset.b);
    });
  }
}

function wireFasway(){
  const scr=document.getElementById("fwScreen"),cur=document.getElementById("fwCursor"),pad=document.getElementById("fwPad"),fin=document.getElementById("fwFinger"),doc=document.getElementById("fwDoc"),inp=document.getElementById("fwIn"),media=document.getElementById("fwMedia"),dock=document.getElementById("fwDock");
  let cx=.55,cy=.45,last=null,moved=0,typed="Typed from my phone: ";
  const place=()=>{cur.style.transform=`translate(${cx*scr.clientWidth}px,${cy*scr.clientHeight}px)`;
    dock.querySelectorAll(".app").forEach(a=>{const r=a.getBoundingClientRect(),s=scr.getBoundingClientRect();const x=s.left+cx*scr.clientWidth,y=s.top+cy*scr.clientHeight;a.classList.toggle("hot",x>=r.left&&x<=r.right&&y>=r.top&&y<=r.bottom);});};
  const click=(right)=>{const r=document.createElement("span");r.className="ripple";r.style.left=(cx*scr.clientWidth)+"px";r.style.top=(cy*scr.clientHeight)+"px";if(right)r.style.borderStyle="dashed";scr.appendChild(r);setTimeout(()=>r.remove(),520);
    const hot=dock.querySelector(".hot");if(hot&&!right){media.querySelector("span").textContent=`Opened ${hot.dataset.a}`;}};
  const render=()=>{doc.textContent=typed;const c=document.createElement("span");c.className="caret";doc.appendChild(c);};
  pad.addEventListener("pointerdown",e=>{pad.setPointerCapture(e.pointerId);last=[e.clientX,e.clientY];moved=0;pad.classList.add("on");const r=pad.getBoundingClientRect();fin.style.left=(e.clientX-r.left)+"px";fin.style.top=(e.clientY-r.top)+"px";});
  pad.addEventListener("pointermove",e=>{if(!last)return;const dx=e.clientX-last[0],dy=e.clientY-last[1];last=[e.clientX,e.clientY];moved+=Math.abs(dx)+Math.abs(dy);
    cx=Math.max(0,Math.min(.97,cx+dx*1.8/scr.clientWidth));cy=Math.max(0,Math.min(.95,cy+dy*1.8/scr.clientHeight));place();
    const r=pad.getBoundingClientRect();fin.style.left=(e.clientX-r.left)+"px";fin.style.top=(e.clientY-r.top)+"px";});
  const up=()=>{if(last&&moved<6)click(false);last=null;pad.classList.remove("on");};
  pad.addEventListener("pointerup",up);pad.addEventListener("pointercancel",()=>{last=null;pad.classList.remove("on");});
  document.getElementById("fwL").addEventListener("click",()=>click(false));
  document.getElementById("fwR").addEventListener("click",()=>click(true));
  let prev="";inp.addEventListener("input",()=>{const v=inp.value;if(v.length>=prev.length)typed+=v.slice(prev.length);else typed=typed.slice(0,typed.length-(prev.length-v.length));prev=v;render();});
  inp.addEventListener("keydown",e=>{if(e.key==="Enter"){typed+="\n";inp.value="";prev="";render();}});
  pv.querySelector(".fw-q").addEventListener("click",e=>{const b=e.target.closest("button");if(!b)return;const q=b.dataset.q;
    if(q==="play"){media.classList.toggle("paused");media.querySelector("span").textContent=media.classList.contains("paused")?"Paused · Lo-fi beats":"Now playing · Lo-fi beats";}
    if(q==="copy"){media.querySelector("span").textContent="Copied to laptop clipboard";}
    if(q==="clear"){typed="";inp.value="";prev="";render();}});
  addEventListener("resize",place);requestAnimationFrame(place);
}
const HW_NAMES=["Reception","Housekeeping","Room service","Maintenance","Emergency"];
function hwPress(i){
  const feed=document.getElementById("hwFeed"); const pad=document.getElementById("hwPad");
  if(pad){const b=pad.querySelector(`[data-b="${i}"]`); if(b){b.classList.add("pressed");setTimeout(()=>b.classList.remove("pressed"),160);}}
  if(feed){
    const d=new Date(); const t=d.toLocaleTimeString([], {hour:"2-digit",minute:"2-digit"});
    const li=document.createElement("li"); if(i===4) li.className="sos";
    li.innerHTML=`<i></i><span>${HW_NAMES[i]} · Room 304</span><span class="${i===4?"s":"t"}">${i===4?"Priority":t}</span>`;
    feed.prepend(li); while(feed.children.length>6) feed.lastChild.remove();
  }
  if(stageApi.hwPress) stageApi.hwPress(i);
}

/* ---------- contact ---------- */
document.getElementById("copyMail").addEventListener("click",async e=>{
  const t=document.getElementById("mailAddr").textContent;
  try{await navigator.clipboard.writeText(t);e.target.textContent="Copied";}
  catch(_){const r=document.createRange();r.selectNodeContents(document.getElementById("mailAddr"));const s=getSelection();s.removeAllRanges();s.addRange(r);e.target.textContent="Selected";}
  setTimeout(()=>e.target.textContent="Copy",1600);
});
/* Delivered by FormSubmit (formsubmit.co): the first message sent triggers a one-time activation email to MAIL_TO. */
const esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const bad=html=>`<div class="form-ok" style="border-color:rgba(255,93,99,.5);background:rgba(255,93,99,.08)">${html}</div>`;
document.addEventListener("submit",async e=>{
  const f=e.target.closest("form[data-contact]");if(!f)return;
  e.preventDefault();
  const out=f.querySelector("[data-out]"), btn=f.querySelector('[type="submit"]');
  const name=f.name.value.trim(), email=f.email.value.trim(), product=f.product.value, message=f.message.value.trim();
  if(!name||!/^\S+@\S+\.\S+$/.test(email)){out.innerHTML=bad("Add your name and a valid email so we can reply.");return;}
  if(f._honey.value)return;
  const label=btn.innerHTML;btn.disabled=true;btn.textContent="Sending…";out.innerHTML="";
  try{
    const r=await fetch("https://formsubmit.co/ajax/"+MAIL_TO,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},
      body:JSON.stringify({name,email,product,message,page:location.href,_subject:"New enquiry: "+product,_replyto:email,_template:"table",_captcha:"false"})});
    const j=await r.json().catch(()=>({}));
    if(!r.ok||String(j.success)==="false")throw new Error(j.message||r.status);
    f.reset();f.product.value=product;
    out.innerHTML=`<div class="form-ok">Thanks, ${esc(name)}. Your message about <b>${esc(product)}</b> is on its way. We'll reply to ${esc(email)} soon.</div>`;
  }catch(_){
    const mail=`mailto:${MAIL_TO}?subject=${encodeURIComponent("Enquiry: "+product)}&body=${encodeURIComponent(message+"\n\n"+name)}`;
    out.innerHTML=bad(`We couldn't send that just now. Please <a href="${mail}" style="text-decoration:underline">email us directly</a> at ${MAIL_TO}.`);
  }finally{btn.disabled=false;btn.innerHTML=label;}
});

/* ---------- share ---------- */
async function shareProduct(id,btn){
  const p=P[id], url=location.origin+"/"+id+"/";
  if(navigator.share){try{await navigator.share({title:p.name+" · Eazenet.online",text:p.card,url});}catch(_){}return;}
  const label=btn.innerHTML;
  try{await navigator.clipboard.writeText(url);btn.textContent="Link copied";}
  catch(_){prompt("Copy this link",url);}
  setTimeout(()=>btn.innerHTML=label,1800);
}

/* ---------- menu ---------- */
const sheet=document.getElementById("sheet"), menuBtn=document.getElementById("menuBtn");
menuBtn.addEventListener("click",()=>{const o=sheet.hidden;sheet.hidden=!o;menuBtn.setAttribute("aria-expanded",String(o));});
sheet.addEventListener("click",e=>{if(e.target.closest("a")){sheet.hidden=true;menuBtn.setAttribute("aria-expanded","false");}});

/* ---------- grain texture ---------- */
(()=>{const c=document.createElement("canvas");c.width=c.height=160;const x=c.getContext("2d");const d=x.createImageData(160,160);
for(let i=0;i<d.data.length;i+=4){const v=Math.random()*255;d.data[i]=d.data[i+1]=d.data[i+2]=v;d.data[i+3]=255;}x.putImageData(d,0,0);
document.getElementById("grain").style.backgroundImage=`url(${c.toDataURL()})`;})();

/* ============================================================
   3D STAGE
   ============================================================ */
const stageApi={};
const canvas=document.getElementById("stage");
if(!window.THREE){ canvas.style.display="none"; }
let renderer, camera, current=null, builders={}, scenesCache={};
const pointer={x:0,y:0,tx:0,ty:0,nx:0,ny:0};
const clock={t:0,last:performance.now()};

const WEAK = (navigator.hardwareConcurrency||8)<=4;
const LOW = innerWidth<760 || WEAK;
// phones get a sharper cap (their screens are 3x); only weak devices drop resolution
const maxPR = () => Math.min(devicePixelRatio, WEAK?1.5:(innerWidth<760?2.5:2));
const isTouch = matchMedia("(pointer: coarse)").matches;

/* ---------- texture + geometry helpers ---------- */
function tex(c){const t=new THREE.CanvasTexture(c);t.encoding=THREE.sRGBEncoding;t.anisotropy=8;return t;}
function lin(hex){return new THREE.Color(hex).convertSRGBToLinear();}
const UI=(map,extra)=>new THREE.MeshBasicMaterial(Object.assign({map,toneMapped:false},extra||{}));
function glowTex(color="#6fd0ff"){
  const c=document.createElement("canvas");c.width=c.height=128;const g=c.getContext("2d");
  const r=g.createRadialGradient(64,64,0,64,64,64);r.addColorStop(0,color);r.addColorStop(.25,color+"88");r.addColorStop(1,"rgba(0,0,0,0)");
  g.fillStyle=r;g.fillRect(0,0,128,128);return tex(c);
}
const glowSprite=(color,s,op=.6)=>{const sp=new THREE.Sprite(new THREE.SpriteMaterial({map:glowTex(color),transparent:true,opacity:op,blending:THREE.AdditiveBlending,depthWrite:false,toneMapped:false}));sp.scale.set(s,s,1);return sp;};
function glareTex(){const c=document.createElement("canvas");c.width=256;c.height=512;const g=c.getContext("2d");
  const gr=g.createLinearGradient(0,0,256,512);gr.addColorStop(0,"rgba(255,255,255,0)");gr.addColorStop(.38,"rgba(255,255,255,0)");gr.addColorStop(.45,"rgba(255,255,255,.35)");gr.addColorStop(.52,"rgba(255,255,255,0)");gr.addColorStop(1,"rgba(255,255,255,0)");
  g.fillStyle=gr;g.fillRect(0,0,256,512);return tex(c);}
function qrTex(size=512,fg="#0b1530",bg="#ffffff",accent="#1b86ff"){
  const c=document.createElement("canvas");c.width=c.height=size;const g=c.getContext("2d");
  g.fillStyle=bg;g.fillRect(0,0,size,size);
  const n=25,m=size*.08,cell=(size-2*m)/n; let seed=7;const rnd=()=>{seed=(seed*16807)%2147483647;return seed/2147483647;};
  const finder=(cx,cy)=>{g.fillStyle=fg;g.fillRect(m+cx*cell,m+cy*cell,7*cell,7*cell);g.fillStyle=bg;g.fillRect(m+(cx+1)*cell,m+(cy+1)*cell,5*cell,5*cell);g.fillStyle=accent;g.fillRect(m+(cx+2)*cell,m+(cy+2)*cell,3*cell,3*cell);};
  for(let y=0;y<n;y++)for(let x=0;x<n;x++){const inF=(x<8&&y<8)||(x>n-9&&y<8)||(x<8&&y>n-9);if(inF)continue;if(rnd()>.52){g.fillStyle=fg;g.beginPath();g.roundRect?g.roundRect(m+x*cell+1,m+y*cell+1,cell-2,cell-2,cell*.25):g.rect(m+x*cell,m+y*cell,cell,cell);g.fill();}}
  finder(0,0);finder(n-7,0);finder(0,n-7);
  // centre logo badge
  g.fillStyle=bg;g.beginPath();g.arc(size/2,size/2,cell*2.6,0,7);g.fill();g.fillStyle=accent;g.beginPath();g.arc(size/2,size/2,cell*1.9,0,7);g.fill();
  g.strokeStyle="#fff";g.lineWidth=cell*.35;g.lineCap="round";[.5,.95].forEach(r=>{g.beginPath();g.arc(size/2,size/2+cell*.8,cell*r*1.3,Math.PI*1.25,Math.PI*1.75);g.stroke();});
  return tex(c);
}
function labelTex(text,icon,w=256,h=256,fg="#13213a",bg=null,font){
  const c=document.createElement("canvas");c.width=w;c.height=h;const g=c.getContext("2d");
  if(bg){g.fillStyle=bg;g.fillRect(0,0,w,h);}
  g.fillStyle=fg;g.textAlign="center";g.textBaseline="middle";
  g.font=font||`600 ${Math.round(h*.13)}px Onest, system-ui, sans-serif`;g.fillText(text,w/2,icon?h*.72:h/2);
  if(icon){g.strokeStyle=fg;g.lineWidth=h*.035;g.lineCap="round";g.lineJoin="round";icon(g,w/2,h*.38,h*.17);}
  return tex(c);
}
function roundedShape(w,h,r){const s=new THREE.Shape();const x=-w/2,y=-h/2;s.moveTo(x+r,y);s.lineTo(x+w-r,y);s.quadraticCurveTo(x+w,y,x+w,y+r);s.lineTo(x+w,y+h-r);s.quadraticCurveTo(x+w,y+h,x+w-r,y+h);s.lineTo(x+r,y+h);s.quadraticCurveTo(x,y+h,x,y+h-r);s.lineTo(x,y+r);s.quadraticCurveTo(x,y,x+r,y);return s;}
function roundedBox(w,h,d,r,bevel=.03){const g=new THREE.ExtrudeGeometry(roundedShape(w,h,r),{depth:d,bevelEnabled:true,bevelThickness:bevel,bevelSize:bevel,bevelSegments:5,curveSegments:14});g.translate(0,0,-d/2);g.computeVertexNormals();return g;}
function fixCapUV(geo,w,h){const uv=geo.attributes.uv,pos=geo.attributes.position;for(let i=0;i<uv.count;i++){uv.setXY(i,(pos.getX(i)+w/2)/w,(pos.getY(i)+h/2)/h);}uv.needsUpdate=true;}
const M={
  chrome:()=>new THREE.MeshStandardMaterial({color:0xdfe6f2,metalness:1,roughness:.12}),
  gun:()=>new THREE.MeshStandardMaterial({color:0x1b2233,metalness:.9,roughness:.28,envMapIntensity:.6}),
  rubber:()=>new THREE.MeshStandardMaterial({color:0x0d0f15,metalness:0,roughness:.75,envMapIntensity:.25}),
  glossW:()=>new THREE.MeshPhysicalMaterial({color:0xeef2f8,metalness:0,roughness:.28,clearcoat:1,clearcoatRoughness:.12}),
  glow:(hex,i=2.5)=>new THREE.MeshStandardMaterial({color:hex,emissive:hex,emissiveIntensity:i*.5,metalness:.2,roughness:.4}),
  glass:()=>new THREE.MeshPhysicalMaterial({color:0xcfe4ff,metalness:0,roughness:.04,transparent:true,opacity:.08,envMapIntensity:.5,clearcoat:1,clearcoatRoughness:.05,depthWrite:false})
};

/* ---------- environment (reflections) ---------- */
let ENV=null;
function makeEnv(){
  if(ENV)return ENV;
  // six canvas faces: dark navy studio with bright softbox panels (order +x,-x,+y,-y,+z,-z)
  const S=128,faces=[];
  const panel=(g,x,y,w,h,col)=>{const gr=g.createRadialGradient(x+w/2,y+h/2,0,x+w/2,y+h/2,Math.max(w,h)*.7);gr.addColorStop(0,col);gr.addColorStop(.6,col);gr.addColorStop(1,"rgba(0,0,0,0)");g.fillStyle=gr;g.fillRect(x-w*.2,y-h*.2,w*1.4,h*1.4);};
  for(let i=0;i<6;i++){const c=document.createElement("canvas");c.width=c.height=S;const g=c.getContext("2d");
    const gr=g.createLinearGradient(0,0,0,S);
    if(i===2){g.fillStyle="#1a2c55";g.fillRect(0,0,S,S);panel(g,24,34,80,60,"#ffffff");}
    else if(i===3){g.fillStyle="#04060c";g.fillRect(0,0,S,S);panel(g,20,50,88,20,"#2a5fb0");}
    else{gr.addColorStop(0,"#1c3164");gr.addColorStop(.55,"#0a1226");gr.addColorStop(1,"#03050b");g.fillStyle=gr;g.fillRect(0,0,S,S);
      if(i===0)panel(g,40,22,46,70,"#9fd8ff");if(i===1)panel(g,44,26,40,64,"#4f9dff");if(i===4)panel(g,10,30,26,50,"#cfe6ff");if(i===5)panel(g,50,20,40,40,"#7fb6ff");}
    faces.push(c);}
  const t=new THREE.CubeTexture(faces);t.encoding=THREE.sRGBEncoding;t.needsUpdate=true;ENV=t;return ENV;
}

/* ---------- background layers ---------- */
const NOISE=`float h2(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
float n2(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(h2(i),h2(i+vec2(1.,0.)),f.x),mix(h2(i+vec2(0.,1.)),h2(i+vec2(1.,1.)),f.x),f.y);}
float fbm(vec2 p){float v=0.,a=.5;for(int i=0;i<5;i++){v+=a*n2(p);p=p*2.03+vec2(1.7,9.2);a*=.5;}return v;}`;
function sky(cA,cB){
  const u={uT:{value:0},uA:{value:lin(cA)},uB:{value:lin(cB)}};
  const m=new THREE.ShaderMaterial({uniforms:u,side:THREE.BackSide,depthWrite:false,toneMapped:false,
    vertexShader:`varying vec3 vD;void main(){vD=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`,
    fragmentShader:`uniform float uT;uniform vec3 uA;uniform vec3 uB;varying vec3 vD;${NOISE}
    void main(){vec3 d=normalize(vD);vec2 uv=vec2(atan(d.x,-d.z)*1.6,d.y*3.);
      float f=fbm(uv*1.15+vec2(uT*.03,-uT*.012));float g=fbm(uv*2.2+vec2(-uT*.025,uT*.01)+f*1.7);
      vec3 c=vec3(.0016,.0028,.0068);
      float band=smoothstep(.42,.95,g)*smoothstep(-.3,.3,d.y)*(1.-smoothstep(.3,.95,d.y));
      c+=uA*band*.07+uB*pow(f,4.)*.05;
      c+=uA*.035*exp(-pow(d.y+.1,2.)*28.);
      gl_FragColor=linearToOutputTexel(vec4(c,1.));}`});
  const s=new THREE.Mesh(new THREE.SphereGeometry(45,48,24),m);s.renderOrder=-10;return {mesh:s,u};
}
function grid(col){
  const u={uT:{value:0},uC:{value:lin(col)}};
  const m=new THREE.ShaderMaterial({uniforms:u,transparent:true,depthWrite:false,blending:THREE.AdditiveBlending,toneMapped:false,extensions:{derivatives:true},
    vertexShader:`varying vec3 vW;void main(){vec4 w=modelMatrix*vec4(position,1.);vW=w.xyz;gl_Position=projectionMatrix*viewMatrix*w;}`,
    fragmentShader:`uniform float uT;uniform vec3 uC;varying vec3 vW;
    float ln(float x){float w=fwidth(x);return 1.-smoothstep(0.,w*1.5,abs(fract(x-.5)-.5));}
    void main(){vec2 p=vW.xz*.7;p.y+=uT*.22;float g=max(ln(p.x),ln(p.y));float r=length(vW.xz-vec2(0.,-1.));
      float fade=smoothstep(17.,1.,r);float pulse=.5+.5*sin(r*1.1-uT*1.5);
      vec3 c=uC*g*(.12+.2*pulse)*fade+uC*.015*fade;gl_FragColor=linearToOutputTexel(vec4(c,1.));}`});
  const mesh=new THREE.Mesh(new THREE.PlaneGeometry(80,80),m);mesh.rotation.x=-Math.PI/2;mesh.position.y=-3;return {mesh,u};
}
function stars(n,col){
  const g=new THREE.BufferGeometry();const p=new Float32Array(n*3),s=new Float32Array(n);
  for(let i=0;i<n;i++){const th=Math.random()*Math.PI*2,ph=Math.acos(2*Math.random()-1),r=9+Math.random()*16;
    p[i*3]=r*Math.sin(ph)*Math.cos(th);p[i*3+1]=Math.abs(r*Math.cos(ph))*.8-1;p[i*3+2]=r*Math.sin(ph)*Math.sin(th)-6;s[i]=Math.random();}
  g.setAttribute("position",new THREE.BufferAttribute(p,3));g.setAttribute("aS",new THREE.BufferAttribute(s,1));
  const u={uT:{value:0},uC:{value:lin(col)},uPR:{value:maxPR()}};
  const m=new THREE.ShaderMaterial({uniforms:u,transparent:true,depthWrite:false,blending:THREE.AdditiveBlending,toneMapped:false,
    vertexShader:`attribute float aS;uniform float uT;uniform float uPR;varying float vA;void main(){vec4 mv=modelViewMatrix*vec4(position,1.);float tw=.5+.5*sin(uT*(.8+aS*2.2)+aS*40.);vA=(.25+aS*.75)*(.35+tw*.65);gl_PointSize=(1.2+aS*2.8)*uPR*(16./-mv.z);gl_Position=projectionMatrix*mv;}`,
    fragmentShader:`uniform vec3 uC;varying float vA;void main(){float d=length(gl_PointCoord-.5);float a=smoothstep(.5,0.,d);a*=a;gl_FragColor=vec4(mix(uC,vec3(1.),.55)*a*vA*1.4,1.);}`});
  return {mesh:new THREE.Points(g,m),u};
}
function meteors(scene,n){
  const c=document.createElement("canvas");c.width=256;c.height=8;const g=c.getContext("2d");const gr=g.createLinearGradient(0,0,256,0);gr.addColorStop(0,"rgba(120,190,255,0)");gr.addColorStop(.85,"rgba(200,230,255,.8)");gr.addColorStop(1,"rgba(255,255,255,1)");g.fillStyle=gr;g.fillRect(0,2,256,4);const t=tex(c);
  const arr=[];for(let i=0;i<n;i++){const m=new THREE.Mesh(new THREE.PlaneGeometry(3.4,.05),new THREE.MeshBasicMaterial({map:t,transparent:true,blending:THREE.AdditiveBlending,depthWrite:false,toneMapped:false,opacity:0}));m.userData={life:-1-Math.random()*7,a:-2.55,v:16};scene.add(m);arr.push(m);}
  return dt=>arr.forEach(m=>{const u=m.userData;const was=u.life;u.life+=dt;
    if(was<0&&u.life>=0){m.position.set(-4+Math.random()*20,5+Math.random()*4,-14-Math.random()*6);u.a=-2.45-Math.random()*.3;m.rotation.z=u.a;}
    if(u.life<0){m.material.opacity=0;return;}
    if(u.life>1.1){u.life=-(3+Math.random()*7);m.material.opacity=0;return;}
    m.material.opacity=Math.sin(u.life/1.1*Math.PI);m.position.x+=Math.cos(u.a)*u.v*dt;m.position.y+=Math.sin(u.a)*u.v*dt;});
}
function base(cA,cB){
  const scene=new THREE.Scene();scene.environment=makeEnv();scene.fog=new THREE.FogExp2(0x02040a,.022);
  const sk=sky(cA,cB);scene.add(sk.mesh);const gr=grid(cA);scene.add(gr.mesh);const st=stars(LOW?700:1700,cB);scene.add(st.mesh);const met=meteors(scene,LOW?2:4);
  scene.add(new THREE.HemisphereLight(0x9fc2ff,0x05070d,.45));
  const key=new THREE.DirectionalLight(0xffffff,1.6);key.position.set(4,6,7);scene.add(key);
  const rim=new THREE.DirectionalLight(new THREE.Color(cB),1.6);rim.position.set(-4,3,-6);scene.add(rim);
  const p1=new THREE.PointLight(new THREE.Color(cA),2.4,20,2);p1.position.set(-4,2,4);scene.add(p1);
  const p2=new THREE.PointLight(new THREE.Color(cB),1.6,20,2);p2.position.set(4,-2,3);scene.add(p2);
  const rig=new THREE.Group();scene.add(rig);
  return {scene,rig,tick(t,dt){sk.u.uT.value=t;gr.u.uT.value=t;st.u.uT.value=t;st.mesh.rotation.y=t*.008;met(dt);p1.position.x=-4+Math.sin(t*.5)*2.5;p2.position.y=-2+Math.cos(t*.4)*1.5;}};
}
/* fit a rig into the right half (landscape) or the top band (portrait) */
function place(rig,w,h,o){
  const a=w/h,dist=camera.position.z,halfH=Math.tan(THREE.MathUtils.degToRad(camera.fov/2))*dist,halfW=halfH*a;
  if(a>1.05){const s=Math.min(o.s||1,(halfH*.9)/o.ry,(halfW*.47)/o.rx);rig.scale.setScalar(s);rig.position.set(halfW*.5+(o.dx||0)*s,(o.dy||0)*s,0);}
  else{const s=Math.min(o.s||1,(halfW*.94)/o.rx,(halfH*.4)/o.ry);rig.scale.setScalar(s);rig.position.set(0,halfH*.46+(o.dy||0)*s,0);}
}
function wifiArcs(color,scale=1){const g=new THREE.Group();const mat=M.glow(color,3);
  [.38,.66,.94].forEach((r,i)=>{const m=new THREE.Mesh(new THREE.TorusGeometry(r*scale,.055*scale,14,64,Math.PI*.62),mat.clone());m.rotation.z=Math.PI/2-Math.PI*.31;m.userData.i=i;g.add(m);});
  const dot=new THREE.Mesh(new THREE.SphereGeometry(.09*scale,20,20),M.glow(color,4));g.add(dot);
  g.userData.tick=t=>g.children.forEach(m=>{if(m.userData.i!==undefined)m.material.emissiveIntensity=.35+1.3*Math.max(0,Math.sin(t*3-m.userData.i*.9));});return g;}
function makePhone(map,w=1,h=2.05){
  const g=new THREE.Group();
  g.add(new THREE.Mesh(roundedBox(w,h,.08,w*.17,.035),new THREE.MeshPhysicalMaterial({color:0x121a30,metalness:.95,roughness:.22,clearcoat:1,clearcoatRoughness:.08})));
  const blk=new THREE.Mesh(new THREE.ShapeGeometry(roundedShape(w*.95,h*.965,w*.14),10),new THREE.MeshBasicMaterial({color:0x020306}));blk.position.z=.077;g.add(blk);
  const scr=new THREE.Mesh(new THREE.PlaneGeometry(w*.9,h*.92),UI(map));scr.position.z=.079;g.add(scr);
  const notch=new THREE.Mesh(new THREE.ShapeGeometry(roundedShape(w*.28,.075,.037),6),new THREE.MeshBasicMaterial({color:0x020306}));notch.position.set(0,h*.43,.081);g.add(notch);
  const gl=new THREE.Mesh(new THREE.PlaneGeometry(w*.92,h*.94),new THREE.MeshBasicMaterial({map:glareTex(),transparent:true,blending:THREE.AdditiveBlending,depthWrite:false,opacity:.28,toneMapped:false}));gl.position.z=.084;g.add(gl);
  const bm=M.gun();
  [[w/2+.028,h*.18,.3],[-w/2-.028,h*.3,.2],[-w/2-.028,h*.16,.2]].forEach(([x,y,l])=>{const b=new THREE.Mesh(new THREE.CylinderGeometry(.022,.022,l,10),bm);b.position.set(x,y,0);g.add(b);});
  const bump=new THREE.Mesh(roundedBox(w*.42,w*.42,.03,.08,.015),new THREE.MeshPhysicalMaterial({color:0x1a2340,metalness:.7,roughness:.15,clearcoat:1}));bump.position.set(-w*.2,h*.34,-.07);g.add(bump);
  [[-w*.29,h*.38],[-w*.29,h*.29],[-w*.11,h*.34]].forEach(([x,y],i)=>{const l=new THREE.Mesh(new THREE.CylinderGeometry(i<2?.065:.03,i<2?.065:.03,.04,24),new THREE.MeshPhysicalMaterial({color:0x05070d,metalness:.4,roughness:.05,clearcoat:1}));l.rotation.x=Math.PI/2;l.position.set(x,y,-.1);g.add(l);
    if(i<2){const ring=new THREE.Mesh(new THREE.TorusGeometry(.068,.01,8,32),M.chrome());ring.position.set(x,y,-.12);g.add(ring);}});
  return {group:g,screen:scr};
}

/* ---------- input ---------- */
const drag={on:false,x:0,y:0,rx:0,ry:0,moved:0};
const NOGRAB="a,button,input,textarea,select,label,.feed,.phone,.lap";
addEventListener("pointerdown",e=>{if(e.pointerType==="touch")return;if(e.target.closest(NOGRAB))return;if(!current||!current.draggable)return;if(scrollY>innerHeight*.9)return;drag.on=true;drag.x=e.clientX;drag.y=e.clientY;drag.moved=0;});
addEventListener("pointermove",e=>{pointer.tx=(e.clientX/innerWidth)*2-1;pointer.ty=-(e.clientY/innerHeight)*2+1;pointer.nx=pointer.tx;pointer.ny=pointer.ty;
  if(drag.on){const dx=e.clientX-drag.x,dy=e.clientY-drag.y;drag.ry+=dx*.006;drag.rx=Math.max(-.6,Math.min(.6,drag.rx+dy*.004));drag.x=e.clientX;drag.y=e.clientY;drag.moved+=Math.abs(dx)+Math.abs(dy);}});
addEventListener("pointerup",e=>{const wasDrag=(drag.on||e.pointerType==="touch")&&drag.moved>6;drag.on=false;
  if(!wasDrag&&current&&current.onClick&&!e.target.closest(NOGRAB)){pointer.nx=(e.clientX/innerWidth)*2-1;pointer.ny=-(e.clientY/innerHeight)*2+1;current.onClick();}});
/* touch: a sideways swipe on the model rotates it; a vertical swipe still scrolls the page */
const touch={on:false,x:0,y:0,lock:0};// lock: 0 undecided, 1 rotating, -1 scrolling
const tBox=window.THREE?new THREE.Box3():null,tV=window.THREE?new THREE.Vector3():null;
const overModel=(x,y)=>{if(!current||!current.rig||!camera)return false;tBox.setFromObject(current.rig);if(tBox.isEmpty())return false;
  let x0=1e9,y0=1e9,x1=-1e9,y1=-1e9;
  for(let i=0;i<8;i++){tV.set(i&1?tBox.max.x:tBox.min.x,i&2?tBox.max.y:tBox.min.y,i&4?tBox.max.z:tBox.min.z).project(camera);
    const sx=(tV.x+1)/2*innerWidth,sy=(1-tV.y)/2*innerHeight;x0=Math.min(x0,sx);x1=Math.max(x1,sx);y0=Math.min(y0,sy);y1=Math.max(y1,sy);}
  return x>=x0-20&&x<=x1+20&&y>=y0-20&&y<=y1+20;};
addEventListener("touchstart",e=>{touch.on=false;drag.moved=0;if(e.touches.length!==1)return;const t=e.touches[0];
  if(e.target.closest(NOGRAB)||!current||!current.draggable||scrollY>innerHeight*.9||!overModel(t.clientX,t.clientY))return;
  touch.on=true;touch.lock=0;touch.x=t.clientX;touch.y=t.clientY;},{passive:true});
addEventListener("touchmove",e=>{if(!touch.on||e.touches.length!==1)return;const t=e.touches[0],dx=t.clientX-touch.x,dy=t.clientY-touch.y;
  if(!touch.lock){if(Math.abs(dx)+Math.abs(dy)<8)return;touch.lock=Math.abs(dx)>Math.abs(dy)?1:-1;}
  if(touch.lock<0){touch.on=false;return;}
  e.preventDefault();
  drag.ry+=dx*.008;drag.rx=Math.max(-.6,Math.min(.6,drag.rx+dy*.005));drag.moved+=Math.abs(dx)+Math.abs(dy);touch.x=t.clientX;touch.y=t.clientY;},{passive:false});
addEventListener("touchend",()=>{touch.on=false;});addEventListener("touchcancel",()=>{touch.on=false;});
const sway=(rig,p,k=1)=>{rig.rotation.y+=((drag.ry+pointer.x*.22*k+Math.min(p.scroll,1.6)*.7)-rig.rotation.y)*.08;rig.rotation.x+=((drag.rx-pointer.y*.1*k+p.scroll*.35)-rig.rotation.x)*.08;};

/* ---------- HOME ---------- */
builders.home=()=>{
  const B=base("#1b86ff","#6fd0ff");const {scene,rig}=B;
  const core=new THREE.Group();rig.add(core);
  const shell=new THREE.Mesh(new THREE.IcosahedronGeometry(1.1,1),new THREE.MeshPhysicalMaterial({color:0x0d1d42,metalness:1,roughness:.18,clearcoat:1,clearcoatRoughness:.1,flatShading:true}));core.add(shell);
  const wire=new THREE.LineSegments(new THREE.EdgesGeometry(new THREE.IcosahedronGeometry(1.28,1)),new THREE.LineBasicMaterial({color:0x6fd0ff,transparent:true,opacity:.55,toneMapped:false}));core.add(wire);
  // glowing seams on vertices
  const vtx=new THREE.IcosahedronGeometry(1.28,1).attributes.position;const seen=new Set();const nodes=new THREE.Group();core.add(nodes);
  const nodeMat=M.glow(0x6fd0ff,3);
  for(let i=0;i<vtx.count;i++){const k=[vtx.getX(i),vtx.getY(i),vtx.getZ(i)].map(v=>v.toFixed(2)).join();if(seen.has(k))continue;seen.add(k);const n=new THREE.Mesh(new THREE.SphereGeometry(.035,10,10),nodeMat);n.position.set(vtx.getX(i),vtx.getY(i),vtx.getZ(i));nodes.add(n);}
  const inner=new THREE.Mesh(new THREE.IcosahedronGeometry(.5,3),M.glow(0x2a95ff,3.5));core.add(inner);
  core.add(glowSprite("#2a95ff",5,.3));
  // gyroscope rings
  const gyro=[];[[1.75,.018,0],[2.0,.012,1],[2.25,.02,2]].forEach(([r,tb,i])=>{const g=new THREE.Group();const ring=new THREE.Mesh(new THREE.TorusGeometry(r,tb,10,160),i===1?M.chrome():M.gun());g.add(ring);
    const bead=new THREE.Mesh(new THREE.SphereGeometry(.06,16,16),M.glow(i===1?0x9fe3ff:0x1b86ff,4));bead.position.x=r;g.add(bead);
    const dots=new THREE.Points(new THREE.BufferGeometry().setFromPoints(Array.from({length:90},(_,k)=>new THREE.Vector3(Math.cos(k/90*Math.PI*2)*(r+.06),Math.sin(k/90*Math.PI*2)*(r+.06),0))),new THREE.PointsMaterial({color:0x6fd0ff,size:.025,transparent:true,opacity:.7,toneMapped:false}));g.add(dots);
    g.rotation.set(Math.PI/2+(i-1)*.5,i*.6,0);core.add(g);gyro.push(g);});
  const arcs=wifiArcs(0x4fb4ff);arcs.position.y=2.55;arcs.scale.setScalar(.9);rig.add(arcs);
  // expanding signal rings
  const rings=[];for(let i=0;i<4;i++){const m=new THREE.Mesh(new THREE.TorusGeometry(1,.008,6,160),new THREE.MeshBasicMaterial({color:0x6fd0ff,transparent:true,opacity:.6,blending:THREE.AdditiveBlending,depthWrite:false,toneMapped:false}));m.rotation.x=Math.PI/2.35;m.userData.o=i/4;rig.add(m);rings.push(m);}
  const orbitR=3.2,tilt=Math.PI/2.35;
  const orbit=new THREE.Points(new THREE.BufferGeometry().setFromPoints(Array.from({length:220},(_,k)=>{const a=k/220*Math.PI*2;return new THREE.Vector3(Math.cos(a)*orbitR,-Math.sin(a)*orbitR*Math.cos(tilt),Math.sin(a)*orbitR*Math.sin(tilt));})),new THREE.PointsMaterial({color:0x6fd0ff,size:.03,transparent:true,opacity:.5,toneMapped:false}));rig.add(orbit);
  const mk={
    "qr-connect":()=>{const g=new THREE.Group();const b=new THREE.Mesh(roundedBox(.62,.62,.05,.08,.02),[new THREE.MeshStandardMaterial({map:qrTex(256),roughness:.45}),M.glow(0x3ee0ff,1.2)]);fixCapUV(b.geometry,.62,.62);g.add(b);return g;},
    "gym-erp":()=>{const g=new THREE.Group();const h=new THREE.Mesh(new THREE.CylinderGeometry(.035,.035,.8,16),M.chrome());h.rotation.z=Math.PI/2;g.add(h);
      [-1,1].forEach(s=>{const p=new THREE.Mesh(new THREE.CylinderGeometry(.19,.19,.2,6),M.rubber());p.rotation.z=Math.PI/2;p.position.x=s*.33;g.add(p);const r=new THREE.Mesh(new THREE.CylinderGeometry(.12,.12,.21,6),M.glow(0xffb547,1.6));r.rotation.z=Math.PI/2;r.position.x=s*.33;r.scale.set(1,1.02,1);g.add(r);});return g;},
    "fasway":()=>{const g=new THREE.Group();g.add(new THREE.Mesh(roundedBox(.36,.68,.05,.07,.015),M.gun()));
      const f=new THREE.Mesh(new THREE.PlaneGeometry(.3,.3),UI(new THREE.TextureLoader().load("fasway.png",t=>{t.encoding=THREE.sRGBEncoding;}),{transparent:true}));f.position.set(0,.08,.07);g.add(f);
      const pad=new THREE.Mesh(new THREE.PlaneGeometry(.28,.18),new THREE.MeshBasicMaterial({color:0x1d2a50,toneMapped:false}));pad.position.set(0,-.17,.07);g.add(pad);return g;},
    "smart-hardware":()=>{const g=new THREE.Group();g.add(new THREE.Mesh(roundedBox(.62,.62,.16,.14,.03),M.glossW()));
      [[-.13,.13],[.13,.13],[-.13,-.08],[.13,-.08]].forEach(p=>{const k=new THREE.Mesh(new THREE.CylinderGeometry(.075,.075,.05,24),M.glow(0x45e3b5,.6));k.rotation.x=Math.PI/2;k.position.set(p[0],p[1],.12);g.add(k);});
      const s=new THREE.Mesh(new THREE.CylinderGeometry(.05,.05,.05,20),M.glow(0xff5d63,2));s.rotation.x=Math.PI/2;s.position.set(0,-.22,.12);g.add(s);return g;}
  };
  const labelsEl=document.getElementById("labels");labelsEl.innerHTML="";
  const sats=[];
  ORDER.forEach((id,i)=>{const s=mk[id]();s.userData={id,a:i*(Math.PI/2)+.4};rig.add(s);sats.push(s);s.add(glowSprite(P[id].color,1.4,.28));
    const N=26,tg=new THREE.BufferGeometry();tg.setAttribute("position",new THREE.BufferAttribute(new Float32Array(N*3),3));const col=new Float32Array(N*3),c=lin(P[id].color);for(let k=0;k<N;k++){const f=(1-k/N)**2;col[k*3]=c.r*f;col[k*3+1]=c.g*f;col[k*3+2]=c.b*f;}tg.setAttribute("color",new THREE.BufferAttribute(col,3));
    const trail=new THREE.Line(tg,new THREE.LineBasicMaterial({vertexColors:true,blending:THREE.AdditiveBlending,transparent:true,depthWrite:false,toneMapped:false}));trail.frustumCulled=false;rig.add(trail);s.userData.trail=trail;s.userData.hist=[];
    const a=document.createElement("a");a.className="sat-label";a.href="/"+id+"/";a.style.setProperty("--c",P[id].color);a.innerHTML=`<i></i>${P[id].short}`;labelsEl.appendChild(a);s.userData.label=a;});
  const v=new THREE.Vector3();
  return {scene,rig,draggable:true,
    layout(w,h){place(rig,w,h,{rx:3.5,ry:3.1,dy:-.3});},
    update(t,dt,p){B.tick(t,dt);const sp=reduce?.25:1;
      core.rotation.y+=dt*.2*sp;shell.rotation.x+=dt*.12*sp;wire.rotation.y-=dt*.15*sp;nodes.rotation.y=wire.rotation.y;
      inner.scale.setScalar(1+Math.sin(t*2.2)*.07);inner.material.emissiveIntensity=1.4+Math.sin(t*2.2)*.4;
      gyro.forEach((g,i)=>{g.rotation.z+=dt*(.3+i*.15)*sp*(i%2?-1:1);});
      arcs.userData.tick(t);arcs.position.y=2.55+Math.sin(t*1.3)*.06;
      rings.forEach(r=>{const k=((t*.2*sp)+r.userData.o)%1;r.scale.setScalar(1.2+k*4.4);r.material.opacity=(1-k)*.5;});
      sats.forEach(s=>{const a=s.userData.a+t*.17*sp;
        s.position.set(Math.cos(a)*orbitR,-Math.sin(a)*orbitR*Math.cos(tilt),Math.sin(a)*orbitR*Math.sin(tilt));
        s.rotation.y+=dt*.8*sp;s.rotation.x=Math.sin(t+s.userData.a)*.3;
        const H=s.userData.hist;H.unshift(s.position.clone());if(H.length>26)H.pop();const arr=s.userData.trail.geometry.attributes.position;for(let k=0;k<26;k++){const q=H[Math.min(k,H.length-1)];arr.setXYZ(k,q.x,q.y,q.z);}arr.needsUpdate=true;
        const lab=s.userData.label;s.getWorldPosition(v);v.project(camera);
        const vis=p.scroll<.6&&v.z<1;const sx=(v.x*.5+.5)*innerWidth,sy=(-v.y*.5+.5)*innerHeight;
        lab.style.transform=`translate(${sx+18}px,${sy-14}px)`;lab.style.opacity=vis?String(Math.max(0,1-p.scroll*2)):"0";lab.style.pointerEvents=vis&&p.scroll<.3?"auto":"none";});
      sway(rig,p);}
    ,dispose(){labelsEl.innerHTML="";}
  };
};

/* ---------- QR CONNECT ---------- */
builders["qr-connect"]=()=>{
  const B=base("#3ee0ff","#1b86ff");const {scene,rig}=B;
  // acrylic table stand with printed QR
  const stand=new THREE.Group();rig.add(stand);
  const card=new THREE.Mesh(new THREE.PlaneGeometry(1.5,2.0),new THREE.MeshStandardMaterial({map:(()=>{const c=document.createElement("canvas");c.width=600;c.height=800;const g=c.getContext("2d");
      g.fillStyle="#ffffff";g.fillRect(0,0,600,800);const gr=g.createLinearGradient(0,0,600,0);gr.addColorStop(0,"#1b86ff");gr.addColorStop(1,"#3ee0ff");g.fillStyle=gr;g.fillRect(0,0,600,120);
      g.fillStyle="#fff";g.font="700 44px Sora, sans-serif";g.textAlign="center";g.fillText("Scan for services",300,78);
      g.drawImage(qrTex(512).image,75,150,450,450);
      g.fillStyle="#0e1a30";g.font="600 34px Sora, sans-serif";g.fillText("Room 301",300,670);g.fillStyle="#5a6b88";g.font="500 24px Onest, sans-serif";g.fillText("No app needed · Open your camera",300,720);
      return tex(c);})(),roughness:.5}));
  stand.add(card);
  const acr=new THREE.Mesh(roundedBox(1.62,2.12,.04,.1,.02),M.glass());acr.position.z=.04;stand.add(acr);
  const acr2=acr.clone();acr2.position.z=-.04;stand.add(acr2);
  const foot=new THREE.Mesh(roundedBox(1.9,.5,.28,.12,.04),M.gun());foot.rotation.x=-Math.PI/2;foot.position.set(0,-1.18,0);stand.add(foot);
  const slot=new THREE.Mesh(new THREE.BoxGeometry(1.7,.03,.12),new THREE.MeshBasicMaterial({color:0x020306}));slot.position.set(0,-1.02,0);stand.add(slot);
  const beam=new THREE.Mesh(new THREE.PlaneGeometry(1.3,.03),new THREE.MeshBasicMaterial({color:new THREE.Color(.5,1.3,1.7),transparent:true,blending:THREE.AdditiveBlending,depthWrite:false,toneMapped:false}));beam.position.z=.075;stand.add(beam);
  const bg=new THREE.Mesh(new THREE.PlaneGeometry(1.3,.42),new THREE.MeshBasicMaterial({map:(()=>{const c=document.createElement("canvas");c.width=4;c.height=64;const g=c.getContext("2d");const gr=g.createLinearGradient(0,0,0,64);gr.addColorStop(0,"rgba(62,224,255,0)");gr.addColorStop(.5,"rgba(62,224,255,.5)");gr.addColorStop(1,"rgba(62,224,255,0)");g.fillStyle=gr;g.fillRect(0,0,4,64);return tex(c);})(),transparent:true,blending:THREE.AdditiveBlending,depthWrite:false,toneMapped:false}));bg.position.z=.07;stand.add(bg);
  stand.position.set(-1,.15,-.2);stand.rotation.y=.38;
  // reception bell
  const bell=new THREE.Group();rig.add(bell);
  const bb=new THREE.Mesh(new THREE.CylinderGeometry(.42,.46,.1,48),new THREE.MeshPhysicalMaterial({color:0x2a1a12,roughness:.35,clearcoat:1}));bell.add(bb);
  const dome=new THREE.Mesh(new THREE.SphereGeometry(.36,48,24,0,Math.PI*2,0,Math.PI/2),M.chrome());dome.position.y=.05;bell.add(dome);
  const plunger=new THREE.Mesh(new THREE.CylinderGeometry(.025,.025,.12,12),M.chrome());plunger.position.y=.45;bell.add(plunger);
  const knob=new THREE.Mesh(new THREE.SphereGeometry(.055,20,20),M.chrome());knob.position.y=.52;bell.add(knob);
  bell.position.set(.05,-1.25,.95);
  // phone
  const sc=document.createElement("canvas");sc.width=400;sc.height=730;const g=sc.getContext("2d");const stex=tex(sc);
  const shot=new Image();shot.src="/qr-app.jpg";
  const drawScreen=(hi)=>{g.fillStyle="#f2f2f7";g.fillRect(0,0,400,730);
    if(shot.complete&&shot.naturalWidth){const k=400/557;
      g.drawImage(shot,0,0,557,832,0,0,400,832*k);
      g.drawImage(shot,0,832,557,80,0,730-80*k,400,80*k);
      if(hi>=0){const cells=[[14,476],[205,476],[14,546],[205,546]];const [x,y]=cells[hi];g.strokeStyle="#3478f6";g.lineWidth=4;g.beginPath();g.roundRect?g.roundRect(x,y,182,57,12):g.rect(x,y,182,57);g.stroke();
        g.fillStyle="rgba(22,24,29,.94)";g.beginPath();g.roundRect?g.roundRect(14,612,372,44,12):g.rect(14,612,372,44);g.fill();g.fillStyle="#34c759";g.beginPath();g.arc(34,634,6,0,7);g.fill();g.fillStyle="#fff";g.font="500 17px Onest, sans-serif";
        g.fillText(["Housekeeping","Laundry","Maintenance","Something else"][hi]+" request sent",50,640);}}
    stex.needsUpdate=true;};
  shot.onload=()=>drawScreen(-1);drawScreen(-1);
  const ph=makePhone(stex,1.15,2.05);const phone=ph.group;rig.add(phone);phone.position.set(1.15,.2,.55);phone.rotation.set(-.05,-.42,.04);
  const arcs=wifiArcs(0x3ee0ff,.5);arcs.position.set(1.1,1.65,.55);rig.add(arcs);
  const pk=[];for(let i=0;i<16;i++){const m=new THREE.Mesh(new THREE.SphereGeometry(.03,8,8),M.glow(0x3ee0ff,4));m.userData.o=i/16;rig.add(m);pk.push(m);}
  const curve=new THREE.QuadraticBezierCurve3(new THREE.Vector3(-.5,.5,.2),new THREE.Vector3(.2,1.8,.9),new THREE.Vector3(.8,.6,.65));
  let hi=-1,ht=0;
  return {scene,rig,draggable:true,
    layout(w,h){place(rig,w,h,{rx:2.3,ry:1.9});},
    update(t,dt,p){B.tick(t,dt);const k=(Math.sin(t*1.6)+1)/2;beam.position.y=-.45+k*1.15;bg.position.y=beam.position.y;arcs.userData.tick(t);
      pk.forEach(m=>{const u=(t*.35+m.userData.o)%1;m.position.copy(curve.getPoint(u));m.scale.setScalar(Math.sin(u*Math.PI)*1.3+.2);});
      phone.position.y=.2+Math.sin(t*1.1)*.08;stand.position.y=.15+Math.sin(t*1.1+1.5)*.05;
      ht-=dt;if(ht<=0){hi=(hi+1)%5;ht=1.4;drawScreen(hi===4?-1:hi);}
      sway(rig,p);}
  };
};

/* ---------- GYM ERP ---------- */
builders["gym-erp"]=()=>{
  const B=base("#ffb547","#1b86ff");const {scene,rig}=B;
  const chrome=M.chrome(),rubber=M.rubber(),amber=M.glow(0xffa21f,.55);
  const db=new THREE.Group();rig.add(db);
  const handle=new THREE.Mesh(new THREE.CylinderGeometry(.085,.085,1.5,32),chrome);handle.rotation.z=Math.PI/2;db.add(handle);
  for(let i=-9;i<=9;i++){const r=new THREE.Mesh(new THREE.TorusGeometry(.088,.007,6,24),M.gun());r.rotation.y=Math.PI/2;r.position.x=i*.045;db.add(r);}
  [-1,1].forEach(s=>{
    const collar=new THREE.Mesh(new THREE.CylinderGeometry(.15,.15,.12,32),chrome);collar.rotation.z=Math.PI/2;collar.position.x=s*.66;db.add(collar);
    const head=new THREE.Mesh(new THREE.CylinderGeometry(.56,.56,.62,6,1),rubber);head.rotation.z=Math.PI/2;head.rotation.x=Math.PI/6;head.position.x=s*1.03;db.add(head);
    const band=new THREE.Mesh(new THREE.CylinderGeometry(.565,.565,.06,6,1,true),amber);band.rotation.copy(head.rotation);band.position.x=s*.86;db.add(band);
    const cap=new THREE.Mesh(new THREE.CylinderGeometry(.3,.3,.03,6),chrome);cap.rotation.copy(head.rotation);cap.position.x=s*1.35;db.add(cap);
    const bolt=new THREE.Mesh(new THREE.CylinderGeometry(.08,.08,.05,24),M.gun());bolt.rotation.z=Math.PI/2;bolt.position.x=s*1.37;db.add(bolt);
  });
  db.position.set(0,.95,0);db.rotation.set(.25,.4,.12);db.scale.setScalar(.95);
  // kettlebell
  const kb=new THREE.Group();rig.add(kb);
  const ball=new THREE.Mesh(new THREE.SphereGeometry(.45,48,32),new THREE.MeshStandardMaterial({color:0x1c2030,metalness:.7,roughness:.42}));ball.scale.y=.92;kb.add(ball);
  const hdl=new THREE.Mesh(new THREE.TorusGeometry(.28,.065,16,48,Math.PI),new THREE.MeshStandardMaterial({color:0x1c2030,metalness:.7,roughness:.42}));hdl.position.y=.3;kb.add(hdl);
  const kband=new THREE.Mesh(new THREE.TorusGeometry(.445,.018,10,64),amber);kband.rotation.x=Math.PI/2;kb.add(kband);
  kb.position.set(-1.65,-1.05,.5);kb.rotation.y=.5;
  // attendance bars on a glass slab
  const bars=new THREE.Group();rig.add(bars);
  const slab=new THREE.Mesh(roundedBox(3.1,1.2,.06,.12,.02),M.glass());slab.rotation.x=-Math.PI/2;slab.position.y=-.05;bars.add(slab);
  const vals=[.55,.72,.6,.88,.95,.7,.42];const bm=[];
  vals.forEach((v,i)=>{const hot=i===4;const m=new THREE.Mesh(roundedBox(.24,1,.24,.05,.01),new THREE.MeshPhysicalMaterial({color:hot?0xffa21f:0x1e3260,metalness:.3,roughness:.3,clearcoat:1,envMapIntensity:.5,emissive:hot?0xff8a00:0x0a1838,emissiveIntensity:hot?.35:.3}));
    m.position.set((i-3)*.4,0,0);m.userData.v=v*1.5;m.scale.y=.01;bars.add(m);bm.push(m);
    const cap=new THREE.Mesh(new THREE.BoxGeometry(.24,.02,.24),M.glow(hot?0xffd38a:0x4fb4ff,hot?3:1.6));m.add(cap);m.userData.cap=cap;});
  bars.position.set(0,-1.25,.2);bars.rotation.x=.22;
  // check-in gauge
  const gauge=new THREE.Group();rig.add(gauge);
  gauge.add(new THREE.Mesh(new THREE.TorusGeometry(.42,.035,12,96),new THREE.MeshStandardMaterial({color:0x1a2236,metalness:.6,roughness:.4})));
  const arc=new THREE.Mesh(new THREE.TorusGeometry(.42,.045,12,96,.01),M.glow(0xffa21f,1.4));gauge.add(arc);
  const gl=new THREE.Mesh(new THREE.PlaneGeometry(.62,.36),UI(labelTex("Check-ins",null,256,148,"#ffd38a",null,"600 40px Onest, sans-serif"),{transparent:true}));gauge.add(gl);
  gauge.position.set(1.75,.95,-.4);gauge.rotation.y=-.35;
  // member card
  const mc=document.createElement("canvas");mc.width=640;mc.height=400;const g=mc.getContext("2d");
  const gr=g.createLinearGradient(0,0,640,400);gr.addColorStop(0,"#ffb547");gr.addColorStop(1,"#ff7a3d");g.fillStyle=gr;g.fillRect(0,0,640,400);
  g.fillStyle="rgba(255,255,255,.18)";g.beginPath();g.arc(560,-40,220,0,7);g.fill();
  g.fillStyle="rgba(10,14,28,.9)";g.font="700 48px Sora,sans-serif";g.fillText("MEMBER",44,90);g.font="500 26px 'JetBrains Mono',monospace";g.fillText("PLAN · QUARTERLY",44,310);g.fillText("STATUS · ACTIVE",44,352);
  g.fillStyle="rgba(10,14,28,.9)";g.beginPath();g.roundRect?g.roundRect(44,140,80,60,10):g.rect(44,140,80,60);g.fill();
  const cardm=new THREE.Mesh(roundedBox(1.3,.82,.025,.08,.01),[new THREE.MeshPhysicalMaterial({map:tex(mc),roughness:.25,clearcoat:1}),new THREE.MeshStandardMaterial({color:0xff9a40,metalness:.4,roughness:.3})]);fixCapUV(cardm.geometry,1.3,.82);
  cardm.position.set(1.65,-.15,.45);cardm.rotation.set(-.1,-.5,.12);rig.add(cardm);
  let t0=null;
  return {scene,rig,draggable:true,
    layout(w,h){place(rig,w,h,{rx:2.4,ry:2.2,dy:-.1});},
    update(t,dt,p){B.tick(t,dt);if(t0===null)t0=t;const e=Math.min(1,(t-t0)/1.6);
      bm.forEach((m,i)=>{const k=Math.max(0,Math.min(1,e*1.6-i*.08));const ease=1-Math.pow(1-k,3);const h=m.userData.v*ease*(1+Math.sin(t*1.5+i)*.04);m.scale.y=Math.max(.01,h);m.position.y=h/2;m.userData.cap.position.y=.5;m.userData.cap.scale.y=1/Math.max(.01,h);});
      const ga=Math.PI*2*(.55+.25*(.5+.5*Math.sin(t*.6)))*e;arc.geometry.dispose();arc.geometry=new THREE.TorusGeometry(.42,.045,12,96,Math.max(.01,ga));arc.rotation.z=Math.PI/2;
      db.rotation.y+=dt*.3;db.position.y=.95+Math.sin(t*1.2)*.08;cardm.position.y=-.15+Math.sin(t*1.4+1)*.06;kb.position.y=-1.05+Math.sin(t*1.1+2)*.04;gauge.position.y=.95+Math.sin(t*1.3)*.05;
      sway(rig,p);}
  };
};

/* ---------- FASWAY ---------- */
builders.fasway=()=>{
  const B=base("#4f8cff","#9fc2ff");const {scene,rig}=B;
  const alu=new THREE.MeshPhysicalMaterial({color:0x8d97ab,metalness:1,roughness:.32,clearcoat:.4});
  const lap=new THREE.Group();rig.add(lap);
  const baseM=new THREE.Mesh(roundedBox(3.2,2.15,.07,.14,.025),alu);baseM.rotation.x=-Math.PI/2;lap.add(baseM);
  const kb=document.createElement("canvas");kb.width=640;kb.height=280;{const g=kb.getContext("2d");g.fillStyle="#0c111c";g.fillRect(0,0,640,280);
    for(let r=0;r<6;r++)for(let c=0;c<14;c++){const w=r===5&&c>4&&c<9?0:40;if(!w)continue;g.fillStyle="#1b2335";g.beginPath();g.roundRect?g.roundRect(14+c*44.5,12+r*44,38,38,6):g.rect(14+c*44.5,12+r*44,38,38);g.fill();g.fillStyle="rgba(79,140,255,.35)";g.fillRect(28+c*44.5,46+r*44,10,2);}
    g.fillStyle="#1b2335";g.beginPath();g.roundRect?g.roundRect(14+5*44.5,232,4*44.5-6,38,6):g.rect(14+5*44.5,232,170,38);g.fill();}
  const kbm=new THREE.Mesh(new THREE.PlaneGeometry(2.92,1.28),new THREE.MeshStandardMaterial({map:tex(kb),roughness:.7,emissive:0xffffff,emissiveMap:tex(kb),emissiveIntensity:.15}));kbm.rotation.x=-Math.PI/2;kbm.position.set(0,.067,-.32);lap.add(kbm);
  const tp=new THREE.Mesh(new THREE.ShapeGeometry(roundedShape(1.15,.66,.07),8),new THREE.MeshPhysicalMaterial({color:0x7d879b,metalness:.9,roughness:.18,clearcoat:1}));tp.rotation.x=-Math.PI/2;tp.position.set(0,.068,.64);lap.add(tp);
  const hinge=new THREE.Mesh(new THREE.CylinderGeometry(.06,.06,2.5,24),M.gun());hinge.rotation.z=Math.PI/2;hinge.position.set(0,.08,-1.08);lap.add(hinge);
  const lid=new THREE.Group();lid.position.set(0,.08,-1.08);lap.add(lid);
  const lidM=new THREE.Mesh(roundedBox(3.2,2.08,.05,.14,.02),alu);lidM.position.y=1.06;lid.add(lidM);
  const bez=new THREE.Mesh(new THREE.ShapeGeometry(roundedShape(3.12,2.0,.11),10),new THREE.MeshBasicMaterial({color:0x020306}));bez.position.set(0,1.06,.047);lid.add(bez);
  const sc=document.createElement("canvas");sc.width=800;sc.height=480;const sg=sc.getContext("2d");const stex=tex(sc);
  const scr=new THREE.Mesh(new THREE.PlaneGeometry(2.98,1.79),UI(stex));scr.position.set(0,1.1,.049);lid.add(scr);
  const cam=new THREE.Mesh(new THREE.CircleGeometry(.018,16),new THREE.MeshBasicMaterial({color:0x2a3a60}));cam.position.set(0,2.03,.049);lid.add(cam);
  const lglare=new THREE.Mesh(new THREE.PlaneGeometry(2.98,1.79),new THREE.MeshBasicMaterial({map:glareTex(),transparent:true,opacity:.18,blending:THREE.AdditiveBlending,depthWrite:false,toneMapped:false}));lglare.position.set(0,1.1,.052);lid.add(lglare);
  lid.rotation.x=-.3;
  lap.position.set(-.45,-.85,0);lap.rotation.set(.32,.45,0);
  // mug
  const mug=new THREE.Group();rig.add(mug);
  const mugB=new THREE.Mesh(new THREE.CylinderGeometry(.22,.2,.48,40,1,true),new THREE.MeshPhysicalMaterial({color:0x4f8cff,roughness:.3,clearcoat:1,side:THREE.DoubleSide}));mug.add(mugB);
  const mugBot=new THREE.Mesh(new THREE.CircleGeometry(.2,32),mugB.material);mugBot.rotation.x=Math.PI/2;mugBot.position.y=-.24;mug.add(mugBot);
  const coffee=new THREE.Mesh(new THREE.CircleGeometry(.2,32),new THREE.MeshStandardMaterial({color:0x2b160a,roughness:.2}));coffee.rotation.x=-Math.PI/2;coffee.position.y=.18;mug.add(coffee);
  const mh=new THREE.Mesh(new THREE.TorusGeometry(.13,.035,12,32,Math.PI*1.2),mugB.material);mh.position.x=.24;mh.rotation.z=-Math.PI*.6;mug.add(mh);
  mug.position.set(-2.35,-.95,.7);
  // phone
  const pc=document.createElement("canvas");pc.width=300;pc.height=620;const pg=pc.getContext("2d");const ptex=tex(pc);
  const ph=makePhone(ptex,.95,1.95);const phone=ph.group;rig.add(phone);phone.position.set(1.85,.25,1.05);phone.rotation.set(-.15,-.55,-.08);
  const icon=new Image();icon.src="/fasway.png";
  const curve=new THREE.QuadraticBezierCurve3(new THREE.Vector3(1.5,.95,.95),new THREE.Vector3(.8,2.1,.6),new THREE.Vector3(-.2,1.1,-.35));
  const pk=[];for(let i=0;i<16;i++){const m=new THREE.Mesh(new THREE.SphereGeometry(.035,8,8),M.glow(0x9fc2ff,4));m.userData.o=i/16;rig.add(m);pk.push(m);}
  const arcs=wifiArcs(0x4f8cff,.5);arcs.position.set(.75,1.95,.5);rig.add(arcs);
  const halo=glowSprite("#4f8cff",6,.18);halo.position.set(-.3,.4,-.8);rig.add(halo);
  const tw="Typed from my phone";let acc=0;
  const draw=(t)=>{
    const fx=.5+Math.sin(t*.9)*.32,fy=.5+Math.sin(t*1.3+1)*.3;
    const gr=sg.createLinearGradient(0,0,800,480);gr.addColorStop(0,"#1a2c5c");gr.addColorStop(.6,"#0c1430");gr.addColorStop(1,"#1b1240");sg.fillStyle=gr;sg.fillRect(0,0,800,480);
    sg.fillStyle="rgba(255,255,255,.06)";sg.fillRect(0,452,800,28);
    sg.fillStyle="#f4f7fc";sg.beginPath();sg.roundRect?sg.roundRect(60,46,480,320,16):sg.rect(60,46,480,320);sg.fill();
    sg.fillStyle="#e4eaf4";sg.fillRect(60,46,480,36);["#ff6b6b","#ffcc4d","#45e3b5"].forEach((c,i)=>{sg.fillStyle=c;sg.beginPath();sg.arc(82+i*20,64,6,0,7);sg.fill();});
    sg.fillStyle="#5a6b88";sg.font="500 15px 'JetBrains Mono', monospace";sg.fillText("notes.txt",160,69);
    const n=Math.floor((t*6)%(tw.length+12));const typed=tw.slice(0,Math.min(n,tw.length));sg.fillStyle="#0e1a30";sg.font="500 26px Onest, sans-serif";sg.fillText(typed,86,130);
    if(Math.floor(t*2)%2){const w=sg.measureText(typed).width;sg.fillStyle="#4f8cff";sg.fillRect(88+w,106,3,30);}
    sg.fillStyle="#dfe6f2";[170,200,230,260].forEach((y,i)=>sg.fillRect(86,y,[360,290,330,210][i],12));
    for(let i=0;i<3;i++){sg.fillStyle="rgba(255,255,255,.14)";sg.beginPath();sg.roundRect?sg.roundRect(680,70+i*84,66,66,16):sg.rect(680,70+i*84,66,66);sg.fill();}
    sg.fillStyle="rgba(5,9,19,.6)";sg.beginPath();sg.roundRect?sg.roundRect(60,394,300,42,21):sg.rect(60,394,300,42);sg.fill();sg.fillStyle="#45e3b5";sg.beginPath();sg.arc(84,415,7,0,7);sg.fill();sg.fillStyle="#cfe0ff";sg.font="500 17px 'JetBrains Mono', monospace";sg.fillText("Now playing · Lo-fi",102,421);
    const cx=fx*740+20,cy=fy*400+20;sg.fillStyle="#fff";sg.strokeStyle="#0b1530";sg.lineWidth=2;sg.beginPath();sg.moveTo(cx,cy);sg.lineTo(cx+22,cy+13);sg.lineTo(cx+11,cy+15);sg.lineTo(cx+7,cy+27);sg.closePath();sg.fill();sg.stroke();
    stex.needsUpdate=true;
    pg.fillStyle="#0d1426";pg.fillRect(0,0,300,620);
    if(icon.complete&&icon.naturalWidth)pg.drawImage(icon,22,40,28,28);pg.fillStyle="#e8eefc";pg.font="600 20px Sora, sans-serif";pg.fillText("Fasway",58,62);pg.fillStyle="#45e3b5";pg.font="500 13px Onest, sans-serif";pg.fillText("● Connected",196,60);
    pg.fillStyle="#141d36";pg.strokeStyle="rgba(79,140,255,.5)";pg.lineWidth=2;pg.beginPath();pg.roundRect?pg.roundRect(20,90,260,330,24):pg.rect(20,90,260,330);pg.fill();pg.stroke();
    pg.strokeStyle="rgba(79,140,255,.1)";pg.lineWidth=1;for(let x=44;x<280;x+=24){pg.beginPath();pg.moveTo(x,92);pg.lineTo(x,418);pg.stroke();}for(let y=114;y<418;y+=24){pg.beginPath();pg.moveTo(22,y);pg.lineTo(278,y);pg.stroke();}
    const px=20+fx*260,py=90+fy*330;const rg=pg.createRadialGradient(px,py,0,px,py,34);rg.addColorStop(0,"rgba(79,140,255,.9)");rg.addColorStop(1,"rgba(79,140,255,0)");pg.fillStyle=rg;pg.beginPath();pg.arc(px,py,34,0,7);pg.fill();
    ["Click","Right-click"].forEach((l,i)=>{pg.fillStyle="#1a2440";pg.beginPath();pg.roundRect?pg.roundRect(20+i*134,438,126,52,14):pg.rect(20+i*134,438,126,52);pg.fill();pg.fillStyle="#e8eefc";pg.font="600 17px Onest, sans-serif";pg.fillText(l,44+i*134,470);});
    pg.fillStyle="#141d36";pg.strokeStyle="rgba(79,140,255,.5)";pg.beginPath();pg.roundRect?pg.roundRect(20,508,260,54,14):pg.rect(20,508,260,54);pg.fill();pg.stroke();pg.fillStyle="#8d9aba";pg.font="500 15px Onest, sans-serif";pg.fillText("Type here…",38,541);
    ptex.needsUpdate=true;
  };
  return {scene,rig,draggable:true,
    layout(w,h){place(rig,w,h,{rx:2.7,ry:1.95,dx:-.1});},
    update(t,dt,p){B.tick(t,dt);acc+=dt;if(acc>1/24){acc=0;draw(t);}
      pk.forEach(m=>{const u=(t*.45+m.userData.o)%1;m.position.copy(curve.getPoint(u));m.scale.setScalar(Math.sin(u*Math.PI)*1.4+.2);});
      arcs.userData.tick(t);phone.position.y=.25+Math.sin(t*1.2)*.08;lap.position.y=-.85+Math.sin(t*.9+1)*.04;mug.position.y=-.95+Math.sin(t*1.1+2)*.03;
      sway(rig,p);}
  };
};

/* ---------- SMART HARDWARE ---------- */
builders["smart-hardware"]=()=>{
  const B=base("#45e3b5","#1b86ff");const {scene,rig}=B;
  const dev=new THREE.Group();rig.add(dev);
  dev.add(new THREE.Mesh(roundedBox(2.5,2.9,.34,.42,.08),M.glossW()));
  const face=new THREE.Mesh(new THREE.ShapeGeometry(roundedShape(2.3,2.7,.34),12),new THREE.MeshStandardMaterial({color:0xd5dce8,roughness:.6}));face.position.z=.256;dev.add(face);
  const back=new THREE.Mesh(roundedBox(2.1,2.5,.06,.3,.02),new THREE.MeshStandardMaterial({color:0x9aa6ba,metalness:.8,roughness:.35}));back.position.z=-.24;dev.add(back);
  const led=new THREE.Mesh(roundedBox(.56,.06,.02,.03,.005),new THREE.MeshBasicMaterial({color:new THREE.Color(.35,1.5,1.05),toneMapped:false}));led.position.set(0,1.2,.27);dev.add(led);
  // speaker grille
  const holes=new THREE.InstancedMesh(new THREE.CylinderGeometry(.016,.016,.02,8),new THREE.MeshBasicMaterial({color:0x6d7890}),30);let hi=0;const dm=new THREE.Object3D();
  for(let r=0;r<2;r++)for(let c=0;c<15;c++){dm.position.set(-.7+c*.1+(r?.05:0),1.04-r*.07,.262);dm.rotation.x=Math.PI/2;dm.updateMatrix();holes.setMatrixAt(hi++,dm.matrix);}dev.add(holes);
  const ant=new THREE.Mesh(new THREE.CylinderGeometry(.04,.04,.28,16),M.gun());ant.position.set(1.05,1.55,-.05);dev.add(ant);
  const antTip=new THREE.Mesh(new THREE.SphereGeometry(.05,16,16),M.glow(0x45e3b5,2.5));antTip.position.set(1.05,1.7,-.05);dev.add(antTip);
  const icons={
    desk:(g,x,y,s)=>{g.beginPath();g.moveTo(x-s,y+s*.7);g.lineTo(x+s,y+s*.7);g.moveTo(x-s*.7,y+s*.7);g.lineTo(x-s*.7,y);g.lineTo(x+s*.7,y);g.lineTo(x+s*.7,y+s*.7);g.moveTo(x,y);g.lineTo(x,y-s*.5);g.stroke();g.beginPath();g.arc(x,y-s*.7,s*.2,0,7);g.stroke();},
    broom:(g,x,y,s)=>{g.beginPath();g.moveTo(x+s*.3,y-s);g.lineTo(x,y);g.moveTo(x-s*.7,y+s);g.lineTo(x-s*.4,y);g.lineTo(x+s*.4,y);g.lineTo(x+s*.7,y+s);g.closePath();g.stroke();},
    food:(g,x,y,s)=>{g.beginPath();g.arc(x,y+s*.5,s,Math.PI,0);g.moveTo(x-s*1.2,y+s*.5);g.lineTo(x+s*1.2,y+s*.5);g.moveTo(x,y-s*.5);g.lineTo(x,y-s*.75);g.moveTo(x-s*1.1,y+s*.95);g.lineTo(x+s*1.1,y+s*.95);g.stroke();},
    wrench:(g,x,y,s)=>{g.beginPath();g.moveTo(x-s*.8,y+s*.8);g.lineTo(x+s*.2,y-s*.2);g.stroke();g.beginPath();g.arc(x+s*.45,y-s*.45,s*.45,Math.PI*.9,Math.PI*2.6);g.stroke();},
    sos:(g,x,y,s)=>{g.beginPath();g.moveTo(x,y-s);g.lineTo(x+s*1.1,y+s*.8);g.lineTo(x-s*1.1,y+s*.8);g.closePath();g.stroke();g.beginPath();g.moveTo(x,y-s*.3);g.lineTo(x,y+s*.2);g.moveTo(x,y+s*.5);g.lineTo(x,y+s*.52);g.stroke();}
  };
  const defs=[["Reception","desk",-.55,.42],["Housekeeping","broom",.55,.42],["Room service","food",-.55,-.5],["Maintenance","wrench",.55,-.5]];
  const buttons=[];const hitList=[];
  const mkBtn=(name,ic,x,y,r,isSos)=>{const grp=new THREE.Group();grp.position.set(x,y,.3);
    const geo=isSos?roundedBox(1.9,.4,.12,.19,.03):new THREE.CylinderGeometry(r,r*.96,.14,64);
    const mat=isSos?new THREE.MeshPhysicalMaterial({color:0xc8141e,roughness:.3,clearcoat:1,envMapIntensity:.4,emissive:0xc8141e,emissiveIntensity:.15}):new THREE.MeshPhysicalMaterial({color:0xffffff,roughness:.3,clearcoat:1,clearcoatRoughness:.15});
    const m=new THREE.Mesh(geo,mat);if(!isSos)m.rotation.x=Math.PI/2;grp.add(m);
    const ring=new THREE.Mesh(isSos?new THREE.PlaneGeometry(2.0,.5):new THREE.RingGeometry(r+.06,r+.1,64),new THREE.MeshBasicMaterial({color:new THREE.Color(.3,1.4,1),transparent:true,opacity:0,side:THREE.DoubleSide,toneMapped:false,blending:THREE.AdditiveBlending,depthWrite:false}));ring.position.z=isSos?-.05:-.03;grp.add(ring);
    let lab;
    if(isSos){lab=new THREE.Mesh(new THREE.PlaneGeometry(.3,.3),UI(labelTex("",icons.sos,128,128,"#ffffff"),{transparent:true}));lab.position.set(-.55,0,.1);grp.add(lab);
      const tl=new THREE.Mesh(new THREE.PlaneGeometry(1.1,.2),UI(labelTex("EMERGENCY",null,512,92,"#ffffff",null,"700 54px Sora, sans-serif"),{transparent:true}));tl.position.set(.2,0,.1);grp.add(tl);tl.userData.btn=buttons.length;hitList.push(tl);}
    else{lab=new THREE.Mesh(new THREE.CircleGeometry(r*.92,48),UI(labelTex(name,icons[ic],256,256,"#13213a"),{transparent:true}));lab.position.z=.075;grp.add(lab);}
    // bezel
    const bez=isSos?new THREE.Mesh(roundedBox(2.04,.54,.04,.25,.01),M.gun()):new THREE.Mesh(new THREE.TorusGeometry(r+.035,.03,16,64),M.chrome());bez.position.set(x,y,.262);dev.add(bez);
    grp.userData={press:0,mesh:m,ring,base:.3,sos:isSos};dev.add(grp);m.userData.btn=buttons.length;lab.userData.btn=buttons.length;hitList.push(m,lab);buttons.push(grp);};
  defs.forEach(d=>mkBtn(d[0],d[1],d[2],d[3],.42,false));
  mkBtn("Emergency","sos",0,-1.12,0,true);
  // desk base
  const stand=new THREE.Mesh(roundedBox(2.8,1.4,.14,.3,.04),new THREE.MeshPhysicalMaterial({color:0x1a2234,metalness:.85,roughness:.3,clearcoat:.6}));stand.rotation.x=-Math.PI/2;stand.position.set(0,-1.72,.15);rig.add(stand);
  const plaque=new THREE.Mesh(new THREE.PlaneGeometry(1,.16),UI(labelTex("ROOM 304",null,512,84,"#9fb0cc",null,"500 44px 'JetBrains Mono', monospace"),{transparent:true}));plaque.position.set(0,-1.72,.88);rig.add(plaque);
  const waves=[];for(let i=0;i<3;i++){const w=new THREE.Mesh(new THREE.RingGeometry(1,1.03,96),new THREE.MeshBasicMaterial({color:0x45e3b5,transparent:true,opacity:0,side:THREE.DoubleSide,blending:THREE.AdditiveBlending,depthWrite:false,toneMapped:false}));w.userData.k=1;rig.add(w);waves.push(w);}
  dev.rotation.set(-.3,-.42,-.04);dev.position.y=.05;
  const ray=new THREE.Raycaster();
  let hover=-1,ledFlash=0;const ledCol=new THREE.Color(),okC=new THREE.Color(.35,1.5,1.05),sosC=new THREE.Color(2,.3,.35);let flashC=okC;
  stageApi.hwPress=(i)=>{buttons[i].userData.press=1;ledFlash=1;flashC=i===4?sosC:okC;const w=waves.find(w=>w.userData.k>=1)||waves[0];w.userData.k=0;w.material.color.set(i===4?0xff5d63:0x45e3b5);};
  return {scene,rig,draggable:true,
    layout(w,h){place(rig,w,h,{rx:1.75,ry:2.1,dy:.1});},
    onClick(){ray.setFromCamera({x:pointer.nx,y:pointer.ny},camera);const h=ray.intersectObjects(hitList,false)[0];if(h)hwPress(h.object.userData.btn);},
    update(t,dt,p){B.tick(t,dt);
      if(!isTouch){ray.setFromCamera({x:pointer.nx,y:pointer.ny},camera);const hit=p.scroll<.8?ray.intersectObjects(hitList,false)[0]:null;hover=hit?hit.object.userData.btn:-1;document.body.style.cursor=hover>=0?"pointer":"";}
      buttons.forEach((b,i)=>{b.userData.press=Math.max(0,b.userData.press-dt*3);const pr=Math.sin(Math.min(1,b.userData.press)*Math.PI);b.position.z=b.userData.base-pr*.08+(hover===i?.03:0);
        const tgt=(hover===i?(b.userData.sos?.25:.9):0)+b.userData.press*.9;b.userData.ring.material.opacity+=(tgt-b.userData.ring.material.opacity)*.2;
        if(b.userData.sos)b.userData.mesh.material.emissiveIntensity=.1+(.5+.5*Math.sin(t*4))*.25+b.userData.press*3;});
      ledFlash=Math.max(0,ledFlash-dt*1.2);ledCol.copy(okC).lerp(flashC,Math.min(1,ledFlash*2)).multiplyScalar(.8+.2*Math.sin(t*2)+ledFlash);led.material.color.copy(ledCol);
      antTip.material.emissiveIntensity=1.5+Math.sin(t*3)*1;
      waves.forEach(w=>{if(w.userData.k<1){w.userData.k+=dt*.7;const k=w.userData.k;w.scale.setScalar(1.6+k*3.5);w.material.opacity=(1-k)*.7;w.position.copy(dev.position);w.rotation.copy(dev.rotation);}else w.material.opacity=0;});
      dev.position.y=.05+Math.sin(t*1.1)*.05;
      sway(rig,p,.7);}
  };
};

/* ---------- renderer, bloom & loop ---------- */
let composer=null,renderPass=null,bloom=null,camZ=9;
if(window.THREE){
  renderer=new THREE.WebGLRenderer({canvas,antialias:!WEAK,alpha:false,powerPreference:"high-performance"});
  renderer.setClearColor(0x02040a,1);
  renderer.outputEncoding=THREE.sRGBEncoding;
  renderer.physicallyCorrectLights=false;
  camera=new THREE.PerspectiveCamera(40,1,.1,120);camera.position.set(0,0,9);
  const useBloom=!LOW&&THREE.EffectComposer&&THREE.UnrealBloomPass&&THREE.RenderPass&&THREE.ShaderPass;
  if(useBloom){
    renderer.toneMapping=THREE.NoToneMapping;
    const rt=new THREE.WebGLRenderTarget(innerWidth,innerHeight,{type:THREE.HalfFloatType});
    composer=new THREE.EffectComposer(renderer,rt);
    renderPass=new THREE.RenderPass(new THREE.Scene(),camera);composer.addPass(renderPass);
    bloom=new THREE.UnrealBloomPass(new THREE.Vector2(innerWidth,innerHeight),.38,.45,1.05);composer.addPass(bloom);
    composer.addPass(new THREE.ShaderPass({uniforms:{tDiffuse:{value:null},uExp:{value:1.0}},
      vertexShader:`varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`,
      fragmentShader:`uniform sampler2D tDiffuse;uniform float uExp;varying vec2 vUv;
      vec3 rrt(vec3 v){vec3 a=v*(v+.0245786)-.000090537;vec3 b=v*(.983729*v+.4329510)+.238081;return a/b;}
      vec3 aces(vec3 c){const mat3 I=mat3(.59719,.07600,.02840,.35458,.90834,.13383,.04823,.01566,.83777);const mat3 O=mat3(1.60475,-.10208,-.00327,-.53108,1.10813,-.07276,-.07367,-.00605,1.07602);c*=uExp/.6;c=I*c;c=rrt(c);c=O*c;return clamp(c,0.,1.);}
      void main(){vec3 c=aces(texture2D(tDiffuse,vUv).rgb);vec3 s=mix(c*12.92,1.055*pow(c,vec3(1./2.4))-.055,step(.0031308,c));
        float v=smoothstep(1.15,.3,length((vUv-.5)*vec2(1.2,1.)));gl_FragColor=vec4(s*mix(.7,1.,v),1.);}`}));
  }else{renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1.0;}
  const resize=()=>{const w=innerWidth,h=innerHeight;const pr=maxPR();renderer.setPixelRatio(pr);renderer.setSize(w,h,false);
    if(composer){composer.setPixelRatio(pr);composer.setSize(w,h);}
    camera.aspect=w/h;camZ=w/h<1.05?10:9;camera.position.z=camZ;camera.updateProjectionMatrix();if(current&&current.layout)current.layout(w,h);};
  addEventListener("resize",resize);
  stageApi.setScene=(key)=>{
    if(current&&current.dispose)current.dispose();
    if(key!=="smart-hardware"){stageApi.hwPress=null;document.body.style.cursor="";}
    drag.ry=0;drag.rx=0;
    current=builders[key]();resize();
  };
  let visible=true;document.addEventListener("visibilitychange",()=>visible=!document.hidden);
  let sScroll=scrollY/innerHeight;
  const loop=(now)=>{requestAnimationFrame(loop);if(!visible||!current)return;
    const dt=Math.min(.05,(now-clock.last)/1000);clock.last=now;clock.t+=dt;
    pointer.x+=(pointer.tx-pointer.x)*.05;pointer.y+=(pointer.ty-pointer.y)*.05;
    sScroll+=(scrollY/innerHeight-sScroll)*Math.min(1,dt*5);const scroll=sScroll;
    canvas.style.opacity=String(Math.max(.5,1-scroll*.5));
    current.update(clock.t,dt,{scroll});
    const sc=Math.min(scroll,1.6);camera.position.y=-sc*1.1;camera.position.x=pointer.x*.25+Math.sin(sc*1.4)*.6;camera.position.z=camZ+sc*1.4;camera.lookAt(0,camera.position.y*.55,0);
    if(composer){renderPass.scene=current.scene;composer.render();}else renderer.render(current.scene,camera);
  };
  requestAnimationFrame(loop);
}

/* ---------- mini canvases on product cards (2D, cheap) ---------- */
function drawMinis(t){
  document.querySelectorAll("canvas.mini").forEach(c=>{
    const id=c.dataset.mini,g=c.getContext("2d"),W=c.width,H=c.height,col=P[id].color;g.clearRect(0,0,W,H);g.save();g.translate(W/2,H/2);
    g.strokeStyle=col;g.fillStyle=col;g.lineWidth=2;
    if(id==="qr-connect"){const s=96;g.globalAlpha=.9;const n=9,cl=s*2/n;let seed=3;const r=()=>{seed=(seed*16807)%2147483647;return seed/2147483647};
      g.rotate(Math.sin(t*.6)*.08);
      for(let y=0;y<n;y++)for(let x=0;x<n;x++){const f=(x<3&&y<3)||(x>5&&y<3)||(x<3&&y>5);if(f||r()>.5){g.globalAlpha=f?.95:.55;g.fillRect(-s+x*cl+2,-s+y*cl+2,cl-4,cl-4);}}
      g.globalAlpha=1;const yy=-s+((Math.sin(t*1.5)+1)/2)*s*2;g.fillStyle="#fff";g.shadowColor=col;g.shadowBlur=18;g.fillRect(-s-8,yy,s*2+16,3);}
    else if(id==="gym-erp"){const v=[.5,.7,.6,.85,1,.65,.4];v.forEach((h,i)=>{const hh=h*100*(.85+.15*Math.sin(t*2+i));g.globalAlpha=i===4?1:.45;g.fillRect(-98+i*28,70-hh,20,hh);});g.globalAlpha=.9;g.beginPath();v.forEach((h,i)=>{const y=70-h*100*(.85+.15*Math.sin(t*2+i))-14;i?g.lineTo(-88+i*28,y):g.moveTo(-88,y)});g.strokeStyle="#fff";g.stroke();}
    else if(id==="fasway"){const fx=Math.sin(t*.9)*.8,fy=Math.sin(t*1.3+1)*.8;g.lineWidth=2;g.globalAlpha=.9;
      g.beginPath();g.roundRect?g.roundRect(-104,-80,128,82,8):g.rect(-104,-80,128,82);g.stroke();g.beginPath();g.moveTo(-114,10);g.lineTo(34,10);g.stroke();
      g.fillStyle="#fff";const cx=-40+fx*50,cy=-40+fy*28;g.beginPath();g.moveTo(cx,cy);g.lineTo(cx+12,cy+7);g.lineTo(cx+5,cy+8);g.lineTo(cx+3,cy+15);g.closePath();g.fill();
      g.fillStyle=col;g.globalAlpha=.9;g.beginPath();g.roundRect?g.roundRect(48,-50,52,96,10):g.rect(48,-50,52,96);g.stroke();
      g.globalAlpha=.25;g.fillRect(54,-40,40,52);g.globalAlpha=1;g.shadowColor=col;g.shadowBlur=12;g.beginPath();g.arc(74+fx*14,-14+fy*20,5,0,7);g.fill();g.shadowBlur=0;
      g.globalAlpha=.5;for(let k=0;k<3;k++){const u=((t*.8)+k/3)%1;g.beginPath();g.arc(48-u*40,-20-Math.sin(u*Math.PI)*30,3,0,7);g.fill();}}
    else if(id==="smart-hardware"){g.globalAlpha=.95;g.lineWidth=2;g.beginPath();g.roundRect?g.roundRect(-80,-92,160,184,30):g.rect(-80,-92,160,184);g.stroke();
      [[-36,-30],[36,-30],[-36,30],[36,30]].forEach(([x,y],i)=>{const on=Math.floor(t*1.2)%4===i;g.globalAlpha=on?1:.4;g.beginPath();g.arc(x,y,20,0,7);on?g.fill():g.stroke();});
      g.globalAlpha=.6+.4*Math.sin(t*4);g.fillStyle="#ff5d63";g.beginPath();g.roundRect?g.roundRect(-52,62,104,18,9):g.rect(-52,62,104,18);g.fill();
      g.globalAlpha=.5;for(let k=0;k<3;k++){g.beginPath();g.arc(0,-92,14+k*14+((t*20)%14),Math.PI*1.2,Math.PI*1.8);g.stroke();}}
    g.restore();
  });
}
let miniRaf=0;const miniLoop=(n)=>{miniRaf=requestAnimationFrame(miniLoop);if(!document.getElementById("view-home").hidden)drawMinis(n/1000);};
requestAnimationFrame(miniLoop);

/* ---------- smooth scrolling ---------- */
let lenis=null;
if(window.Lenis&&!reduce){try{lenis=new Lenis({lerp:.09,smoothWheel:true,wheelMultiplier:.9});const lr=t=>{lenis.raf(t);requestAnimationFrame(lr);};requestAnimationFrame(lr);}catch(_){lenis=null;}}
function goTo(target,instant){
  if(lenis){lenis.scrollTo(target,{offset:target===0?0:-80,immediate:!!instant,duration:instant?0:1.4});return;}
  if(target===0)scrollTo({top:0,behavior:"auto"});else target.scrollIntoView({behavior:instant||reduce?"auto":"smooth"});
}
/* ---------- page effects ---------- */
const fine=matchMedia("(pointer: fine)").matches;
const io=("IntersectionObserver" in window)?new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target);}}),{rootMargin:"0px 0px -6% 0px"}):null;
function splitWords(el){
  if(!el||el.dataset.split)return;el.dataset.split="1";let i=0;
  [...el.childNodes].forEach(n=>{
    if(n.nodeType===3){const frag=document.createDocumentFragment();
      n.textContent.split(/(\s+)/).forEach(p=>{if(!p)return;if(/^\s+$/.test(p)){frag.appendChild(document.createTextNode(p));return;}
        const w=document.createElement("span");w.className="w";const inner=document.createElement("span");inner.textContent=p;inner.style.setProperty("--wd",(.12+i++*.07)+"s");w.appendChild(inner);frag.appendChild(w);});
      n.replaceWith(frag);}
    else if(n.nodeType===1){const w=document.createElement("span");w.className="w";n.replaceWith(w);n.style.display="inline-block";n.style.animation="wordUp .9s cubic-bezier(.16,1,.3,1) both";n.style.animationDelay=(.12+i++*.07)+"s";w.appendChild(n);}
  });
}
function enhance(root){
  if(!reduce)root.querySelectorAll(".h1,.p-name").forEach(el=>splitWords(el));
  root.querySelectorAll(".pcard,.feat,.plat,.step,.tcol,.ps,.next").forEach(el=>el.classList.add("tilt"));
  if(reduce||!io)return;
  [".sec-head",".bento",".pillars",".steps",".feats",".plats",".flow",".split",".trust",".audience",".manifesto blockquote",".demo",".fw-demo",".phone-demo",".next",".contact"].forEach(sel=>root.querySelectorAll(sel).forEach(g=>{
    const kids=g.matches(".sec-head,.manifesto blockquote,.next,.demo,.fw-demo,.phone-demo")?[g]:[...g.children];
    kids.forEach((k,i)=>{k.classList.add("rv");k.style.setProperty("--d",(Math.min(i,6)*.08)+"s");io.observe(k);});}));
}
if(fine&&!reduce){
  let tEl=null;const rs=document.documentElement.style;
  addEventListener("pointermove",e=>{
    rs.setProperty("--cx",e.clientX+"px");rs.setProperty("--cy",e.clientY+"px");
    const el=e.target.closest&&e.target.closest(".tilt");
    if(tEl&&tEl!==el){tEl.style.setProperty("--rx","0deg");tEl.style.setProperty("--ry","0deg");}
    tEl=el;if(!el)return;const r=el.getBoundingClientRect();const x=(e.clientX-r.left)/r.width,y=(e.clientY-r.top)/r.height;
    const k=el.matches(".pcard,.next")?6:3.5;el.style.setProperty("--ry",((x-.5)*k)+"deg");el.style.setProperty("--rx",(-(y-.5)*k)+"deg");el.style.setProperty("--mx",(x*100)+"%");el.style.setProperty("--my",(y*100)+"%");},{passive:true});
}
const prog=document.getElementById("progress");
const onScroll=()=>{const m=document.documentElement.scrollHeight-innerHeight;prog.style.setProperty("--sp",m>0?(scrollY/m).toFixed(4):0);};
addEventListener("scroll",onScroll,{passive:true});

/* ---------- router ---------- */
const homeSections=["products","approach","process","contact","home"];
const navLinks=[...document.querySelectorAll("[data-nav]")];
let currentView=null, pendingProduct=null;
document.addEventListener("click",e=>{const a=e.target.closest("[data-prod]");if(a)pendingProduct=a.dataset.prod;});
/* Each product has a real URL (/qr-connect/ etc., see scripts/build-pages.mjs); home sections use /#id. */
const slugOf=path=>path.replace(/(^|\/)index\.html$/,"").replace(/^\/+|\/+$/g,"");
document.addEventListener("click",e=>{
  if(e.defaultPrevented||e.button!==0||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return;
  const a=e.target.closest("a[href]");if(!a||a.target||a.hasAttribute("download"))return;
  const u=new URL(a.href,location.href);if(u.origin!==location.origin)return;
  const slug=slugOf(u.pathname);if(slug&&!P[slug])return;
  e.preventDefault();
  if(slug===slugOf(location.pathname)&&u.hash){
    const el=document.getElementById(u.hash.slice(1));history.replaceState(null,"",u.pathname+u.hash);
    if(el)goTo(el);
    navLinks.forEach(n=>n.toggleAttribute("aria-current",n.dataset.nav===u.hash.slice(1)));
    if(u.hash==="#contact"&&pendingProduct){prefill();}
    return;
  }
  history.pushState(null,"",u.pathname+u.hash);route();
});
function prefill(){const s=document.getElementById("cf-product");if(s)[...s.options].forEach(o=>{if(o.text===pendingProduct)s.value=o.text;});pendingProduct=null;}
function route(){
  let h=(location.hash||"").slice(1), slug=slugOf(location.pathname);
  if(!slug&&P[h]){slug=h;h="";history.replaceState(null,"","/"+slug+"/");}   // old #product links
  if(slug&&!P[slug]){slug="";history.replaceState(null,"","/"+location.hash);}
  const isProduct=!!slug;
  const view=isProduct?slug:"home";
  const curtain=document.getElementById("curtain");
  const apply=()=>{
    document.getElementById("view-home").hidden=isProduct;
    pv.hidden=!isProduct;
    if(isProduct){if(currentView!==view){renderProduct(slug);enhance(pv);}document.title=P[slug].name+" · Eazenet.online";}
    else{document.documentElement.style.setProperty("--p","#6fd0ff");document.title="Eazenet.online";}
    if(window.THREE&&currentView!==view)stageApi.setScene(view);
    currentView=view;
    navLinks.forEach(a=>a.removeAttribute("aria-current"));
    const el=h&&h!=="home"&&document.getElementById(h);
    if(el){requestAnimationFrame(()=>goTo(el,changed));
      const nl=navLinks.find(a=>a.dataset.nav===h);if(nl)nl.setAttribute("aria-current","page");}
    else goTo(0,true);
    if(h==="contact"&&pendingProduct)prefill();
  };
  const changed=currentView!==null&&currentView!==view;
  if(changed&&!reduce){curtain.classList.add("on");setTimeout(()=>{apply();requestAnimationFrame(()=>curtain.classList.remove("on"));},280);}
  else apply();
}
enhance(document.getElementById("view-home"));
addEventListener("popstate",route);
route();
if(document.fonts&&window.THREE)document.fonts.ready.then(()=>{if(currentView)stageApi.setScene(currentView);});
})();
