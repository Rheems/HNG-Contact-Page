// ===== DATA-TESTID VERIFICATION =====
function verifyDataTestIds() {
  const requiredTestIds = [
    "test-profile-card",
    "test-user-name",
    "test-user-bio",
    "test-user-time",
    "test-user-avatar",
    "test-user-social-links",
    "test-user-hobbies",
    "test-user-dislikes",
  ];

  const socialNetworks = ["twitter", "github", "linkedin", "instagram"];

  console.log("🔍 Checking required data-testid attributes...");

  // Check main required test IDs
  requiredTestIds.forEach((testId) => {
    const element = document.querySelector(`[data-testid="${testId}"]`);
    if (element) {
      console.log(`✅ ${testId}: FOUND`);
    } else {
      console.log(`❌ ${testId}: MISSING`);
    }
  });

  // Check social link test IDs
  socialNetworks.forEach((network) => {
    const socialTestId = `test-user-social-${network}`;
    const element = document.querySelector(`[data-testid="${socialTestId}"]`);
    if (element) {
      console.log(`✅ ${socialTestId}: FOUND`);
    } else {
      console.log(`❌ ${socialTestId}: MISSING`);
    }
  });

  // Check if all visible elements have data-testid
  const allVisibleElements = Array.from(document.querySelectorAll("*")).filter(
    (el) => {
      const style = window.getComputedStyle(el);
      return (
        style.display !== "none" &&
        style.visibility !== "hidden" &&
        (el.offsetWidth > 0 || el.offsetHeight > 0)
      );
    }
  );

  const elementsWithoutTestId = allVisibleElements.filter(
    (el) => !el.hasAttribute("data-testid")
  );

  if (elementsWithoutTestId.length === 0) {
    console.log(
      "🎉 SUCCESS: All visible elements have data-testid attributes!"
    );
  } else {
    console.log("⚠ WARNING: Some visible elements are missing data-testid:");
    elementsWithoutTestId.forEach((el) => {
      console.log(
        `   - ${el.tagName.toLowerCase()}: ${el.className || "no class"}`
      );
    });
  }
}

// ===== TIME UPDATE FUNCTION =====
function updateTime() {
  const timeElement = document.querySelector('[data-testid="test-user-time"]');
  if (timeElement) {
    const currentTime = Date.now();
    timeElement.textContent = `Current Time: ${currentTime}ms`;
    timeElement.setAttribute("aria-live", "polite");
  }
}

// ===== AVATAR IMAGE HANDLING =====
function handleAvatarImage() {
  const avatar = document.querySelector('[data-testid="test-user-avatar"]');

  if (!avatar) {
    console.log("❌ Avatar element not found");
    return;
  }

  // Check if image loads successfully
  avatar.addEventListener("load", function () {
    console.log("✅ Avatar image loaded successfully");
  });

  avatar.addEventListener("error", function () {
    console.log("❌ Failed to load avatar image - using fallback");
    // Set a fallback background
    this.style.background = "linear-gradient(135deg, #667eea, #764ba2)";
    this.alt = "Default avatar - Image not available";
  });
}

// ===== SOCIAL LINKS ENHANCEMENT =====
function enhanceSocialLinks() {
  const socialLinks = document.querySelectorAll(
    '[data-testid^="test-user-social-"]'
  );

  socialLinks.forEach((link) => {
    link.addEventListener("focus", function () {
      this.style.outline = "2px solid #2563eb";
      this.style.outlineOffset = "2px";
    });

    link.addEventListener("blur", function () {
      this.style.outline = "none";
    });
  });
}

// ===== INITIALIZE EVERYTHING =====
document.addEventListener("DOMContentLoaded", function () {
  console.log("🚀 Profile Card Component Initialized");

  // Initialize all functions
  handleAvatarImage();
  enhanceSocialLinks();

  // Update time immediately and set interval
  updateTime();
  setInterval(updateTime, 1000);

  // Run verification after a short delay
  setTimeout(verifyDataTestIds, 500);
});

// ===== SIMPLE TEST FUNCTION =====
// Add this for quick testing in console
function quickTest() {
  console.log("🧪 Running quick test...");

  const testIds = [
    "test-profile-card",
    "test-user-name",
    "test-user-bio",
    "test-user-time",
    "test-user-avatar",
    "test-user-social-links",
    "test-user-hobbies",
    "test-user-dislikes",
  ];

  let passed = 0;
  testIds.forEach((id) => {
    const found = document.querySelector(`[data-testid="${id}"]`);
    if (found) passed++;
    console.log(found ? `✅ ${id}` : `❌ ${id}`);
  });

  console.log(`📊 Test Results: ${passed}/${testIds.length} passed`);
  return passed === testIds.length;
}
