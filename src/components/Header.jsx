function Header({ site }) {
  return (
    <div className="headerContainer">
      <div className="siteName">
        <h1>{site.name}</h1>
      </div>
      <div className="sitePhrase">
        <h2>{site.description}</h2>
      </div>
    </div>
  );
}

export default Header;
