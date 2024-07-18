 


export const SignIn =() => {
  
    return ( 
        
                <div className="container-fluid rounded" style={{ color: 'black', backgroundColor: '#c75b0e' }}>
                <div className="container text-center rounded p-5" style={{ color: '#c75b0e', backgroundColor: 'black' }}> {/*mettre un fond ou une img*/}
                    <div className="p-5">
                        <form className="login p-5">
                            <span className="loginTitle p-5">
                                Login
                            </span>

                            <div className="wrap p-5" data-validate = "Username is required">
                                <span className="label">Adresse mail :</span><br></br>
                                <input className="rounded" type="text" name="username" placeholder="Entrez votre mail" />
                                <span className="" data-symbol="&#xf206;"></span>
                            </div>

                            <div className="wrap p-5" data-validate="Password is required">
                                <span className="label">Mot de passe :</span><br></br>
                                <input className="rounded" type="password" name="pass" placeholder="Mot de passe" />
                                <span className="" data-symbol="&#xf190;"></span>
                            </div>
                            
                            <div className="text-right">
                                <a href="#">
                                    Forgot password?
                                </a>
                            </div>
                            
                            <div className="container-login-form-btn">
                                <div className="wrap-login-form-btn">
                                    <div className="login-form-bgbtn"></div>
                                    <button className="buttonLogin login-form-btn rounded">
                                        Login
                                    </button>
                                </div>
                            </div>

                            <div className="SignUpUsing">
                                <span>
                                    Or Sign Up Using
                                </span>
                            </div>

                            <div className="flex-c-m">
                                <a href="#" className="login100-social-item bg1">
                                    <i className="fa fa-facebook"><img src="/public/icones/facebook.svg" alt="Facebook Icon" /></i>
                                </a>

                                <a href="#" className="login100-social-item bg2">
                                    <i className="fa fa-instagram"><img src="/public/icones/instagram.svg" alt="Instagram Icon" /></i>
                                </a>

                                <a href="#" className="login100-social-item bg3">
                                    <i className="fa fa-google"><img src="/public/icones/gmail.svg" alt="Gmail Icon" /></i>
                                </a>
                            </div>

                            <div className="flex-col">
                                <span className="SignUp">
                                    Or 
                                </span><br></br>

                                <a href="#" className="txt2">
                                    Sign Up
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
    );
  }

export default SignIn;