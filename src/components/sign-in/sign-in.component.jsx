import React from "react";

import "./sign-in.styles.scss";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
        };
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(
                email,
                password
            );
            this.setState({ email: "", password:""});
        } catch(err) {
            console.log(err);
        }

        this.setState({ email: "", password: "" });
    };

    handleChange = (event) => {
        const { value, name } = event.target;

        this.setState({ [name]: value });
    };

    render() {
        const { email, password } = this.state;
        return (
            <div className="sign-in">
                <h2>I already have an acoount</h2>
                <span>Sign In with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        handleChange={this.handleChange}
                        type="email"
                        name="email"
                        value={email}
                        label="Email"
                        required
                    />

                    <FormInput
                        handleChange={this.handleChange}
                        type="password"
                        name="password"
                        value={password}
                        label="Password"
                        required
                    />

                    <div className="buttons">
                        <CustomButton type="submit">Sign in</CustomButton>
                        <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn>
                            {" "}
                            Sign In With Google{" "}
                        </CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignIn;
