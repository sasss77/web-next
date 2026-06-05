"use client";
import useLoginForm from "./userLoginForm";


 // client-side
export default function HookPage() {
    const { email, password, handleEmailChange, handleSubmit, handlePasswordChange } = useLoginForm();
    // const hook = useLoginForm();
    // hook.email, hook.handleEmailChange, hookPropertyMap.handleSubmit
    return (
        <div>
            <h1>Login Form</h1>
            <input type="email"
                value={email}
                onChange={handleEmailChange}
                className="border p-2 rounded"
            />
            <input type="password"
                value={password}
                onChange={handlePasswordChange}
                className="border p-2 rounded"
            />
            <button onClick={handleSubmit}> Submit </button>
        </div>
    );
}