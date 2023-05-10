/* eslint-disable */
import React, { Fragment, Component } from 'react'
import { useRef, useState, useEffect } from 'react'
import useAuth from '../hooks/useAuth'
import './styles.css'
import Home from './BLS/Home'
import Footer from './Footer'
import { Link, useNavigate } from 'react-router-dom'


// Create WebSocket connection
// const socket = new WebSocket('http://https://backend-ahmed-shehata-crm.onrender.com');

// Listen for possible errors
// socket.addEventListener('error', (event) => {
//   console.log('WebSocket error: ', event);
// });
// http://https://backend-ahmed-shehata-crm.onrender.com
const LOGIN_URL = https://backend-ahmed-shehata-crm.onrender.com
// const LOGIN_URL = https://backend-ahmed-shehata-crm.onrender.com
// const LOGIN_URL = new WebSocket('ws://https://backend-ahmed-shehata-crm.onrender.com/api/users/authenticate')
// var LOGIN_URL = new WebSocket("ws:http//https://backend-ahmed-shehata-crm.onrender.com/api/users/authenticate","echo-protocol");
export default function Login() {
  const { setAuth } = useAuth()
  const navigate = useNavigate()
  // navigate('/posts', {state: { test: 'test'}})


  const userRef = useRef()

  // const errRef = useRef();
  // const errRef = useRef<HTMLInputElement>(null); //made a change here
  // var errRef = useRef(null);

  const [user, setUser] = useState('mohamed.alaaeldin')
  const [pwd, setPwd] = useState('1234')
  const [errMsg, setErrMsg] = useState('')
  const [success, setSuccess] = useState(false);
  const [dMSuccess,setDMSuccess] = useState(false)

  useEffect(() => {
    userRef.current.focus()
  }, [])

  useEffect(() => {
    setErrMsg('')
  }, [user, pwd])

  // export function active() {
  //   return fetch("https://api.spotify.com/v1/me", { //omitted headers to keep it clean
  //   })
  //   .then(response => {
  //       if (!repsonse.ok) {
  //           throw new Error("HTTP status " + response.status);
  //       }
  //       return response.text(); // or `.json()` or several others, see #4 above
  //   });
  // }


    window.history.pushState(null, document.title, window.location.href);
    window.addEventListener('popstate', function(event) {
      window.history.pushState(null, document.title, window.location.href);
    });


  const handleSubmit = async (e) => {
    e.preventDefault()
    let bool = false

    return fetch(LOGIN_URL, {
      method: 'POST',
      body: JSON.stringify({ user_name: 'mohamed.alaaeldin', password: '1234' }),
      // body: JSON.stringify({ user_name: user, password: pwd }),
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true
    }).then(async (response) => {
      const res = await response.json()
      try {
        const accessToken = res.data.token
        const userId = res.data.id
        console.log(accessToken)

        // const accessToken = wait res.data;
        // console.log(accessToken);
        setAuth({ user, pwd, accessToken , userId })
        // setUser('')
        // setPwd('')

        // navigate(from,{replace:true})
        // navigate('/Home')
      } catch (err) {
        console.log(err)
      }

      // }catch(err){
      // const response = await response
      if (!response) {
        setErrMsg('There is No Response from the Server')
      } else if (response.status === 400) {
        setErrMsg('Missing Username or Password')
      } else if (response.status === 401) {
        setErrMsg(res.message)
        alert(res.message)
      } else if (
        (response.status === 200 && res.data.position === 'AdminDev') ||
        res.data.position === 'Admin'
      ) {
        switch (res.data.position) {
          case 'AdminDev':
            navigate('/Developer', {
              state: {
                position: res.data.position
              },
              replace: true
            })
            break
          case 'Admin':
            navigate('/Admin', {
              state: {
                position: res.data.position,
                token:res.data.token
              },
              replace: true
            })
            break
        }
      } else if (response.status === 200 && res.data.bl1_id > 0 && res.data.bl2_id > 0) {
        // bool = true;
        switch (res.data.bl1_id + res.data.bl2_id) {
          case 39:
            navigate('/ICU_NICU', { replace: true })
            break
          case 47:
            navigate('/BIOS', { replace: true })
            break
          // case 3 :
          //   navigate('/CONS', { replace: true })
          //   break;
        }
      } else if (response.status === 200 && res.data.status === 'Active') {
        // bool = true;
        switch (res.data.status) {
          case 'Active':
     const userData={
          id: res.data.id,
          first_name: res.data.first_name,
          last_name: res.data.last_name,
          user_name: res.data.user_name,
          user_mail: res.data.user_mail,
          position: res.data.position,
          privilege: res.data.privilege,
          status: res.data.status,
          token: res.data.token,
          created_date: res.data.created_date,
          bl1_id: res.data.bl1_id,
          bl2_id: res.data.bl2_id,
          bl3_id: res.data.bl3_id,
          bl4_id: res.data.bl4_id,
          bl5_id: res.data.bl5_id,
          bl6_id: res.data.bl6_id,
          bl7_id: res.data.bl7_id,
          bu_id: res.data.bu_id

        }
          localStorage.setItem('userData', JSON.stringify(userData))


         console.log('userData item was set in the browser storage ...',localStorage)
         const useridStorage = localStorage.getItem('userData')
         setSuccess(true)
         if(useridStorage.length > 0){
          setSuccess(true)
         }
         
            // navigate('/Home', {
            //   state: userData,
            //   replace: true
            // })
            break
          }
          // DM id is 4
        }    else if (response.status === 200 && res.data.status === 'Active' && res.data.bl1_id === 4) {
              // bool = true;
              switch (res.data.status) {
                case 'Active':
           const userData={
                id: res.data.id,
                first_name: res.data.first_name,
                last_name: res.data.last_name,
                user_name: res.data.user_name,
                user_mail: res.data.user_mail,
                position: res.data.position,
                privilege: res.data.privilege,
                status: res.data.status,
                token: res.data.token,
                created_date: res.data.created_date,
                bl1_id: res.data.bl1_id,
                bl2_id: res.data.bl2_id,
                bl3_id: res.data.bl3_id,
                bl4_id: res.data.bl4_id,
                bl5_id: res.data.bl5_id,
                bl6_id: res.data.bl6_id,
                bl7_id: res.data.bl7_id,
                bu_id: res.data.bu_id
      
              }
                localStorage.setItem('userData', JSON.stringify(userData))
      
      
               console.log('userData item was set in the browser storage ...',localStorage)
               const useridStorage = localStorage.getItem('userData')
               setDMSuccess(true)
               if(useridStorage.length > 0){
                setDMSuccess(true)
               }
               
                  // navigate('/Home', {
                  //   state: userData,
                  //   replace: true
                  // })
                  break
          default:
            navigate('/Unauthorized', { replace: true })
        }
        //     break
        //   case 3:
        //     navigate('/CONS', { replace: true })
        //     break
        //   case 4:
        //     navigate('/DM', { replace: true })
        //     break
        //   case 5:
        //     navigate('/IMP', { replace: true })
        //     break
        //   case 6:
        //     navigate('/SD', { replace: true })
        //     break
        //   case 7:
        //     navigate('/STER', { replace: true })
        //     break
        //   case 8:
        //     navigate('/WCL', { replace: true })
        //     break
        //   case 9:
        //     navigate('/JOT', { replace: true })
        //     break
        //   case 10:
        //     navigate('/CMF', { replace: true })
        //     break
        //   case 11:
        //     navigate('/TRM', { replace: true })
        //     break
        //   case 12:
        //     navigate('/OR', { replace: true })
        //     break
        //   case 13:
        //     navigate('/ENT', { replace: true })
        //     break
        //   case 14:
        //     navigate('/ENTTH', { replace: true })
        //     break
        //   case 15:
        //     navigate('/UR', { replace: true })
        //     break
        //   case 16:
        //     navigate('/LAPA', { replace: true })
        //     break
        //   case 17:
        //     navigate('/GYN', { replace: true })
        //     break
        //   case 18:
        //     navigate('/ERBE', { replace: true })
        //     break
        //   case 19:
        //     navigate('/ICU', { replace: true })
        //     break
        //   case 20:
        //     navigate('/NICU', { replace: true })
        //     break
        //   case 21:
        //     navigate('/SE', { replace: true })
        //     break
        //   case 22:
        //     navigate('/Fluke', { replace: true })
        //     break
        //   case 23:
        //     navigate('/Private_Medical_upper', { replace: true })
        //     break
        //   case 24:
        //     navigate('/Private_Medical_lower', { replace: true })
        //     break
        //   case 25:
        //     navigate('/Private_OR', { replace: true })
        //     break
        //   case 26:
        //     navigate('/Private_Disposable', { replace: true })
        //     break
        // }

        // setErrMsg('Success Login waiting to transfer ....');
      } else {
        setErrMsg('Login Failed')
      }
      userRef.current.focus()
      //  setTimeout(()=>errRef.current.focus(),500) ;
      // setSuccess(bool);
      // navigate('/Home', { replace: bool })
    })

    //         if (!response.ok) {
    //             throw new Error("HTTP status " + response.status);
    //         }
    //         return response.json(); // or `.json()` or several others, see #4 above
    //     });

    // }

    // const response = await  fetch (LOGIN_URL, {
    //      method: "POST",
    //      body: JSON.stringify({user_name : user, password : pwd}),
    //      headers: { 'Content-Type': 'application/json' },
    //      withCredentials: true
    // })
    // .then((response) => console.log(response.json()))

    // if(result.message === "SUCCESS"){
    //   alert(“You are logged in.”);
    //   this.goToMain();
    //  } else {
    //      alert(“Please check your login information.”);
    //  }

    // console.log(JSON.stringify(response.data));
    //     const accessToken = response.data.token;
    //     // const roles=response.data.roles;
    //     setAuth({user, pwd, accessToken});
    //     setUser('');
    //     setPwd('');
    // setSuccess(true);

    // }
    // }catch(err){
    //   const response = await response
    //   if(!err.response){
    //     setErrMsg(`${response.message.text()}`);
    //     } else if (err.response.status === 400) {
    //     setErrMsg('Missing Username or Password');
    //     } else if (err.response.status === 401) {
    //              setErrMsg('Unauthorized');
    //     } else {
    //        setErrMsg('Login Failed');
    //     }
    //     userRef.current.focus();
    //   //  setTimeout(()=>errRef.current.focus(),500) ;
    // }

    // const response = await axios({
    //   method: 'post',
    //   url: https://backend-ahmed-shehata-crm.onrender.com,
    //   data: {
    //     user_name: user,
    //     password: pwd
    //   }
    // });

    // status	"Active"


  }
      // <Home/>
  return (
        <Fragment>
    {success ? (navigate('/home',{replace:false})
    ) : dMSuccess ? (navigate('/homeDM')) : (
    <div className="mainDiv">
      <h1 className="title">PEN</h1>
      <div className={"loginCard"} style={{width:'30%', position:'relative',display:'flex',left:'35%',top:'2rem'}}>
        <form className="container" onSubmit={handleSubmit}>
          <p>{errMsg}</p>
          <h1>Login</h1>

          <label htmlFor="email" className="label">
            <b>User Name</b>
          </label>
          <input
            type="text"
            placeholder="just press Sign in please"
            id="userName"
            ref={userRef}
            autoComplete="off"
            onChange={(e) => setUser(e.target.value)}
//               value="just press Sign In please"
              // mohamed.alaaeldin
            value={user}
            name="email"
            required
          />

          <label htmlFor="psw" className="label">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="psw"
            id="password"
            onChange={(e) => setPwd(e.target.value)}
            value="1234"
            // value={pwd}
            required
          />
          <button type="submit" className="btn" style={{backgroundColor:'gray' , fontSize:'20pt',color:'white',fontFamily:'Bold'}}>
          Sign in
          </button>
        </form>
        <p className="signUpLink">
          Need an Account?
          <span className="line" >
            {/*put router link here*/}
            <a  href="#">Sign Up</a>
          </span>
        </p>
      </div>

      <Footer />
    </div>
           )}

    </Fragment>
  )
}
