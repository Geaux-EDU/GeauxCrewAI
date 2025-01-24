

import Card from '../common/Card';
import './Features.css';

const Features = () => {
  const features = [
    {
      icon: "road",
      title: "Personalized Learning Paths",
      description: "Tailored curriculum based on your unique learning style"
    },
    {
      icon: "trophy",
      title: "Gamification Rewards",
      description: "Earn rewards while you learn and stay motivated"
    },
    {
      icon: "chart-line",
      title: "Dynamic Progress Tracking",
      description: "Monitor your growth with real-time analytics"
    }
  ];

  return (
    <section className="features">
      <h2>Why Choose Geaux Academy</h2>
      <div className="features-grid">
        {features.map((feature, index) => (
          <Card
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Features;