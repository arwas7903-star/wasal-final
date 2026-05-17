/* ── Layout: header + bottom nav, auth guard, language/voice + mic ── */
(function () {
  const lang = localStorage.getItem(Config.KEYS.LANG) || "ar";
  const voiceOn = localStorage.getItem(Config.KEYS.VOICE) !== "false";
  const isAr = lang === "ar";

  document.documentElement.lang = lang;
  document.documentElement.dir = isAr ? "rtl" : "ltr";

  window.speak = function (text) {
    if (!text || !voiceOn || !("speechSynthesis" in window)) return;
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = isAr ? "ar-SA" : "en-US";
    speechSynthesis.speak(u);
  };

  const LOGO_SVG = `<svg width="38" height="30" viewBox="0 0 44 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="22" cy="30" rx="16" ry="2.5" fill="currentColor" opacity=".10"/>
    <rect x="2" y="19" width="40" height="3" rx="1.5" fill="currentColor"/>
    <path d="M2 22 Q10 8 18 22" stroke="currentColor" stroke-width="2.2" fill="none" stroke-linecap="round"/>
    <path d="M26 22 Q34 8 42 22" stroke="currentColor" stroke-width="2.2" fill="none" stroke-linecap="round"/>
    <circle cx="14" cy="10" r="2.2" fill="currentColor"/>
    <line x1="14" y1="12.2" x2="14" y2="18" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
    <circle cx="28" cy="10" r="2.2" fill="currentColor"/>
    <line x1="28" y1="12.2" x2="28" y2="18" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
    <circle cx="21" cy="15.8" r="1.4" fill="currentColor" opacity=".85"/>
  </svg>`;

  const ICONS = {
    home: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
    users: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/></svg>`,
    layers: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>`,
    bag: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/></svg>`,
    volOn: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>`,
    volOff: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/></svg>`,
  };

  function render(user) {
    const activePage = document.body.dataset.page || "";
    const requireAuth = document.body.dataset.requireAuth === "true";

    if (requireAuth && !user) {
      location.href = "./login.html";
      return;
    }

    const navItems = [
      { href: "./index.html", label: T("nav.home"), page: "home", icon: ICONS.home },
      { href: "./disabilities.html", label: T("nav.disabilities"), page: "disabilities", icon: ICONS.users },
      { href: "./services.html", label: T("nav.services"), page: "services", icon: ICONS.layers },
    ];

    if (user) {
      navItems.push({ href: "./orders.html", label: T("nav.orders"), page: "orders", icon: ICONS.bag });
    }

    const desktopNav = navItems.map(n =>
      `<a href="${n.href}" class="nav-link${n.page === activePage ? " active" : ""}">${n.label}</a>`
    ).join("");

    const authHtml = user
      ? `<span class="header-username">${user.name}</span>
         <button class="btn btn-outline btn-sm" onclick="Layout.logout()">${T("nav.logout")}</button>`
      : `<button class="btn btn-primary btn-sm" onclick="location.href='./login.html'">${T("nav.login")}</button>`;

    const header = document.getElementById("layout-header");
    if (header) {
      header.innerHTML = `
        <header class="site-header">
          <div class="header-inner">
            <a href="./index.html" class="logo-link">${LOGO_SVG}<span class="logo-text">${T("app.name")}</span></a>
            <nav class="desktop-nav">${desktopNav}</nav>
            <div class="header-actions">
              <button class="icon-btn${voiceOn ? " active" : ""}" onclick="Layout.toggleVoice()" title="${isAr ? "تبديل الصوت" : "Toggle voice"}">
                ${voiceOn ? ICONS.volOn : ICONS.volOff}
              </button>
              <button class="btn btn-ghost btn-sm lang-btn" onclick="Layout.toggleLang()">${isAr ? "English" : "العربية"}</button>
              ${authHtml}
            </div>
          </div>
        </header>`;
    }

    const bottom = document.getElementById("layout-bottom-nav");
    if (bottom) {
      bottom.innerHTML = `
        <nav class="bottom-nav" aria-label="التنقل الرئيسي">
          ${navItems.map(n => `
            <a href="${n.href}" class="bnav-item${n.page === activePage ? " active" : ""}">
              <span class="bnav-icon">${n.icon}</span>
              <span class="bnav-label">${n.label}</span>
            </a>`).join("")}
        </nav>`;
    }

    setTimeout(() => window.dispatchEvent(new CustomEvent("layout-ready", { detail: { user } })), 0);
  }

  const token = localStorage.getItem(Config.KEYS.TOKEN);

  if (token) {
    API.getMe()
      .then(render)
      .catch(() => {
        localStorage.removeItem(Config.KEYS.TOKEN);
        render(null);
      });
  } else {
    render(null);
  }

  window.Layout = {
    logout() {
      localStorage.removeItem(Config.KEYS.TOKEN);
      localStorage.removeItem("wasal_user");
      location.href = "./index.html";
    },
    toggleLang() {
      localStorage.setItem(Config.KEYS.LANG, isAr ? "en" : "ar");
      location.reload();
    },
    toggleVoice() {
      localStorage.setItem(Config.KEYS.VOICE, voiceOn ? "false" : "true");
      location.reload();
    },
  };

  let recognition = null;
  let micIsRunning = false;
  let shouldKeepListening = false;

  function handleVoiceCommand(command) {
    command = command.trim().toLowerCase();

    if (command.includes("الخدمات") || command.includes("services")) {
      location.href = "./services.html";
    } else if (command.includes("الرئيسية") || command.includes("home")) {
      location.href = "./index.html";
    } else if (command.includes("وصالنا") || command.includes("الدعم")) {
      location.href = "./disabilities.html";
    } else if (command.includes("الطلبات") || command.includes("orders")) {
      location.href = "./orders.html";
    } else if (command.includes("تسجيل الدخول") || command.includes("login")) {
      location.href = "./login.html";
    } else if (command.includes("الخريطة") || command.includes("الموقع")) {
      location.href = "./map.html";
    } else if (command.includes("الدعم البصري")) {
      location.href = "./disability-detail.html?id=1";
    } else if (command.includes("الدعم السمعي")) {
      location.href = "./disability-detail.html?id=2";
    } else if (command.includes("الدعم الحركي")) {
      location.href = "./disability-detail.html?id=3";
    } else if (command.includes("رجوع") || command.includes("ارجع")) {
      history.back();
    } else {
      speak(isAr ? "لم أفهم الأمر، حاولي مرة أخرى" : "I did not understand. Please try again.");
    }
  }

  window.startVoiceCommand = function () {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("المتصفح لا يدعم الأوامر الصوتية. جربي Chrome أو Edge.");
      return;
    }

    if (!recognition) {
      recognition = new SpeechRecognition();
      recognition.lang = isAr ? "ar-SA" : "en-US";
      recognition.continuous = true;
      recognition.interimResults = false;

      recognition.onstart = function () {
        micIsRunning = true;
        const micBtn = document.getElementById("voice-command-btn");
        if (micBtn) micBtn.style.background = "#b3261e";
      };

      recognition.onresult = function (event) {
        const last = event.results[event.results.length - 1];
        const command = last[0].transcript;
        handleVoiceCommand(command);
      };

      recognition.onerror = function () {
        micIsRunning = false;
      };

      recognition.onend = function () {
        micIsRunning = false;

        if (shouldKeepListening) {
          setTimeout(function () {
            try {
              recognition.start();
            } catch (e) {}
          }, 600);
        }
      };
    }

    shouldKeepListening = !shouldKeepListening;

    if (shouldKeepListening) {
      try {
        recognition.start();
        speak("تم تشغيل الأوامر الصوتية");
      } catch (e) {}
    } else {
      try {
        recognition.stop();
        speak("تم إيقاف الأوامر الصوتية");
      } catch (e) {}

      const micBtn = document.getElementById("voice-command-btn");
      if (micBtn) micBtn.style.background = "#21865a";
    }
  };

  document.addEventListener("mouseover", function (e) {
    const enabled = localStorage.getItem(Config.KEYS.VOICE) !== "false";
    if (!enabled) return;

    const el = e.target.closest("button, a, h1, h2, h3, p, li, label");
    if (!el) return;

    const text = el.innerText?.trim();
    if (!text || text.length > 80) return;

    speak(text);
  });

  document.addEventListener("DOMContentLoaded", function () {
    const micBtn = document.createElement("button");
    micBtn.id = "voice-command-btn";
    micBtn.innerHTML = "🎤";
    micBtn.title = "أوامر صوتية";
    micBtn.onclick = window.startVoiceCommand;
    micBtn.style.cssText = `
      position: fixed;
      bottom: 78px;
      left: 18px;
      width: 56px;
      height: 56px;
      border-radius: 50%;
      border: none;
      background: #21865a;
      color: white;
      font-size: 24px;
      z-index: 9999;
      cursor: pointer;
      box-shadow: 0 4px 12px rgba(0,0,0,.22);
    `;
    document.body.appendChild(micBtn);
  });
})();
