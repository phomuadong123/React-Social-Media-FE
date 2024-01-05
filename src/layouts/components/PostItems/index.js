import "./Posts.module.scss";
import { useState } from "react";
import { Users } from "./Data/Data";
import classNames from 'classnames/bind';
import styles from './Content.module.scss'


const cx = classNames.bind(styles) 


function Posts({post}) {
        const [like,setLike] = useState(post.like)
        const [isLiked,setIsLiked] = useState(false)
      
        const likeHandler =()=>{
          setLike(isLiked ? like-1 : like+1)
          setIsLiked(!isLiked)
        }

        return (
            <div  className={cx('post')}>
                <div className={cx('postWrapper')}>
                <div className={cx('postTop')}>
                    <div  className={cx('postTopLeft')}>
                    <img
                        className={cx('postProfileImg')}
                        src={Users.filter((u) => u.id === post?.userId)[0].profilePicture}
                        alt=""
                    />
                    <span className={cx('postUsername')}>
                        {Users.filter((u) => u.id === post?.userId)[0].username}
                    </span>
                    <span className={cx('postDate')}>{post.date}</span>
                    </div>
                    <div className={cx('postTopRight')}>
                    <MoreVert />
                    </div>
                </div>
                <div className={cx('postCenter')}>
                    <span className={cx('postText')}>{post?.desc}</span>
                    <img className={cx('postImg')} src={post.photo} alt="" />
                </div>
                <div className={cx('postBottom')}>
                    <div className={cx('postBottomLeft')}>
                    <img className={cx('likeIcon')} src="assets/like.png" onClick={likeHandler} alt="" />
                    <img className={cx('likeIcon')} src="assets/heart.png" onClick={likeHandler} alt="" />
                    <span className={cx('postLikeCounter')}>{like} people like it</span>
                    </div>
                    <div className={cx('postBottomRight')}>
                    <span className={cx('postCommentText')}>{post.comment} comments</span>
                    </div>
                </div>
                </div>
            </div>
        );
}

export default Posts;