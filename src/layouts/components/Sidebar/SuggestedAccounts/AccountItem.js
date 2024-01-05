import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss'


const cx = classNames.bind(styles) 


function AccountItem({data}) {
   


    
    return ( 
        <div className={cx('account-wrapper')}>
            <img
                className={cx('avatar')}
                src={data.profilePicture}
                alt=''
            ></img>
            <div className={cx('info')}>
                <div className={cx('name')}>               
                    <div>{data.username}</div>
                    <svg className={cx('check')} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/></svg>
                </div>
                <div className={cx('username')}>{data.username}</div>
            </div>
                                
        </div>
     );
}

export default AccountItem;


