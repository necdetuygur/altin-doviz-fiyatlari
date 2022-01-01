import onCapture from "../capture";
import React, { useEffect, useRef } from "react";

export default ({
  title,
  children,
  icon,
  isDark,
  header,
}: {
  title: string;
  children: any;
  icon?: string;
  isDark?: boolean;
  header?: any;
}) => {
  const thisElement = useRef(null);

  return (
    <div
      className={
        "card mb-2 " + (isDark ? "bg-dark text-light" : "bg-light text-dark")
      }
      ref={thisElement}
    >
      <div className={"card-header " + (isDark ? "bg-dark" : "bg-light")}>
        {icon && <img width="33" src={process.env.PUBLIC_URL + icon} alt="" />}
        <span className={icon && "ms-2"}>{title}</span>
        <div className="float-end">
          {header}
          <button
            className="m-1 btn btn-outline-primary btn-sm"
            onClick={() => {
              const el = thisElement.current;
              if (!el) {
                throw new Error("el wasn't found");
              }
              onCapture(el);
            }}
          >
            <i style={{ width: "16px" }} className="fa fa-share-alt"></i>
          </button>
        </div>
      </div>
      <div className={"card-body p-0 " + (isDark ? "bg-dark" : "bg-light")}>
        {children}
      </div>
    </div>
  );
};
