import * as React from 'react'
import { Button } from '@/components/ui/button'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion'

const footerColumns = [
    {
        title: "Practice Areas",
        items: [
            "Corporate & Commercial",
            "Data Privacy & Cybersecurity",
            "Energy",
            "Finance & Capital Markets",
        ],
    },
    {
        title: "Industries",
        items: ["Banking", "Healthcare", "Technology", "Retail"],
    },
    {
        title: "Solutions",
        items: ["Secondments", "Large Projects", "Recruitment Solutions"],
    },
    {
        title: "About Axiom",
        items: ["What We Do", "How We Help", "Our Team"],
    },
    {
        title: "Resources",
        items: ["Reports & Guides", "Webinars & Events", "Articles"],
    },
    {
        title: "Careers",
        items: ["Legal Careers at Axiom", "Talent Spotlights"],
    },
] as const

function FooterColumn({ title, items }: { title: string; items: readonly string[] }) {
    return (
        <div className="w-full font-poppins">
            {/* Desktop */}
            <div className="hidden lg:block">
                <h4 className="text-sm font-semibold mb-3 text-primary">{title}</h4>
                <ul className="space-y-2 text-muted-foreground">
                    {items.map(item => (
                        <li key={item}>
                            <a href="#" className="hover:text-primary">{item}</a>
                        </li>
                    ))}
                </ul>
            </div>
            {/* Mobile - use Accordion for better accessibility and control */}
            <div className="block lg:hidden">
                <Accordion type="single" collapsible>
                    <AccordionItem value={title}>
                        <AccordionTrigger className="px-0 py-2 cursor-pointer">{title}</AccordionTrigger>
                        <AccordionContent>
                            <ul className="pl-2 py-2 space-y-2 text-muted-foreground">
                                {items.map(item => (
                                    <li key={item}>
                                        <a href="#" className="hover:text-primary">{item}</a>
                                    </li>
                                ))}
                            </ul>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    )
}

export default function Footer() {
    return (
        <footer className="w-full bg-background border-t px-8 font-poppins">
            {/* CTA box */}
            <div className="max-w-7xl mx-auto py-10">
                <div className="bg-card/80 border border-border rounded-xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="max-w-2xl">
                        <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-2">
                            Elevate your in-house legal team
                        </h3>
                        <p className="text-muted-foreground">
                            Get connected with vetted Axiom legal professionals, seamlessly integrated into your team, when and how you need them.
                        </p>
                    </div>
                    <div className="flex gap-4 flex-wrap items-center justify-center">
                        <Button
                            variant="default"
                            className="h-12 px-6 md:px-12 uppercase text-base text-background font-extrabold tracking-wide rounded-full shadow-md hover:bg-primary/90 cursor-pointer transition-all duration-300"
                        >
                            Find a Lawyer Now
                        </Button>
                        <Button
                            variant="outline"
                            className="h-12 px-6 md:px-12 uppercase text-base text-primary font-extrabold tracking-wide rounded-full shadow-md border-primary hover:bg-primary hover:text-background cursor-pointer transition-all duration-300"
                        >
                            Talk to Our Team
                        </Button>
                    </div>
                </div>
            </div>

            {/* Footer columns */}
            <div className="max-w-7xl mx-auto px-4 pb-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-sm">
                    {footerColumns.map(col => (
                        <FooterColumn key={col.title} title={col.title} items={col.items} />
                    ))}
                </div>

                <div className="mt-8 border-t border-border pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-4">
                        <span className="font-bold text-primary">Axiom Legal</span>
                        <span>&copy; {new Date().getFullYear()} All rights reserved.</span>
                    </div>
                    <div className="flex items-center gap-6">
                        <a href="/privacy" className="hover:text-primary">Privacy Policy</a>
                        <a href="/terms" className="hover:text-primary">Terms of Service</a>
                        <a href="/contact" className="hover:text-primary">Contact</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
