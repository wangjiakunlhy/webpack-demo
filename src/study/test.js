import React,{ Component } from 'react';
import '../style/main.scss';

{
    // let 和 const
    // 用let代替var来声明变量，const用来声明常量，常量一旦初始化则不可在修改(基本数据类型)。但是对object和数组是可以改变值得。
    let a = 10;
    const  b = 12;
    const obj = {name:"常量"};
    // b = 34;// 编辑器都报错了
    obj.name = "改变值可以哦";
    a = 12;
    console.log(a);// 12
    console.log(b);// 12
    console.log(obj);// obj

    // let 和 var 的区别在于，用var声明的变量属于全局变量，let则是属于离他最近的块级作用域，最典型的就是for循环
    for(var va = 0;va<10;va++){}
    for(let le = 0;le<10;le++){}
    console.log(va);// 11
    // console.log(le);// undefined,let创建的le变量只在for循环的块内有效。
}

{
    //解构赋值: 按照一定的模式，从数组中或对象中提取值付给变量，被称为解构赋值。
    // 数组的解构赋值
    let arr = [1,2,4,3,5];
    // 现在需要把数组的每个值分别付给不同的变量a,b,c,d,e;普通方式则是a = arr[0];......
    let [a,b,c,d,e] = arr;
    console.log(a,b,c,d,e);// 1 2 4 3 5
    // 我只要前两个值，后面的都放在一个变量中
    let [one,two,...arr2] = arr;
    console.log(one,two,arr2);// 1 2 [4,3,5]
    // 左边变量和右边数组值根据位置相互对应，不对应的则会被赋值成undefined，其中 ...三个小点是扩展运算符

}

{
    // 对象解构赋值
    // 对象解构赋值也比较简单，左边变量名和右边对象的属性名相同则会把右边的属性名对应的值赋值给左边的变量。与数组相比左边的变量没有顺序要求
    let { name , age } = {name:"Jim",age:16};
    console.log(name,age);
    const baseObj = {name:'Car',age:33,country:'china'};
    const { country } = baseObj;// 对象的解构赋值在React中非常常用
    console.log(country);
}

{
    //字符串方法
    //模板字符串。react中也是非常的常用。

    let name = '字符串模板';
    let age = 21;
    console.log("我的名字是："+name+" ，年龄："+age);// 平时拼接字符串方式
    console.log(`我的名字是：${name} , 年龄：${age}`);// 使用模板字符串，解析的值放进${}中即可


    // 遍历字符串
    let str = 'string';
    for(let char of str){
        console.log(char);
    }

    //includes(str,num):从第num开始是否包含str字符或者字符串。
    //startsWith(str,num):从第num开始是否包含str字符或者字符串。
    //endsWith(str,num):从第num开始之前的字符是否包含str字符或者字符串。
    console.log(str.includes('g',4));// true
    console.log(str.startsWith('str'))// true
    console.log(str.endsWith('r',2));// false
}

{
    // 箭头函数
    let fun2 = () => {
        console.log('fun2')
    }
    // 等同于
    function fun1() {
        console.log('fun1');
    }
    fun1();
    fun2();
    // 带有参数
    let fun3 = (op1,op2,op3) => {
        console.log(op1,op2,op3);
    }
    fun3('op1','op2','op3');
}

{
    //根据解构赋值，对象就有简洁的表示法
    let price = 9;
    let car = {
        name:'五菱宏光S',
        price,// 等同于 price: price,这种写法，即是属性名基变量名，属性值即变量值。
    }
    console.log(car);// {name: "五菱宏光S", price: 9}

    // Object.assign()方法，常用合并多个对象的属性于一个对象。第一个参数为目标参数，后面的参数的属性会添加到目标参数中，且如果目标参数中
    // 具有与源参数相同的属性时，则会以源参数的值为准——即后面的会覆盖前面的。
    let s = {name:'小刚',age:12,like:'book',country:'China',childs:[2,3]};
    let a = {name:'小明'};
    let b = {age:23};
    let c = {like:'LOL'};
    let o = Object.assign({},a,b,c);
    let o2 = Object.assign(s,a,b,c);
    console.log(o);// {name: "小明", age: 23, like: "LOL"}
    console.log(o2);// {name: "小明", age: 23, like: "LOL", country: "China"}

    // 对象属性的遍历，这个也是经常用到方法，这里介绍两个for...in和Object.keys
    for(let key in s){
        console.log(`key=${key},value=${s[key]}`);
    }

    console.log(Object.keys(s))// 数组，返回所有属性名
    Object.keys(s).forEach(key => {
        console.log(`key=${key},value=${s[key]}`);
    })

    // 对象的扩展运算符：... 三个小点。ES8中引入的，ES7只是一个提案。功能和数组的基本一致
    let s2 = {...s};// 把对象s属性全部展开到{}中，该行操作相当于一个浅拷贝。
    s2.age = 999;
    s2.childs[0] = 999;
    console.log(s);// 打印值证明浅拷贝，其中的数组对象值被改变了。

    let { name, age, ...other } = s;// 对象使用扩展运算符进行结构赋值，除了name,age的值被赋到name和age变量，剩余属性全部放到other变量中
    console.log(name);
    console.log(age);
    console.log(other);

}

{

    let array = ['a','v','r','t','f','dfdfdf'];
    console.log(array.entries());
    console.log(array.values());
    console.log(array.keys());

    for(let [index,value] of array.entries()){
        console.log(`array[${index}]=${value}`);
    }
    for(let value of array.values()){
        console.log(value);
    }

    for(let index of array.keys()){
        console.log(index);
    }
}


class Test extends Component{
    constructor(props){
        super(props);
    }

    render(){

        return(
            <div className='mainStyle'>
                {
                    /*这里是jsx的注释,下面的值并不会显示*/
                    // 这个也不会显示
                }
                {false}
                {true}
                <h1 className='titleColor'>Hello React!</h1>
                <h1>Hello React!</h1>
            </div>
        )
    }
}

export default Test;