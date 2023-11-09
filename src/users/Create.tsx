import React, { useState } from 'react';
import { Role } from './Role';

export class UserModel {
    Name: string;
    Email: string;
    RoleId: number;
    IsActive: boolean;

    constructor(name: string, email: string, roleId: number, isActive: boolean) {
        this.Name = name;
        this.Email = email;
        this.RoleId = roleId;
        this.IsActive = isActive;
    }

    setName(name: string): UserModel {
        this.Name = name;
        return this;
    }

    setEmail(email: string): UserModel {
        this.Email = email;
        return this;
    }

    setRoleId(roleId: number): UserModel {
        this.RoleId = roleId;
        return this;
    }

    setIsActive(isActive: boolean): UserModel {
        this.IsActive = isActive;
        return this;
    }
}

interface CreateProps {
    CreatedUser: UserModel;
    CreateHandler: () => void;
    SetHandler: (user: UserModel) => void;
}

const Create: React.FC<CreateProps> = (props) => {
    const [localUser, setLocalUser] = useState<UserModel>(props.CreatedUser);

    const roleComponents = Role.Roles.map((role) => (
        <option key={role.Id} value={role.Id}>
            {role.Name}
        </option>
    ));

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value, type } = event.target;
        const updatedUser = new UserModel(
            localUser.Name,
            localUser.Email,
            localUser.RoleId,
            localUser.IsActive
        );

        if (type === 'checkbox') {
            updatedUser.setIsActive(!localUser.IsActive);
        } else {
            if (name === 'Name') updatedUser.setName(value);
            else if (name === 'Email') updatedUser.setEmail(value);
            else if (name === 'RoleId') updatedUser.setRoleId(parseInt(value));
        }

        setLocalUser(updatedUser);
    };

    const addUser = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        props.CreateHandler();
    };

    return (
        <form method="post" onSubmit={addUser} onInput={() => props.SetHandler(localUser)}>
            <input type="text" name="Name" value={localUser.Name} onChange={handleInputChange} />
            <input type="text" name="Email" value={localUser.Email} onChange={handleInputChange} />
            <input type="checkbox" name="IsActive" checked={localUser.IsActive} onChange={handleInputChange} />
            <select name="RoleId" onChange={handleInputChange}>
                {roleComponents}
            </select>
            <button type="submit">Submit</button>
        </form>
    );
};

export default Create;
