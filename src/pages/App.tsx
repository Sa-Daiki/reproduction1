const App = () => {
  return (
    <>
      <header className="content-title wrapper">
        <h1>Profile</h1>
        <nav className="header-list">
          <ul>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Bicycle</a>
            </li>
          </ul>
        </nav>
      </header>

      <main className="">
        <div className="main-visual">
          <img src="/mainvisual.jpg" />
        </div>

        <section className="about wrapper">
          <h2 className="section-title">About</h2>
          <div className="about-content">
            <img src="/public/about.jpg" />
            <div className="content-text">
              <h3 className="content-title">CORSOLA</h3>
              <p>
                テキストテキストテキストテキストテキストテキストテキスト <br />
                テキストテキストテキストテキストテキストテキストテキスト <br />
                テキストテキストテキストテキストテキストテキストテキスト
              </p>
            </div>
          </div>
        </section>

        <section className="bicycle wrapper">
          <h2 className="section-title">Bicycle</h2>
          <ul className="bicycle-contents">
            <li>
              <img src="/public/bicycle1.jpg" />
              <h3>タイトルタイトル</h3>
              <p>テキストテキストテキスト</p>
            </li>
            <li>
              <img src="/public/bicycle2.jpg" />
              <h3>タイトルタイトル</h3>
              <p>テキストテキストテキスト</p>
            </li>
            <li>
              <img src="/public/bicycle3.jpg" />
              <h3>タイトルタイトル</h3>
              <p>テキストテキストテキスト</p>
            </li>
          </ul>
        </section>

        <footer>
          <p>&copy; 2020 Profile</p>
        </footer>
      </main>
    </>
  );
};

export default App;
