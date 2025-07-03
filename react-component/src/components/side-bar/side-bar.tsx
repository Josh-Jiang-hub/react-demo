import { useRef, type FC, type ReactNode } from 'react';
import classNames from 'classnames';
import './index.css';

type SidebarProps = {
  indexItems: {
    index: string;
    brief: ReactNode;
  }[];
  activeIndex: string | null;
  onActive: (index: string) => void;
};

export const Sidebar: FC<SidebarProps> = (props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  return (
    <div
      className="sidebar-container"
      onTouchMove={(e) => {
        const { clientY } = e.touches[0];
        const target = document.elementFromPoint(
          containerRef.current?.offsetLeft || 0,
          clientY
        ) as HTMLElement;
        console.log(target);
        if (!target) {
          return;
        }
        const index = target.dataset['index'];
        if (index) {
          props.onActive(index);
        }
      }}
      ref={containerRef}
    >
      {props.indexItems.map(({ index, brief }) => {
        const active = index === props.activeIndex;
        return (
          <div
            className="sidebar-row"
            data-index={index}
            key={index}
            onMouseDown={() => {
              props.onActive(index);
            }}
            onTouchStart={() => {
              props.onActive(index);
            }}
          >
            <div
              className={classNames({
                [`index-bar-item-active`]: active,
              })}
              data-index={index}
            >
              {brief}
            </div>
          </div>
        );
      })}
    </div>
  );
};
