export default ({
  title,
  children,
  icon,
  isDark,
}: {
  title: string;
  children: any;
  icon?: string;
  isDark?: boolean;
}) => (
  <div
    className={
      "card mb-2 " + (isDark ? "bg-dark text-light" : "bg-light text-dark")
    }
  >
    <div className={"card-header " + (isDark ? "bg-dark" : "bg-light")}>
      {icon && <img width="33" src={process.env.PUBLIC_URL + icon} alt="" />}
      <span className={icon && "ms-2"}>{title}</span>
    </div>
    <div className="card-body p-0">{children}</div>
  </div>
);
