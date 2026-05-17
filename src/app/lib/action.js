import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const createUser = async (formData) => {
    "use server"
    const newUser = Object.fromEntries(formData.entries());

    const res = await fetch('http://localhost:5000/users', {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(newUser)
    });
    const data = await res.json();
    console.log('data after post', data)

    //TODO: revalidate path
    if (data.insertedId) {
        revalidatePath('/users')
    }

}

export const updateUser = async (formData, userId) => {
    "use server"
    const updatedUser = Object.fromEntries(formData.entries());

    const res = await fetch(`http://localhost:5000/users/${userId}`, {
        method: "PATCH",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(updatedUser)
    });
    const data = await res.json();
    console.log('After update', data);

    //TODO: Revalidate path
    if(data.modifiedCount){
        revalidatePath('/users');
        redirect('/users')
    }
}

export const deleteUser = async (userId) => {
    "use server";

    const res = await fetch(`http://localhost:5000/users/${userId}`, {
        method: "DELETE",
    });
    const data = await res.json();
    console.log("after delete", data);

    // TODO: Revalidate cache
    if (data.deletedCount > 0) {
        revalidatePath('/users');
    }
    return data;
}