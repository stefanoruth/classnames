export function css(...args: (string | number | boolean | undefined | null | void)[]) {
    let classes = ''

    function addValue(input: string) {
        input = input.trim()

        if (input.length > 0) {
            if (classes) {
                classes += ' '
            }
            classes += input
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

    return classes
}
