import React from 'react';
import AddToCart from '../AddToCart';
import styles from './ProjectCard.module.css';

const ProjectCard = () => (
    <div className={styles.card}>
        ProjectCard
        <AddToCart />
    </div>
)

export default ProjectCard