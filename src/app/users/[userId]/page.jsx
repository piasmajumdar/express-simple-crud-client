import { getUserById } from "@/app/lib/data";

const UserDetailsPage = async({params}) => {
    const {userId} = await params;
    const user = await getUserById(userId);
    
    return (
        <div>
            <h2>User Details: {user.name}</h2>
        </div>
    );
};

export default UserDetailsPage;