/**
 *
 * @param dateString - Date string in the format YYYY/MM/DD HH:MM:SS
 * @returns Date string in the format DD/MM/YYYY HH:MM:SS
 * @example formatDateString('2021/08/31 15:00:00') // returns '31/08/2021 15:00:00'
 *
 */
export default function useformatDateString(dateString: string): string {
  const parts = dateString.split(' ');
  const dateParts = parts[0].split('/');
  const timeParts = parts[1].split(':');

  const date = new Date(
    Date.UTC(
      parseInt(dateParts[0]),
      parseInt(dateParts[1]) - 1,
      parseInt(dateParts[2]),
      parseInt(timeParts[0]),
      parseInt(timeParts[1]),
      parseInt(timeParts[2])
    )
  );

  date.setHours(date.getHours() - 3);

  const formattedDate =
    date.getDate().toString().padStart(2, '0') +
    '/' +
    (date.getMonth() + 1).toString().padStart(2, '0') +
    '/' +
    date.getFullYear() +
    ' ' +
    date.getHours().toString().padStart(2, '0') +
    ':' +
    date.getMinutes().toString().padStart(2, '0') +
    ':' +
    date.getSeconds().toString().padStart(2, '0');

  return formattedDate;
}
