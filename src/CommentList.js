import React, { Component } from "react";
import Comment from "./Comment"
import PropTypes from 'prop-types'
class CommentList extends Component {

  static propTypes={
    comments:PropTypes.array,
    onDeleteComment:PropTypes.func
  }

  static defaultProps={
    comments:[]
  }
    
  handleDeleteComment(index){
    //转发comment中的index到CommentApp中
    if (this.props.onDeleteComment) {
      this.props.onDeleteComment(index);
    }
  }

  render() {
    
    return <div>
        {this.props.comments.map((comment,i)=>{return <Comment comment={comment} key={i} index={i} onDeleteComment={this.handleDeleteComment.bind(this)}/>})}
    </div>;
  }
}

export default CommentList;
