

export default function Contact(props) {
    console.log(props)
    return (
        <article className="contact-card">
            <img
                src={props.img}
                alt="Photo of Mr. Whiskerson"
            />
            <h3>{props.name}</h3>
            <div className="info-group">
                <img
                    src="./src/assets/phone-icon.png"
                    alt="phone icon"
                />
                <p>{props.phone}</p>
            </div>
            <div className="info-group">
                <img
                    src="./src/assets/mail-icon.png"
                    alt="mail icon"
                />
                <p>{props.email}</p>
            </div>
        </article>
    )
}



// export default function Contact() {
//   return (
//     <div className="contacts">
//       <article className="contact-card">
//         <img src="./src/assets/mr-whiskerson.png" alt="" />
//         <h3>Mr. Whiskerson</h3>
//         <div className="info-group">
//           <img src="./src/assets/phone-icon.png" alt="" />
//           <p>(212) 555-1234</p>
//         </div>
//         <div className="info-group">
//           <img src="./src/assets/mail-icon.png" alt="mai-icon" />
//         </div>
//         <p>mr.whiscorson@gmail.com</p>
//       </article>
//       <article className="contact-card">
//         <img src="./src/assets/fluffykins.png" alt="fluffykins" />
//         <h3>Fluffykins</h3>
//         <div className="info-group">
//           <img src="./src/assets/phone-icon.png" alt="" />
//           <p>(212) 555-2345</p>
//         </div>
//         <div className="info-group">
//           <img src="./src/assets/mail-icon.png" alt="mai-icon" />
//         </div>
//         <p>flufF@me.com</p>
//       </article>
//       <article className="contact-card">
//         <img src="./src/assets/felix.png" alt="photo of felix" />
//         <h3>Felix</h3>
//         <div className="info-group">
//           <img src="./src/assets/phone-icon.png" alt="" />
//           <p>(212) 555-4567</p>
//         </div>
//         <div className="info-group">
//           <img src="./src/assets/mail-icon.png" alt="mai-icon" />
//         </div>
//         <p>thecat@hotmail.com</p>
//       </article>
//       <article className="contact-card">
//         <img src="./src/assets/pumpkin.png" alt="photo of pumpkin" />
//         <h3>Pumokin</h3>
//         <div className="info-group">
//           <img src="./src/assets/phone-icon.png" alt="" />
//           <p>(0800) CAT KING</p>
//         </div>
//         <div className="info-group">
//           <img src="./src/assets/mail-icon.png" alt="mai-icon" />
//         </div>
//         <p>pumpkin@scrimba.com</p>
//       </article>
//     </div>
//   )
// }

