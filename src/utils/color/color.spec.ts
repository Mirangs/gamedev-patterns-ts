import {Color} from '@/utils'

describe('>>> Color', () => {
  it('Should instantiate with provided values', () => {
    const rgba = new Color(1, 2, 3, 0.5)
    expect(rgba.R).toBe(1)
    expect(rgba.G).toBe(2)
    expect(rgba.B).toBe(3)
    expect(rgba.A).toBe(0.5)
  })

  it('should throw an error if provided values are incorrect', () => {
    expect(() => new Color(266, 2, 3, 0.1)).toThrow(/Red/)
    expect(() => new Color(-1, 2, 3, 0.1)).toThrow(/Red/)
    expect(() => new Color(1.3, 2, 3, 0.1)).toThrow(/Red/)

    expect(() => new Color(255, 266, 3, 0.1)).toThrow(/Green/)
    expect(() => new Color(255, -1, 3, 0.1)).toThrow(/Green/)
    expect(() => new Color(255, 1.3, 3, 0.1)).toThrow(/Green/)

    expect(() => new Color(255, 2, 266, 0.1)).toThrow(/Blue/)
    expect(() => new Color(255, 2, -1, 0.1)).toThrow(/Blue/)
    expect(() => new Color(255, 2, 1.3, 0.1)).toThrow(/Blue/)

    expect(() => new Color(255, 2, 3, -1)).toThrow(/Alpha/)
    expect(() => new Color(255, 2, 3, 1.2)).toThrow(/Alpha/)
  })

  it('should correctly stringify color', () => {
    const rgba = new Color(1, 2, 3, 0.1)
    expect(rgba.toString()).toBe('rgba(1, 2, 3, 0.1)')
  })

  it('should correctly parse string', () => {
    // const rgba = Color.Parse('rgba(1, 2, 3, 0.1)')
    const rgba = Color.Parse('rgba(1, 2, 3, 0.1)')
    expect(rgba.R).toBe(1)
    expect(rgba.G).toBe(2)
    expect(rgba.B).toBe(3)
    expect(rgba.A).toBe(0.1)
  })

  // TODO: add more corner cases
  it('should throw an error when invalid string present', () => {
    const invalidValues = [
      '',
      'rgb',
      'rgba',
      'rgb(2, 1, 3, 1)',
      'rgba(-2, 1, 3, 1)',
      'rgba(2, -1, 3, 1)',
      'rgba(2, 1, -3, 1)',
      'rgba(2, 1, 3, 2)',
      'rgba(2, 1, 3, 0.2, 3)',
      'rgba1, 3, 1, 0.1',
    ]

    invalidValues.forEach((invalidValue) => {
      expect(() => Color.Parse(invalidValue)).toThrow()
    })
  })
})
