// node inspect myscript.js
function one() {
    let a = 'a';
    console.log(1);
    function two() {
        let b = 'b';
        console.log(a);
    }
    two();
}
one();