import styles from '../styles/Home.module.css'
import React from 'react'
import Paragraph from '../components/Paragraph'

const paragraphText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed porttitor lorem. Proin non est dictum, tempor lacus at, volutpat mauris. Phasellus consectetur eros erat, nec scelerisque massa elementum in. Sed sagittis lorem at lectus fermentum, id convallis tortor efficitur. Vivamus sollicitudin bibendum odio, quis ornare velit sodales congue. Curabitur auctor sed nunc id porta. Aenean nulla est, rutrum a orci nec, finibus rhoncus ex.'

export default function Faqs() {
    return (
        <div className={styles.body}>
            <Paragraph header="FAQ 1" text={paragraphText} />
            <Paragraph header="FAQ 2" text={paragraphText} />
        </div>
    )
}