const guestList = [
  {
    invitationId: "lisa-chris-ellis",
    name: "Lisa Ellis",
    displayName: "Lisa & Chris Ellis",
    aliases: ["Lisa Ellis", "Chris Ellis"],
    plusOneAllowed: true,
    plusOneName: "Chris Ellis"
  },
  {
    invitationId: "kaitlyn-ellis",
    name: "Kaitlyn Ellis",
    displayName: "Kaitlyn Ellis",
    aliases: ["Kaitlyn Ellis"],
    plusOneAllowed: false,
    plusOneName: ""
  },
  {
    invitationId: "jonathan-ellis",
    name: "Jonathan Ellis",
    displayName: "Jonathan Ellis",
    aliases: ["Jonathan Ellis"],
    plusOneAllowed: false,
    plusOneName: ""
  },
  {
    invitationId: "jennifer-alan-flemming",
    name: "Jennifer Flemming",
    displayName: "Jennifer & Alan Flemming",
    aliases: ["Jennifer Flemming", "Alan Flemming"],
    plusOneAllowed: true,
    plusOneName: "Alan Flemming"
  },
  {
    invitationId: "ecem-yel-patrick-quint",
    name: "Ecem Yel",
    displayName: "Ecem Yel & Patrick Quint",
    aliases: ["Ecem Yel", "Patrick Quint"],
    plusOneAllowed: true,
    plusOneName: "Patrick Quint"
  },
  {
    invitationId: "madison-thompson",
    name: "Madison Thompson",
    displayName: "Madison Thompson",
    aliases: ["Madison Thompson"],
    plusOneAllowed: false,
    plusOneName: ""
  },
  {
    invitationId: "gale-congdon",
    name: "Gale Congdon",
    displayName: "Gale Congdon",
    aliases: ["Gale Congdon"],
    plusOneAllowed: false,
    plusOneName: ""
  },
  {
    invitationId: "devin-collins-danica",
    name: "Devin Collins",
    displayName: "Devin Collins & Danica",
    aliases: ["Devin Collins"],
    plusOneAllowed: true,
    plusOneName: "Danica"
  },
  {
    invitationId: "abigail-davis",
    name: "Abigail Davis",
    displayName: "Abigail Davis",
    aliases: ["Abigail Davis"],
    plusOneAllowed: false,
    plusOneName: ""
  },
  {
    invitationId: "monica-percino",
    name: "Monica Percino",
    displayName: "Monica Percino",
    aliases: ["Monica Percino"],
    plusOneAllowed: false,
    plusOneName: ""
  },
  {
    invitationId: "julia-nord",
    name: "Julia Nord",
    displayName: "Julia Nord",
    aliases: ["Julia Nord"],
    plusOneAllowed: true,
    plusOneName: ""
  },
  {
    invitationId: "lori-terry-mandable",
    name: "Lori Mandable",
    displayName: "Lori & Terry Mandable",
    aliases: ["Lori Mandable", "Terry Mandable"],
    plusOneAllowed: true,
    plusOneName: "Terry Mandable"
  },
  {
    invitationId: "elizabeth-danny-mcnelis",
    name: "Elizabeth McNelis",
    displayName: "Elizabeth & Danny McNelis",
    aliases: ["Elizabeth McNelis", "Danny McNelis"],
    plusOneAllowed: true,
    plusOneName: "Danny McNelis"
  },
  {
    invitationId: "prasanth-panicker-nia",
    name: "Prasanth Panicker",
    displayName: "Prasanth Panicker & Nia",
    aliases: ["Prasanth Panicker"],
    plusOneAllowed: true,
    plusOneName: "Nia"
  },
  {
    invitationId: "paul-linda-schroeder",
    name: "Paul Schroeder",
    displayName: "Paul & Linda Schroeder",
    aliases: ["Paul Schroeder", "Linda Schroeder"],
    plusOneAllowed: true,
    plusOneName: "Linda Schroeder"
  },
  {
    invitationId: "taran-bradley",
    name: "Taran Bradley",
    displayName: "Taran Bradley",
    aliases: ["Taran Bradley"],
    plusOneAllowed: false,
    plusOneName: ""
  },
  {
    invitationId: "phillip-musikanth-kerry-flowers",
    name: "Phillip Musikanth",
    displayName: "Phillip Musikanth & Kerry Flowers",
    aliases: ["Phillip Musikanth", "Kerry Flowers"],
    plusOneAllowed: true,
    plusOneName: "Kerry Flowers"
  },
  {
    invitationId: "daniel-musikanth-delaney",
    name: "Daniel Musikanth",
    displayName: "Daniel Musikanth & Delaney",
    aliases: ["Daniel Musikanth"],
    plusOneAllowed: true,
    plusOneName: "Delaney"
  },
  {
    invitationId: "matthew-musikanth-sarah",
    name: "Matthew Musikanth",
    displayName: "Matthew Musikanth & Sarah",
    aliases: ["Matthew Musikanth"],
    plusOneAllowed: true,
    plusOneName: "Sarah"
  },
  {
    invitationId: "michael-ceren-musikanth",
    name: "Michael Musikanth",
    displayName: "Michael & Ceren Musikanth",
    aliases: ["Michael Musikanth", "Ceren Musikanth"],
    plusOneAllowed: true,
    plusOneName: "Ceren Musikanth"
  },
  {
    invitationId: "petra-keyser",
    name: "Petra Keyser",
    displayName: "Petra Keyser",
    aliases: ["Petra Keyser"],
    plusOneAllowed: false,
    plusOneName: ""
  },
  {
    invitationId: "zoe-goldberg",
    name: "Zoe Goldberg",
    displayName: "Zoe Goldberg",
    aliases: ["Zoe Goldberg"],
    plusOneAllowed: false,
    plusOneName: ""
  },
  {
    invitationId: "mia-goldberg",
    name: "Mia Goldberg",
    displayName: "Mia Goldberg",
    aliases: ["Mia Goldberg"],
    plusOneAllowed: false,
    plusOneName: ""
  },
  {
    invitationId: "ronald-diane-goldberg",
    name: "Ronald Goldberg",
    displayName: "Ronald & Diane Goldberg",
    aliases: ["Ronald Goldberg", "Diane Goldberg"],
    plusOneAllowed: true,
    plusOneName: "Diane Goldberg"
  },
  {
    invitationId: "rose-harris",
    name: "Rose Harris",
    displayName: "Rose Harris",
    aliases: ["Rose Harris"],
    plusOneAllowed: false,
    plusOneName: ""
  },
  {
    invitationId: "erin-dipirro",
    name: "Erin DiPirro",
    displayName: "Erin DiPirro",
    aliases: ["Erin DiPirro"],
    plusOneAllowed: false,
    plusOneName: ""
  },
  {
    invitationId: "jayme-kostial-marco",
    name: "Jayme Kostial",
    displayName: "Jayme Kostial & Marco",
    aliases: ["Jayme Kostial"],
    plusOneAllowed: true,
    plusOneName: "Marco"
  },
  {
    invitationId: "bella-klazyck",
    name: "Bella Klazyck",
    displayName: "Bella Klazyck",
    aliases: ["Bella Klazyck"],
    plusOneAllowed: true,
    plusOneName: ""
  },
  {
    invitationId: "haylee-tatar",
    name: "Haylee Tatar",
    displayName: "Haylee Tatar",
    aliases: ["Haylee Tatar"],
    plusOneAllowed: true,
    plusOneName: ""
  },
  {
    invitationId: "courtney-young",
    name: "Courtney Young",
    displayName: "Courtney Young",
    aliases: ["Courtney Young"],
    plusOneAllowed: false,
    plusOneName: ""
  },
  {
    invitationId: "ivey-carey-dan",
    name: "Ivey Carey",
    displayName: "Ivey Carey & Dan",
    aliases: ["Ivey Carey"],
    plusOneAllowed: true,
    plusOneName: "Dan"
  },
  {
    invitationId: "clare-charles",
    name: "Clare",
    displayName: "Clare & Charles",
    aliases: ["Clare", "Charles"],
    plusOneAllowed: true,
    plusOneName: "Charles"
  },
  {
    invitationId: "dani-lucas",
    name: "Dani Lucas",
    displayName: "Dani Lucas",
    aliases: ["Dani Lucas"],
    plusOneAllowed: true,
    plusOneName: ""
  },
  {
    invitationId: "thanh-nguyen",
    name: "Thanh Nguyen",
    displayName: "Thanh Nguyen",
    aliases: ["Thanh Nguyen"],
    plusOneAllowed: false,
    plusOneName: ""
  },
  {
    invitationId: "dereck-charles",
    name: "Dereck Charles",
    displayName: "Dereck Charles",
    aliases: ["Dereck Charles"],
    plusOneAllowed: false,
    plusOneName: ""
  },
  {
    invitationId: "sarah-sinnas-david",
    name: "Sarah Sinnas",
    displayName: "Sarah Sinnas & David",
    aliases: ["Sarah Sinnas"],
    plusOneAllowed: true,
    plusOneName: "David"
  },
  {
    invitationId: "paula-green",
    name: "Paula Green",
    displayName: "Paula Green",
    aliases: ["Paula Green"],
    plusOneAllowed: false,
    plusOneName: ""
  },
  {
    invitationId: "merle-musikanth",
    name: "Merle Musikanth",
    displayName: "Merle Musikanth",
    aliases: ["Merle Musikanth"],
    plusOneAllowed: false,
    plusOneName: ""
  },
  {
    invitationId: "katherine-travis-timothy-ziethan",
    name: "Katherine Travis",
    displayName: "Katherine Travis & Timothy Ziethan",
    aliases: ["Katherine Travis", "Timothy Ziethan"],
    plusOneAllowed: true,
    plusOneName: "Timothy Ziethan"
  },
  {
    invitationId: "ouma",
    name: "Ouma",
    displayName: "Ouma",
    aliases: ["Ouma"],
    plusOneAllowed: false,
    plusOneName: ""
  },
  {
    invitationId: "gerhard-keyser",
    name: "Gerhard Keyser",
    displayName: "Gerhard Keyser",
    aliases: ["Gerhard Keyser"],
    plusOneAllowed: false,
    plusOneName: ""
  },
  {
    invitationId: "loren-keyser",
    name: "Loren Keyser",
    displayName: "Loren Keyser",
    aliases: ["Loren Keyser"],
    plusOneAllowed: false,
    plusOneName: ""
  },
  {
    invitationId: "simon-wilson",
    name: "Simon Wilson",
    displayName: "Simon Wilson",
    aliases: ["Simon Wilson"],
    plusOneAllowed: false,
    plusOneName: ""
  },
  {
    invitationId: "tobin-aspen-wilson",
    name: "Tobin Wilson",
    displayName: "Tobin/Aspen Wilson",
    aliases: ["Tobin Wilson", "Aspen Wilson", "Tobin Aspen Wilson", "Tobin/Aspen Wilson"],
    plusOneAllowed: false,
    plusOneName: ""
  },
  {
    invitationId: "luiza-gordon-wilson",
    name: "Luiza Wilson",
    displayName: "Luiza & Gordon Wilson",
    aliases: ["Luiza Wilson", "Gordon Wilson"],
    plusOneAllowed: true,
    plusOneName: "Gordon Wilson"
  },
  {
    invitationId: "lisa-jim-travis",
    name: "Lisa Travis",
    displayName: "Lisa & Jim Travis",
    aliases: ["Lisa Travis", "Jim Travis"],
    plusOneAllowed: true,
    plusOneName: "Jim Travis"
  },
  {
    invitationId: "karen-stetson",
    name: "Karen Stetson",
    displayName: "Karen Stetson",
    aliases: ["Karen Stetson"],
    plusOneAllowed: false,
    plusOneName: ""
  }
];

