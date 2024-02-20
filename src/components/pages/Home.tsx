import About from "../organs/About"
import Blogs from "../organs/Blogs"
import Contact from "../organs/Contact"
import HeroSection from "../organs/HeroSection"
import Membership from "../organs/Membership"
import Offers from "../organs/Offers"
import Testimonials from "../organs/Testimonials"


const Home = () => {
    return (
        <>
            <HeroSection />
            <About />
            <Offers />
            <Membership />
            <Testimonials />
            <Blogs />
            <Contact />
        </>
    )
}

export default Home