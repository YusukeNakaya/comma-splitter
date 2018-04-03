# comma-splitter

Automatically add commas every 3 digits. Ex: "1000000" to "1,000,000"

## Installation

### npm

```
$ npm install comma-splitter
```

### unpkg

```html
<script src="https://unpkg.com/comma-splitter" type="text/javascript"></script>
```

## Usage

```javascript
const num = 1000000
const add = addComma(num)
console.log(add) // "1,000,000" (string)
const rm = rmComma(add)
console.log(rm) // 1000000 (int)
```

## License

MIT