let currentGuest = null;
let currentMatchedName = "";

const modal = document.getElementById("rsvpModal");

const openButtons = [
  document.getElementById("openRsvp"),
  document.getElementById("openRsvp2"),
  document.getElementById("openRsvp3"),
  document.getElementById("openRsvpSide")
];

const closeButton = document.getElementById("closeRsvp");

const nameStep = document.getElementById("nameStep");
const guestNameInput = document.getElementById("guestName");
const checkNameButton = document.getElementById("checkName");
const nameMessage = document.getElementById("nameMessage");

const rsvpForm = document.getElementById("rsvpForm");
const welcomeGuest = document.getElementById("welcomeGuest");
const plusOneSection = document.getElementById("plusOneSection");
const bringingPlusOne = document.getElementById("bringingPlusOne");
const plusOneNameField = document.getElementById("plusOneNameField");
const plusOneName = document.getElementById("plusOneName");
const attending = document.getElementById("attending");
const reasonSection = document.getElementById("reasonSection");
const reason = document.getElementById("reason");

const confirmation = document.getElementById("confirmation");
const confirmationTitle = document.getElementById("confirmationTitle");
const confirmationMessage = document.getElementById("confirmationMessage");
const finishRsvp = document.getElementById("finishRsvp");

const mealSection = document.getElementById("mealSection");
const mealChoice = document.getElementById("mealChoice");
const plusOneMealField = document.getElementById("plusOneMealField");
const plusOneMealChoice = document.getElementById("plusOneMealChoice");
const brideNoteSection = document.getElementById("brideNoteSection");
const brideNote = document.getElementById("brideNote");

