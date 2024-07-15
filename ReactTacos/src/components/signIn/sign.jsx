

export const SignIn =() => {
  
    return ( 
        
                <div className="container-fluid" style={{ color: 'black', backgroundColor: '#c75b0e' }}>
                <div className="container text-center p-5" style={{ color: '#c75b0e', backgroundColor: 'black' }}> {/*mettre un fond ou une img*/}
                    <div className="">
                        <form className="login">
                            <span className="login">
                                Login
                            </span>

                            <div className="wrap" data-validate = "Username is required">
                                <span className="label">Adresse mail</span>
                                <input className="" type="text" name="username" placeholder="Entrez votre adresse mail :" />
                                <span className="" data-symbol="&#xf206;"></span>
                            </div>

                            <div className="wrap" data-validate="Password is required">
                                <span className="label">Mot de passe :</span>
                                <input className="" type="password" name="pass" placeholder="Entrez votre mot de passe" />
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
                                    <button className="login-form-btn">
                                        Login
                                    </button>
                                </div>
                            </div>

                            <div className="txt1 text-center p-t-54 p-b-20">
                                <span>
                                    Or Sign Up Using
                                </span>
                            </div>

                            <div className="flex-c-m">
                                <a href="#" className="login100-social-item bg1">
                                    <i className="fa fa-facebook"></i>
                                </a>

                                <a href="#" className="login100-social-item bg2">
                                    <i className="fa fa-twitter"></i>
                                </a>

                                <a href="#" className="login100-social-item bg3">
                                    <i className="fa fa-google"></i>
                                </a>
                            </div>

                            <div className="flex-col">
                                <span className="txt1">
                                    Or Sign Up Using
                                </span>

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