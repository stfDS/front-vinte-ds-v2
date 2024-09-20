import "./signupPage.css"
import SignupForm from "../../components/Signup/SignupForm"

const SignupPage = () => {
  return (
    <main className="signup-main">
      <div className="signup-title">
        <h1>Inscription</h1>
      </div>
      <SignupForm />
    </main>
  )
}

export default SignupPage
