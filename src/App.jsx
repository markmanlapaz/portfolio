import { Navbar } from "./components/Navbar"
import { Hero } from "./components/Hero"
import Skills from "./components/Skills"
import Portfolio from "./components/Portfolio"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Hobbies from "./components/Hobbies"

export default function App() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Skills/>
    <Portfolio/>
    <Hobbies />
    <Contact/>
    <Footer/>
    </>
  )
}