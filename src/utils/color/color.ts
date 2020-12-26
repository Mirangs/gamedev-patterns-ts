export class Color {
  public readonly R: number
  public readonly G: number
  public readonly B: number
  public readonly A: number

  constructor(r: number, g: number, b: number, a: number) {
    if (!Color.IsValidChannel(r)) {
      throw new Error('Provided incorrect value for Red channel')
    }

    if (!Color.IsValidChannel(g)) {
      throw new Error('Provided incorrect value for Green channel')
    }

    if (!Color.IsValidChannel(b)) {
      throw new Error('Provided incorrect value for Blue channel')
    }

    if (!Color.IsValidChannel(a, true)) {
      throw new Error('Provided incorrect value for Alpha channel')
    }

    this.R = r
    this.G = g
    this.B = b
    this.A = a
  }

  public static IsValidChannel(v: number, isAlpha = false): boolean {
    if (!isAlpha && v % 1 !== 0) {
      return false
    }

    const max = isAlpha ? 1 : 255
    return v >= 0 && v <= max
  }

  public static Parse(str: string): Color {
    const isValidString = /rgba\(\d{1,3}, \d{1,3}, \d{1,3}, \d\.?\d+\)/.test(str)
    if (!isValidString) {
      throw new Error('Invalid string')
    }

    const [r, g, b, a] = str.replace(/(rgba)|[()]/g, '').split(',').map((channel) => channel.trim())
    return new Color(+r, +g, +b, +a)
  }

  public toString(): string {
    return `rgba(${this.R}, ${this.G}, ${this.B}, ${this.A})`
  }
}
