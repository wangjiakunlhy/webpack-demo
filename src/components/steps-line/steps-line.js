import React, {Component} from 'react';
import './steps-line.scss'

class StepsLine extends Component {

    render() {
        const {steps, currentKey, onePop, children} = this.props;
        const num = 100 / steps.length;
        const length = steps.length;
        const showChildren = children.filter(item => {
            if(item.props.stepKey){
                return true;
            }else{
                return false;
            }
        })
        if(currentKey && currentKey <= length && currentKey >= 1){
            return (
                <div>
                    <div style={{position:'relative',height: 120}}>
                        <div className='progress-tag'>
                            {
                                steps.map((item, index) => {
                                    let curIndex = index + 1;
                                    let classStyle = currentKey < curIndex ? 'text-title' :
                                        currentKey === curIndex ? 'text-title-current' : 'text-title-on';
                                    let right = -item.title.length * (classStyle === 'text-title-current' ? 9 : 6);
                                    return (
                                        <div style={{width: `${num}%`, zIndex: steps.length - index}} className='bg-line-off'>
                                            {<span className={classStyle} style={{right: right}}>{item.title}</span>}
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className='progress-tag'>
                            {
                                steps.map((item, index) => {
                                    let curIndex = index + 1;
                                    let width = curIndex > currentKey ? 0 : num;
                                    let isHidePop = onePop && curIndex <= currentKey ? {display: 'none'} : {opacity: 1};
                                    isHidePop = curIndex === steps.length ? {opacity: 1} : isHidePop;
                                    return (
                                        <div style={{width: `${width}%`, zIndex: length - index}} className='bg-line-on'>
                                            {
                                                onePop ? <span className='text-pop'
                                                               style={isHidePop}>{currentKey}/{length}</span> :
                                                    <span className='text-pop'
                                                          style={isHidePop}>{curIndex}/{length}</span>
                                            }
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div>
                        {showChildren[currentKey-1]}
                    </div>
                </div>
            )
        }else{
            return (
                <p>currentKey值设置错误</p>
            )
        }
    }
}

StepsLine.Step = (props) => {
    const {children} = props;
    return (<div>{children}</div>);
}

/**
 * StepsLine中属性：
 *
 * steps       步骤数组，以对象形式存放，格式 [{title:'xxxxx'}]
 * currentKey, 当前是第几步，数字，从1开始
 * onePop,     是否仅显示一个气泡
 * children    每个步骤显示的内容
 */

/**
 * Step中属性：
 *
 * stepKey 任意值，必须设置，否则不显示
 */

export default StepsLine;