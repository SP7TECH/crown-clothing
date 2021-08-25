import React from "react";

import FormInput from "../form-input/form-input.component";

import CustomButton from "../custom-button/custom-button.component";

import { user, createUserProfileDocument } from "../../firebase/firebase.utils";

import "./sign-up.styles.scss";

class SignUp extends React.Component {
    constructor() {
        super();

        this.state = {
            displayName: "",
            email: "",
            password: "",
            confirmPassword: "",
        };
    }

    render() {
        const { displayName, email, password, confirmPassword } = this.state;
        return (
            <div className="sign-up">
                <h2 className="title">I do not have an account</h2>
                <span>Sign up with email and password</span>

                <form className="sign-up-form" onClick={handleSubmit}>
                    <FormInput
                        handleChange={this.handleChange}
                        type="text"
                        name="displayName"
                        value={displayName}
                        label="Display Name"
                        required
                    />
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
                    <FormInput
                        handleChange={this.handleChange}
                        type="password"
                        name="confirmPassword"
                        value={confirmPassword}
                        label="Confirm Password"
                        required
                    />
                    <CustomButton type="submit">SIGN UP</CustomButton>
                </form>
            </div>
        );
    }
}
