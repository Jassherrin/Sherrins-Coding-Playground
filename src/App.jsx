import './App.css';

export default function App() {
  return (
    <main>
      <h1>Sherrin's Coding Playground</h1>

      <nav className="navbar">
        <ul>
          <li><a href="#daily-grinds">Daily Grinds</a></li>
          <li><a href="#machine-learning">Machine Learning</a></li>
        </ul>
      </nav>

      <section id="daily-grinds">
        <h2>Daily Grinds</h2>
        <a href="https://www.techinterviewhandbook.org/grind75" target="_blank" className="card">
          <div>Grind 75</div>
        </a>
        <a href="https://www.youtube.com/watch?v=p_g-k7FusQY&list=PLR0u9sleZ_VCqlwJv5y-ITzIerq1D1Ibw&ab_channel=MasteringProgramming" target="_blank" className="card">
          <div>Leetcode Easy Java YouTube solutions</div>
        </a>
      </section>

      <section id="machine-learning">
        <h2>Machine Learning</h2>
        <a href="https://developers.google.com/learn/topics/on-device-ml" target="_blank" className="card">
          <div>Google for Developers On-Device Machine Learning</div>
        </a>
      </section>
    </main>
  );
}
