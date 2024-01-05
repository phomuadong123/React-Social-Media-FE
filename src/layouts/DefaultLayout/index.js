import Header from "~/layouts/components/Header";
import Sidebar from "~/layouts/components/Sidebar";
import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss'
import Content from "~/layouts/components/Content";




const cx = classNames.bind(styles)

function DefaultLayout ({children}) {
    return ( 
    <div className={cx('wrapper')}>
        <Header></Header>
        <div  className={cx('container')}>
            <Sidebar></Sidebar>
            <div  className={cx('content')}>
                <Content></Content>
                
            </div>
        </div>
    </div> );
}

export default DefaultLayout ;