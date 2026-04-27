import "./App.css";
import Hero from "./assets/components/Hero";
import Notes from "./assets/components/Notes";

function App() {
  const text1 = "HAPPY BIRTHDAY";
  const text2="ANKUSH BHAIII"
  return (
    <div className="birthday-page">
      <Hero srtvalue="0" endvalue="-1350">
        
        <div className="party-overlay" aria-hidden="true">
          <span className="burst-piece burst--one"></span>
          <span className="burst-piece burst--two"></span>
          <span className="burst-piece burst--three"></span>
          <span className="burst-piece burst--four"></span>
          <span className="burst-piece burst--five"></span>
          <span className="burst-piece burst--six"></span>
          <span className="burst-piece burst--seven"></span>
          <span className="burst-piece burst--eight"></span>
          <span className="burst-piece burst--nine"></span>
          <span className="burst-piece burst--ten"></span>
        </div>
      </Hero>

      <div className="popper-container">
        <div className="popper popper--left">
          <div className="popper-head"></div>
          <div className="popper-stick"></div>
          <span className="confetti confetti--one"></span>
          <span className="confetti confetti--two"></span>
          <span className="confetti confetti--three"></span>
          <span className="confetti confetti--four"></span>
          <span className="confetti confetti--five"></span>
        </div>

        <div className="popper popper--center popper--cone-style">
          <div className="popper-cone">
            <div className="stripe"></div>
            <div className="stripe"></div>
            <div className="stripe"></div>
          </div>
          <span className="confetti cone-confetti--1"></span>
          <span className="confetti cone-confetti--2"></span>
          <span className="confetti cone-confetti--3"></span>
          <span className="confetti cone-confetti--4"></span>
          <span className="confetti cone-confetti--5"></span>
          <span className="confetti cone-confetti--6"></span>
          <span className="ribbon-curl ribbon-curl--1"></span>
          <span className="ribbon-curl ribbon-curl--2"></span>
          <span className="ribbon-curl ribbon-curl--3"></span>
        </div>

        <div className="popper popper--right">
          <div className="popper-head"></div>
          <div className="popper-stick"></div>
          <span className="confetti confetti--six"></span>
          <span className="confetti confetti--seven"></span>
          <span className="confetti confetti--eight"></span>
          <span className="confetti confetti--nine"></span>
          <span className="confetti confetti--ten"></span>
        </div>
      </div>
      <div className="header-container">
      <h1 className="wavy-text">
        {text1.split("").map((char, index) => (
          <span 
            key={index} 
            style={{ '--i': index }}
            className={char === " " ? "space" : ""}
          >
            {char}
          </span>
        ))}
      </h1>
    </div>
    <div className="header-container">
      <h1 className="wavy-text">
        {text2.split("").map((char, index) => (
          <span 
            key={index} 
            style={{ '--i': index }}
            className={char === " " ? "space" : ""}
          >
            {char}
          </span>
        ))}
      </h1>
    </div>

      <Notes />
      <Hero srtvalue="-1350" endvalue="0" />
    </div>
  );
}

export default App;
