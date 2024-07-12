const Dates = (): string => {
    const date = new Date();
    const day = date.getDate().toString().padStart(2, '0');
    const month = date.toLocaleString('default', { month: 'long' });
    const year = date.getFullYear().toString();
    const formattedDate = `${day}/${month}/${year}`;
    console.log(formattedDate); // e.g., "12/July/2024"
    return formattedDate;
}

export const formattedDate: string = Dates();
