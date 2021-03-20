import React,{Component} from 'react';
import styled from 'styled-components';
import {Card} from 'antd';

export default class MessageItem extends Component{
    constructor(props){
        super(props);
        this.props = props;
    }
    render(){
        const {id,name,text,time} = this.props;
        return(
            <Card type='inner' id={id} title={name} style={{ width: '70%', marginTop: 16, textAlign:'left',margin:'0 auto'}}>
                <Info><span>{name}</span> 在 {time} 發佈了這則訊息</Info>
                <p>{text}</p>
            </Card>
        )
    }
}

const Info = styled.p`
    color: #666;
    font-size: 14px;

    span {
        color: #00A0E9;
        font-weight: bold;
    }
`;