
function addToInput(symbol) {
    const input = document.getElementById('input');
    input.value += symbol;
}


function calculate() {
    const input = document.getElementById('input');
    const expression = input.value;

    try {

        const operators = ['+', '-', '*', '/'];
        let operator = null;
        let operands = [];

        for (let op of operators) {
            if (expression.includes(op)) {
                operator = op;
                operands = expression.split(op).map(num => parseFloat(num.trim()));
                break;
            }
        }

        if (!operator || operands.length !== 2 || isNaN(operands[0]) || isNaN(operands[1])) {
            throw new Error('Некорректное выражение');
        }

        let result;
        switch (operator) {
            case '+':
                result = operands[0] + operands[1];
                break;
            case '-':
                result = operands[0] - operands[1];
                break;
            case '*':
                result = operands[0] * operands[1];
                break;
            case '/':
                if (operands[1] === 0) {
                    throw new Error('Деление на ноль');
                }
                result = operands[0] / operands[1];
                break;
        }

        // Добавляем операцию в историю
        addToHistory(`${expression} = ${result}`);

        // Выводим результат в поле ввода
        input.value = result;
    } catch (error) {
        input.value = 'Ошибка';
        setTimeout(() => {
            input.value = '';
        }, 1000);
    }
}


function addToHistory(record) {
    const history = document.getElementById('history');
    const entry = document.createElement('p');
    entry.textContent = record;
    history.append(entry);
}