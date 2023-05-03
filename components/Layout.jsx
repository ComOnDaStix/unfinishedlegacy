import Footer from "./Footer";
import Navbar from "./Navbar";
import Banner from "./Banner";



const Layout = ( {children} ) => {
    return (  
        <div>
            <Navbar />
            <Banner />
            <main>{children}</main>
            <Footer />
        </div>
    );
}
 
export default Layout;