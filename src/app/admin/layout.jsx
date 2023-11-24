
import NavAdmin from "@/components/NavAdmin";
import Footer from "@/components/Footer";

export default function AdminLayout({ children }) {
  return (
    <>
        <NavAdmin />
        {children}
        <Footer />
    </>
  );
}