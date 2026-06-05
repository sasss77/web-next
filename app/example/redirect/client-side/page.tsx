"use client";    // client side component
import { useRouter } from "next/navigation";

export default function Page() {
    const router = useRouter();
    const handleRedirect = () => { 
        //logic
        alert("redirecting to example/image page...");
        router.push("/example/image");
    }
    return (
        <div>
            <button
            onClick = {handleRedirect}
                className="border p-2 rounded">
                redirect to example/image page
                
            </button>
        </div>
    );
}