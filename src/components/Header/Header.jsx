import React from 'react';
import styles from './header.module.css';

function Header({ nama, alamat, gantiNama, text, umur }) {
  return (
    <>
      <div className={`${styles.text} App ${styles['text-color']}`}>
        Ini Halaman Header, Nama Saya {nama}, saya tinggal di {alamat}, saya ber
        umur {umur} tahun
      </div>
      {text}
      <input type="text" value={nama} onChange={gantiNama} />
    </>
  );
}

function NewComponent(props) {
  return (
    <>
      <h3>ini New Component Dari File Headernya</h3>
    </>
  );
}

export { NewComponent, Header };
