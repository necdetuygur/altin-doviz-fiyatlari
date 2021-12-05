export default ({
  title,
  children,
  icon,
}: {
  title: string;
  children: any;
  icon: string;
}) => (
  <div className="card bg-dark text-white mb-2">
    <div className="card-header">
      <img width="33" src={process.env.PUBLIC_URL + icon} alt="" />
      &nbsp;
      <span className="ms-1">{title}</span>
    </div>
    <div className="card-body p-0">{children}</div>
  </div>
);