const menuModal = document.getElementById("menuModal");
const closeMenuDetails = document.getElementById("closeMenuDetails");
const openMenuDetailsButtons = document.querySelectorAll("[data-open-menu]");
const plusOneCheckboxLabel = bringingPlusOne
  ? bringingPlusOne.closest(".checkbox-label")
  : null;

openMenuDetailsButtons.forEach(button => {
  button.addEventListener("click", () => {
    if (menuModal) menuModal.classList.remove("hidden");
  });
});

if (closeMenuDetails && menuModal) {
  closeMenuDetails.addEventListener("click", () => {
    menuModal.classList.add("hidden");
  });
}

if (menuModal) {
  menuModal.addEventListener("click", event => {
    if (event.target === menuModal) {
      menuModal.classList.add("hidden");
    }
  });
}

openButtons.forEach(button => {
  if (!button || !modal) return;

  button.addEventListener("click", () => {
    modal.classList.remove("hidden");
  });
});

if (closeButton) {
  closeButton.addEventListener("click", closeModal);
}

if (finishRsvp) {
  finishRsvp.addEventListener("click", closeModal);
}

if (modal) {
  modal.addEventListener("click", event => {
    if (event.target === modal) {
      closeModal();
    }
  });
}

function closeModal() {
  if (!modal) return;
  modal.classList.add("hidden");
  resetRsvp();
}

