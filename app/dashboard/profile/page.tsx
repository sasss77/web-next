import { handleWhoami } from "@/lib/actions/auth-action";
import { notFound } from "next/navigation";
import UpdateForm from "./_components/UpdateForm";

export default async function Page() {
    const user = await handleWhoami(); // loading

    if (!user.success) {
        throw new Error(user.message);
    }
    if (!user.data) {
        notFound();
    }

    return (
        <div>
           <UpdateForm user = {user.data}/>
        </div>
    );
}           