document.addEventListener('DOMContentLoaded', () => {
    handleRouting();
    window.addEventListener('hashchange', handleRouting);
});

function handleRouting() {
    const hash = window.location.hash.slice(1) || '/';
    const main = document.getElementById('main-content');

    switch (hash) {
        case '/':
            main.innerHTML = `<h2>Home</h2><p>Welcome to our healthcare website.</p>`;
            break;

        case '/find-provider':
            main.innerHTML = `<h2>Find a Provider</h2><p>Provider search page (placeholder).</p>`;
            break;

        case '/emergency':
            main.innerHTML = `<h2>Emergency</h2><p>Emergency information goes here.</p>`;
            break;

        case '/faq':
            main.innerHTML = `<h2>FAQ</h2><p>Frequently asked questions.</p>`;
            break;

        case '/contact':
            main.innerHTML = `
                <h2>Contact</h2>
                <form id="contact-form">
                    <input type="text" placeholder="Name" required><br><br>
                    <input type="email" placeholder="Email" required><br><br>
                    <textarea placeholder="Message" required></textarea><br><br>
                    <button type="submit">Submit</button>
                </form>
            `;

            document.getElementById('contact-form').addEventListener('submit', (e) => {
                e.preventDefault();
                window.location.hash = '/success';
            });
            break;

        case '/success':
            main.innerHTML = `<h2>Success</h2><p>Form submitted successfully.</p>`;
            break;

        default:
            main.innerHTML = `<h2>Page Not Found</h2>`;
    }
}