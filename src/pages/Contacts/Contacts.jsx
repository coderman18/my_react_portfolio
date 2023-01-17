import React from 'react'
import styles from './Contacts.module.css'

export default function Contacts() {
  return (
    <div className={styles.contacts}>
      <main className="section">
        <div className="container">
            <h1 className="title-1">Contacts</h1>

            <ul className="content-list">
              <li className="content-list__item">
                <h2 className="title-2">Location</h2>
                <p>Moscow, Russia</p>
              </li>
              <li className="content-list__item">
                <h2 className="title-2">Telegram / WhatsApp</h2>
                <p><a href="tel:+79269690922">+7 (926) 969-09-22</a></p>
              </li>
              <li className="content-list__item">
                <h2 className="title-2">Email</h2>
                <p><a href="mailto:freedom-75@mail.ru">freedom-75@mail.ru</a></p>
              </li>
            </ul>
        </div>
      </main>
    </div>
  )
}
