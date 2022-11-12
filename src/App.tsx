const App = () => {
  return (
    <>
      <header className="wrapper header">
        <h1 className="site-title">Profile</h1>
        <nav>
          <ul className="header-nav">
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Bicycle</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <div className="mainvisual">
          <img src="/mainvisual.jpg" />
        </div>

        <section className="wrapper">
          <h2 className="section-title">About</h2>
          <div className="content">
            <img src="/about.jpg" />
            <div className="text">
              <h3 className="content-title">KAKERU MIYAICHI</h3>
              <p>
                テキストテキストテキストテキストテキストテキストテキスト
                <br />
                テキストテキストテキストテキストテキストテキストテキスト
                <br />
                テキストテキストテキストテキストテキストテキストテキスト
              </p>
            </div>
          </div>
        </section>

        <section className="wrapper bicycle">
          <h2 className="section-title">Bicycle</h2>
          <ul className="bicycle-list">
            <li>
              <img src="/bicycle1.jpg" />
              <h3 className="content-title">タイトルタイトル</h3>
              <p>テキストテキストテキストテキスト</p>
            </li>
            <li>
              <img src="/bicycle2.jpg" />
              <h3 className="content-title">タイトルタイトル</h3>
              <p>テキストテキストテキストテキスト</p>
            </li>
            <li>
              <img src="/bicycle3.jpg" />
              <h3 className="content-title">タイトルタイトル</h3>
              <p>テキストテキストテキストテキスト</p>
            </li>
          </ul>
        </section>
      </main>

      <footer>
        <p>© 2020 Profile</p>
      </footer>
    </>
  );
};

export default App;
