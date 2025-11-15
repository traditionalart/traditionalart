import {
  useState,
  useRef,
  useEffect,
  forwardRef,
  useImperativeHandle,
} from "react";
import "./Collapsible.css";

const Collapsible = forwardRef(function Collapsible({ title, children }, ref) {
  const [open, setOpen] = useState(false);
  const [rot, setRot] = useState(0);
  const contentRef = useRef(null);
  const headerRef = useRef();

  const toggle = () => {
    setOpen((p) => !p);
    setRot((p) => p - 180);
  };

  useImperativeHandle(ref, () => ({
    open: () => {
      if (!open) toggle();
    },
    scrollTo: () => {
      headerRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    },
  }));

  useEffect(() => {
    const content = contentRef.current;
    if (open) {
      content.style.height = content.scrollHeight + "px";
    } else {
      content.style.height = "0px";
    }
  }, [open]);

  return (
    <div className="collapsible" dir="rtl">
      <div className="collapsible-header" ref={headerRef} onClick={toggle}>
        <svg
          className={`ying ${open ? "open" : ""}`}
          style={{ transform: `rotate(${rot}deg)` }}
          viewBox="0 0 512 512"
        >
          <path d="M257.65.01c-.55-.01-1.1-.01-1.65-.01s-1.1,0-1.65.01c-69.93.89-126.35,57.85-126.35,127.99s57.31,128,128,128,128,57.31,128,128-56.42,127.1-126.35,127.99c140.62-.88,254.35-115.16,254.35-255.99S398.27.89,257.65.01ZM224,128c0-17.67,14.33-32,32-32s32,14.33,32,32-14.33,32-32,32-32-14.33-32-32Z" />
        </svg>
        <h2 className="title">{title}</h2>
      </div>

      <div ref={contentRef} className="collapsible-content">
        {children}
      </div>
    </div>
  );
});

export default Collapsible;
