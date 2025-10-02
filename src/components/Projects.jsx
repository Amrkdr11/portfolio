import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerContainer: 0.1,
    },
  },
};

export const Projects = () => {
  return (
    <motion.section
      id="projects"
      className="projects"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        My Projects
      </motion.h2>
      <motion.div
        className="project-grid"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
          onClick={() => window.open("https://blckcap101.itch.io/astroventure", "_blank")}
          style={{ cursor: "pointer" }}
        >
          <motion.div
            className="project-image"
            style={{ backgroundImage: "url('/projects/project1.png')" }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          />

          <h3>Astroventure</h3>
          <p>
            Astroventure: Solar System Quest is a mobile game that uses
            interactive learning to boost engagement and understanding of the
            solar system.
          </p>
          <div className="project-tech">
            <span>FYP</span>
            <span>Godot</span>
          </div>
        </motion.div>

        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-image"
            style={{ backgroundImage: "url('/projects/project2.png')" }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          />

          <h3> AI Saas Platform</h3>
          <p>
            A modern Saas platform built with Next JS and OpenAI intergration,
            featureing real-time AI-Powered content generation and analytics
          </p>
          <div className="project-tech">
            <span>Next.js</span>
            <span>Open Ai</span>
            <span>Tailwind CSS</span>
          </div>
        </motion.div>

        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-image"
            style={{ backgroundImage: "url('/projects/project1.png')" }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          />

          <h3> AI Saas Platform</h3>
          <p>
            A modern Saas platform built with Next JS and OpenAI intergration,
            featureing real-time AI-Powered content generation and analytics
          </p>
          <div className="project-tech">
            <span>Next.js</span>
            <span>Open Ai</span>
            <span>Tailwind CSS</span>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};
