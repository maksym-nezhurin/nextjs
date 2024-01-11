export function formatDate(dateObject: Date) {
    // Extract day, month, and year
    const day = String(dateObject.getDate()).padStart(2, '0');
    const month = String(dateObject.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const year = dateObject.getFullYear();

    // Create the formatted date string
    return `${day}.${month}.${year}`;
}

// Example usage:
const inputDate = '1 December 2024';
const formattedDate = formatDate(new Date(inputDate));
console.log(formattedDate); // Output: '01.12.2024'