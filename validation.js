document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contactForm");
  const successMessage = document.querySelector(
    '[data-testid="test-contact-success"]'
  );

  if (!contactForm) return;

  // Handle form submission
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    clearErrors();
    successMessage.textContent = "";
    successMessage.className = "success-message";

    if (validateForm()) {
      successMessage.textContent =
        "✅ Thank you! Your message has been sent successfully.";
      successMessage.classList.add("show");
      setTimeout(() => contactForm.reset(), 500);
    }
  });

  // Validate on blur
  contactForm.querySelectorAll("input, textarea").forEach((field) => {
    field.addEventListener("blur", () => validateField(field));
  });

  // --- Core Validation ---
  function validateForm() {
    const fields = [
      "test-contact-name",
      "test-contact-email",
      "test-contact-subject",
      "test-contact-message",
    ];
    return fields.every((id) =>
      validateField(document.querySelector(`[data-testid="${id}"]`))
    );
  }

  function validateField(field) {
    if (!field) return false;

    const fieldType = field.getAttribute("data-testid");
    const key = fieldType.split("-").pop();
    const errorElement = document.querySelector(
      `[data-testid="test-contact-error-${key}"]`
    );
    if (!errorElement) return false;

    let isValid = true;
    let errorMessage = "";

    switch (key) {
      case "name":
      case "subject":
        if (!field.value.trim()) {
          errorMessage = "This field is required.";
          isValid = false;
        }
        break;
      case "email":
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!field.value.trim()) {
          errorMessage = "Email is required.";
          isValid = false;
        } else if (!emailRegex.test(field.value)) {
          errorMessage = "Please enter a valid email address.";
          isValid = false;
        }
        break;
      case "message":
        if (!field.value.trim()) {
          errorMessage = "Message is required.";
          isValid = false;
        } else if (field.value.trim().length < 10) {
          errorMessage = "Message must be at least 10 characters.";
          isValid = false;
        }
        break;
    }

    if (errorMessage) {
      showError(errorElement, errorMessage);
    } else {
      clearError(errorElement);
    }

    return isValid;
  }

  function showError(el, msg) {
    if (!el) return;
    el.textContent = msg;
    el.classList.add("show");
  }

  function clearError(el) {
    if (!el) return;
    el.textContent = "";
    el.classList.remove("show");
  }

  function clearErrors() {
    document
      .querySelectorAll('[data-testid^="test-contact-error"]')
      .forEach(clearError);
  }
});
