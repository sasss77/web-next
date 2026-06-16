"use client";

export default function UpdateForm({user}: {user:any}) {
    
    return (
        <div>
        <h2>
        Update Profile 
            </h2>
            <p>Name: {user.firstName}</p>
            <p>email: {user.email}</p>
        </div>
    );
}