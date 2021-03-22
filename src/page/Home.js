import React,{Component} from 'react';
import { Card, Avatar ,Carousel} from 'antd';

const { Meta } = Card;
const contentStyle = {
    width:'100%',
    height:'100%',
    lineHeight: '160px',
    background: '#364d79',
  };
export default class Home extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <div style={{width:500,marginRight:'10px',float:'left'}}>
                <Card
                style={{ width: 450 ,height: 500,marginTop:40}}
                cover={
                    <img
                        alt="example"
                        src="./e08.jpg"
                    />
                }
                >
                    <Meta
                    avatar={<Avatar size={84} src="./tray_large.png" />}
                    title="張煒晟"
                    description={[<div>
                        <p>我是台灣大學資工所的學生</p>
                        <p style={{marginTop:-16}}>這是我的網路攻防作業demo</p>
                        </div>]}
                    />
                </Card>
                </div>
                <div style={{width:600,marginTop:100,float:'left'}}>
                <Carousel autoplay>
                    <div style={{width:'600px',height:'336px',background:'#364d79'}}>
                    <img style={{width:'600px', height:'336px'}} src="./ah.jpeg"/>
                    </div>
                    <div style={{width:'600px',height:'336px',background:'#364d79'}}>
                    <img style={{width:'600px', height:'336px'}} src="./cssmeme.jpg" />
                    </div>
                    <div style={{width:'600px',height:'336px',background:'#364d79'}}>
                    <img style={{width:'600px', height:'336px'}} src="./ntu.jpeg" />
                    </div>
                </Carousel>
                </div>
            </div>
        )
    }
}