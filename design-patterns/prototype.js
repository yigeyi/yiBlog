//用class定义一个类
class Dog{
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  eat(){
    console.log('骨头真好吃');
  }
}

//使用普通function定义一个类
//上面的class写法也就等于写这么一个构造函数
function Dog1(name, age){
  this.name = name;
  this.age = age;
}
Dog1.prototype.eat = function(){
  console.log('骨头真好吃');
}
//////////////////////////////////////
//////////////////////////////////////
//////////////////////////////////////
//////////////////////////////////////

