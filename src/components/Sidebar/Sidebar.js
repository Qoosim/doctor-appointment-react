import React from "react";
import { NavLink } from "react-router-dom";
import { navLinks } from "./navLinks";
import { socialLinks } from "./socialLinks";
import styles from "./sidebar.module.css";

const Sidebar = () => {
  const handleLogout = () => {
    console.log("I am loggin out.");
  };

  return (
    <nav className={styles.sidebarContainer}>
      <div className={styles.containerWrapper}>
        <div className={styles.imageContainer}>
          <img
            src="/assets/logo.png"
            alt="logo"
            className={styles.sidebarLogo}
          />
        </div>
        <ul className={styles.navigation}>
          {navLinks.map((link) => {
            const { id, route, children } = link;
            return (
              <li key={id} className={styles.listItem}>
                <NavLink
                  to={route}
                  className={(navLink) =>
                    navLink.isActive ? styles.active : styles.nonActive
                  }
                >
                  {children}
                </NavLink>
              </li>
            );
          })}
        </ul>
        <div className={styles.socialLogoutDiv}>
          <div className={styles.logoutDiv}>
            <button
              type="button"
              className={styles.logoutLink}
              onClick={() => handleLogout()}
            >
              Logout
            </button>
          </div>
          <ul className={styles.socialLinksDiv}>
            {socialLinks.map((link) => {
              const { id, url, icon } = link;
              return (
                <li key={id}>
                  {/* eslint-disable-next-line react/jsx-no-target-blank */}
                  <a
                    href={url}
                    className={styles.socialLink}
                    target="_blank"
                    rel="noopener"
                  >
                    {icon}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className={styles.footer}>
          <footer>
            <p>&copy;2022</p>
          </footer>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
