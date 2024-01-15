export const convertDurationToWords = (duration) => {
    const hours = Math.floor(duration / 60);
    const minutes = duration % 60;

    const hoursInWords = hours > 0 ? `${hours}h` : '';
    const minutesInWords = minutes > 0 ? `${minutes}m` : '';

    if (hoursInWords && minutesInWords) {
        return `${hoursInWords} ${minutesInWords}`;
    } else {
        return hoursInWords || minutesInWords;
    }
}

export const convertTo12HourFormat = (time) => {
    const dateObj = new Date(time);
    let hours = dateObj.getHours();
    let minutes = dateObj.getMinutes();
    let period = "AM";

    if (hours >= 12) {
        period = "PM";
        if (hours > 12) {
            hours -= 12;
        }
    }

    hours = hours.toString().padStart(2, "0");
    minutes = minutes.toString().padStart(2, "0");

    return `${hours}:${minutes} ${period}`;
}

export const convertToWord = (date) => {
    const arrivalTime = date;
    const arrivalDate = new Date(arrivalTime);

// Converting to words
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    const formattedDate = arrivalDate.toLocaleDateString('en-US', options);

    return formattedDate

    // console.log(formattedDate); // Output: June 29, 2023

}

export const formatAmount = (value) => {
    if (value == null) return '0.00'
    value = parseFloat(value).toFixed(2);
    const parts = value.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
}

export const getFirstLettersOfFirstAndLastName = (value) => {
    if(value == null) return ''
    const firstName = value.split(' ')[0]
    const lastName = value.split(' ')[1]

    return firstName[0].toUpperCase() + lastName[0].toUpperCase()

}

export const ellipsis = (value, length) => {
    if (value == null)
        return value
    else if (value.length <= 9)
        return value
    else
        return value.substr(0, length)+'...'
}

export const getYYYYMMDDFormat = (dateString) => {
    const date = new Date(dateString);

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-based, so add 1 and pad with leading zeros
    const day = String(date.getDate()).padStart(2, "0");

    const formattedDate = `${year}-${month}-${day}`;

    return formattedDate;
}

