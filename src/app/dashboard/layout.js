"use client"
import Navigation from "@/components/layouts/Navigation"

export default function DashboardLayout({ children }) {
    return (
        <section className="max-h w-full">
            <div className="bg-[#0a100e] py-3.5 px-5 min-h-screen pb-[80px]">
                {children}
            </div>
            <Navigation />
        </section>
    )
}