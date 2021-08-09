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

function App() {
  return (
    <>
      <div className="App">
        <div id="stars" />
        <div id="stars2" />
        <div id="stars3" />
        <Navigation />
        <div className="body">
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
          ></TextSection>
          <TextCarousel></TextCarousel>
          <div className="simple-text">
            <h1>What We Do</h1>
            <h2>
              From funding partners and advisors to executive leadership and
              expert developers, we connect you with the pivotal component of
              your business: the people.
            </h2>
          </div>
          <ThreePartSection
            type="left"
            headerText="Assemble Your A-Team"
            mainText="From funding partners and advisors to executive leadership and expert developers, we connect you with the pivotal component of your business: the people."
            bulletPoints={[
              "Recruitment",
              "Team Development",
              "Strategic Planning",
              "Funding & Revenue",
              "Executive Leadership",
            ]}
          />
          <ThreePartSection
            type="right"
            headerText="Design with Intention"
            mainText="It’s not only about looks, it’s about the feel. From product design, UX/UI, and branding, we help your customers engage with your company’s unique personality like never before."
            bulletPoints={["UI/UX Design", "Product Design"]}
          />
          <ThreePartSection
            type="left"
            headerText="Build Securely From the Get-go"
            mainText="For guidance on software development, and product management, we pinpoint the best roadmap for developing your product. Securely and efficiently."
            bulletPoints={["?", "?"]}
          />
          <ThreePartSection
            type="right"
            headerText="Go-to-Market with an Atomic Bang"
            mainText="For public relations to advertising and marketing efforts, work alongside our expert team to develop the ideal execution strategy for all your products. Don’t just go viral, make a lasting impression."
            bulletPoints={["?", "?"]}
          />
          <BrandSection/>
          <ContactForm/>
          <Footer/>
        </div>
        <footer></footer>
      </div>
    </>
  );
}

export default App;
