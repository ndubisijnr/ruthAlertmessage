import viteLogo from '/vite.svg';
import './style.css';
import { RuthdoAlert } from './ruthly';

document.addEventListener('DOMContentLoaded', () => {
    let feature = 'flyingruthly';

    const app = document.querySelector('#app');
    if (!app) {
        alert('App not found');
        return;
    }

    // Function to render UI based on selected feature
    const renderUI = () => {
        app.innerHTML = `
        <header>
            <a href="https://vite.dev" target="_blank">
                <img src="${viteLogo}" class="logo" alt="Vite logo" />
            </a>
            <h1>Ruthly</h1>
            <p>A simple Alert message system for web applications. Use Ruthly for success and error pop-ups that suit your project.</p>
        </header>

        <section id="get-started">
            <h2>🚀 Get Started</h2>
            <p>Install Ruthly using your favorite package manager:</p>
            <pre><code>npm install ruthly-alert</code></pre>
            <pre><code>yarn add ruthly-alert</code></pre>

            <h3>🔗 Compatible with React & Vue</h3>
            <p>Ruthly works seamlessly with both React and Vue. Example usage:</p>

            <div class="code-snippet">
                <h4>React Example:</h4>
                <pre><code>import { RuthdoAlert } from 'ruthly-alert'; <br />
RuthdoAlert({ title: "Success!", icon: "success", timeout:2000, type:flyingruthly, callback:()=>{} });</code></pre>
            </div>

            <div class="code-snippet">
                <h4>Vue Example:</h4>
                <pre><code>import { RuthdoAlert } from 'ruthly-alert'; <br />
RuthdoAlert({ title: "Error occurred!", icon: "error", timeout:2000, type:bossyruthly, callback:()=>{} });</code></pre>
            </div>
        </section>

        <section id="demo">
            <h2>🎉 Try the Demo</h2>
            <p>Choose a feature and test different alert types:</p>

            <div class="feature-toggle">
                <label>
                    <input type="radio" name="feature" value="flyingruthly" ${feature === 'flyingruthly' ? 'checked' : ''} />
                    🚀 FlyingRuthly
                </label>
                <label>
                    <input type="radio" name="feature" value="bossyruthly" ${feature === 'bossyruthly' ? 'checked' : ''} />
                    🎩 BossyRuthly
                </label>
            </div>

            <div class="card">
                <button data-tag="success">✅ Success Alert</button>
                <button data-tag="error">❌ Error Alert</button>
                <button data-tag="warning">⚠️ Warning Alert</button>
                <button data-tag="info">ℹ️ Info Alert</button>
                <button data-tag="default">⚙️ Default Alert</button>

            </div>
        </section>

        <footer>
            <p>Made with ❤️ using Vite.</p>
        </footer>
        `;
    };

    // Event Delegation for Buttons (Efficient handling)
    document.addEventListener('click', (e) => {
        console.log('Clicked Element:', e.target);

        const button = e.target.closest('[data-tag]'); // Ensures we're targeting the correct element
        if (button) {
            console.log('Matches [data-tag]:', button.dataset.tag);

            const messages = {
                success: 'Success! Operation completed.',
                error: 'Error! Something went wrong.',
                warning: 'Are you sure you want to delete this user?',
                info: 'A dispatch rider is around your area.',
            };

            RuthdoAlert({ title: messages[button.dataset.tag], icon: button.dataset.tag, timeout:2000, type:feature});
        }
    });

    // Handle Feature Selection Change
    document.addEventListener('change', (e) => {
        if (e.target.matches('input[name="feature"]')) {
            feature = e.target.value;
            renderUI();
        }
    });

    // Initial UI rendering
    renderUI();
});
