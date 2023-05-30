/**
 * Выводит строку, описывающую, как получить заданное число с помощью операций умножения и сложения над числом "1" и двух коэффициентов: "3" и "5".
 * @param {number} targetNum - Заданное число.
 * @returns {string} - Строка, описывающая операции для получения заданного числа.
 */
function getOperations(targetNum) {
    // Базовый случай: если targetNum равно 1, возвращаем пустую строку
    if (targetNum === 1) {
      return '';
    }
    if (targetNum % 3 === 0) {
      const result = getOperations(targetNum / 3);
      if (result !== null) {
        return '(' + result + ' * 3)';
      }
    }
    if (targetNum >= 5) {
      const result = getOperations(targetNum - 5);
      if (result !== null) {
        return '(' + result + ' + 5)';
      }
    }
    return null;
  }
  
  const targetNumber = 13;
  const result = getOperations(targetNumber);
  
  if (result !== null) {
    console.log(result); // (((1 * 3) + 5) + 5)
  } else {
    console.log('Невозможно получить заданное число с помощью указанных операций и коэффициентов.');
  }