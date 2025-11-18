import { BrowserRouter, Routes ,Route} from "react-router-dom";
import Homepage from "./Homepage/Homepage.jsx";
import Mission from "./Mission/Mission.jsx";
import Footer from "./Footer/Footer.jsx";
import OverlayCards from "./OverlakeArts/OverlayCards.jsx";
import ContactForm from "./ContactForm/ContactForm.jsx";
import Service from "./Services/Services.jsx";
import AboutUs from "./AboutUs/AboutUs.jsx";
import OurClients from "./OurClients/OurClients.jsx";
import OurServices from "./OurServices/OurServices.jsx";
import IndustrySection from "./IndustrySection/IndustrySection.jsx";
import NewNavbar from "./Navbar/NewNavbar.jsx";
import WDbanner from "./Banner/WDbanner.jsx";
import CustomCursor from "./CUSTOMCURsor.jsx";
import Services from "./Services/Services.jsx";
import Evolution from "./Evolution/Evolution.jsx";
import { AboutPage } from "./AboutPage/AboutPage.jsx";
import ProductGrid from "./ProductGrid/ProductGrid.jsx";
import HomeNavbar from "./Navbar/homeNav.jsx";
import AboutBanner from "./Banner/aboutbanner.jsx";
import AboutNavbar from "./Navbar/aboutnav.jsx";
import WhyElectcare from "./AboutPage/whyelectcare.jsx";
import IndustryBanner from "./Banner/industrybanner.jsx";
import ContactBanner from "./Banner/contactusbanner.jsx";
import SugarBanner from "./Banner/sugarbanner.jsx";
import { AboutSugar } from "./sugarIndustry/aboutsugar.jsx";
import { KeyOffering } from "./sugarIndustry/keyoffering.jsx";
import WhySugarElectcare from "./sugarIndustry/whysugarelectcare.jsx";
export default function App() {
  return (
    
    <BrowserRouter>
    <CustomCursor/>
        <Routes>
              <Route path="/" element={ [<HomeNavbar/>,<WDbanner/>,<AboutUs/>,<OurClients/>,<OurServices/>,<Footer/>]}/>
              <Route path="/services" element={[<HomeNavbar/>,<Services/>,<Footer/>]} />
              <Route path="/industries" element={[<HomeNavbar/>,<IndustryBanner/>,<IndustrySection/>,<Footer/>]}/>
              <Route path="/contact" element={[<HomeNavbar/>,<ContactBanner/>,<ContactForm />,<Footer/>]} />
              <Route path="/about" element={[<HomeNavbar/>,<AboutBanner/>,<AboutPage/>,<ProductGrid/>,<Mission/>,<Evolution/>,<WhyElectcare/>,<Footer/>]} />
              <Route path="/sugarindustry" element={[<HomeNavbar/>,<SugarBanner/>,<AboutSugar/>,<KeyOffering/>,<WhySugarElectcare/>,<Footer/>]} />
       
        </Routes>
    </BrowserRouter>
  
  );
}

