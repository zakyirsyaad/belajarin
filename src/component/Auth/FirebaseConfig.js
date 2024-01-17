import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup } from 'firebase/auth';
import { FacebookAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import toast from 'react-hot-toast';

const firebaseConfig = {
    apiKey: "AIzaSyAx_TjUwKVveiyLjlmKuQHayjLMNhyYaMw",
    authDomain: "belajarin-ac6fd.firebaseapp.com",
    projectId: "belajarin-ac6fd",
    storageBucket: "belajarin-ac6fd.appspot.com",
    messagingSenderId: "256761147201",
    appId: "1:256761147201:web:f360f4bb7b1d82ad0fbbc0",
    measurementId: "G-367E7RGK43"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();
const fbProvider = new FacebookAuthProvider();

const handleSignIn = async (result) => {
    const { uid, displayName, email, photoURL } = result.user;
    const idTokenResult = await result.user.getIdTokenResult();
    const accessToken = idTokenResult.token;

    const postData = {
        uid,
        nama: displayName,
        email,
        profilePic: photoURL,
    };

    localStorage.setItem('nama', displayName);
    localStorage.setItem('email', email);
    localStorage.setItem('Foto', photoURL);
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('uid', uid);

    try {
        const response = await fetch('https://belajarin-tau.vercel.app/member/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(postData),
        });


        if (!response.ok) {
            throw new Error('Failed to send user data to the server');
        } else {
            window.location.reload();
            const responseData = await response.json();
            console.log('Server response:', responseData);
        }
    } catch (error) {
        console.error('Error during data submission:', error);
    }
};

export const signInWithFacebook = () => {
    signInWithPopup(auth, fbProvider)
        .then(handleSignIn)
        .catch((error) => {
            console.error('Error during Facebook sign-in:', error);
        });
};

export const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
        .then(handleSignIn)
        .then(() => {
            toast.success('Sign-in with Google successful');
        })
        .catch((error) => {
            console.error('Error during Google sign-in:', error);
        });
};
