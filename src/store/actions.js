export const CHANGE_BG = 'CHANGE_BG'
export const DELAY_CHANGE = 'DELAY_CHANGE'

export function changeBg (color) {
  return {
    type: CHANGE_BG,
    color
  }
}

export function delayChange (time, color) {
  return {
    type: DELAY_CHANGE,
    time,
    color
  }
}