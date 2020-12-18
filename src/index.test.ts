import { css } from './'

test('Joins a list of class names and ignores falsy values and numbers', () => {
    expect(css('a', 0, null, undefined, true, 1, 'b')).toBe('a b')
})

test('should be trimmed', function () {
    expect(css('', 'a', '', 'b', ' ', 'c', '')).toBe('a b c')
})

test('can be called with no args', () => {
    expect(css()).toBe('')
})

test('Removes dublicate classNames', () => {
    expect(css('a', 'a', 'b')).toBe('a b')
})

test('Multiple classnames in same param', () => {
    expect(css('a b', 'c')).toBe('a b c')
})

test('Multiple classnames in same param with trim', () => {
    expect(css('a  b')).toBe('a b')
})
