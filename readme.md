# CSS

A simple classnames javascript utility function for combining conditional classnames together.

![npm](https://img.shields.io/npm/v/@stefanoruth/classnames)
![npm](https://img.shields.io/npm/dt/@stefanoruth/classnames)
![Build & Tests](https://github.com/@stefanoruth/classnames/workflows/Build%20&%20Tests/badge.svg?branch=master)

## Installation

```sh
# npm
npm install @stefanoruth/classnames

# Yarn
yarn add @stefanoruth/classnames
```

## Example

```tsx
import React from 'react
import { css } from '@stefanoruth/classnames'


export const Card = props => {

    return <div className={css('bg-white w-full shadow rounded', props.spacing && 'px-4 py-6' props.className)}>{props.children}</div>
}
```
