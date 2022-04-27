import Main from "./Main";
import Header from "./Header";

function App() {
  return (
    <div>
      <Header />
      <Main />
      <a href="https://portfolio-raghav.vercel.app/" style={{position:"absolute",right:"20px",bottom:"15px",fontSize:"1.5rem"}} target="_blank"  rel="noreferrer">Portfolio</a>
    </div>
  );
}

export default App;
