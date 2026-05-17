import { getUserById } from '@/app/lib/data';
import { Button, Input, Label, TextField } from '@heroui/react';
import { updateUser } from '@/app/lib/action';

const UserEditPage = async ({ params }) => {
    const { userId } = await params;

    const user = await getUserById(userId);
    // console.log("editing User:", user)

    const updateUserWrapper = async (formData) => {
        "use server"
        await updateUser(formData, userId);
        // return updateUser(formData, userId); --> same as await
    }
    return (
        <div>
            <h2 className='font-bold text-center p-10'>Editing User: {user.name}</h2>
            <div className='w-1/2 mx-auto'>
                <form action={updateUserWrapper} className="flex flex-col gap-4">
                    <TextField className="w-full" defaultValue={user?.name} name="name" type="text">
                        <Label>Name</Label>
                        <Input placeholder="Enter your name" />
                    </TextField>
                    <TextField className="w-full" defaultValue={user?.email} name="email" type="email">
                        <Label>Email</Label>
                        <Input placeholder="Enter your email" />
                    </TextField>
                    <TextField className="w-full" defaultValue={user?.role} name="role" type="text">
                        <Label>Role</Label>
                        <Input placeholder="Enter your user role" />
                    </TextField>

                    <div className='flex gap-4'>
                        <Button slot="close" variant="secondary">
                            Cancel
                        </Button>
                        <Button type="submit" slot="close">Update User</Button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default UserEditPage;