function normalizeName(name) {
  return String(name || "")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, " ");
}

function findGuestByName(name) {
  const enteredName = normalizeName(name);
  currentMatchedName = "";

  for (const guest of guestList) {
    const namesToCheck = [
      guest.name,
      guest.displayName,
      guest.plusOneName,
      ...(guest.aliases || [])
    ].filter(Boolean);

    const matchedName = namesToCheck.find(candidate =>
      normalizeName(candidate) === enteredName
    );

    if (matchedName) {
      currentMatchedName = matchedName;
      return guest;
    }
  }

  return null;
}

function getCurrentPlusOneName() {
  if (!currentGuest || !currentGuest.plusOneName) {
    return "";
  }

  const entered = normalizeName(currentMatchedName);
  const primary = normalizeName(currentGuest.name);
  const partner = normalizeName(currentGuest.plusOneName);

  if (entered === partner) {
    return currentGuest.name;
  }

  if (entered === primary) {
    return currentGuest.plusOneName;
  }

  return currentGuest.plusOneName;
}

function getSelectedOptionText(selectElement) {
  if (!selectElement || selectElement.selectedIndex < 0) return "";
  const selectedOption = selectElement.options[selectElement.selectedIndex];
  return selectedOption ? selectedOption.textContent.trim() : "";
}

function resetPlusOneFields() {
  if (bringingPlusOne) bringingPlusOne.checked = false;

  if (plusOneName) {
    plusOneName.value = "";
    plusOneName.readOnly = false;
  }

  if (plusOneCheckboxLabel) {
    plusOneCheckboxLabel.classList.remove("hidden");
  }

  if (plusOneNameField) plusOneNameField.classList.add("hidden");
  if (plusOneMealField) plusOneMealField.classList.add("hidden");
}

function showPlusOneOptions() {
  if (!currentGuest?.plusOneAllowed || !plusOneSection) {
    if (plusOneSection) plusOneSection.classList.add("hidden");
    resetPlusOneFields();
    return;
  }

  plusOneSection.classList.remove("hidden");

  const resolvedPlusOneName = getCurrentPlusOneName();

  if (resolvedPlusOneName) {
    if (bringingPlusOne) bringingPlusOne.checked = true;

    if (plusOneName) {
      plusOneName.value = resolvedPlusOneName;
      plusOneName.readOnly = true;
    }

    if (plusOneCheckboxLabel) {
      plusOneCheckboxLabel.classList.add("hidden");
    }

    if (plusOneNameField) plusOneNameField.classList.remove("hidden");
    if (plusOneMealField) plusOneMealField.classList.remove("hidden");
  } else {
    resetPlusOneFields();
  }
}

