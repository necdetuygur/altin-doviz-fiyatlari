export default ({
  title,
  children,
  icon,
}: {
  title: string;
  children: any;
  icon: string;
}) => (
  <div className="card mb-2">
    <div className="card-header">
      <img width="33" src={process.env.PUBLIC_URL + icon} alt="" />
      &nbsp;
      <span className="ms-2">{title}</span>
    </div>
    <div className="card-body p-1">{children}</div>
  </div>
);
