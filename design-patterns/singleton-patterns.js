/**
 * 第一种
 * 构造函数需要具备判断自己是否已经创建过一个实例的能力
 * 用一个静态方法来实现判断是否创建过一个实例
 */
class SingletonPatterns {
  show(){
    console.log('我是一个单例对象');
  }
  static createInstance(){
    //判断是否new过一个实例
    if(!SingletonPatterns.instance){
      //若这个唯一实例不存在，那么创建它
      SingletonPatterns.instance = new SingletonPatterns();
    }
    //如果这个唯一的实例存在，则直接返回
    return SingletonPatterns.instance;
  }
}
const s1 = SingletonPatterns.createInstance();
const s2 = SingletonPatterns.createInstance();

console.log('s1 === s2', s1 === s2);

/**
 *
 * 第二种
 * 使用闭包方式来实现
 * @type {function(): null}
 */
class SingleInstance{
  show(){
    console.log('我是一个单例对象');
  }
}
SingleInstance.createInstance = (function(){
  //定义自由变量instance，模拟私有变量
  let instance = null;
  return function(){
    //判断自由变量是否为null
    if(!instance){
      //如果为null则new出唯一实例
      instance = new SingleInstance();
    }
    return instance;
  }
})();

const s3 = SingleInstance.createInstance();
const s4 = SingleInstance.createInstance();
console.log('s3 === s4', s3 === s4);


//实践******
//封装Storage

/**
 * 第一种
 * 静态方法版
 */
class Storage01 {
  static createStorage(){
    //判断是否存在一个实例
    if(!Storage01.instance){
      //如果唯一实例不存在，创建
      Storage01.instance = new Storage01();
    }
    //如果这个唯一的实例存在，则直接返回
    return Storage01.instance;
  }
  getItem (key) {
    return localStorage.getItem(key)
  }
  setItem (key, value) {
    return localStorage.setItem(key, value)
  }
}

const storage1 = Storage01.createStorage();
const storage2 = Storage01.createStorage();

storage1.setItem('name','一个奕');
storage1.getItem('name'); //一个奕
storage2.getItem('name'); //一个奕
console.log('storage1 === storage2', storage1 === storage2); //true
//node中无localStorage

/**
 * 第二种
 * 闭包版
 */
//先实现一个基础的Storage类，再把getItem和setItem方法放在它的原型上
function baseStorage(){};
baseStorage.prototype.getItem = function (key){
  return localStorage.getItem(key);
}
baseStorage.prototype.setItem = function(key, value){
  return localStorage.setItem(key, value);
}

//以闭包的形式创建一个引用自由变量的构造函数
const StorageB = (function(){
  let instance = null;
  return function(){
    //判断自由变量是否为null
    if(!instance){
      //如果为null，则new出唯一实例
      instance = new baseStorage();
    }
    return instance;
  }
})();

//这里不用new Storage 的形式调用，直接Storage()也是一样效果
const storageA = new StorageB();
const storageB = new StorageB();

storageA.setItem('name', '一个奕');
storageA.getItem('name'); //一个奕
storageB.getItem('name'); //一个奕

console.log('storageA === storageB', storageA === storageB); //true




