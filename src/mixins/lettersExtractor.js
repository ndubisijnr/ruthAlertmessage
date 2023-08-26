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


export const convertToWord = (date) => {
    const arrivalTime = date;
    const arrivalDate = new Date(arrivalTime);

// Converting to words
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = arrivalDate.toLocaleDateString('en-US', options);

    return formattedDate

    // console.log(formattedDate); // Output: June 29, 2023

}
