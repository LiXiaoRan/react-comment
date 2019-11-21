import React ,{Component} from 'react'
import PropTypes from 'prop-types'
class CommentInput extends Component{
    static propTypes={
        onSubmit:PropTypes.func
    }

    constructor() {
        super();
        this.state={
            username:'',
            content:''
        }
    }
    
    handleUserNameChange(e){
        this.setState({
            username:e.target.value
        })
        
    }

    handleContentChange(e){
        this.setState({
            content:e.target.value
        })        
    }

    handleSubmit(e){
        //处理信息提交
        if (this.props.onSubmit) {
            let {username,content} =this.state;
            this.props.onSubmit({
                username:username,
                content:content,
                createdTime:+new Date()
            });//这里给CommentAPP传入一个comment对象，里面包含了username，content，createdTime
        }
        this.setState({
            content:''
        })
    }
    
    _saveUserName(username){
        //保存用户名到localStorage
        localStorage.setItem("username",username);
    }

    handleUsernameBlur(e){
        //处理用户名输出框失焦
        this._saveUserName(e.target.value)
    }

    componentWillMount(){
        this._loadUsername();
    }

    _loadUsername(){
        let username=localStorage.getItem("username");
        if (username) {
            this.setState({username:username})
        }
    }

    render() {
        return (
            <div className="comment-input">

                <div className="comment-field">
                    <span className="comment-field-name">用户名：</span>
                    <div className="comment-field-input">
                        <input onBlur={this.handleUsernameBlur.bind(this)} value={this.state.username}
                            onChange={this.handleUserNameChange.bind(this)}
                        />
                    </div>
                </div>    
                <div className="comment-field">
                    <span className="comment-field-name">评论内容：</span>
                    <div className="comment-field-input">
                        <textarea ref={(textarea)=>this.textarea=textarea} value={this.state.content}
                            onChange={this.handleContentChange.bind(this)}
                        />
                    </div>
                </div>
                <div className="comment-field-button">
                    <button onClick={this.handleSubmit.bind(this)}>发布</button>
                </div>
                
            </div>
        );
    }

    componentDidMount(){
        if (this.textarea) {
            this.textarea.focus();            
        }
    }

}

export default CommentInput