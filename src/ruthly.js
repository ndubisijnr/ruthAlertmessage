import { FlyingRuthly, BossyRuthly } from './index';

/**
 * Creates and displays an alert notification.
 * @param {Object} options - Alert configuration
 * @param {string} options.title - Alert message
 * @param {string} options.icon - Type of alert ('success' or 'error')
 * @param {number} [options.timeout=3000] - Time before auto-dismiss (default 3s)
 * @param {string} options.type - The type of alert box ('flyingbox' or 'bossybox')
 * @param {string} options.callback - The type of alert box ('flyingbox' or 'bossybox')
 */
export const RuthdoAlert = ({ title, icon, timeout = 3000, type, callback }) => {
    console.log(type)
    const parent = document.getElementById('app');
    if (!parent) {
        console.error("RuthdoAlert Error: Parent element #app not found.");
        return;
    }

    // Use object mapping for cleaner conditional handling
    const alertTypes = {
        flyingruthly: FlyingRuthly,
        bossyruthly: BossyRuthly
    };

    alertTypes[type]({ parent, title, icon, timeout, callback });


};


