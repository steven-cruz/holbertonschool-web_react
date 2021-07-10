// return the current year
function getFullYear() {
    return new Date().getFullYear();
}

// create and export the function
export function getFooterCopy(isIndex) {
    if (isIndex) {
        return ("Holberton School");
    } else {
        return ("Holberton School main dashboard");
    }
}

export function getLatesNotification( ){
    return ("<strong>Urgent requirement</strong> - complete by EOD");
}

// way to export a function in react
export { getFullYear };
