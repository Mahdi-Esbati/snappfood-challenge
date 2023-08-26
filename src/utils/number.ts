export function toFa(input?: string | number | null): string {
    if (!(typeof input === 'number' || typeof input === 'string')) {
        return ''
    }
    return (input + '').replace(/\d/g, (d) => '۰۱۲۳۴۵۶۷۸۹'[Number(d)])
}
