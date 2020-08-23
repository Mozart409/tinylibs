export default function formatNum(input) {
  input = input + "";
  return (input = Math.round((input / 1000) * 10) / 10 + "K");
}
