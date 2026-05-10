// PRACTICE OF EXPORTS AND IMPORTS ----------

export function capitalize(str) {
    if(!str) {
        return "";
    }

    return str.charAt(0).toUpperCase() + str.slice(1);
}

export function reverseString(str) {
    return str.split("").reverse().join("");
}

export function isPalindrome(str) {
    const cleaned = str.toLowerCase();

    return cleaned === reverseString(cleaned);
}

export function countWords(str) {
    return str.trim().split(/\s+/).length;
}

export function truncate(str, maxLength) {
    if(str.length <= maxLength) {
        return str;
    }

    return str.slice(0, maxLength) + "...";
}