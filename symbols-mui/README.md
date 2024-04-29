![npm](https://img.shields.io/npm/v/@brightlayer-ui/symbols-mui?label=%40brightlayer-ui/symbols-mui)[![Build](https://github.com/etn-ccis/blui-symbols/actions/workflows/blui-ci.yml/badge.svg)](https://github.com/etn-ccis/blui-symbols/actions/workflows/blui-ci.yml)

# Brightlayer UI Symbols for Material-UI

This library contains componentized svg symbols from [@brightlayer-ui/symbols](https://github.com/etn-ccis/blui-symbols) for use in React applications using Material UI. The symbols are made available in the same way that MUI exposes the [Material Icons](https://mui.com/material-ui/icons/#svg-material-icons).

## Installation

To install Brightlayer UI's MUI symbols from NPM as a dependency for your project, you can run one of the following commands in your project root:

```sh
npm install --save @brightlayer-ui/symbols-mui
or
yarn add @brightlayer-ui/symbols-mui
```

> **NOTE (Peer Dependencies):** Using this package requires you to have @material-ui/core and @material-ui/icons defined as dependencies in your project's package.json file.

## Usage

### Angular

This package is intended for use only in React applications. For a way to link svg symbols for use in Angular applications, see [@brightlayer-ui/symbols](https://github.com/etn-ccis/blui-symbols).

### React

Once you have installed the npm module, you can import the symbol components into your application as follows:

```jsx
import mySymbol from '@brightlayer-ui/symbols-mui/MySymbol;
...
<mySymbol></mySymbol>
```

If you are importing multiple symbols, you can save some space by using named imports from the package root:

```jsx
import { FirstSymbol, SecondSymbol, ThirdSymbol } from '@brightlayer-ui/symbols-mui';
```

Symbol names are in TitleCase - for a list of available symbols, refer to [@brightlayer-ui/symbols](https://github.com/etn-ccis/blui-symbols/blob/master/README.md) or look at our live [demo](http://brightlayer-ui.github.io/style/iconography).

## Building Symbol Set (for contributors)

To build the symbols set, e.g. when new symbols are added:

```sh
yarn install
yarn build
```
