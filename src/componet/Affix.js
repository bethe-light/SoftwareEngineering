import React from 'react';
import { Affix } from 'antd';
import App from '../App';
class Demo extends React.Component {
    state = {
        top: 10,
    };
    render() {
        return (
            <div>
                <Affix style={{position:'absolute', left: 10,top: 10}}>
                    <App/>
                </Affix>
            </div>
        );
    }
}
export default Demo;