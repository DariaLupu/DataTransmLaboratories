function fibonacci(n) {
    if (n <= 1) {
        return 1;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}
var fibonacciButton = document.getElementById("fibonacciB");
fibonacciButton.addEventListener("click", function() {
    var fibonacciInput = document.getElementById("fibonacciIn");
    var n = fibonacciInput.value;
    var fibonacciList = document.getElementById("fibonacciLi");
    fibonacciList.innerHTML = ""; // clear previous results
    for (var i = 0; i < n; i++) {
        var fibonacciNumber = fibonacci(i);
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(fibonacciNumber));
        fibonacciList.appendChild(li);
    }
});