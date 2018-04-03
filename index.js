export default function addComma(source) {
  const string = source.toString()
  const result = string.replace(RegExp(/(\d)(?=(\d{3})+(?!\d))/g), '$1,')
  return result
}

export default function rmComma(source) {
  const string = source.replace(/,/g, '')
  const result = Number(string)
  return result
}
