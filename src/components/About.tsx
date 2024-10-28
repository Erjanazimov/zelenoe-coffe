import React from 'react';

const About = () => {
  return (
    <div
      id="about"
      className="container max-w-5xl mx-auto m-8"
    >
      <div className="lg:text-center mr_footer">
        <h2
          className={`text-base text-green-600 font-semibold tracking-wide uppercase`}
          style={{marginLeft: 20}}
        >
          Как нас найти
        </h2>
       <div className="footer_maps">
         <div className="map">
           <iframe
             style={{borderRadius: 8}}
             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2246.254000290483!2d37.64021219269316!3d55.73671560366277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54ae1614a6b9b%3A0x332a8488c6c71b0b!2sKosmodamianskaya%20Naberezhnaya%2C%2046%2F50%2C%20Moskva%2C%20Russia%2C%20115035!5e0!3m2!1sen!2skg!4v1728208931510!5m2!1sen!2skg"
             loading="lazy"
             className="maps_google"
             referrerPolicy="no-referrer-when-downgrade"></iframe>
         </div>
         <div className="footer_text">
           <div>
             <span className="text-black font-medium">Адрес: </span>
             <span className="text-green-500">г. Москва, 115035, Космодамианская
набережная, д. 46-50,</span>
           </div>
           <div>
             <span className="text-black font-medium">Часы работы: </span>
             <span className="text-green-500">с 07:00 до 18:00 ежедневно (кроме выходных и праздники)</span>
           </div>
           <div>
             <span className="text-black font-medium">Наш номер телефон: </span>
             <a className="text-green-500" href="tel:+79895871451">+79895871451</a>
           </div>
           <div>
             <span className="text-black font-medium">E-mail: </span>
             <a className="text-green-500" href="mailto:support@cofexim.com">support@cofexim.com</a>
           </div>
           <div style={{display: "flex"}}>
             <div style={{display: "flex", alignItems: "center" }} className="text-black font-medium">
               <svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                             className="bi bi-whatsapp text-black" viewBox="0 0 16 16">
               <path
                 d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
             </svg> <span style={{marginLeft: 5}}>Whats-app:</span> </div>
             <a className="text-green-500" href="https://wa.me/79778554029" style={{paddingLeft: 5}} >+79778554029</a>
           </div>
         </div>
       </div>
      </div>
    </div>
  );
};
export default About;
