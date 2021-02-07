Function.prototype.Call = function(context){
    console.log('context', context)
    console.log(this)
    //判断传入是否为null
    //如果为null直接指向window
    let ctx = context || window;
    //将当前被调用的方法定义在ctx.func上,例子上的就是getName为this
    //为了能以对象调用的形式绑定this
    ctx.func = this;
    console.log('ctx', ctx)
    //获取参数
    //从参数第二位开始截取到最后一个参数
    const args = Array.from(arguments).slice(1);
    console.log(args)
    //以对象调用的行是调用func，此时this指向ctx,
    //也就是传入的需要绑定的this的指向
    // const l = arguments.length;
    const res = ctx.func(...args)
    console.log('res', res)

    //删除该方法，不然会对传入的对象造成污染
    delete ctx.func;
    return res;
}

const p = {
    name: 'ss',
    getName:function(a){
        console.log('a', a)
        console.log(this.name)
    }
}

let c = {
    name: 'ddd'
}
p.getName.Call(c, '安安','bb');


Function.prototype.myCall = function(context){
	let ctx = context || window;
  ctx.func = this; //把被调用的函数赋值给func
  let args = Array.from(arguments).slice(1);
  ctx.func(...args);
  delete ctx.func;
}

//测试
let temp = {
	name: 'temp1',
  showInfo: function(){
  	console.log(this.name);
  }
}
let temp2 = {
	name: 'temp2'
}

temp.showInfo.myCall(temp2);