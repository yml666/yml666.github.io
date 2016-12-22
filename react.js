// var i=0; 
// var style1={ color:'#fff',background:'pink',fontSize:14 }; 
// var result=true;
// var x="123";
// var arr=[<p className="style2">1</p>,'2',<h4 style={{background:'#eaffee'}}>3</h4>,'4','5','6','7'];
// var arr1=[];
// arr1.push(<p className="style2">1</p>);
// ReactDOM.render(
    // <div>
    //     {/*三元运算符*/}
    //     <h1>{i == 1 ?'true':'false'}</h1>
    //     <h1>{result==true?(x=='123'?'登陆成功':'登陆失败'):'登陆失败'}</h1>
    //     {/*数据绑定改变样式*/}
    //     <h1 style={style1}>杨明亮</h1>
    //     <h1 style={{background:'#eeeeee'}}>杨明亮</h1>
    //     {/*用className实现页面级样式的改变*/}
    //     <h1 className="style2">杨明亮</h1>
    //     {/*插入数组*/}
    //     {[<p className="style2">1</p>,'2',<h4 style={{background:'#eaffee'}}>3</h4>,'4','5','6','7']}
    //     {arr}
    //     {arr1}
    // </div>
// , document.getElementById('div1') );

//         var i=0; 
//         var style1={ color:'#fff',background:'pink',fontSize:14 }; 
//         var result=true;
//         var x="123";
//         var arr=[<p className="style2">1</p>,'2',<h4 style={{background:'#eaffee'}}>3</h4>,'4','5','6','7'];
//         var arr1=[];
//         arr1.push(<p className="style2">1</p>);
//         var x=<div>
//         {/*三元运算符*/}
//         <h1>{i == 1 ?'true':'false'}</h1>
//         <h1>{result==true?(x=='123'?'登陆成功':'登陆失败'):'登陆失败'}</h1>
//         {/*数据绑定改变样式*/}
//         <h1 style={style1}>杨明亮</h1>
//         <h1 style={{background:'#eeeeee'}}>杨明亮</h1>
//         {/*用className实现页面级样式的改变*/}
//         <h1 className="style2">杨明亮</h1>
//         {/*插入数组*/}
//         {[<p className="style2">1</p>,'2',<h4 style={{background:'#eaffee'}}>3</h4>,'4','5','6','7']}
//         {arr}
//         {arr1}
//     </div>;


// var MyOneClass=React.createClass({
//     render:function(){
//         return x;
//     }
// });

// var TwoClass=React.createClass({
//     render:function(){
//         return <h1 className="style3">Hello {this.props.name}</h1>;
//     }
// })

// ReactDOM.render(
//     <div>
//     <MyOneClass></MyOneClass>
//     <TwoClass name="杨明亮"></TwoClass>
//     </div>,
//     document.getElementById('div1')
//     );


//定义新闻标题组件类
var Title=React.createClass({
    render:function(){
        var t=<h1>{this.props.title}</h1>
        return t;
    }
})
//定义新闻描述组件类
var Desc=React.createClass({
    render:function(){
        var d=<h2>{this.props.desc}</h2>
        return d;
    }
})

var Hello=React.createClass({
    render:function(){
        var hello=
        <div>
        <p className="style3">新闻标题：<Title title={this.props.title}></Title></p>
        <p className="style2" style={{background:'pink'}}>新闻内容：<Desc desc={this.props.desc}></Desc></p>
        </div>;
        return hello;
    }
})

ReactDOM.render(
    <Hello title="杨明亮" desc="杨明亮打了丁潘飞">
    </Hello>
    ,document.getElementById('div1')
)