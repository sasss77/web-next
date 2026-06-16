import { notFound } from "next/navigation";

export default async function ServerPage() {
    const result = await new Promise((resolve) => {
        setTimeout(() => {
            resolve("data resolved")
        }, 2000); // 2 secs
    }); // later replaced by API calls
    
    if (1 != 1) {
        throw new Error("Error"); // triggers error.tsx
    }

    if (0 == 0) {
        notFound();
    }


    return (
        <div>
            Page Content
        </div>
    );
}