export const add = (a:number, b:number) => a + b

export const reverse = (s:string|null) => {
  if (s === null) {
    return 'null'
  } else {
    return s.split('').reverse().join('')
  }
}
