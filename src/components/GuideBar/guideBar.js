import React, { PureComponent } from 'react';
import './guideBar.scss';

class GuideBar extends PureComponent {
  render() {
    const { currentStep, stepNames } = this.props;
    const spanNum = 100 / stepNames.length;
    return (
      <div className='guideBar'>
        <div className='stepBox'>
          <div style={{ display: 'flex' }}>
            {stepNames.map((item, index) => {
              return (
                <div style={{ width: `${spanNum}%` }} className='flexCenter' key={item}>
                  <div
                    className={
                      index === stepNames.length - 1
                        ? 'tabStepEnd'
                        : currentStep > index + 1 ? 'tabStepOn' : 'tabStep'
                    }
                  >
                    <div
                      className={currentStep >= index + 1 ? 'stepPointOn' : 'stepPointOff'}
                    >
                      {index + 1}
                    </div>
                    <div style={{ color: currentStep >= index + 1 ? '' : '#ccc' }}>
                      &nbsp;&nbsp;{item}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

/*
* currentStep  number   当前步骤下标
* stepNames    array    所有步骤的名字
* */

export default GuideBar;
