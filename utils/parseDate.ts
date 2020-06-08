enum Month {
    January,
    February,
    March,
    April,
    May,
    June,
    July,
    August,
    September,
    October,
    November,
    December,
}
type MatchResult = [string, string, keyof typeof Month, string, string];

const expr = /([a-z]+), ([a-z]+) ([0-9]{1,2})[snrt][tdh], ([0-9]{4})/i;
export function getDateParts(dateString: string) {
    const [, weekday, month, day, year] = dateString.match(expr) as MatchResult;
    return [weekday, month, day, year];
}
export function parseDate(dateString: string) {
    const [, , month, day, year] = dateString.match(expr) as MatchResult;
    return +new Date(parseInt(year), Month[month], parseInt(day), 12);
}

// const suffix = ['th', 'st', 'nd', 'rd'];
// const getOrdinal = (num: number) =>
//     `${num}${10 < num && num < 20 ? suffix[0] : suffix[num % 10] || suffix[0]}`;

// export default function parseDate(date: Date) {
//     return `${weekdays[date.getDay()]}, ${months[date.getMonth()]} ${getOrdinal(
//         date.getDate(),
//     )}, ${date.getFullYear()}`;
// }
