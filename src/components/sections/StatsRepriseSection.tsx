import React from "react";

const stats = [
    { label: "Users", value: "12,345" },
    { label: "Revenue", value: "$67,890" },
    { label: "Growth", value: "23%" },
];

export default function StatsRepriseSection() {
    return (
        <section className="bg-gradient-to-r from-orange-500 h-full w-full via-[#ff5e62] to-[#2196f3] pt-36 pb-8 px-8 md:px-16 lg:px-40 text-white transition-all duration-500">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-8">
                {stats.map((stat, idx) => (
                    <React.Fragment key={stat.label}>
                        <div className="text-center">
                            <div className="text-3xl font-extrabold">{stat.value}</div>
                            <div className="text-base text-white/80">{stat.label}</div>
                        </div>
                        {idx < stats.length - 1 && <div className="hidden sm:block w-px h-10 bg-white/40 rounded-sm" />}
                    </React.Fragment>
                ))}
            </div>

            <div className="bg-white/12 rounded-lg p-8 shadow-md text-center">
                <h2 className="m-0 text-2xl font-semibold text-white">Main Card Title</h2>
                <p className="mt-4 text-lg text-white/90">This is the main card content. You can add more details or actions here.</p>
            </div>
        </section>
    )
}