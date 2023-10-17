import React from 'react';
import styles from './TemplateInfo.module.scss';
import revkudevLogo from './logo.svg';

const TemplateInfo = () => {
   return (
      <div className={styles.wrapper}>
         <div className={styles.box}>
            <a href="https://revku.dev" target="_blank" rel="noreferrer">
               <img
                  src={revkudevLogo}
                  alt="Revku.dev Logo"
                  className={styles.logo}
               />
            </a>
            <h1 className={styles.title}>React Project Template</h1>

            <h2 className={styles.subtitle}>What&apos;s included?</h2>
            <ul className={styles.list}>
               <li>Prettier</li>
               <li>ESLint</li>
               <li>Absolute imports</li>
               <li>Sass</li>
               <li>SCSS global styles</li>
               <li>Poppins font</li>
            </ul>

            <h2 className={styles.subtitle}>Get started</h2>
            <ul className={styles.list}>
               <li>Delete TemplateInfo directory</li>
               <li>Remove TemplateInfo component and import from App.jsx</li>
               <li>Happy coding :)</li>
            </ul>
         </div>
      </div>
   );
};

export default TemplateInfo;
