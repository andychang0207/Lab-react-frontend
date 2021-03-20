import React,{Component} from 'react';
import {connect} from 'react-redux'
import styled from 'styled-components';
import {addMessage} from '../redux/action/messsageaction';
import InputBox from '../component/Inputbox';
import OutputBox from '../component/Outputbox';
import {Divider} from 'antd';

const mapStateToProps = state => ({
    messagebox: state.messagebox
})

const mapDispatchToProps = dispatch =>({
    addMessage:(e)=>{ dispatch(addMessage(e)); }
})

class MessageArea extends Component{
    constructor(props){
        super(props);
        this.props = props;
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleSubmit(e) {
        const {addMessage} = this.props;
        addMessage(e);
    }
    render(){
        const {messagebox} = this.props;
        return (<div>
            <h1>React chat board</h1>
            <InputBox onSubmitMessage={this.handleSubmit} />
            <Divider style={{background:'black'}}/>
            <OutputBox messagebox={messagebox} />
        </div>)
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MessageArea);