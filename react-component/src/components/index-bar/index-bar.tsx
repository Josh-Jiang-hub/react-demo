import { useRef, useState } from 'react';
import { Sidebar } from '../side-bar/side-bar';

const data = [
  { index: 'a', brief: 'a' },
  { index: 'b', brief: 'b' },
  { index: 'c', brief: 'c' },
  { index: 'd', brief: 'd' },
  { index: 'e', brief: 'e' },
  { index: 'f', brief: 'f' },
  { index: 'g', brief: 'g' },
  { index: 'h', brief: 'h' },
  { index: 'i', brief: 'i' },
  { index: 'j', brief: 'j' },
  { index: 'k', brief: 'k' },
  { index: 'l', brief: 'l' },
  { index: 'm', brief: 'm' },
  { index: 'n', brief: 'n' },
  { index: 'o', brief: 'o' },
  { index: 'p', brief: 'p' },
  { index: 'q', brief: 'q' },
  { index: 'r', brief: 'r' },
  { index: 's', brief: 's' },
  { index: 't', brief: 't' },
];

export default function IndexBar() {
  const [activeIndex, setActiveIndex] = useState<string>('a');
  const bodyRef = useRef<HTMLDivElement>(null);
  function scrollTo(index: string) {
    const body = bodyRef.current;
    if (!body) {
      return;
    }

    const children = body.children;
    for (let i = 0; i < children.length; i++) {
      const panel = children.item(i) as HTMLElement;
      if (!panel) {
        continue;
      }
      const panelIndex = panel.dataset['index'];
      if (panelIndex === index) {
        body.scrollTop = panel.offsetTop;
        setActiveIndex(index);
        return;
      }
    }
  }

  const checkActiveIndex = () => {
    const body = bodyRef.current;
    if (!body) {
      return;
    }
    const scrollTop = body.scrollTop;

    const elements = body.getElementsByClassName(`index-bar-anchor`);
    for (let i = 0; i < elements.length; i++) {
      const panel = elements.item(i) as HTMLElement;
      if (!panel) {
        continue;
      }
      const panelIndex = panel.dataset['index'];
      if (!panelIndex) {
        continue;
      }
      if (panel.offsetTop + panel.clientHeight - 56 > scrollTop) {
        setActiveIndex(panelIndex);
        return;
      }
    }
  };

  return (
    <div
      style={{
        width: '100%',
        position: 'relative',
        height: '100vh',
        overflow: 'hidden',
      }}
    >
      {/* <div
        onScroll={checkActiveIndex}
        ref={bodyRef}
        style={{
          overflow: 'auto',
          width: '100%',
          height: '100%',
          scrollbarWidth: 'none',
        }}
      >
        {data?.map((item) => (
          <div
            className="index-bar-anchor"
            data-index={item.index}
            key={item.index}
            style={{
              width: '100%',
              height: '800px',
              border: '1px solid red',
              marginBottom: '10px',
              boxSizing: 'border-box',
            }}
          >
            <p className="index-bar-anchor-title">{item.brief}</p>
            <div />
          </div>
        ))}
      </div> */}
      <Sidebar
        activeIndex={activeIndex}
        indexItems={data}
        onActive={(index) => {
          setActiveIndex(index);
          scrollTo(index);
        }}
      />
    </div>
  );
}
