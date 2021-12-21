
export default function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
}

export function calculateAge(dateOfBirth) { 
    const dob = new Date(dateOfBirth)
    const diffInMs = Date.now() - dob.getTime();
    const age = new Date(diffInMs); 
    return Math.abs(age.getUTCFullYear() - 1970);
}

export function swapArrayElements(arr, indexA, indexB) {
    var temp = arr[indexA];
    arr[indexA] = arr[indexB];
    arr[indexB] = temp;
};