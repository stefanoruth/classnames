export function css(...args: (string | number | boolean | undefined | null | void)[]) {
    return args
        .filter(value => {
            if (typeof value === 'string') {
                return true
            }

            return false
        })
        .map(i => (i as string).trim() || '')
        .filter(Boolean)
        .join(' ')
        .split(' ')
        .filter(Boolean)
        .filter((item, pos, self) => self.indexOf(item) === pos)
        .join(' ')
}
