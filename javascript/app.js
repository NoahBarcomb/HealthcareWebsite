document.addEventListener('DOMContentLoaded', () => {
    handleRouting();
    window.addEventListener('hashchange', handleRouting);
});
document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('accessibility-settings-btn');

    if (btn) {
        btn.addEventListener('click', () => {
            alert('Accessibility settings coming soon.');
        });
    }
});
document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('mobile-menu-toggle');
    const menu = document.getElementById('mobile-menu');

    if (toggle && menu) {
        toggle.addEventListener('click', () => {
            menu.style.display =
                menu.style.display === 'block' ? 'none' : 'block';
        });
    }
});
function handleRouting() {
    const hash = window.location.hash.slice(1) || '/';
    const main = document.getElementById('main-content');

    switch (hash) {
        case '/':
            renderPage(main, 'Home');
            break;

        case '/find-provider':
            renderFindProviderPage(main);
            break;
        case '/emergency':
            renderPage(main, 'Emergency');
            break;

        case '/faq':
            renderFAQPage(main);
            break;

        case '/contact':
            renderContactPage(main);
            break;

        default:
            renderPage(main, 'Page Not Found');
    }
}

function renderPage(container, title) {
    container.innerHTML = `
        <div class="section">
            <div class="container">
                <h1 class="section-title">${title}</h1>
                <p class="section-subtitle">This is a placeholder page.</p>
            </div>
        </div>
    `;
}

function renderFAQPage(container) {
    container.innerHTML = `
        <div class="section">
            <div class="container">
                <h1 class="section-title">FAQ</h1>
                <p class="section-subtitle">Common questions</p>

                <div class="faq-item">
                    <h3 class="faq-question">Question 1</h3>
                    <p class="faq-answer">Placeholder answer.</p>
                </div>

                <div class="faq-item">
                    <h3 class="faq-question">Question 2</h3>
                    <p class="faq-answer">Placeholder answer.</p>
                </div>
            </div>
        </div>
    `;
}

function renderContactPage(container) {
    container.innerHTML = `
        <div class="section">
            <div class="container">
                <h1 class="section-title">Contact Us</h1>

                <form id="contact-form">
                    <div class="form-group">
                        <label>Name</label>
                        <input type="text" required>
                    </div>

                    <div class="form-group">
                        <label>Email</label>
                        <input type="email" required>
                    </div>

                    <div class="form-group">
                        <label>Message</label>
                        <textarea required></textarea>
                    </div>

                    <button type="submit" class="btn">Submit</button>
                </form>
            </div>
        </div>
    `;

    document.getElementById('contact-form').addEventListener('submit', (e) => {
        e.preventDefault();

        container.innerHTML = `
            <div class="section">
                <div class="container">
                    <h1 class="section-title">Success</h1>
                    <p>Your message was sent.</p>
                </div>
            </div>
        `;
    });
}

function renderFindProviderPage(container) {
    container.innerHTML = `
        <div class="section">
            <div class="container">
                <h1 class="section-title">Find a Provider</h1>
                <p class="section-subtitle">Search for healthcare providers</p>

                <div style="margin-bottom: 2rem;">
                    <input type="text" placeholder="Search by name or specialty..." style="width: 100%; padding: 0.5rem;">
                </div>

                <div style="display: flex; gap: 1rem; margin-bottom: 1.5rem;">
                    <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop" style="width: 100px; height: 100px; object-fit: cover;">
                    <div>
                        <h3 class="faq-question">Dr. John Smith</h3>
                        <p class="faq-answer">Family Medicine Accepting New Patients</p>
                    </div>
                </div>

                <div style="display: flex; gap: 1rem; margin-bottom: 1.5rem;">
                    <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150&h=150&fit=crop" style="width: 100px; height: 100px; object-fit: cover;">
                    <div>
                        <h3 class="faq-question">Dr. Sarah Johnson</h3>
                        <p class="faq-answer">Cardiology Accepting New Patients</p>
                    </div>
                </div>

                <div style="display: flex; gap: 1rem; margin-bottom: 1.5rem;">
                    <img src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=150&h=150&fit=crop" style="width: 100px; height: 100px; object-fit: cover;">
                    <div>
                        <h3 class="faq-question">Dr. Emily Davis</h3>
                        <p class="faq-answer">Pediatrics Not Accepting New Patients</p>
                    </div>
                </div>
            </div>
        </div>
    `;
}