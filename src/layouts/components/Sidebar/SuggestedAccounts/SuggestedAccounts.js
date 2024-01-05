import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss'
import AccountItem from './AccountItem';
import { Users } from "~/layouts/components/Data/Data";
import { Posts } from "~/layouts/components/Data/Data";

const cx = classNames.bind(styles) 


function SuggestedAccounts({label}) {
   


    
    return ( 
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>
               
              {Users.map((p) => (
                <AccountItem  data={p} />
              ))}
              
            <p className={cx('see-more')}>Xem thêm</p> 


        </div>
     );
}

export default SuggestedAccounts;