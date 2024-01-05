import classNames from "classnames/bind";
import styles from "./Menu.module.scss";
import Tippy from "@tippyjs/react/headless";
import { Wrapper as PopperWrapper } from "~/components/Popper";
import MenuItem from "./MenuItem";
import HeaderLanguage from "./HeaderLanguage";
import { useState } from "react";

const cx = classNames.bind(styles);

function Menu({ children, items = [],hideOnClick=false }) {
  const [history, setHistory] = useState([{ data: items }]);

  const current = history[history.length - 1];

  const renderItem = () => {
    return current.data.map((item, index) => {
      const isParent = !!item.children;

      return (
        <MenuItem
          key={index}
          data={item}
          onClick={() => {
            if (isParent) {
              console.log(item.children);
              setHistory((prev) => [...prev, item.children]);
            }
          }}
        ></MenuItem>
      );
    });
  };

  return (
    <Tippy

      delay={[0, 700]}
      hideOnClick={hideOnClick}
      interactive
      placement="bottom-end"
      render={(attrs) => (
        <div className={cx("menu-item")} tabIndex="-1" {...attrs}>
          <PopperWrapper>
            {history.length > 1 && (
              <HeaderLanguage
                title={"ngôn ngữ"}
                onBack={() => {
                  setHistory((prev) => prev.slice(0, prev.length - 1));
                }}
              ></HeaderLanguage>
            )}
            <div className={cx("menu-scroll")}>
                {renderItem()}
            </div>
          </PopperWrapper>
        </div>
      )}
      onHide={() => setHistory((prev) => prev.slice(0, 1))}
    >
      <button className={cx("more-btn")}>{children}</button>
    </Tippy>
  );
}

export default Menu;
