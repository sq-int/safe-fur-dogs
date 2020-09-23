import { capitalizeString } from "./strings";

/*

export const capitalizeString = (string) => {
    let newString = string.charAt(0).toUpperCase() + string.slice(1);

    return newString;
}

*/

test("capitalizeString should capitalize first letter of input string", () => {
  const inputString = capitalizeString("chocolate");

  expect(inputString).toEqual("Chocolate");
});
