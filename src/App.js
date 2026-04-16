import { useEffect } from 'react';

function App() {
  useEffect(() => {
    fetch("https://corsproxy.io/?url=https://www.reddit.com/r/popular.json", {
      headers: { "User-Agent": "reddit-light-app" }
    })
      .then(res => res.json())
      .then(data => console.log(data))
  }, [])

  return (
    <div className="App">
      <h1>Reddit Light</h1>
    </div>
  );
}

export default App;