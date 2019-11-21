import React ,{Component} from 'react';
import CommentInput from './CommentInput'
import CommentList from './CommentList'

class CommentApp extends Component{
    constructor() {
        super();
        this.state={
            comments:[]
        }
    }
    
    componentWillMount(){
       this._loadComments();
    }

    _loadComments(){
        let comments=localStorage.getItem('comments')
        if (comments) {
            comments=JSON.parse(comments);
            this.setState({comments:comments});
        }
    }

    _saveComments(comments){
        //存储pinglunshuju 
        localStorage.setItem('comments',JSON.stringify(comments));
        console.log(JSON.stringify(comments));
    }

    handleSubmitComment(comment,e){
        // 获取并更新评论数据
        if (!comment) {
            return;
        }
        if (!comment.username) {
            return alert("请输入用户名");
        }
        if (!comment.content) {
            return alert("请输入评论内容");
        }
        let comments=this.state.comments;//这样是为了防止setState异步操作会导致少存储最新的变化
        comments.push(comment);
        this.setState({comments})
        this._saveComments(comments);
    }

    handleDeleteComment(index){
        //最终的删除评论操作
        let comments=this.state.comments;
        comments.splice(index,1);
        this.setState({comments});
        this._saveComments(comments);
        console.log(index);
    }

    render() {
        return (
            <div className="wrapper">
                <CommentInput 
                    onSubmit={this.handleSubmitComment.bind(this)}
                />
                <CommentList comments={this.state.comments} 
                    onDeleteComment={this.handleDeleteComment.bind(this)}
                />
            </div>
        );
    }
}

export default CommentApp