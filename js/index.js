let son1 = +prompt("Son1 ni kiriting")
let son2 = +prompt("Son2 ni kiriting")
let son3 = +prompt("Son3 ni kiriting")

if (son1 > son2 && son1 > son3 && son2 > son3) {
    alert(son3 + '<' + son2 + '<' + son1);
}
else if (son1 > son2 && son1 > son3 && son3 > son2) {
    alert(son2 + '<' + son3 + '<' + son1);
}
else if (son2 > son1 && son2 > son3 && son3 > son1) {
    alert(son1 + '<' + son2 + '<' + son3);
}
else if (son2 > son1 && son2 > son3 && son1 > son3) {
    alert(son3 + '<' + son1 + '<' + son2);
}
else if (son3 > son1 && son3 > son2 && son1 > son2) {
    alert(son2 + '<' + son1 + '<' + son3);
}
else if (son3 > son1 && son3 > son2 && son2 > son1) {
    alert(son1 + '<' + son2 + '<' + son3);
}