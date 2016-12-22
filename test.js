/**
 * Created by Administrator on 2016/12/19.
 */


 var style1={
    color:'red',
    fontSize:50
  }

//定义新闻标题组件类
var Title=React.createClass({
    render:function(){

        <h1 style={{color:'red'}}>{this.props.title2}</h1>;
        var t=<h1 style={{color:'red'}}>{this.props.title2}</h1>;
        return t;
    }
});
//定义新闻描述组件类
var Desc=React.createClass({
    render:function(){
        var d=<h1 style={{color:'green'}}>{this.props.desc2}</h1>;
        return d;
    }
});
//创建复合组件类
var HelloMessage=React.createClass({
    render:function(){
        {/*jsx变量*/}
        var hello=<div>
            {/*向组件传递参数，可以使用 this.props 对象*/}
            <p>新闻标题:<Title title2={this.props.title1}/></p>
            <p>新闻描述:<Desc desc2= {this.props.desc1}/></p>

        </div>;
        return hello;
    }
});

ReactDOM.render(
    //js注释
   /*    <HelloMessage />  * */
   <HelloMessage title1="范冰冰" desc1="范冰冰有几个干爹" ></HelloMessage>
   ,
    document.getElementById('example')
);


