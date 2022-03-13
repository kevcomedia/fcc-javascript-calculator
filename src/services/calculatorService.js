const operations = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
  '/': (a, b) => a / b,
}

/**
 * Converts a string expression in infix notation into an array of numbers and
 * operations in postfix notation.
 *
 * Example: parseExpression('3 + 4 * 5') returns
 *          [3, 4, 5, operations['*'], operations['+']]
 */
const parseExpression = (expression, output = [], operationStack = []) => {
  if (!expression) {
    if (operationStack.length === 0) {
      return output
    }
    return [...output, ...[...operationStack].reverse()]
  }

  const multiplyDivideMatch = expression.match(/^([*/])(-\d+(?:\.\d*)?)?(.*$)/)
  if (multiplyDivideMatch) {
    const [, operatorKey, negativeNumber, rest] = multiplyDivideMatch
    if (negativeNumber) {
      return parseExpression(
        rest,
        [...output, +negativeNumber],
        [...operationStack, operations[operatorKey]]
      )
    } else {
      return parseExpression(rest, output, [
        ...operationStack,
        operations[operatorKey],
      ])
    }
  }

  const addSubtractMatch = expression.match(/^([-+])(-\d+(?:\.\d*)?)?(.*$)/)
  if (addSubtractMatch) {
    const [, operator, negativeNumber, rest] = addSubtractMatch
    if (negativeNumber) {
      return parseExpression(
        rest,
        [...output, ...[...operationStack].reverse(), +negativeNumber],
        [operations[operator]]
      )
    } else {
      return parseExpression(
        rest,
        [...output, ...[...operationStack].reverse()],
        [operations[operator]]
      )
    }
  }

  const numberMatch = expression.match(/^(-?\d+(?:\.\d*)?)(.*$)/)
  if (numberMatch) {
    const [, number, rest] = numberMatch
    return parseExpression(rest, [...output, +number], operationStack)
  }

  throw new Error('cannot parse expression')
}

/**
 * Evaluates the given parsed expression, or throws an error if the parsed
 * expression is invalid.
 *
 * Example: evaluateParsedExpression([3, 4, 5, operations['*'], operations['+']])
 *          returns 23
 */
const evaluateParsedExpression = (parsed, stack = []) => {
  if (parsed.length === 0) {
    if (stack.length !== 1) {
      throw new Error('invalid expression')
    }
    return stack[0]
  }

  if (typeof parsed[0] == 'number') {
    return evaluateParsedExpression(parsed.slice(1), [...stack, parsed[0]])
  }

  if (stack.length < 2) {
    throw new Error('invalid expression')
  }

  const b = stack.pop()
  const a = stack.pop()
  return evaluateParsedExpression(parsed.slice(1), [...stack, parsed[0](a, b)])
}

const evaluateExpression = (expression) => {
  try {
    return evaluateParsedExpression(parseExpression(expression))
  } catch (error) {
    console.error(error)
    return expression
  }
}

const calculatorService = { evaluateExpression }

export default calculatorService
