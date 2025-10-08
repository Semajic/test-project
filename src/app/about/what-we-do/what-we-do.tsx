import React from "react";

export default function WhatWeDoPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-background">
      <section className="w-full max-w-2xl rounded-lg shadow-lg bg-card p-8">
        <h1 className="text-4xl font-extrabold tracking-tight mb-6 text-primary">
          What We Do
        </h1>
        <p className="mb-8 text-lg text-muted-foreground">
          We are dedicated to providing excellent services and solutions to our clients.
        </p>
        <ul className="space-y-4 list-disc list-inside text-base text-foreground">
          <li>Deliver high-quality products</li>
          <li>Offer expert consulting</li>
          <li>Support our customers every step of the way</li>
        </ul>
      </section>
    </main>
  );
}