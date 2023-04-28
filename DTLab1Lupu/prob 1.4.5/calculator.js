$(document).ready(function() {
    $('#equals').click(function() {
        var firstNumberText = $('#firstNumber').val();
        var secondNumberText = $('#secondNumber').val();
        var firstNumber = parseInt(firstNumberText);
        var secondNumber = parseInt(secondNumberText);
        var operator = $('#operator').val();
        var result = 0;
        switch (operator) {
            case '+':
                result = firstNumber + secondNumber;
                break;
            case '-':
                result = firstNumber - secondNumber;
                break;
            case '*':
                result = firstNumber * secondNumber;
                break;
            case '/':
                result = firstNumber / secondNumber;
                break;
            case '%':
                result = firstNumber % secondNumber;
                break;
            default:
                alert('Invalid operator');
                return;
        }
        $('#result').text(result);
    });
});