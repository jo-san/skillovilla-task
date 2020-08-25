/**
 * Converts the first character of string to upper case and the remaining to lower case.
 * @param {string} str The string to capitalize.
 * @returns {string} 
 */

export default function capitalize(str){
    return typeof(str) === "string" ? str.charAt(0).toUpperCase()+str.slice(1).toLowerCase() : undefined
}