if (checkNameButton) {
  checkNameButton.addEventListener("click", () => {
    currentGuest = findGuestByName(guestNameInput.value);

    if (!currentGuest) {
      nameMessage.textContent =
        "We couldn’t find your invitation. Please check spelling or contact us.";
      return;
    }

    nameMessage.textContent = "";
    nameStep.classList.add("hidden");
    rsvpForm.classList.remove("hidden");

    welcomeGuest.textContent = `Welcome, ${currentGuest.displayName || currentGuest.name}.`;

    if (plusOneSection) plusOneSection.classList.add("hidden");
    resetPlusOneFields();
  });
}

if (attending) {
  attending.addEventListener("change", () => {
    const isAttending = attending.value === "yes";
    const isDeclining = attending.value === "no";

    if (mealSection) mealSection.classList.toggle("hidden", !isAttending);
    if (brideNoteSection) brideNoteSection.classList.toggle("hidden", !isAttending);
    if (reasonSection) reasonSection.classList.toggle("hidden", !isDeclining);

    if (isAttending) {
      showPlusOneOptions();
    } else {
      if (plusOneSection) plusOneSection.classList.add("hidden");
      resetPlusOneFields();
    }
  });
}

if (bringingPlusOne) {
  bringingPlusOne.addEventListener("change", () => {
    if (currentGuest?.plusOneName) return;

    const showPlusOne = bringingPlusOne.checked && attending.value === "yes";

    if (plusOneNameField) plusOneNameField.classList.toggle("hidden", !showPlusOne);
    if (plusOneMealField) plusOneMealField.classList.toggle("hidden", !showPlusOne);
  });
}

const RSVP_WEB_APP_URL = "https://script.google.com/macros/s/AKfycbySHkKUEJCXLVH7Gav24WYnYFBetGotAOnAPELjloKSFcN5AddavpPPle_-hCiuwPTPrA/exec";
const CHANGE_RSVP_CONTACT = "+1 (571) 335-5368";

function handleDuplicateRsvp() {
  const wantsToChange = window.confirm(
    "It looks like this invitation has already RSVP’d.\n\nDo you need to change your RSVP?\n\nPress OK for yes, or Cancel to exit."
  );

  if (wantsToChange) {
    window.alert(`Please text or call ${CHANGE_RSVP_CONTACT} to update your RSVP.`);
  } else {
    closeModal();
  }
}

function checkRsvpAlreadySubmitted(invitationId) {
  return new Promise(resolve => {
    if (!RSVP_WEB_APP_URL || RSVP_WEB_APP_URL.includes("PASTE_YOUR") || !invitationId) {
      resolve(false);
      return;
    }

    let checkUrl;

    try {
      checkUrl = new URL(RSVP_WEB_APP_URL);
    } catch (error) {
      console.warn("Invalid RSVP web app URL.", error);
      resolve(false);
      return;
    }

    const callbackName = `rsvpDuplicateCheck_${Date.now()}_${Math.random()
      .toString(36)
      .slice(2)}`;

    const script = document.createElement("script");
    let finished = false;

    function cleanup() {
      if (finished) return;
      finished = true;
      delete window[callbackName];
      if (script.parentNode) script.parentNode.removeChild(script);
      clearTimeout(timeoutId);
    }

    window[callbackName] = response => {
      const alreadySubmitted = response && response.exists === true;
      cleanup();
      resolve(alreadySubmitted);
    };

    script.onerror = () => {
      cleanup();
      resolve(false);
    };

    checkUrl.searchParams.set("action", "check");
    checkUrl.searchParams.set("invitationId", invitationId);
    checkUrl.searchParams.set("callback", callbackName);
    checkUrl.searchParams.set("_", String(Date.now()));

    const timeoutId = setTimeout(() => {
      cleanup();
      resolve(false);
    }, 8000);

    script.src = checkUrl.toString();
    document.body.appendChild(script);
  });
}

