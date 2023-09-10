import { useEffect, useRef, useState } from "react";
import './../assets/styles/accordian.css'

function Accordion(props) {
  const { summary, children } = props;
  const contentRef = useRef();
  const [contentHeight, setContentHeight] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setContentHeight(contentRef.current ? contentRef.current.scrollHeight : 0);
  }, [children]);

  return (
    <div className="accordion">
      <div onClick={() => setIsOpen(!isOpen)} className="accordion-header">
        <span>{summary}</span>
        <div className={isOpen ? "accordion-arrow open" : "accordion-arrow closed"}></div>
      </div>
      <div className="accordion-content-wrapper" style={{ maxHeight: isOpen ? `${contentHeight}px` : "0px", opacity: isOpen ? 1 : 0 }}>
        <div ref={contentRef} className="accordion-content">{children}</div>
      </div>
    </div>
  );
}

export default Accordion;
