import './App.css';


export default function App() {
  const toggleDropdown = () => {
    const navbarList = document.getElementById('navbarList');
    const dropdownContent = document.getElementById('dropdownContent');

    // Get all list items in the navbar
    const listItems = navbarList.querySelectorAll('li');

    // Filter out the hidden list items
    const hiddenItems = Array.from(listItems).filter(
      (item) => getComputedStyle(item).display === 'none'
    );

    // Clear the existing dropdown content
    dropdownContent.innerHTML = '';

    // Add the hidden items to the dropdown
    hiddenItems.forEach((item) => {
      const clonedItem = item.cloneNode(true);
      dropdownContent.appendChild(clonedItem);
    });

    // Toggle display of the dropdown
    dropdownContent.style.display =
      dropdownContent.style.display === 'none' ? 'block' : 'none';
  };

  return (
    <main>
      <h1>Sherrin's Coding Playground</h1>
      <nav class="navbar">
        <ul class="navbar-list" id="navbarList">

          <li><a href="#daily-grinds">Daily Grinds</a></li>
          <li><a href="#interview">Prepare for Interviews</a></li>
          
          <li><a href="#cplayground">Coding Playgrounds</a></li>
          <li><a href="#cheatsheet">Cheatsheets and docs</a></li>
          <li><a href="#machine-learning">Machine Learning</a></li>
        </ul>
        <div class="dropdown-btn" onClick={toggleDropdown}>▼</div>
        <div class="dropdown-content" id="dropdownContent">

          <a href="#daily-grinds">Daily Grinds</a>
          <a href="#interview">Prepare for Interviews</a>
          <a href="#machine-learning">Machine Learning</a>
          <a href="#cplayground">Coding Playgrounds</a>
          <a href="#cheatsheet">Cheatsheets and docs</a>
          <li><a href="#machine-learning">Machine Learning</a></li>
        </div>
      </nav>



      <section id="daily-grinds">
        <h2>Daily Grinds</h2>
        <a href="https://www.techinterviewhandbook.org/grind75" target="_blank" className="card">
          <div>Grind 75</div>
        </a>
        <a href="https://www.youtube.com/watch?v=p_g-k7FusQY&list=PLR0u9sleZ_VCqlwJv5y-ITzIerq1D1Ibw&ab_channel=MasteringProgramming" target="_blank" className="card">
          <div>Leetcode Easy Java YouTube solutions</div>
        </a>
        <a href="https://www.hackerrank.com/interview/preparation-kits" target="_blank" className="card">
          <div>HackerRank Interview Preparation Kits</div>
        </a>
        <a href="https://leetcode.com/study-plan/dynamic-programming/?progress=max5bdv" target="_blank" className="card">
          <div>Leetcode Study Plan</div>
        </a>
      </section>

      <section id="interview">
        <h2>Prepare for Interviews</h2>
        <a href="https://content.mycareersfuture.gov.sg/bad-job-market-platforms-help-fresh-grads/" target="_blank" className="card">
          <div>MyCareersFuture: Job Market Platforms to Help Fresh Grads</div>
        </a>
        <a href="https://www.themuse.com/advice/interview-questions-and-answers#98228f9e-9f23-429d-a47d-a5878a8a99ef" target="_blank" className="card">
          <div>The Muse: Most Common Interview Questions and Answers</div>
        </a>
        <a href="https://content.mycareersfuture.gov.sg/useful-guide-software-engineer-interviews-tips-questions-what-expect/" target="_blank" className="card">
          <div>MyCareersFuture: Useful Guide to Software Engineer Interviews: Tips, Questions and What to Expect</div>
        </a>
      </section>
     

      <section id="cplayground">
        <h2>Coding Playgrounds</h2>
        <a href="https://www.db-fiddle.com/" target="_blank" className="card">
          <div>SQL Playground</div>
        </a>
        <a href="https://play.kotlinlang.org/" target="_blank" className="card">
          <div>Kotlin Playground</div>
        </a>

      </section>
      <section id="cheatsheet">
        <h2>Cheatsheets and docs</h2>
        <a href="https://leetcode.com/explore/interview/card/cheatsheets/" target="_blank" className="card">
          <div>Leetcode cheatsheets</div>
        </a>
        <a href="https://introcs.cs.princeton.edu/java/11cheatsheet/" target="_blank" className="card">
          <div>Java Programming Cheatsheet</div>
        </a>
        <a href="https://devhints.io/kotlin" target="_blank" className="card">
          <div>Kotlin Cheatsheet</div>
        </a>
        <a href="https://kotlinlang.org/docs/home.html" target="_blank" className="card">
          <div>Kotlin docs</div>
        </a>
      </section>
      <section id="machine-learning">
        <h2>Machine Learning</h2>
        <a href="https://developer.android.com/ml" target="_blank" className="card">
          <div>Android Developers Machine Learning</div>
        </a>
      </section>

    </main>
  );
}


