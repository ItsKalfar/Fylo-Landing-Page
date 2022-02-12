import "./App.css";

import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import TeamsSection from "./components/TeamsSection";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <TeamsSection />
      <section id="signin">
        <div className="container">
          <div class="left_section">
            <h4 class="access_heading">Get early access today</h4>
            <p class="access_text">
              It only takes a minute to sign up and our free starter tier is
              extremely generous. If you have any questions, our support team
              would be happy to help you.
            </p>
          </div>
          <div class="right_section">
            <input
              type="email"
              name=""
              id="email"
              placeholder="email@example.com"
            />
            <button class="btn btn_secondary">Get Started For Free</button>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default App;
