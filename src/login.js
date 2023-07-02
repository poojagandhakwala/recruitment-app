import styles from './login.module.css'

function Login() {
  return (
    <div className={`${styles.loginCon} py-4`}>
      <div className={`${styles.container} my-5 container 
      bg-light text-dark`}>
        <h2 className='text-center'>Log In</h2>
        <form className={`${styles.formGroup} form-group`}>
          <label  className={`${styles.formLabel} form-label`}>E-mail</label>
          <input className={`${styles.formControl} form-control`} type="email"/>
          <label  className={`${styles.formLabel} form-label`}>Password</label>
          <input className={`${styles.formControl} form-control`} type="password"/>
          <button className='btn btn-primary my-4 p-2 w-100'>Submit</button>
          <h6 className={`${styles.signup} `}>Didn't Register? 
          <a href="/signup" className='mx-1'>Sign Up</a> </h6>
        </form>
        <br/>
        <a href="/" style={{float:'right'}}>Back to Home</a>
      </div>
    </div>
  )
}

export default Login