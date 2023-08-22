export const getFirstLettersOfFirstAndLastName = (value) => {
    if(value == null) return ''
    const firstName = value.split(' ')[0]
    const lastName = value.split(' ')[1]

    return firstName[0].toUpperCase() + lastName[0].toUpperCase()

}
