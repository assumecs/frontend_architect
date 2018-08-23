// 装饰模式
function coffe(){
    console.log('来一杯咖啡');
}
function sweetCoffe(){
    coffe();
    console.log('加糖');
}
function milkSweetCoffe(){
    sweetCoffe();
    console.log('加奶');
}
coffe();