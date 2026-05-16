import { getUserById } from "@/app/lib/data";

const UserDetailsPage = async({params}) => {
    const {userId} = await params;
    const user = await getUserById(userId);

    return (
        <div>
            
        </div>
    );
};

export default UserDetailsPage;