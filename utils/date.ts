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
    const [, ...data] = dateString.match(expr) as MatchResult;
    return data;
}
export function getUnaryDate(dateString: string) {
    const [, month, day, year] = getDateParts(dateString);
    return new Date(parseInt(year), Month[month], parseInt(day), 12).getTime();
}
export function getDatetime(dateString: string) {
    const [, month, day, year] = getDateParts(dateString);
    return `${year}-${Month[month] + 1}-${day}`;
}
