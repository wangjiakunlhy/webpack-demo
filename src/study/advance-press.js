import React, {Component} from 'react';
import StepsLine from '../components/steps-line/steps-line'
const Step = StepsLine.Step;
import GuideBar from '../components/GuideBar/guideBar'

class ProgressTag extends Component{
    constructor(props){
        super(props);
        this.state = {
            steps:[
                {title:'手机验证',},
                {title:'设置密码',},
                {title:'选择国家/地区',},
                {title:'证件上传',},
                {title:'完善个人信息',},
                {title:'开户完成',},
            ],
            currentKey: 2,
            onePop: false,
        }
    }

    onChangeCurrentKey = (type) => {
        let { currentKey } = this.state;
        if(type === 'next'){
            currentKey++;
            this.setState({currentKey})
        }else if(type === 'pre'){
            currentKey--;
            this.setState({currentKey})
        }else if(type === 'pop'){
            this.setState({onePop: !this.state.onePop})
        }
    }

    render(){
        const {steps, currentKey, onePop} = this.state;
        const num = 100 / steps.length;
        return(
            <div>
                <StepsLine steps={steps} currentKey={currentKey} onePop={onePop}>
                    <Step stepKey={1}>
                        <div style={{width:'100%',height:300,background:'red'}}>
                            <h1>1</h1>
                        </div>
                    </Step>
                    <Step stepKey={2}>
                        <div style={{width:'100%',height:300,background:'green'}}>
                            <h1>2</h1>
                        </div>
                    </Step>
                    <Step stepKey={3}>
                        <div style={{width:'100%',height:300,background:'blue'}}>
                            <h1>3</h1>
                        </div>
                    </Step>
                    <Step stepKey={4}>
                        <div style={{width:'100%',height:300,background:'orange'}}>
                            <h1>4</h1>
                        </div>
                    </Step>
                    <Step stepKey={5}>
                        <div style={{width:'100%',height:300,background:'#cc00ff'}}>
                            <h1>5</h1>
                        </div>
                    </Step>
                    <Step stepKey={6}>
                        <div style={{width:'100%',height:300,background:'#556688'}}>
                            <h1>6</h1>
                        </div>
                    </Step>
                </StepsLine>
                <GuideBar currentStep={currentKey} stepNames={steps.map(item => {return item.title})}/>
                <div>
                    <button disabled={currentKey === 1} onClick={()=>this.onChangeCurrentKey('pre')}>上一步</button>
                    <button disabled={currentKey === steps.length} onClick={()=>this.onChangeCurrentKey('next')}>下一步</button>
                    <button onClick={()=>this.onChangeCurrentKey('pop')}>只有一个气泡</button>
                </div>
            </div>
        )
    }
}

export default ProgressTag;