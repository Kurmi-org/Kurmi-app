
import NavClient from "@/components/NavClient";
import Footer from "@/components/Footer";

export default function LayoutClient({ children }) {
    return (
        <>
            <NavClient />
            {children}
            <Footer />
        </>
    );
}