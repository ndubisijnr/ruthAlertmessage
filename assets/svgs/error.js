export default function errorIcon(prop = null) {
    return `
        <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0 19.9074C0 8.91285 8.91285 0 19.9074 0C30.902 0 39.8148 8.91285 39.8148 19.9074C39.8148 30.902 30.902 39.8148 19.9074 39.8148C8.91285 39.8148 0 30.902 0 19.9074Z"
            fill="${prop?.svgColor ? prop.svgColor : '#fff'}"
            />
            <path
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M20.364 17.95L25.314 13L26.728 14.414L21.778 19.364L26.728 24.314L25.314 25.728L20.364 20.778L15.414 25.728L14 24.314L18.95 19.364L14 14.414L15.414 13L20.364 17.95Z"
            fill="${prop?.svgStroke ? prop.svgStroke : '#EB001B'}"
            :fill="item.svgStroke"
            />
        </svg>
    `

}