async function sendRsvpToGoogleSheet(rsvpData) {
  if (!RSVP_WEB_APP_URL || RSVP_WEB_APP_URL.includes("PASTE_YOUR")) {
    console.warn("RSVP web app URL has not been set yet.");
    return;
  }

  await fetch(RSVP_WEB_APP_URL, {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "text/plain;charset=utf-8"
    },
    body: JSON.stringify(rsvpData)
  });
}

if (rsvpForm) {
  rsvpForm.addEventListener("submit", async event => {
    event.preventDefault();

    const submitButton = rsvpForm.querySelector('button[type="submit"]');
    const originalSubmitText = submitButton ? submitButton.textContent : "Submit RSVP";

    if (submitButton) {
      submitButton.disabled = true;
      submitButton.textContent = "Submitting...";
    }

    const rsvpData = {
      submittedAt: new Date().toISOString(),
      invitationId: currentGuest ? currentGuest.invitationId : normalizeName(guestNameInput.value),
      guestName: currentGuest ? currentGuest.displayName || currentGuest.name : guestNameInput.value,
      attending: attending ? attending.value : "",
      plusOneAllowed: currentGuest ? currentGuest.plusOneAllowed : false,
      bringingPlusOne: currentGuest?.plusOneAllowed ? bringingPlusOne.checked : false,
      plusOneName: plusOneName ? plusOneName.value : "",
      mealChoice: getSelectedOptionText(mealChoice),
      plusOneMealChoice: getSelectedOptionText(plusOneMealChoice),
      brideNote: brideNote ? brideNote.value : "",
      reason: reason ? reason.value : "",
      page: window.location.pathname,
      userAgent: navigator.userAgent
    };

    try {
      const alreadySubmitted = await checkRsvpAlreadySubmitted(rsvpData.invitationId);

      if (alreadySubmitted) {
        handleDuplicateRsvp();
        return;
      }

      await sendRsvpToGoogleSheet(rsvpData);
      console.log("RSVP submitted:", rsvpData);

      rsvpForm.classList.add("hidden");
      confirmation.classList.remove("hidden");

      if (attending && attending.value === "yes") {
        confirmationTitle.textContent = "Thank you!";
        confirmationMessage.textContent = "We can’t wait to celebrate with you.";
      } else {
        confirmationTitle.textContent = "We’ll miss you!";
        confirmationMessage.textContent = "Thank you for letting us know.";
      }
    } catch (error) {
      console.error("RSVP submission failed:", error);
      nameMessage.textContent = "Something went wrong. Please try again or contact us directly.";
    } finally {
      if (submitButton) {
        submitButton.disabled = false;
        submitButton.textContent = originalSubmitText;
      }
    }
  });
}

function resetRsvp() {
  currentGuest = null;
  currentMatchedName = "";

  if (guestNameInput) guestNameInput.value = "";
  if (nameMessage) nameMessage.textContent = "";

  if (mealSection) mealSection.classList.add("hidden");
  if (brideNoteSection) brideNoteSection.classList.add("hidden");
  if (plusOneMealField) plusOneMealField.classList.add("hidden");

  if (nameStep) nameStep.classList.remove("hidden");
  if (rsvpForm) rsvpForm.classList.add("hidden");
  if (confirmation) confirmation.classList.add("hidden");

  if (rsvpForm) rsvpForm.reset();
  if (plusOneSection) plusOneSection.classList.add("hidden");
  if (plusOneNameField) plusOneNameField.classList.add("hidden");
  if (reasonSection) reasonSection.classList.add("hidden");

  resetPlusOneFields();
}

/* Wedding countdown */

const countdownDays = document.getElementById("countdownDays");
const countdownHours = document.getElementById("countdownHours");
const countdownMinutes = document.getElementById("countdownMinutes");

const weddingDate = new Date("June 13, 2027 16:30:00").getTime();

function updateWeddingCountdown() {
  if (!countdownDays || !countdownHours || !countdownMinutes) return;

  const now = new Date().getTime();
  const distance = weddingDate - now;

  if (distance <= 0) {
    countdownDays.textContent = "000";
    countdownHours.textContent = "00";
    countdownMinutes.textContent = "00";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor(
    (distance % (1000 * 60 * 60)) / (1000 * 60)
  );

  countdownDays.textContent = String(days).padStart(3, "0");
  countdownHours.textContent = String(hours).padStart(2, "0");
  countdownMinutes.textContent = String(minutes).padStart(2, "0");
}

updateWeddingCountdown();
setInterval(updateWeddingCountdown, 60000);