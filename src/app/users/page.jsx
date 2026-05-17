import React from 'react';
import { getUsers } from '../lib/data';
import UsersTable from '@/components/UsersTable';
import { deleteUser } from '../lib/action';
import AddUserModal from '@/components/AddUserModal';

const UsersPage = async () => {
    const users = await getUsers();

    return (
        <div className='w-11/12 mx-auto'>

            <div className='py-6 flex justify-between'>
                <h2>Users Management: {users.length}</h2>
                <AddUserModal></AddUserModal>
            </div>
            <UsersTable users={users} deleteUserAction={deleteUser}></UsersTable>
        </div>
    );
};

export default UsersPage;