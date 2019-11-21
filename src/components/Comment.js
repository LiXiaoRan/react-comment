import React, { Component } from "react";
import PropTypes from 'prop-types'

class Comment extends Component {
    //验证props的类型,必须为object
    static propTypes={
        comment:PropTypes.object.isRequired, //isRequired是强制这个组件必须传入这个参数，在没设置defaultProps的情况下
        onDeleteComment:PropTypes.func,
        index:PropTypes.number
    }

    componentWillMount(){
        this._updateTimeString();
        this._timer=setInterval(() => {
            this._updateTimeString();
        }, 5000);

        // this._timer = setInterval(this._updateTimeString.bind(this),5000)
    }

    _updateTimeString(){
        //更新评论的时间显示
        let comment=this.props.comment;
        let duration=(+Date.now()-comment.createdTime)/1000;
        this.setState({
            timeString:duration>60?`${Math.round(duration/60)}分钟前`:`${Math.max(duration,1) }秒前`
        })
    }

    handleDeleteComment(){
        //将要删除的评论index转发到父级comment list中。
        if (this.props.onDeleteComment) {
            this.props.onDeleteComment(this.props.index)
        }
    }

    _getProcessedContent(content){
        //处理`code`内容
     return content
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;")
      .replace(/`([\S\s]+?)`/g, '<code>$1</code>')
    }

    render() {
        return (
            <div className="comment">
                <div className="comment-user">
                    <span>{this.props.comment.username}</span>：
                </div>
                <p dangerouslySetInnerHTML={{__html:this._getProcessedContent(this.props.comment.content)}}/>

                <span className='comment-createdtime'>
                    {this.state.timeString}
                </span>
                <span className='comment-delete' onClick={this.handleDeleteComment.bind(this)}>删除</span>
            </div>
        );
    }

    componentWillUnmount(){
        if (this._timer) {
            clearInterval(this._timer)
        }
    }
}

export default Comment
