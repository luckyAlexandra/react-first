export const CHANGE_BG = 'CHANGE_BG'

export function changeBg (color) {
  return {
    type: CHANGE_BG,
    color
  }
}