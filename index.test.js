const { checkPhoneNumber } = require('./');

describe('Test various cases', () => {
  afterEach(() => {
    jest.clearAllMocks();
    jest.restoreAllMocks();
  });
  afterAll(() => {
    jest.resetAllMocks();
  });
  test('Empty case', () => {
    expect(checkPhoneNumber('')).toBe(false);
  });
  test('(949) 123-9876', () => {
    expect(checkPhoneNumber('(949) 123-9876')).toBe(true);
  });
  test('111-1111111', () => {
    expect(checkPhoneNumber('111-1111111')).toBe(true);
  });
  test('949-123-45678', () => {
    expect(checkPhoneNumber('949-123-45678')).toBe(false);
  });
  test('abc', () => {
    expect(checkPhoneNumber('abc')).toBe(false);
  });
  test('(949)123-9876', () => {
    expect(checkPhoneNumber('(949)123-9876')).toBe(true);
  });
  test('2222222222', () => {
    expect(checkPhoneNumber('2222222222')).toBe(true);
  });
  test('+1949-123-4567', () => {
    expect(checkPhoneNumber('+1949-123-4567')).toBe(false);
  });
  test('949-123-4567', () => {
    expect(checkPhoneNumber('949-123-4567')).toBe(true);
  });
});
