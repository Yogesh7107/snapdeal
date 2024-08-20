import React, { useState } from 'react';
import styles from '../styles/signin.module.css'; // Import CSS Module
import GoogleButton from 'react-google-button';
import { GoogleAuthProvider, signInWithPopup, sendSignInLinkToEmail } from 'firebase/auth';
import { auth } from './Firebse'; // Ensure this path is correct and the file is properly set up
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const provider = new GoogleAuthProvider();

const Signin = () => {
  const [email, setEmail] = useState("");
 

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    const actionCodeSettings = {
      url: 'https://www.example.com/finishSignUp?cartId=1234', // Ensure this URL is whitelisted
      handleCodeInApp: true,
      iOS: {
        bundleId: 'com.example.ios'
      },
      android: {
        packageName: 'com.example.android',
        installApp: true,
        minimumVersion: '12'
      },
      dynamicLinkDomain: 'example.page.link'
    };
    sendSignInLinkToEmail(auth, email, actionCodeSettings)
      .then((res) => {
        alert("Log In Link Sent Successfully 😉");
        console.log(res.operationType);
        window.localStorage.setItem('emailForSignIn', email);
      })
      .catch((err) => alert(err.message));
  };

  
  const handleClick = () => {
    signInWithPopup(auth, provider)
      .then((res) => {
        const userName = res.user.displayName; // Get the user's name
        toast(`welcome ${userName}!`)
        ;
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.message); // Display error message in a toast
      });
  };
  

  return (
    <div>

      <div className={styles.container}>
        <div className={`card ${styles.card}`} style={{ maxWidth: "700px" }}>
          <div className="row g-0">
            <div className={`col-md-6 ${styles.leftPanel}`}>
              <div className="mb-4">
                <img src="https://img.icons8.com/ios-filled/50/000000/marker.png" alt="Manage Your Orders" />
                <h5>MANAGE YOUR ORDERS</h5>
                <p>Track orders, manage cancellations & returns.</p>
              </div>
              <div>
                <img src="https://img.icons8.com/ios-filled/50/000000/alarm.png" alt="Awesome Offers Updates" />
                <h5>AWESOME OFFERS UPDATES FOR YOU</h5>
                <p>Be first to know about great offers and save.</p>
              </div>
            </div>
            <div className={`col-md-6 ${styles.rightPanel}`}>
              <h5 className="mb-4">Login/Sign Up On Snapdeal</h5>
              <p className="mb-4">Please provide your Mobile Number or Email to Login/Sign Up on Snapdeal</p>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Mobile Number / Email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <button type="submit" className="btn btn-danger w-100 mb-3">
                  CONTINUE
                </button>
                <p className="mb-3">or Login Using</p>
                <GoogleButton onClick={handleClick} />
              </form>
            </div>
          </div>
        </div>
        <ToastContainer style={{position:'absolute',top:"25%",left:"50%",transform:"translate(-50%,-50%)"}} />
      </div>
    </div>
  );
};

export default Signin;
