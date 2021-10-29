# Brightlayer UI Symbols
[![](https://img.shields.io/npm/v/@brightlayer-ui/symbols.svg?label=@brightlayer-ui/symbols&style=flat)](https://www.npmjs.com/package/@brightlayer-ui/symbols)
[![](https://img.shields.io/circleci/project/github/brightlayer-ui/symbols/master.svg?style=flat)](https://circleci.com/gh/brightlayer-ui/symbols/tree/master)

This is a library of one-line symbols for use in Brightlayer UI applications.

## Installation
To install the Brightlayer UI symbols from NPM as a dependency for your project, you can run one of the following commands in your project root:
```
npm install --save @brightlayer-ui/symbols
or
yarn add @brightlayer-ui/symbols
```

## Usage
### Angular
The simplest way to use these SVG symbols in Angular is to register them with the matIconRegistry so they can be used with the ```<mat-icon>``` tag. You can register symbols individually, or as the entire Brightlayer UI set:

```
import { Component } from "@angular/core";
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";

declare var require: any;
const symbol = require("@brightlayer-ui/symbols/battery.svg"); // individual symbol
const symbolSet = require("@brightlayer-ui/symbols/symbols.svg"); // full set
```

Then, in your constructor, register the symbol or the symbol set. It will then be available for use as a ```<mat-icon>```.

#### Individual Icon
```
// app.component.ts
export class AppComponent {
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.matIconRegistry.addSvgIcon(
      "battery",
      this.domSanitizer.bypassSecurityTrustResourceUrl(symbol)
    );
  }
}
```

```
// app.component.html
<mat-icon svgIcon="battery"></mat-icon>
```

#### Entire Icon Set
```
// app.component.ts
export class AppComponent {
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.matIconRegistry.addSvgIconSetInNamespace('blui-symbols', this.domSanitizer.bypassSecurityTrustResourceUrl(symbolSet));
  }
}
```

```
// app.component.ts
<mat-icon svgIcon="blui-symbols:battery"></mat-icon>
```

### React
```
const symbol = require('@brightlayer-ui/symbols/SYMBOL_NAME.svg');
...
<img src={symbol}/>
```

>NOTE: If you will be using many of these symbols in your application, we recommend you use [@brightlayer-ui/symbols-mui](https://www.npmjs.com/package/@brightlayer-ui/symbols-mui) to simplify usage. This library makes more sense if you just need one or two symbols or if you want to reduce the size of your bundle.

### Available Symbols
Please see [Available Symbols](https://github.com/brightlayer-ui/symbols/blob/master/available_symbols.md) for a list of currently available symbols.

# For Icon Creators
Each symbol has its own folder in the /icons/symbols folder, which includes the clean SVG file .


