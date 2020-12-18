export function css(...args: (string | number | boolean | undefined | null | void)[]) {
    return args
        .join(' ')
        .split(' ')
        .filter((item, pos, self) =>
            item.length === 0 || ['1', '0', 'true'].includes(item) ? false : self.indexOf(item) === pos
        )
        .join(' ')
}
