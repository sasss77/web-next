import { useState, ChangeEvent } from "react";

export default function useLoginForm() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }
    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }
    const handleSubmit = () => {
        alert(`email: ${email}, password: ${password}`);
    }
    return {
        email, password, handleEmailChange, handlePasswordChange, handleSubmit
    };
    
}