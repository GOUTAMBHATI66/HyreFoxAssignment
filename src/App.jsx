import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import MentorsHelp from "./components/MentorsHelp/MentorsHelp";
import FeedBack from "./components/FeedBack/FeedBack";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div className=" w-full h-full main-scrollbar overflow-y-auto ">
      <main className="px-4 md:px-10 lg:px-32 flex flex-col  items-center gap-2 justify-center main-scrollbar overflow-y-auto">
        <Navbar />
        <Hero />
        <HowItWorks />
        <MentorsHelp />
        <FeedBack />
      </main>
      <Footer />
    </div>
  );
};

export default App;
