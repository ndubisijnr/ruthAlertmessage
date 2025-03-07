import './flyingbox.css'
import { ICONS } from '.';

export function FlyingRuthly({ parent, icon, title, timeout }) {

    // Create container for alerts if not already created
    let alertContainer = document.getElementById('ruth-alert-container');
    if (!alertContainer) {
        alertContainer = document.createElement('div');
        alertContainer.id = 'ruth-alert-container';
        alertContainer.classList.add('ruth-alert-container');
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
    alertBox.classList.add('ruth-alert', selectedAlert);

    // Alert content
    alertBox.innerHTML = `
         <img src="${ICONS[icon ?? 'default'] || ICONS.default}" class="alert-icon" />
         <p class="${icon === 'error' ? 'alert-text-error' : 'alert-text'}">${title}</p>
         <img src="${ICONS.cancel ?? ICONS.default}" class="alert-close" />
     `;

    // Append alert box to container
    alertContainer.appendChild(alertBox);

    // Dismiss alert on close button click
    const closeButton = alertBox.querySelector('.alert-close');
    closeButton.addEventListener('click', () => dismissAlert(alertBox));



    // Auto-dismiss after timeout
    setTimeout(() => dismissAlert(alertBox), timeout);

    /**
 * Fades out and removes an alert.
 * @param {HTMLElement} alertBox - The alert element to be removed
 */
    function dismissAlert(alertBox) {
        alertBox.classList.add('fade-out');
        setTimeout(() => alertBox.remove(), 500);
    }


}