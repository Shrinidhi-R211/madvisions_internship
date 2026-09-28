let count = 0;

document.getElementById("decreaseBtn").onclick = function() {
    count--;
    document.getElementById("counterLabel").innerHTML = count;
}
document.getElementById("resetBtn").onclick = function() {
    count = 0;
    document.getElementById("counterLabel").innerHTML = count;

}
document.getElementById("increaseBtn").onclick = function() {
    count = count + 1;
    document.getElementById("counterLabel").innerHTML = count;
}