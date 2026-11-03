export function PageHero({ title, text }: { title: string; text?: string }) {
  return (
    <section className="bg-beige px-5 py-20 text-center text-charcoal lg:py-28">
      <h1 className="mx-auto max-w-3xl font-serif text-4xl leading-tight tracking-wide md:text-6xl">{title}</h1>
      {text && <p className="mx-auto mt-5 max-w-xl text-charcoal/70">{text}</p>}
    </section>
  );
}
