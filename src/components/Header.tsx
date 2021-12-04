export default ({ tarih }: { tarih: string }) => (
  <div style={{ height: "33px" }}>
    <header className="text-center bg-dark text-light fixed-top border-secondary border-bottom p-1">
      {tarih}
    </header>
  </div>
);
