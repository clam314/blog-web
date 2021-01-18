// 单位px
// const media = [
//   {
//     xs: 1,
//     sm: 576,
//     md: 768,
//     lg: 992,
//     xl: 1200,
//     xxl: 1600,
//   },
// ]

const xs = 480
const sm = 576
const md = 768
const lg = 992
const xl = 1200
const xxl = 1600

const screen = [xs, sm, md, lg, xl, xxl]

const match = (width) => {
  return window.matchMedia(`(max-width: ${width}px)`).matches
}

const matchMedia = () => {
  let result = ''
  for (const s of screen) {
    if (match(s)) {
      result = s
      break
    }
  }
  return result
}

const callbackMatch = (callback) => {
  return () => {
    callback(matchMedia())
  }
}

export default {
  xs,
  sm,
  md,
  lg,
  xl,
  xxl,
  matchMedia,
  callbackMatch,
}
