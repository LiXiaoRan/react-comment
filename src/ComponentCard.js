import React, { Component } from 'react'

class ComponentCard extends Component{
    
    
    render() {
        return (
            <div className='card'>
                <div className='card-content'>
                    {
                        this.props.children //获取ComponentCardContent标签的内嵌结构
                    }
                </div>
            </div>
        );
    }
}
export default ComponentCard