import React, { useState } from "react";

import { signInWithEaP } from "../../../../utils/firebase";

import { SignInContainer, FormContainer } from './sign-in.section.style';
import AuthTitle from "../../components/auth-title/auth-title.component";
import Input from "../../components/input/input.component";

const defaultFormFields = {
    email: '',
    password: '',
}

const SignInSection = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    const resetForm = () => {
        setFormFields(defaultFormFields)
    };

    const handleChange = (event) => {
        const { type, value } = event.target;
        setFormFields({ ...formFields, [type]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            await signInWithEaP(email, password);
            resetForm();
        } catch (error) {
            switch (error.code) {
                case 'auth/user-not-found':
                    alert('we dont have this user');
                    break;
                case 'auth/wrong-password':
                    alert('password not correct');
                    break;
                default:
                    console.log('oops, here is some error', error)
            }
        }
    };

    return (
        <SignInContainer>
            <AuthTitle name='Sign In' />
            <FormContainer onSubmit={handleSubmit}>
                <Input id='email' required name='Email:' type='email' value={email} onChange={handleChange} />
                <Input id='sign-in-password' required name='Password:' value={password} type='password' onChange={handleChange} />
                <div>
                    <button type="submit">Sign In</button>
                </div>
            </FormContainer>
        </SignInContainer>
    )
}

export default SignInSection;