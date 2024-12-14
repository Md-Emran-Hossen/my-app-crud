
import SiteFooter from "@/components/SiteFooter";
import "./globals.css";
import SiteNavBar from "@/components/SiteNavBar";
import NextTopLoader from 'nextjs-toploader';


export async function generateMetadata() {
  // SEO DATA FETCH
  return{
      title:"Home",
  }
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NextTopLoader color="#2669669" height={3} speed={200}/>
        <SiteNavBar></SiteNavBar>
          {children}
        <SiteFooter></SiteFooter>
      </body>
    </html>
  );
}
