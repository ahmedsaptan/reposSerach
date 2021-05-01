import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

import styles from "./Modal.module.css";
type Props = {
  open: boolean;
  onClose: any;
  addToFav: any;
  repoName: string;
};

const Modal: React.FC<Props> = ({ open, onClose, addToFav, repoName }) => {
  if (!open) return null;
  return ReactDOM.createPortal(
    <div onClick={onClose}>
      <div className={styles.OverLay} />
      <div className={styles.ModalMain} onClick={(e) => e.stopPropagation()}>
        <div className={styles.card}>
          <div className={styles.cardBody}>
            <div>
              <h5>Are you sure to add {repoName} ?</h5>
            </div>
            <div>
              <button
                className={styles.btn + " " + styles.btnSuccess}
                onClick={addToFav}
              >
                Yes
              </button>
              <button
                className={styles.btn + " " + styles.btnDanger}
                onClick={onClose}
              >
                NO
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("portal")!
  );
};

export default Modal;
