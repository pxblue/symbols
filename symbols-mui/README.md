[![](https://img.shields.io/circleci/project/github/brightlayer-ui/symbols/master.svg?style=flat)](https://circleci.com/gh/brightlayer-ui/symbols/tree/master)
![npm](https://img.shields.io/npm/v/@brightlayer-ui/symbols-mui?label=%40brightlayer-ui/symbols-mui)

# Brightlayer UI Symbols for Material-UI
This library contains componentized svg symbols from [@brightlayer-ui/symbols](https://github.com/brightlayer-ui/symbols) for use in React applications using Material UI. The symbols are made available in the same way that Material UI exposes the [Material Icons](https://material-ui.com/style/icons/#svg-material-icons). 

## Installation
To install the Brightlayer UI mui symbols from NPM as a dependency for your project, you can run one of the following commands in your project root:
```
npm install --save @brightlayer-ui/symbols-mui
or
yarn add @brightlayer-ui/symbols-mui
```

>**NOTE (Peer Dependencies):** Using this package requires you to have @material-ui/core and @material-ui/icons defined as dependencies in your project's package.json file.


## Usage

### Angular
This package is intended for use only in React applications. For a way to link svg symbols for use in Angular applications, see [@brightlayer-ui/symbols](https://github.com/brightlayer-ui/symbols).


### React
Once you have installed the npm module, you can import the symbol components into your application as follows:
```
import mySymbol from '@brightlayer-ui/symbols-mui/MySymbol;
...
<mySymbol></mySymbol>
```
If you are importing multiple symbols, you can save some space by using named imports from the package root:
```
import {FirstSymbol, SecondSymbol, ThirdSymbol} from '@brightlayer-ui/symbols-mui';
```

Symbol names are in TitleCase - for a list of available symbols, refer to [@brightlayer-ui/symbols](https://github.com/brightlayer-ui/symbols/blob/master/README.md) or look at our live [demo](http://brightlayer-ui.github.io/style/iconography).

## Building Symbol Set (for contributors)
To build the symbols set, e.g. when new symbols are added:

```
yarn install
yarn run svgr
```
or
```
yarn install
yarn run mui
```
