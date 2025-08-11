export default function ServicesGrid() {
  const services = [
    {
      title: "Corporate Videos",
      description: "Professional corporate content and training videos",
    },
    {
      title: "Commercials",
      description: "High-impact advertising and promotional videos",
    },
    {
      title: "Event Coverage",
      description: "Live event filming and documentation",
    },
    {
      title: "Post-Production",
      description: "Editing, color grading, and sound design",
    },
  ];

  return (
    <section className="services-grid">
      <h2>Our Services</h2>
      <div className="grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
