
export function validateResourceURL(url) {
    // check for protocol
    if (url.substring(0, 4).toLowerCase() == "http") { // check first 4 char in string
        return false;
    }
    // check for extension
    if (url.slice(-4).toLowerCase() == ".pdf") { // check last 4 char in string
        return false;
    }

    return true
}