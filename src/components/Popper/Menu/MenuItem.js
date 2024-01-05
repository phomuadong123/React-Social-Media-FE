import Button from "~/components/Button";
import classNames from 'classnames/bind';
import styles from './Menu.module.scss'

const cx = classNames.bind(styles)

function MenuItem({data, onClick}) {

    const classes = cx('menu-content',{
        separate: data.separate
    })

    return ( 
        <Button
            className={classes} 
            to = {data.to}
            onClick={onClick}
        >
            <span className={cx('menu-icon')} >
                {data.icon}
            </span>
            <span >
                {data.title}
            </span>
        </Button>
     );
}

export default MenuItem;