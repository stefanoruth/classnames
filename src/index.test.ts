import { css } from './'

test('Joins a list of class names and ignores falsy values and numbers', () => {
    expect(css('a', 0, null, undefined, true, false, 1, 'b')).toBe('a b')
})

test('should be trimmed', function () {
    expect(css('', 'a', '', 'b', ' ', 'c', '')).toBe('a b c')
})

test('can be called with no args', () => {
    expect(css()).toBe('')
})

test('Keeps dublicate classNames', () => {
    expect(css('a', 'a', 'b')).toBe('a a b')
})

test('Multiple classnames in same param', () => {
    expect(css('a b', 'c')).toBe('a b c')
})

test('Combined classnames arent removed', () => {
    expect(css('a', 'ab')).toBe('a ab')
    expect(css('ab', 'a')).toBe('ab a')
    expect(css('ba', 'a')).toBe('ba a')
})

test('Multiple classnames in same param with trim', () => {
    expect(css('a  b')).toBe('a b')
    expect(css('a   b')).toBe('a b')
    expect(css('a    b')).toBe('a b')
})

test('Dont destroy classnames with dashes', () => {
    expect(css('h-6 w-6', 'block')).toBe('h-6 w-6 block')
})
