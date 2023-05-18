// import React from 'react';
// import { MDBRow, MDBCol, MDBInput, MDBTextArea, MDBBtn } from 'mdb-react-ui-kit';

// export default function MapContainer() {
//   return (
//     <section className='border text-center mb-4'>
//       <h3 className='mb-5 title'>Contact us</h3>
//       <div className='row'>
//         <div className='col-lg-5'>
//           <iframe
//             src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3373.060590601364!2d-9.2364699!3d32.2833489!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdac2729f95ecd1f%3A0xb980d1b79ed4204b!2sDevosystem!5e0!3m2!1sen!2sma!4v1684154190013!5m2!1sen!2sma"
//             className='h-100 w-100'
//             style={{ border: '0' }}
//             loading='lazy'
//           ></iframe>
//         </div>
//         {/* <div className='col-lg-7'>
//           <form>
//             <div className='row'>
//               <div className='col-md-9'>
//                 <MDBRow className='mb-4'>
//                   <MDBCol>
//                     <MDBInput label='First name' id='form3FirstName' />
//                   </MDBCol>
//                   <MDBCol>
//                     <MDBInput label='Email Address' id='form3Email' />
//                   </MDBCol>
//                 </MDBRow>
//                 <MDBInput
//                   type='text'
//                   label='Subject'
//                   id='form3Subject'
//                   v-model='form3Subject'
//                   wrapperClass='mb-4'
//                 />
//                 <MDBTextArea label='Message' id='form3Textarea' wrapperClass='mb-4' />
//                 <MDBBtn color='primary' className='mb-4'>
//                   {' '}
//                   Send{' '}
//                 </MDBBtn>
//               </div>
//               <div className='col-md-3'>
//                 <ul className='list-unstyled'>
//                   <li>
//                     <i className='fas fa-map-marker-alt fa-2x text-primary'></i>
//                     <p>
//                       <small>New York, NY 10012, USA</small>
//                     </p>
//                   </li>
//                   <li>
//                     <i className='fas fa-phone fa-2x text-primary'></i>
//                     <p>
//                       <small>+ 01 234 567 89</small>
//                     </p>
//                   </li>
//                   <li>
//                     <i className='fas fa-envelope fa-2x text-primary'></i>
//                     <p>
//                       <small>contact@gmail.com</small>
//                     </p>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </form>
//         </div> */}
//       </div>
//     </section>
//   );
// }


import React from 'react';
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';

export default function MapContainer() {
  return (
    
    <MDBRow className='w-100'>
      <h1 className='title'>Our Localisation</h1>
      <MDBCol lg='6' className='my-4'>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3373.060590601364!2d-9.2364699!3d32.2833489!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdac2729f95ecd1f%3A0xb980d1b79ed4204b!2sDevosystem!5e0!3m2!1sen!2sma!4v1684154190013!5m2!1sen!2sma'
          className='w-100'
          height='400'
          loading='lazy'
        ></iframe>
      </MDBCol>
      <MDBCol lg='6' className='my-4 d-flex align-items-center'>
        <div>
          <h3 style={{fontFamily:'Times New Roman',fontWeight:'bold'}}>NOTRE PARTENAIRE AU SÉNÉGAL ET GAMBIE</h3>
          <br />
         <h5>SIMAKHA ET FRERES: Villa m-16/B Sud foire Cité Magistrat Dakar-Sénégal</h5>
         <h6>Email: symakha@devosystem.org</h6>
         <h6>Mobile: +221 76 359 80 84</h6>
         <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere amet, exercitationem eveniet pariatur odio rerum fugit voluptas at quaerat aperiam quis, dolores iure architecto eaque placeat facilis? Nihil, quia animi?</p>
        </div>
      </MDBCol>
    </MDBRow>
  );
}