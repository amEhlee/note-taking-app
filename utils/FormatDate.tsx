export default function FormatDate(givenDate: string): String {
  const fixedDate = new Date(givenDate);

  return fixedDate.toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  });
}
