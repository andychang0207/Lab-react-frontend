import React,{Component} from 'react';
import styled from 'styled-components';
import {Card} from 'antd';
import MessageItem from './MessageItem';

export default class OutputBox extends Component{
    constructor(props){
        super(props);
        this.props = props;
    }
    render(){
        const {messagebox} = this.props;
        return(
        <Card title="留言板">
            {
                messagebox.map((element,index)=>{
                    return <MessageItem key={index} id={index} name={element.name} time={element.time} text={element.text}/>
                })
            }
        </Card>)
    }
}
