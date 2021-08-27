import React from "react";
import { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navigation from "./Navbar";
import Hero from "./Hero";
import TextSection from "./TextSection";
import TextCarousel from "./TextCarousel";
import ThreePartSection from "./ThreePartSection";
import BrandSection from "./BrandSection";
import ContactForm from "./ContactForm";
import Footer from "./Footer";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import BlogPage from "./BlogPage";
import darts from "./images/darts.gif";
import magnifier from "./images/magnifier.gif";
import rocket from "./images/rocket-launch.gif";
import tools from "./images/tools.gif";

function App() {
  const [showLoading, setShowLoading] = useState(true);
  setTimeout(() => {
    setShowLoading(false);
  }, 2000);

  let whoWeAreLink = document.getElementById("Who-We-Are-link");
  let whatWeDoLink = document.getElementById("What-We-Do-link");
  let whatWereDoingLink = document.getElementById("What-Were-Doing-link");

  if (!window.location.href.includes("blog")) {
    window.addEventListener("scroll", function () {
      let scrollpos = window.scrollY;

      if (scrollpos > 850 && scrollpos < 1500) {
        let activeLinks = document.getElementsByClassName("active");
        Array.from(activeLinks).forEach((el) => el.classList.remove("active"));
        whoWeAreLink?.classList.add("active");
      } else if (scrollpos > 1500 && scrollpos < 5130) {
        let activeLinks = document.getElementsByClassName("active");
        Array.from(activeLinks).forEach((el) => el.classList.remove("active"));
        whatWeDoLink?.classList.add("active");
      } else if (scrollpos > 5130 && scrollpos < 6706) {
        let activeLinks = document.getElementsByClassName("active");
        Array.from(activeLinks).forEach((el) => el.classList.remove("active"));
        whatWereDoingLink?.classList.add("active");
      } else {
        let activeLinks = document.getElementsByClassName("active");
        Array.from(activeLinks).forEach((el) => el.classList.remove("active"));
      }
    });
  }

  return (
    <Router>
      <div className="App">
        <Navigation />
        <Switch>
          <Route exact path="/">
            <Hero />
            <TextSection
              title="Who We Are"
              mainText="Atomic47 Labs is a technology development 
                firm that aligns organizations with 
                the right talent and tools to build, 
                scale and market tech products."
              mainText2=" We are founded on the belief that the 
                right team - the A Team - has the power to 
                take any business from A to MVP."
              quoteBody="“Exceptional talent is the heart of innovation & business success”"
              quoteAuthor="Karen Olsson, Founder Atomic47 Labs."
              subText="From developing and designing your product efficiently, 
                to sourcing the funding and skills you need, 
                our 60+ cumulative years of experience will help you 
                navigate/capitalize from this dynamic world."
              id="Who-We-Are"
            ></TextSection>
            <div className="star-background" id="What-We-Do">
              <TextCarousel />
              <div className="simple-text">
                <h1>What We Do</h1>
                <h2>
                  From funding partners and advisors to executive leadership and
                  expert developers, we connect you with the pivotal component
                  of your business: the people.
                </h2>
              </div>
              <div id="stars"></div>
              <div id="stars2"></div>
              <div id="stars3"></div>
            </div>
            <ThreePartSection
              type="left"
              headerText="Team Development & Leadership"
              mainText="From funding partners and advisors to executive leadership and expert developers, we connect you with the pivotal component of your business: the people."
              bulletPoints={[
                "Recruitment",
                "Team Development",
                "Strategic Planning",
                "Funding & Revenue",
                "Executive Leadership",
              ]}
              image={magnifier}
            />
            <ThreePartSection
              type="right"
              headerText="Design with Intention"
              mainText="It’s not only about looks, it’s about the feel. From product design, UX/UI, and branding, we help your customers engage with your company’s unique personality like never before."
              bulletPoints={[
                "UI/UX Design",
                "Product Design",
                "Software Development",
                "Security & Infrastructure",
                "Product Management",
              ]}
              image={tools}
            />
            {/* <ThreePartSection
                type="left"
                headerText="Advertising & Marketing"
                mainText="For guidance on software development, and product management, we pinpoint the best roadmap for developing your product. Securely and efficiently."
                bulletPoints={["?", "?"]}
              /> */}
            <ThreePartSection
              type="left"
              headerText="Advertising & Marketing"
              mainText="For public relations to advertising and marketing efforts, work alongside our expert team to develop the ideal execution strategy for all your products. Don’t just go viral, make a lasting impression."
              bulletPoints={[
                "Advertising",
                "Marketing Strategy",
                "Copywriting",
                "Public Relations",
              ]}
              image={rocket}
            />
            <BrandSection />
          </Route>
          <Route path="/blog">
            {/* <BlogPage
              blogItems={[
                
              ]}
            ></BlogPage> */}
            <div className="under-construction">
              <img src={tools}></img>
              <h1>This Page is Currently Under Construction</h1>
              <a href="/"><h2>Back to Home</h2></a>
            </div>
          </Route>
        </Switch>
        <ContactForm />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
