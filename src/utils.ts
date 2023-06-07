export function changeDateFormat(dateString: string): Date {
  const dateParts = dateString.split('/');
  const day = dateParts[0];
  const month = dateParts[1];
  const year = dateParts[2];

  const date = new Date(`${year}-${month}-${day}`);

  return date;
}
