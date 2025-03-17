import './bossybox.css'
import { ICONS } from '.';

export function BossyRuthly({ parent, icon, title, callback}) {

    // Create container for alerts if not already created
    let alertContainer = document.getElementById('ruth-alert-bossybx-container');
    if (!alertContainer) {
        alertContainer = document.createElement('div');
        alertContainer.id = 'ruth-alert-bossybox-container';
        alertContainer.classList.add('ruth-alert-bossybx-container');
        parent.appendChild(alertContainer);
    }
    const alertTypes = {
        success: 'success',
        error: 'error',
        info: 'info',
        warning: 'warning',
        default: 'default'
    };

    // Create alert box
    const alertBox = document.createElement('div');
    const selectedAlert = alertTypes?.[icon] ?? 'default';
    const btnMsg = 'Confirm'; // Default button message
    const loading = document.createElement('div')
    const animatedLoading = document.createElement('span')

    alertBox.classList.add('ruth-alert-bossybx', selectedAlert);


    // Alert content
    alertBox.innerHTML = `
         <img src="${ICONS[icon ?? 'default'] || ICONS.default}" class="alert-icon" />
         <p class="${icon === 'error' ? 'alert-text-error' : 'alert-text'}">${title}</p>
         <div>
             <button id="custom-callback-btn" class="bossybx-btn-custom">${btnMsg}</button>
             <button class="bossybx-btn-close">Cancel</button>
         </div>
         <div class="bossybox-loader" style="display: none;">⏳ Processing...</div>

     `;

    // Append alert box to container
    alertContainer.appendChild(alertBox);

    // Dismiss alert on close button click
    const closeButton = alertBox.querySelector('.bossybx-btn-close');
    closeButton.addEventListener('click', () => dismissAlert(alertContainer, alertBox), {once:true});
    // Select buttons and loader
    const confirmButton = alertBox.querySelector('#custom-callback-btn');
    const loader = alertBox.querySelector('.bossybox-loader');

    // Handle async callback execution
    if (typeof callback === 'function') {
        confirmButton.addEventListener('click', async () => {
            alertBox.style.display = 'none'; // Hide confirm button
            loader.style.display = 'block'; // Show loading

            try {
                await callback(); // Execute async function
            } catch (error) {
                console.error('Error in callback:', error);
            } finally {
                // dismissAlert(alertContainer, alertBox); // Close alert after execution
            }
        });
    } else {
        confirmButton.style.display = 'none'; // Hide confirm button if no callback
    }

    /**
 * Fades out and removes an alert.
 * @param {HTMLElement} alertBox - The alert element to be removed
 */
    function dismissAlert(alertBoxWrapper, alertBox) {
        alertBoxWrapper.classList.add('fade-out');
        alertBox.remove()
        setTimeout(() => alertBoxWrapper.remove(), 500);
    }


}