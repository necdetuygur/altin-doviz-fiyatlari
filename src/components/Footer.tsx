import GitHubButton from "react-github-btn";

export default () => (
  <div style={{ height: "50px" }}>
    <footer className="border-secondary">
      <span className="float-end">
        <GitHubButton
          href="https://github.com/necdetuygur/altin-doviz-fiyatlari"
          data-color-scheme="no-preference: dark; light: dark; dark: dark;"
          data-size="large"
        >
          GitHub
        </GitHubButton>
      </span>
    </footer>
  </div>
);
