Function.prototype.Call = function(context){
    const ctx = context || window;
    //将当前被嗲用的啊方法定义在ctx.func上
    //为了能以对象调用的形式绑定this
    ctx.func = this;

    //获取参数
    const args = Array.from(arguments).slice(1);

    //以对象调用的行是调用func，此时this指向ctx,
    //也就是传入的需要绑定的this的指向
    const res = arguments.length;
    if(res > 1){
        ctx.func(...args)
    }else{
        ctx.func();
    }

    //删除该方法，不然会对传入的对象造成污染
    delete ctx.func;
    return res;
}

const p = {
    name: 'ss',
    getName:function(){
        console.log(this.name)
    }
}

let c = {
    name: 'ddd'
}
p.getName.Call(c);