import styles from './login.module.css'

function Signup() {
  return (
    <div className={`${styles.loginCon} py-4` }> 
    <div className={`mt-5`}>
    {/* <div className={`${styles.loginCon} py-4`}>
      <div className={`${styles.container} my-5  */}
      <div className={`${styles.register} container mb-5 bg-light text-dark`}>
        <h2 className='text-center'>Sign Up</h2>
        <form className={`${styles.formGroup} form-group`}>
          <label  className={`${styles.formLabel} form-label`}>Name</label>
          <input className={`${styles.formControl} form-control`} type="text"/>
          <label  className={`${styles.formLabel} form-label`}>E-mail</label>
          <input className={`${styles.formControl} form-control`} type="email"/>
          <label  className={`${styles.formLabel} form-label`}>Password</label>
          <input className={`${styles.formControl} form-control`} type="password"/>
          <button className='btn btn-primary my-4 p-2 w-100'>Submit</button>
          <h6 className={`${styles.signup}`}>Already Registered? 
          <a href="/login" className='mx-1'>Login</a> </h6>
        </form>
        <br/>
        <a href="/" style={{float:'right'}}>Back to Home</a>

      </div>
    </div>
    </div>
  )
}

export default Signup