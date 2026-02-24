
import { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
    title: "Contact Us",
    description: "Get in touch with us for your next project or collaboration."
};

export default function Page() {
    return <ContactClient />;
}
