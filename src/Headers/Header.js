import React from 'react';
import styles from './Header.module.css';
import NavMenu from './NavMenus/NavMenu';
import {Switch} from 'antd';
import 'antd/dist/antd.css';

class Header extends React.Component {

    state = {
        isChecked: false
    };

    render() {
        let isChecked = this.props.currentLocal === 'en';
        return (
            <div className={styles.header}>
                <div className={styles.container}>
                    <div className={styles.wrapper}>
                        <Switch checked={isChecked} onChange={this.props.changeLocal} checkedChildren="EN" unCheckedChildren="RU" />
                        <NavMenu/>
                    </div>
                </div>
            </div>
        )
    };
}

export default Header;
