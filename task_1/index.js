import {encoded, translations} from './data.js'
// console.log("Let's rock")
// console.log(encoded, translations)

const decodeFields = (encoded, translations) => encoded.map((item) => {
  let str = JSON.stringify(item)
  Object.entries(translations).forEach(([key, value]) => {
    str = str.replaceAll(key, value)
  })
  return JSON.parse(str)
})

const decoded = decodeFields(encoded, translations)
console.log(decoded)
