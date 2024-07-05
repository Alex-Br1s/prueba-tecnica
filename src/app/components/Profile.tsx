'use client'
import React, {useState} from "react";
import Image from "next/image";
import styles from "../styles/Profile.module.css";
import imgBanner from "../../../public/banner-alex.jpg";
import imgProfile from "../../../public/img-profile.webp";
import Modal from "./Modal";

const Profile = () => {
  const [openModal, setOpenModal] = useState(false)

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <section className={styles.container}>
      <div className={styles.containerImgBanner}>
        <div className={styles.subContainerImgBanner}>
          <Image
            className={styles.imageBanner}
            alt="banner-profile"
            width={300}
            height={100}
            src={imgBanner}
          />
        </div>
        <div className={styles.containerProfile}>
          <div className={styles.containerImgProfile}>
            <Image
              className={styles.imageProfile}
              alt="imagen-profile"
              src={imgProfile}
            />
          </div>
        
          
          <div className={styles.containerInfoUser}>
            <h1 className={styles.name}>Alexander Bris</h1>
            <p className={styles.subName}>Full-stack developer </p>
            <button onClick={handleOpenModal} className={styles.contacto}>Contactame</button>
          </div>
        </div>
        <hr />
      </div>
      { openModal && <Modal onClose={handleCloseModal}/>}
    </section>
  );
};

export default Profile;
