export function css(...args: (string | number | boolean | undefined | null | void)[]) {
    let value = ''

    const addValue = (input: string) => {
        input = input.trim()

        if (value.indexOf(input) !== -1) {
            return
        }

        if (input.length > 0) {
            value += input + ' '
        }
    }

    for (const arg of args) {
        if (typeof arg === 'string') {
            if (arg.indexOf(' ') > -1) {
                for (const part of arg) {
                    addValue(part)
                }
            } else {
                addValue(arg)
            }
        }
    }

    return value.trimEnd()
}
