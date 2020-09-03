import React from 'react';

import '../styles/faqs.css';

const FAQs = () => {
  return (
    <section className="faqs">
      <div className="container">
        <div className="faqs_wrapper">
          <div className="faqs_sidebar">
            <nav>
              <ul className="sidebar_list">
                <li className="list_item">General</li>
                <li className="list_item">Trust & Safety</li>
                <li className="list_item">Services</li>
                <li className="list_item">Billing</li>
                <li className="list_item">Delivery</li>
              </ul>
            </nav>
          </div>
          <div className="faqs_main">
            <h2 className="faqs_title">Questions? Look here.</h2>
            <p className="faqs_subtitle">Can’t find an answer? Email devondemandco@gmail.com</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQs;