import { revalidatePath } from "next/cache";

export const deleteUser = async(userId)=>{
    "use server";

    const res= await fetch(`http://localhost:5000/users/${userId}`, {
        method:"DELETE",
    });
    const data = await res.json();
    console.log("after delete", data);

    // TODO: Revalidate cache
    if(data.deletedCount > 0){
        revalidatePath('/users');
    }
    return data;
}