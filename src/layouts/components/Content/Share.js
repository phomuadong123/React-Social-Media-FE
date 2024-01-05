
import classNames from 'classnames/bind';
import styles from './Content.module.scss'
import Button from '~/components/Button'
import { useState } from 'react';

const cx = classNames.bind(styles) 


function Share() {

    const [visible, setVisible] = useState(false)
  
    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300){
        setVisible(true)
        } 
        else if (scrolled <= 300){
        setVisible(false)
        }
    };
    
    const scrollToTop = () =>{
        window.scrollTo({
        top: 0, 
        behavior: 'smooth'
        /* you can also use 'auto' behaviour
            in place of 'smooth' */
        });
    };
  
    window.addEventListener('scroll', toggleVisible);

    return ( 
        <>
            <div className={cx('share')}>
                <div  className={cx('shareWrapper')}>
                    <div  className={cx('shareTop')}>
                    <img  className={cx('shareProfileImg')} src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/05a772f1a1c750be9f320a405b782eff.jpeg?x-expires=1688475600&x-signature=h7kbyO6ympIL8gHGNM067DZbBbs%3D" alt="" />
                    <input
                        placeholder="Bạn đang nghĩ gì thế?"
                        className={cx('shareInput')}
                    />
                    </div>
                    <hr  className={cx('shareHr')}/>
                    <div className={cx('shareBottom')}>
                        <div  className={cx('shareOptions')}> 
                            <div className={cx('shareOption')}>
                                <img class="x1b0d499 xl1xv1r" src="https://static.xx.fbcdn.net/rsrc.php/v3/y7/r/Ivw7nhRtXyo.png" alt="" ></img>
                                <span  className={cx('shareOptionText')}> Ảnh/video </span>
                            </div>
                            <div  className={cx('shareOption')}>
                                <img class="x1b0d499 xl1xv1r" src="https://static.xx.fbcdn.net/rsrc.php/v3/yq/r/b37mHA1PjfK.png" alt=""></img>
                                <span  className={cx('shareOptionText')}>Gắn thẻ</span>
                            </div>
                            <div  className={cx('shareOption')}>
                            <img class="x1b0d499 xl1xv1r" src="https://static.xx.fbcdn.net/rsrc.php/v3/y1/r/8zlaieBcZ72.png" alt=""></img>
                                <span  className={cx('shareOptionText')}>Vị trí</span>
                            </div>
                            <div  className={cx('shareOption')}>
                                <img class="x1b0d499 xl1xv1r" src="https://static.xx.fbcdn.net/rsrc.php/v3/yd/r/Y4mYLVOhTwq.png" alt="" ></img>
                                <span  className={cx('shareOptionText')}>Cảm xúc/hoạt động</span>
                            </div>
                        </div>
                        <Button outline>Chia sẻ</Button>
                        <Button  className={cx('return-home')} 
                            style={{display: visible ? 'inline' : 'none'}}
                            onClick={scrollToTop} 
                        >
                            <svg width="16" data-e2e="" height="16" viewBox="0 0 48 48" fill="#FFF" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M22.1086 20.3412C23.1028 19.2196 24.8972 19.2196 25.8914 20.3412L42.8955 39.5236C44.2806 41.0861 43.1324 43.5 41.004 43.5L6.99596 43.5C4.86764 43.5 3.71945 41.0861 5.10454 39.5235L22.1086 20.3412Z"></path><path d="M4.5 7.5C4.5 5.84315 5.84315 4.5 7.5 4.5L40.5 4.5C42.1569 4.5 43.5 5.84315 43.5 7.5C43.5 9.15685 42.1569 10.5 40.5 10.5L7.5 10.5C5.84315 10.5 4.5 9.15685 4.5 7.5Z"></path></svg>
                        </Button>
                    </div>
                </div>
                </div>
        </>
     );
}

export default Share;