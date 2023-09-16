"use client"
import Navigation from "@/components/layouts/Navigation"
import ScrollToTop from "@/components/ScrollToTop"

export default function DashboardLayout({ children }) {
    return (
        <section className="max-h">
            {children}
            <Navigation />
            <ScrollToTop />
        </section>
    )
}