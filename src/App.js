import React, { useState, useRef, useEffect } from "react";
import "./Global.scss";
import Backdrop from "./components/Backdrop/Backdrop";
import Toolbar from "./components/Toolbar/Toolbar";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import FirstSection from "./components/FirstSection/FirstSection";
import SecondSection from "./components/SecondSection/SecondSection";
import ThirdSection from "./components/ThirdSection/ThirdSection";
import SideElement from "./components/SideElement/SideElement";
import FourthSection from "./components/FourthSection/FourthSection";
import Footer from "./components/Footer/Footer";
import ToolbarToggle from "./components/ToolbarToggle/ToolbarToggle";

const App = () => {
  const [isSideDrawerOpen, setIsSideDrawerOpen] = useState(false);
  const [scrollDir, setScrollDir] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [darkLight, setDarkLight] = useState(true);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  const getScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  const toggleDarkLight = () => {
    setDarkLight(!darkLight);
    console.log(darkLight)
  };

  useEffect(() => {
    window.addEventListener("scroll", getScroll);

    return () => {
      window.removeEventListener("scroll", getScroll);
    };
  }, []);

  useEffect(() => {
    const threshold = 0;
    let lastScrollY = window.pageYOffset;
    let ticking = false;

    const updateScrollDir = () => {
      const scrollY = window.pageYOffset;

      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false;
        return;
      }
      setScrollDir(scrollY > lastScrollY ? 1 : 0);
      lastScrollY = scrollY > 0 ? scrollY : 0;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollDir]);

  const landingRef = useRef(null);
  const secondRef = useRef(null);
  const thirdRef = useRef(null);
  const fourthRef = useRef(null);

  const handleScroll = (ref) => {
    window.scrollTo({
      top: ref.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const toggleDrawer = () => {
    setIsSideDrawerOpen(!isSideDrawerOpen);
  };

  const backdropClickHnadler = () => {
    setIsSideDrawerOpen(!isSideDrawerOpen);
  };

  let backdrop;

  if (isSideDrawerOpen) {
    backdrop = (
      <Backdrop
        drawerOpen={isSideDrawerOpen}
        modalOpen={modalOpen}
        toggleModal={toggleModal}
        click={backdropClickHnadler}
      />
    );
  }

  if (modalOpen) {
    backdrop = (
      <Backdrop
        drawerOpen={isSideDrawerOpen}
        modalOpen={modalOpen}
        toggleModal={toggleModal}
        click={backdropClickHnadler}
      />
    );
  }

  return (
    <div className="App">
      {backdrop}
      <Toolbar
        show={scrollDir}
        scrollPosition={scrollPosition}
        drawerClickHandler={toggleDrawer}
        drawerOpen={isSideDrawerOpen}
        handleScroll={handleScroll}
        landingRef={landingRef}
        secondRef={secondRef}
        thirdRef={thirdRef}
        fourthRef={fourthRef}
        darkLight={darkLight}
        toggleDarkLight={toggleDarkLight}
      />
      <ToolbarToggle
        hoverToggle={setScrollDir}
        darkLight={darkLight}
        toggleDarkLight={toggleDarkLight}
      />
      <SideDrawer
        show={isSideDrawerOpen}
        drawerClickHandler={toggleDrawer}
        handleScroll={handleScroll}
        landingRef={landingRef}
        secondRef={secondRef}
        thirdRef={thirdRef}
        fourthRef={fourthRef}
        darkLight={darkLight}
        toggleDarkLight={toggleDarkLight}
      />
      <FirstSection
        landingRef={landingRef}
        darkLight={darkLight}
        toggleDarkLight={toggleDarkLight}
      />
      <SecondSection
        secondRef={secondRef}
        darkLight={darkLight}
        toggleDarkLight={toggleDarkLight}
      />
      <ThirdSection
        thirdRef={thirdRef}
        darkLight={darkLight}
        toggleDarkLight={toggleDarkLight}
      />
      <FourthSection
        modalOpen={modalOpen}
        toggleModal={toggleModal}
        fourthRef={fourthRef}
        darkLight={darkLight}
        toggleDarkLight={toggleDarkLight}
      />
      <SideElement />
      <Footer />
    </div>
  );
};

export default App;
