import React from 'react';
import styles from './Intro.module.scss';

const Intro = ({ intro }) => (
  <div className={styles['intro']}>
    <div className={styles['intro__inner']}>
      <div className={styles['intro__logo']}>
        <svg
          className={styles['intro__logo-svg']}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 116 100"
          height="50"
          width="58">
          <path
             d="m 82.81724,100 0.0789,-36.89358 9.38623,-9.37366 0,46.26724 z M 0.01072,99.78957 c -0.0229,-24.79951 -0.002,-74.60271 -0.002,-74.60271 0,0 30.11571,30.22858 45.15265,45.20346 3.53353,-3.32316 10.44524,-9.97083 10.44524,-9.97083 l 6.04614,6.53587 c 0,0 -11.4004,11.25695 -16.49138,16.26792 C 33.52218,71.61375 22.00654,59.52384 10.42524,47.96985 c -0.25888,17.25357 0,51.81972 0,51.81972 l -10.41465,0 z M 106.35367,76.04498 c 0,0 0.0747,-34.06332 0,-50.42774 C 94.15086,37.29051 82.44905,49.61154 70.29625,61.34274 58.32532,49.14026 34.12733,24.60466 34.12733,24.60466 l 0,17.27755 L 24.02315,30.9555 c 0,0 -0.0477,-20.76041 0,-30.95536 15.47415,15.3658 46.2731,46.45001 46.2731,46.45001 l 46.07381,-46.39369 0,75.98852 z" />
        </svg>
      </div>
      <h1 className={styles['intro__title']}>{intro.title}</h1>
      <p className={styles['intro__subtitle']}>{intro.subtitle}</p>
    </div>
  </div>
);

export default Intro;
