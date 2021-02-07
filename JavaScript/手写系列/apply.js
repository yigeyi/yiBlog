Function.prototype.myApply = function(context){
  let ctx = context || window;
  ctx.func = this; //把被调用的函数赋值给func
  ctx.func(...arguments[1]);  //参数第一个个参数是上下文 ，后面是一个数组，也就是arguments[1]
  delete ctx.func;
}

//测试
let temp = {
  name: '一个奕',
  getName: function(a,b){
    console.log('a, b', a, b)
    console.log(this.name);
  }
}

let temp2 = {
  name: '奕'
}

temp.getName.myApply(temp2, [1,999])