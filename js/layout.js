function handleVoiceCommand(command) {
  command = command.trim().toLowerCase();

  if (command.includes("الخدمات") || command.includes("افتح الخدمات") || command.includes("services")) {
    location.href = "./services.html";
  } else if (command.includes("الرئيسية") || command.includes("افتح الرئيسية") || command.includes("home")) {
    location.href = "./index.html";
  } else if (command.includes("وصالنا")) {
    location.href = "./disabilities.html";
  } else if (command.includes("الطلبات") || command.includes("orders")) {
    location.href = "./orders.html";
  } else if (command.includes("تسجيل الدخول") || command.includes("login")) {
    location.href = "./login.html";
  } else if (command.includes("الخريطة") || command.includes("الموقع")) {
    location.href = "./map.html";
  } else if (command.includes("رجوع") || command.includes("ارجع")) {
    history.back();
  } else {
    speak("لم أفهم الأمر، حاولي مرة أخرى");
  }
}

window.startVoiceCommand = function () {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

  if (!SpeechRecognition) {
    alert("المتصفح لا يدعم الأوامر الصوتية. جربي Chrome أو Edge.");
    return;
  }

  const recognition = new SpeechRecognition();
  recognition.lang = "ar-SA";
  recognition.continuous = false;
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  const micBtn = document.getElementById("voice-command-btn");

  if (micBtn) {
    micBtn.style.background = "#b3261e";
    micBtn.innerHTML = "🎙️";
  }

  setTimeout(() => {
    try {
      recognition.start();
    } catch (e) {
      if (micBtn) {
        micBtn.style.background = "#21865a";
        micBtn.innerHTML = "🎤";
      }
    }
  }, 300);

  recognition.onresult = function (event) {
    const command = event.results[0][0].transcript;
    handleVoiceCommand(command);
  };

  recognition.onerror = function (event) {
    console.log(event.error);

    if (event.error === "not-allowed") {
      alert("اسمحي للموقع باستخدام المايكروفون من إعدادات المتصفح");
    }

    if (micBtn) {
      micBtn.style.background = "#21865a";
      micBtn.innerHTML = "🎤";
    }
  };

  recognition.onend = function () {
    if (micBtn) {
      micBtn.style.background = "#21865a";
      micBtn.innerHTML = "🎤";
    }
  };
};
