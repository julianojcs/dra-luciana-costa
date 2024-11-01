/* /components/Carousel.jsx */
'use client'
import { useState } from 'react';
import Image from 'next/image';
import { FaChevronCircleRight, FaChevronCircleLeft } from 'react-icons/fa';
import styles from './carousel.module.css';
import img1 from '@/public/images/clinic/1.jpg';
import img2 from '@/public/images/clinic/2.jpg';
import img3 from '@/public/images/clinic/3.jpg';
import img4 from '@/public/images/clinic/4.jpg';
import img5 from '@/public/images/clinic/5.jpg';
import img6 from '@/public/images/clinic/6.jpg';
import img7 from '@/public/images/clinic/7.jpg';
import img8 from '@/public/images/clinic/8.jpg';
import img9 from '@/public/images/clinic/9.jpg';
import img10 from '@/public/images/clinic/10.jpg';
import img11 from '@/public/images/clinic/11.jpg';
import img12 from '@/public/images/clinic/12.jpg';
import img13 from '@/public/images/clinic/13.jpg';
import img14 from '@/public/images/clinic/14.jpg';

const Carousel = ({ img }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const loadedImages = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14];
  const images = [];

  img.map((image, index) => {
    images.push({
      picture: loadedImages[index],
      subtitle: image.subtitle,
    });
  });


  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const handleIndicatorClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className={styles.carousel}>
      {/* <button className={styles.arrow} onClick={handlePrevClick}>&lt;</button> */}
      <FaChevronCircleLeft className={styles.arrow} onClick={handleNextClick} />
      <div className={styles.imageContainer}>
        {images.map((image, index) => (
          <div key={index} className={`${styles.imageWrapper} ${index === currentIndex ? styles.active : ''}`} >
            {index === currentIndex && (
              <>
                <Image
                  src={image.picture}
                  alt={image.subtitle}
                  layout="cover"
                  aspect-ratio='552 / 311'
                  priority
                />
                <p className={styles.caption}>{image.subtitle}</p>
              </>
            )}
          </div>
        ))}
      </div>
      {/* <button className={styles.arrow} onClick={handleNextClick}>&gt;</button> */}
      <FaChevronCircleRight className={styles.arrow} onClick={handleNextClick} />
      <div className={styles.indicators}>
        {images.map((_, index) => (
          <a
          key={index}
          href="#"
          onClick={(e) => {
            e.preventDefault();
            handleIndicatorClick(index);
          }}
          className={`${styles.indicator} ${index === currentIndex ? styles.activeIndicator : ''}`}
        ></a>
        ))}
      </div>
    </div>
  );
};

export default Carousel;