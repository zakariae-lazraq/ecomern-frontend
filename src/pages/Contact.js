import React from 'react';
import { MDBInput, MDBCheckbox, MDBBtn, MDBValidation, MDBValidationItem ,MDBTextArea} from 'mdb-react-ui-kit';

export default function Contact() {
  return (
    <>
    <MDBValidation noValidate id='form' className='FormContainer' >
      <h1 className='contact_title'>Contact us</h1>

      <MDBValidationItem invalid feedback='Please provide your name.'>
        <h6 style={{marginTop:"20px"}}>Name</h6>
        <MDBInput  v-model='name' wrapperClass='mb-4' required placeholder='Your Name' className='textForm'/>
      </MDBValidationItem>

      <MDBValidationItem invalid feedback='Please provide your email.'>
      <h6 style={{marginTop:"20px"}}>Email</h6>
        <MDBInput type='email'  v-model='email' wrapperClass='mb-4' required placeholder='Your Mail' className='textForm'/>
      </MDBValidationItem>

      <MDBValidationItem invalid feedback='Please provide mail subject.'>
      <h6 style={{marginTop:"20px"}}>Subject</h6>
        <MDBInput  v-model='subject' wrapperClass='mb-4' placeholder='Your Subject' required className='textForm' />
      </MDBValidationItem>

      <MDBValidationItem invalid feedback='Please provide a message text.'>
      <h6 style={{marginTop:"20px"}}>Message</h6>
        <MDBTextArea wrapperClass='mb-4'  required placeholder='Tap Your Message here !' className='textForm'/>
      </MDBValidationItem>

      <MDBValidationItem feedback=''>
        <MDBCheckbox wrapperClass='d-flex justify-content-center' label='Send me copy' />
      </MDBValidationItem>

      <MDBBtn type='submit' color='primary' block className='my-4'>
        Send
      </MDBBtn>
    </MDBValidation>
    <div className="InfoForm">
            <ul className="list-unstyled mb-0">
              <li><i className="fas fa-map-marker-alt fa-2x"></i>
                <p>San Francisco, CA 94126, USA</p>
              </li>
              <li><i className="fas fa-phone mt-4 fa-2x"></i>
                <p>+ 01 234 567 89</p>
              </li>
              <li><i className="fas fa-envelope mt-4 fa-2x"></i>
                <p>contact@mdbootstrap.com</p>
              </li>
            </ul>
          </div> 
          </>
  );
}





// function Contact() {
//     return (
//       <section className="mb-4">
//         <h2 className="h1-responsive font-weight-bold text-center my-4">Contact us</h2>
//         <p className="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within a matter of hours to help you.</p>
  
//         <div className="row">
//           <div className="col-md-9 mb-md-0 mb-5">
//             <form id="contact-form" name="contact-form" action="mail.php" method="POST">
//               <div className="row">
//                 <div className="col-md-6">
//                   <div className="md-form mb-0">
//                     <input type="text" id="name" name="name" className="form-control" />
//                     <label htmlFor="name" className="">Your name</label>
//                   </div>
//                 </div>
//                 <div className="col-md-6">
//                   <div className="md-form mb-0">
//                     <input type="text" id="email" name="email" className="form-control" />
//                     <label htmlFor="email" className="">Your email</label>
//                   </div>
//                 </div>
//               </div>
//               <div className="row">
//                 <div className="col-md-12">
//                   <div className="md-form mb-0">
//                     <input type="text" id="subject" name="subject" className="form-control" />
//                     <label htmlFor="subject" className="">Subject</label>
//                   </div>
//                 </div>
//               </div>
//               <div className="row">
//                 <div className="col-md-12">
//                   <div className="md-form">
//                     <textarea type="text" id="message" name="message" rows="2" className="form-control md-textarea"></textarea>
//                     <label htmlFor="message">Your message</label>
//                   </div>
//                 </div>
//               </div>
//             </form>
//             <div className="text-center text-md-left">
//               <button className="btn btn-primary" onClick={() => document.getElementById("contact-form").submit()}>Send</button>
//             </div>
//             <div className="status"></div>
//           </div>
//           {/* <div className="col-md-3 text-center">
//             <ul className="list-unstyled mb-0">
//               <li><i className="fas fa-map-marker-alt fa-2x"></i>
//                 <p>San Francisco, CA 94126, USA</p>
//               </li>
//               <li><i className="fas fa-phone mt-4 fa-2x"></i>
//                 <p>+ 01 234 567 89</p>
//               </li>
//               <li><i className="fas fa-envelope mt-4 fa-2x"></i>
//                 <p>contact@mdbootstrap.com</p>
//               </li>
//             </ul>
//           </div> */}
//         </div>
//       </section>
//     );
//   }
  
  