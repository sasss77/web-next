import { getUserData } from "@/lib/cookies";
export default async function DashboardPage() {
    const userData = await getUserData();
    return (
        <div>
            <h1>
            
            I am dashboard hahahahaha
            </h1>
            <p>Welcome, { userData.email || "not logged in "}</p>
        
        </div>
    );
}