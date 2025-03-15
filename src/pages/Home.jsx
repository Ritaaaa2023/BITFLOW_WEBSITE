import Navbar from "../components/Navbar"
import Header from "../components/Header"
import About from "../components/About"
import Services from "../components/Services"
import Teams from "../components/Teams"
import Project from "../components/Project"
import Contact from "../components/Contact"
import Footer from "../components/Footer"


function Home() {

  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Services />
      <Teams />
      <Project />
      {/* <Testimonial /> */}
      {/* <Blog /> */}
      <Contact />

      <Footer />
    </>
  )
}

export default Home
