//weui登陆组件模块
var Login=React.createClass({
    getInitialState: function() {
          return {username:'',userpwd:''};
    },
    userName: function(event) {
          this.setState({username:event.target.value});
    },
    userPwd: function(event) {
          this.setState({userpwd:event.target.value});
    },
    buttonClick: function() {
          this.state.username=='yml'&&this.state.userpwd=='123'?weui.toast('登陆成功'):weui.toast('登陆失败');
    },
    render:function(){
    var login=<form className="weui-cells weui-cells_form">
    <p className="weui-cell"><lable className="weui-label">用户名：</lable>< input type = "text" className="weui-input weui-cell__bd" placeholder="请输入用户名" id="username" onChange={this.userName}/></p>
    <p className="weui-cell"><lable className="weui-label">密&nbsp;码：</lable>< input type = "password" className="weui-input weui-cell__bd" placeholder="请输入密码" id="userpwd" onChange={this.userPwd}/></p>
    <p className="weui-btn-area"><input type="button" className="weui-btn weui-btn_primary" value="登陆" onClick={this.buttonClick}/></p>
    </form>;
        return login;
    }
})
//渲染
ReactDOM.render( 
    <Login/>
    , document.getElementById('div1')
)