export const capitalizeString = (string) => {
    let newString = string.charAt(0).toUpperCase() + string.slice(1);

    return newString;
}