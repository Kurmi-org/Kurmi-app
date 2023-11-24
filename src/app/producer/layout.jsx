import NavProducer from "@/components/NavProducer";
import Footer from "@/components/Footer";

export default function ProducerLayout({ children }) {
    return (
        <>
            <NavProducer />
            {children}
            <Footer />

        </>
    );
}