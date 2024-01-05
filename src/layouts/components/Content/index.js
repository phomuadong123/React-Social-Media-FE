import Share from './Share';
import classNames from 'classnames/bind';
import styles from './Content.module.scss'
import { Posts } from "~/layouts/components/Data/Data";
import Post from  './Post';

const cx = classNames.bind(styles) 


function Content() {
    return ( 
        <div className={cx('wrapper-post')}>
            <Share></Share>
            {Posts.map((p) => (
                <Post key={p.id} post={p} />
                ))}
        </div>
     );
}

export default Content;