export const add = (a:number, b:number) => a + b

export const reverse = (s:string|null) => {
  if (s === null) {
    return 'null' // this branch will not be called from the app
  } else {
    return s.split('').reverse().join('')
  }
}
