// import Header from './Header';

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
};

const Layout = props => (
<div class="container">
  <header class="terminal-nav">
    <div class="terminal-logo">
      <h1><a href="">./clintp.xyz</a></h1>
    </div>
    <nav class="terminal-menu">
    </nav>
  </header>
  <p>My bio in two mouse clicks or less</p>
  <main>
    {props.children}
  </main>
  <p class="terminal-prompt"></p>
</div>
);

export default Layout;

