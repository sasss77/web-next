"use server"; // server side api call 
import { LoginFormData } from "@/app/example/react-hookform-zod/_components/schema";
import { register, login } from "../api/auth";
import { RegisterFormData } from "@/app/(auth)/_components/schema";
import { setTokenCookie, storeUserData } from "../cookies";


export const handleRegisterUser = async (data: RegisterFormData) => {
    try {
        // how to handle from component and how to send to component 
        const result = await register(data);
        if (result) {
            return { success: true, message: result.message, data: result.data };
        } else {
            return { success: false, message: result.message || "Registration Failed" };
            
        }
    } catch (error: Error | any) {
        return { success: false, message: error?.message || "Registration Failed" };
    }
}


export const handleLoginUser = async (data: LoginFormData) => {
    try {
        // how to handle from component and how to send to component 
        const result = await login(data);
        //set cookie
        const user = result.data.user;
        const token = result.data.token;
        await setTokenCookie(token);
        await storeUserData(user);
        
        if (result) {
            return { success: true, message: result.message, data: result.data };
        } else {
            return { success: false, message: result.message || "Login Failed" };
            
        }
    } catch (error: Error | any) {
        return { success: false, message: error?.message || "Login Failed" };
    }
}