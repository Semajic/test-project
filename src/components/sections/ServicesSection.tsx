import React from 'react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';

const services = [
    'Web Development',
    'Mobile App Development',
    'UI/UX Design',
    'Cloud Solutions',
    'E-commerce Platforms',
    'Digital Marketing',
    'SEO Optimization',
    'Custom Software Development',
];

export default function ServicesSection() {
    return (
    <section className="relative flex flex-col items-center justify-center gap-6 p-8 py-24 md:py-32 pb-10 md:pb-28 h-full w-full transition-all duration-500 bg-secondary border-none">
            <h2 className="text-white font-bold text-2xl text-center">We’ve got you covered.<br />Explore our areas of expertise.</h2>
            {/* Desktop grid */}
            <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
                {services.map((service) => (
                    <Button
                        key={service}
                        variant="outline"
                        className="p-4 bg-blue-900 rounded-lg text-center text-white hover:shadow-lg transition-shadow duration-300 w-full"
                    >
                        {service}
                    </Button>
                ))}
            </div>

            {/* Mobile accordion */}
            <div className="block md:hidden w-full mt-4">
                <Accordion type="single" collapsible className="w-full rounded-lg border-none divide-y-0 shadow-none">
                    {services.map((service) => (
                        <AccordionItem key={service} value={service} className="mb-4 last:mb-0 border-none">
                            <AccordionTrigger
                                className="cursor-pointer bg-[#3a4ded] text-white p-4 hover:bg-background/10 transition-colors rounded-t-lg data-[state=open]:rounded-b-none"
                            >
                                {service}
                            </AccordionTrigger>
                            <AccordionContent className="border-none p-0">
                                <div className="flex flex-col sm:flex-row items-center gap-3 p-4 bg-[#3a4ded] rounded-b-lg">
                                    <p className="text-sm text-white">Learn more about our {service.toLowerCase()} offering and how we can help you.</p>
                                    <div className="ml-auto flex gap-2">
                                        <Button variant="outline" className="h-12 px-6 text-md text-primary font-extrabold uppercase tracking-wide rounded-full shadow-md border-primary hover:bg-primary hover:text-background cursor-pointer">
                                            Learn More
                                        </Button>
                                        <Button variant="outline" className="h-12 px-6 text-md text-primary font-extrabold uppercase tracking-wide rounded-full shadow-md border-primary hover:bg-primary hover:text-background cursor-pointer">
                                            Get a Quote
                                        </Button>
                                    </div>
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>

            {/* Wave SVG */}
            <div className="absolute left-0 right-0 -bottom-28 w-full overflow-visible pointer-events-none z-10">
                <svg
                    viewBox="0 0 1440 160"
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-28 fill-current text-secondary"
                    aria-hidden="true"
                >
                    <path d="M0,64 C360,128 1080,128 1440,64 L1440,0 L0,0 Z" />
                </svg>
            </div>
        </section>
    );
}

