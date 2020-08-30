export default function formatNum(input) {
  input = input + ''
  if (input < 1000) {
    return input
  } else {
    return (input = Math.round(input / 1000 * 10) / 10 + 'K')
  }
}
