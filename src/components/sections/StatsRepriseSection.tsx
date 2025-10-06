import React from "react";
import {Card} from '@/components/ui/card'
import {Button} from '@/components/ui/button'

const stats = [
    { label: "Users", value: "12,345" },
    { label: "Revenue", value: "$67,890" },
    { label: "Growth", value: "23%" },
];

export default function StatsRepriseSection() {
    return (
        <section className="bg-gradient-to-r from-orange-500 h-full w-full via-[#ff5e62] to-[#2196f3] pt-36 pb-0 px-8 md:px-16 lg:px-40 text-white transition-all duration-500">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-8">
                {stats.map((stat, idx) => (
                    <React.Fragment key={stat.label}>
                        <div className="text-center">
                            <div className="text-6xl font-extrabold">{stat.value}</div>
                            <div className="text-xl text-white/80">{stat.label}</div>
                        </div>
                        {idx < stats.length - 1 && <div className="hidden sm:block w-1 h-32 bg-white/40 rounded-sm" />}
                    </React.Fragment>
                ))}
            </div>

            <div className="flex flex-col items-center justify-center bg-white rounded-tl-4xl rounded-tr-4xl p-8 pb-2 shadow-md text-center max-w-6xl mx-auto">
                <h2 className="m-0 text-4xl font-semibold text-white">You’re in good company.</h2>
                <p className="mt-4 text-lg text-white/90">This is the main card content. You can add more details or actions here.</p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
                    <Card className="bg-muted shadow-none border-none rounded-lg p-8 pb-12 text-center max-w-6xl mx-auto">
                        <h2 className="m-0 text-2xl font-semibold text-foreground">Main Card Title</h2>
                        <p className="mt-4 text-lg text-foreground/90">This is the main card content. You can add more details or actions here.</p>
                    </Card>
                    <div className="flex flex-col items-center justify-center bg-muted rounded-lg p-8 text-center">
                        <h4 className="m-0 text-2xl font-semibold text-foreground">Testimonial</h4>
                        <p className="mt-4 text-lg text-foreground/90">This is the main card content. You can add more details or actions here.</p>
                    </div>
                </div>

                <div className="flex flex-row flex-wrap items-center justify-center gap-4 mt-8 mb-16">
                    <Button
                        variant="default"
                        className="h-12 px-6 md:px-16 uppercase text-base text-background font-extrabold tracking-wide rounded-full shadow-md hover:bg-primary/90 cursor-pointer transition-all duration-300 w-full sm:w-auto"
                    >
                        Find a Lawyer Now
                    </Button>
                    <Button
                        variant="outline"
                        className="h-12 px-6 md:px-16 uppercase text-base text-primary font-extrabold tracking-wide rounded-full shadow-md border-primary hover:bg-primary hover:text-background cursor-pointer transition-all duration-300 w-full sm:w-auto"
                    >
                        Browse Case Studies
                    </Button>
                </div>
            </div>
        </section>
    )
}