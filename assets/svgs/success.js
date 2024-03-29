export default function successIcon(prop = null) {
    return `'
        <svg width="27" height="26" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_3790_128)">
                <path d="M13.6086 25.7917C20.6778 25.7917 26.4086 20.0647 26.4086 13.0001C26.4086 5.93549 20.6778 0.208496 13.6086 0.208496C6.53935 0.208496 0.808594 5.93549 0.808594 13.0001C0.808594 20.0647 6.53935 25.7917 13.6086 25.7917Z" fill="${prop?.primary ? prop.primary : '#415251'}" />
                <path d="M12.5833 19.8043L6.53125 15.0895L8.25205 12.8811L11.9685 15.7763L18.102 6.92554L20.4037 8.51994L12.5833 19.8043Z" fill="${prop?.secondary ? prop.secondary : '#51C880'}" />
            </g>
            <defs>
                <clipPath id="clip0_3790_128">
                    <rect width="25.6" height="25.6" fill="white" transform="translate(0.808594 0.200195)" />
                </clipPath>
            </defs>
        </svg>
    `
}
