jest.mock('../src/normalizeOptions')

import normalizeOptions from '../src/normalizeOptions'
import Storage from '../src/Storage'

describe('Storage#changeOptions', () => {
  const storage = new Storage({})
  const initialOptions = storage.options

  beforeEach(() => normalizeOptions.mockClear())

  it('change "options"`s value for the return of calling "normalizeOptions"', () => {
    const newOptions = { otherOption: 'value' }
    const normalizedOptions = {}

    normalizeOptions.mockReturnValue(normalizedOptions)

    storage.changeOptions(newOptions)

    expect(normalizeOptions).toBeCalledWith({ ...initialOptions, ...newOptions })
    expect(storage.options).toBe(normalizedOptions)
  })
})
