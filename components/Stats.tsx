'use client';

import CountUp from 'react-countup';

const stats = [
  {
    text: 'Years of Experience',
    number: 12,
    icon: 'fas fa-briefcase',
  },
  {
    text: 'Projects Completed',
    number: 26,
    icon: 'fas fa-project-diagram',
  },
  {
    text: 'Technologies Mastered',
    number: 8,
    icon: 'fas fa-users',
  },
  {
    text: 'Code Commits',
    number: 500,
    icon: 'fas fa-coffee',
  },
];

const Stats = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div>
          {stats.map((item, index) => {
            return (
              <div key={index}>
                <CountUp
                  end={item.number}
                  duration={5}
                  delay={2}
                  className="text-4xl xl:text-6xl font-extrabold"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
/* TODO: 01:16:15からYouTune再生 */
export default Stats;
