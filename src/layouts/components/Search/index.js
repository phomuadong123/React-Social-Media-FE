import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountsItem from '~/components/AccountsItem';
import { useEffect, useState,useRef } from 'react';
import classNames from 'classnames/bind';
import styles from './Search.module.scss'
import { useDebounce } from '~/hooks';

const cx = classNames.bind(styles)

function Search() {
    const [searchValue,setSeacrValue] = useState('')
    const [searchResult,setsearchResult] = useState([])
    const [showResult,setShowResult] = useState(true)
    const [loading,setLoading] = useState(false)

    const inputRef = useRef()

    const debounced = useDebounce(searchValue,1000)

    useEffect(() => {
        if(!debounced.trim()) {
            setsearchResult([])
            return;
        }
        
       

        setLoading(true)
        fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(debounced)}&type=less`)
        .then(res => res.json())
        .then((res) => {
           setsearchResult(res.data);
           setLoading(false)
        })
        .catch(() => {
            setLoading(false)
        })
    },[debounced])

    const handleHideResult = () => {
        setShowResult(false)
    }
    
    return ( 
        <Tippy
                interactive
                visible = {showResult && searchResult.length > 0}
                render={attrs => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <div className={cx('search-result')} >
                                    <h5 className={cx('search-title')}>
                                        Bạn có thể yêu thích</h5>
                                   {searchResult.map((result) => (
                                        <AccountsItem 
                                            key={result.id} 
                                            data = {result}
                                            className={cx('search-title')}
                                        ></AccountsItem>
                                    ))}
                                    
                                </div>
                            </PopperWrapper>
                        </div>
                  )}
                  onClickOutside={handleHideResult}
             
             >
                    <div className={cx('search')} >
                        <input 
                            ref={inputRef}
                            value={searchValue}
                            placeholder='Tìm kiếm'
                            onChange={(e) => setSeacrValue(e.target.value)}
                            onFocus={() => setShowResult(true)}
                        ></input>
                        {!!searchValue && !loading && (
                            <button className={cx('clear')} onClick={() => {
                                setsearchResult([])
                                inputRef.current.focus()
                                setSeacrValue('')
                            }}>
                                {/* close */}
                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"/></svg>
                            </button>
                            )
                        }
                        {/* loading */}
                        {!!loading && <svg className={cx('loading')}  xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z"/></svg>}
                     
                            <button className={cx('search-btn')}>
                                {/* search */}
                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
                            </button>
                        
                    </div>
             </Tippy>

     );
}

export default Search;