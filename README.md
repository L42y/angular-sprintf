# [angular](https://angularjs.org)-[sprintf](https://github.com/alexei/sprintf.js)

## Installation

1. `bower install --save angular-sprintf`

2. including script file provided by bower component `sprintf` into your application

3. including script file(s) provided by this component into your application

4. adding `l42y.sprintf` as a module dependency to your application

## Usage

### `sprintf`

```html
<div>{{ 'test %s' | sprintf:binding }}</div>
```

### `vsprintf`

```html
<div>{{ 'test %s %s' | vsprintf:[binding, binding] }}</div>
```

## License

[WTFPL](http://wtfpl.org)
