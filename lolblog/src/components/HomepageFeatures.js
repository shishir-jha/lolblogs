import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Learning by DIY',
    Svg: require('../../static/img/undraw_science.svg').default,
    description: (
      <>
       After I have grasp of a topic basics, I start experimenting and building small stuff with it.
       Lots of learning comes from that. I will write about that as well in this blog series.
      </>
    ),
  },
  {
    title: 'Connecting the dots',
    Svg: require('../../static/img/undraw_maker_launch.svg').default,
    description: (
      <>
        After I have learnt a new tech by reading/studying or building on it, I will try to write on 
        big picture what I got from that tech and How it can be added to my existing developer toolkit.
      </>
    ),
  },
  {
    title: 'Learning a new tech',
    Svg: require('../../static/img/undraw_programming.svg').default,
    description: (
      <>
        Where I record my notes while learning a new tech from documentation or a course or a tutorial 
        or a book.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
        {/* <p>This is my (b)log of whatever I learn, a way to do learning in public if you will!.</p> */}
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
