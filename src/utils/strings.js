export const capitalizeString = (string) => {
  console.log("STRING:", typeof string);
  if (string) {
    let newString = string.charAt(0).toUpperCase() + string.slice(1);

    return newString;
  }
};
