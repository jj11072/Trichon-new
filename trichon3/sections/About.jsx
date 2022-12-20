'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Trichon" textStyles="text-center" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        {/* Are you looking to take your{' '}
        <span className="font-extrabold text-white">business</span> to the next
        level with a cutting-edge{' '}
        <span className="font-extrabold text-white">website</span> or engaging{' '}
        <span className="font-extrabold text-white">media</span> content? Look
        no further! Our team of experienced */}
        Our team of experienced
        <span className="font-extrabold text-white">
          {' '}
          developers and designers
        </span>{' '}
        will work with you to create a{' '}
        <span className="font-extrabold text-white">custom </span>solution that
        meets your unique needs and goals. From{' '}
        <span className="font-extrabold text-white">stunning websites</span> and
        eye-catching <span className="font-extrabold text-white">graphics</span>{' '}
        to immersive <span className="font-extrabold text-white">videos</span>{' '}
        and interactive experiences, we have the skills and expertise to help
        you stand out online.{' '}
        <span className="font-extrabold text-white">Contact</span> us today to
        learn more and start transforming your online presence!
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
