import utils from '../../client/utils'

test('year', (done) => {
  const exp = 2018  
  const actual = utils.getYear()
  expect(actual).toBe(exp)
  done()
})

test('month', (done) => {
  const exp = "April"
  const actual = utils.getMonthStr()
  expect(actual).toBe(exp)
  done()
})

test('firstDay Jan', (done) => {
  const exp = 1
  const actual = utils.firstDay(2018, 0)
  expect(actual).toEqual(exp)
  done()
})

test('firstDay Feb', (done) => {
  const exp = 4
  const actual = utils.firstDay(2018, 1)
  expect(actual).toEqual(exp)
  done()
})

test('firstDay Mar', (done) => {
  const exp = 4
  const actual = utils.firstDay(2018, 2)
  expect(actual).toEqual(exp)
  done()
})

test('firstDay Current', (done) => {
  const exp = 0
  const actual = utils.firstDay()
  expect(actual).toEqual(exp)
  done()
})

test('lastDay Jan', (done) => {
  const exp = 31
  const actual = utils.lastDay(2018, 0)
  expect(actual).toEqual(exp)
  done()
})

test('lastDay Feb', (done) => {
  const exp = 28
  const actual = utils.lastDay(2018, 1)
  expect(actual).toEqual(exp)
  done()
})

test('lastDay Dec', (done) => {
  const exp = 31
  const actual = utils.lastDay(2018, 2)
  expect(actual).toEqual(exp)
  done()
})

test('lastDay Current', (done) => {
  const exp = 30
  const actual = utils.lastDay()
  expect(actual).toEqual(exp)
  done()
})

test('dateGridGenerator Dec', (done) => {
  const exp = [25, 26, 27, 28, 29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 1, 2, 3, 4, 5]
  const actual = utils.dateGridGenerator(2018, 11)
  expect(actual).toEqual(exp)
  done()
})

test('dateGridGenerator Current', (done) => {
  const exp = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  const actual = utils.dateGridGenerator()
  expect(actual).toEqual(exp)
  done()
})

test('dateRowWrapper Current', (done) => {
  const exp = [[1, 2, 3, 4, 5, 6, 7], [8, 9, 10, 11, 12, 13, 14], [15, 16, 17, 18, 19, 20, 21], [22, 23, 24, 25, 26, 27, 28], [29, 30, 1, 2, 3, 4, 5], [6, 7, 8, 9, 10, 11, 12]]
  const actual = utils.dateRowWrapper()
  expect(actual).toEqual(exp)
  done()
})