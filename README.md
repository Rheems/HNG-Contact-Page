# Profile Card Component - HNG Stage 0

A responsive, accessible profile card component built with semantic HTML, CSS, and vanilla JavaScript.

Features

- ✅ _Semantic HTML_ - Proper element usage
- ✅ _Accessibility_ - WCAG compliant with ARIA labels
- ✅ _Responsive Design_ - Mobile-first approach
- ✅ _Real-time Updates_ - Current time in milliseconds
- ✅ _Social Links_ - Secure external links
- ✅ _Data Attributes_ - Complete test coverage

Requirements Met

Required Data-Testid Attributes

- test-profile-card - Root container
- test-user-name - User's name
- test-user-bio - Biography text
- test-user-time - Current time in milliseconds
- test-user-avatar - Profile picture
- test-user-social-links - Social media container
- test-user-social-\* - Individual social links
- test-user-hobbies - Hobbies list
- test-user-dislikes - Dislikes list

Technical Specifications

- No Frameworks\_ - Pure HTML, CSS, JavaScript
- Semantic Structure\_ - <article>, <header>, <section>, <nav>
- Accessibility\_ - Keyboard navigation, focus states, alt text
- Responsive\_ - Mobile (≤480px), Tablet (768px), Desktop (≥1024px)
- Performance\_ - Optimized loading and rendering

Setup

1. Clone or Download
   bash
   git clone <repository-url>
    cd profile-card

link to avatar pic: https://i.postimg.cc/xdBSjKPm/young-cartoon-female-avatar-student-character-wearing-eyeglasses-file-no-background-ai-generated-png.webp

README.md for HNG Task1
HNG Stage 1 Task - Multi-Page Portfolio

A responsive multi-page portfolio website built for HNG Stage 1, featuring a Contact Us form with validation and an About Me page with personal reflections.

📋 Project Overview

This project extends the Stage 0 single-card profile into a complete multi-page application with:

· Home Page - Your original profile card from Stage 0
· About Me Page - Personal reflections and goals
· Contact Us Page - Functional contact form with validation

🛠 Technologies Used

· HTML5 - Semantic, accessible markup
· CSS3 - Modern styling with CSS variables and gradients
· JavaScript - Form validation and interactive features
· Responsive Design - Mobile-first approach

📁 Project Structure

hng-stage1/
├── index.html # Home page (Stage 0 profile card)
├── about.html # About Me page
├── contact.html # Contact Us page
├── styles.css # Main stylesheet
├── validation.js # Form validation logic
├── script.js # Original Stage 0 JavaScript
└── README.md # This file

✨ Features

🏠 Home Page

· Profile card with avatar, bio, hobbies, and social links
· Real-time clock display
· Responsive design
· Accessible navigation

ℹ About Me Page

· Five reflective sections with proper semantic structure
· Bio, goals, areas of confidence, future notes, and extra thoughts
· Color-coded sections for better visual hierarchy

📞 Contact Us Page

· Form with four required fields:
· Full Name
· Email (with validation)
· Subject
· Message (minimum 10 characters)
· Real-time validation with error messages
· Success message on valid submission
· Accessible form with ARIA labels

🎨 Design Features

· Beautiful gradient background
· Glass morphism card effects
· Smooth animations and transitions
· Color-coded sections
· Fully responsive across all devices
· Accessible to screen readers and keyboard navigation

🚀 Live Demo

[https://github.com/Rheems/HNG-Contact-Page]

📦 Installation & Setup

1. Clone the repository
   bash
   git clone [https://hng-contact-page.vercel.app/]
   cd hng-stage1

🎯 Acceptance Criteria Met

✅ Contact Us Page

· All required fields with correct data-testid attributes
· Form validation prevents invalid submissions
· Success message shows after valid submission
· Accessible labels and ARIA attributes
· Keyboard navigable

✅ About Me Page

· All five required sections with correct data-testid attributes
· Semantic HTML structure (main, section, proper headings)
· Reflective content in each section

✅ General Requirements

· Semantic HTML throughout
· Fully accessible (labels, alt text, ARIA)
· Responsive across mobile, tablet, desktop
· Keyboard navigable
· Clean, modular, readable code

🧪 Testing

The project includes specific data-testid attributes for automated testing:

Contact Form Test IDs

· test-contact-name - Full name input
· test-contact-email - Email input
· test-contact-subject - Subject input
· test-contact-message - Message textarea
· test-contact-submit - Submit button
· test-contact-error-\* - Error messages
· test-contact-success - Success message

About Page Test IDs

· test-about-page - Main container
· test-about-bio - Bio section
· test-about-goals - Goals section
· test-about-confidence - Confidence section
· test-about-future-note - Future note section
· test-about-extra - Extra thoughts section

🎨 Customization

To personalize this project:

1. Update personal information in all HTML files
2. Replace the avatar in index.html
3. Add your social media links in index.html
4. Write your reflections in about.html
5. Modify colors by updating CSS variables in styles.css

📱 Responsive Breakpoints

· Mobile: < 480px
· Tablet: 481px - 768px
· Desktop: 769px - 1024px
· Large Desktop: > 1025px

♿ Accessibility Features

· Semantic HTML structure
· ARIA labels and descriptions
· Keyboard navigation support
· Focus indicators
· Screen reader friendly
· High contrast mode support
· Reduced motion preferences

🚀 Deployment

Netlify (Recommended)

1. Drag and drop your project folder to Netlify
2. Or connect your GitHub repository for automatic deployments

GitHub Pages

1. Push your code to GitHub
2. Go to repository Settings → Pages
3. Select source branch and folder

Other Platforms

· Vercel, Render, or any static hosting service

📅 Submission Details

· Submission Deadline: October 22, 2025
· Submission Form: Google Forms Link

🔗 Links

· Live URL: [https://hng-contact-page.vercel.app/]
· GitHub Repository: [Add your repo link here]

👨‍💻 Developer

[Karimah Ahmad Yusuf]

·
· [https://github.com/Rheems/]
· [https://www.linkedin.com/in/kareemah-ahmad-yusuf-cspo®-2b8b2b341]

📄 License

This project is created for the HNG Internship. Feel free to use as a template for your own portfolio.

---

Built with ❤ for HNG Stage 1
