import React  from "react";
import { useState } from 'react';
import {Role} from "./Role";

export class userModel{
    Name: string;
    Email: string;
    RoleId: number;
    IsActive: boolean;
    constructor(name: string, email:string, roleId: number, isActive: boolean){
        this.Name = name;
        this.Email = email;
        this.RoleId = roleId;
        this.IsActive = isActive;
    };

    setName(name: string): userModel{
        this.Name = name;
        return this;
    }

    setEmail(email: string): userModel{
        this.Email = email;
        return this;
    }

    setRoleId(roleId: number): userModel{
        this.RoleId = roleId;
        return this;
    }

    setIsActive(isActive: boolean): userModel{
        this.IsActive = isActive;
        return this;
    }
};

interface CreateProps extends React.PropsWithChildren{
    CreateHandler: (user: userModel) => void;
}

export const Create = (props: CreateProps) => {
    const [createdUser, setCreatedUser] = useState(new userModel("", "", 0, false));
    const roleComponents = Role.Roles.map(it => 
        (
            <option value={it.Id}>{it.Name}</option>
        )
    );

    const addUser = () => {
        
    };

    return (
        <form method="post">
            <input id="name" type="text" onChange={e => setCreatedUser(createdUser.setName(e.currentTarget.value))}/>
            <input id="email" type="text" onChange={e => setCreatedUser(createdUser.setEmail(e.currentTarget.value))}/>
            <input id="isActive" type="checkbox" onChange={e => setCreatedUser(createdUser.setIsActive(e.currentTarget.checked))}/>
            <select id="roleId" onChange={e => setCreatedUser(createdUser.setRoleId(parseInt(e.currentTarget.value)))}>
                {roleComponents}
            </select>
            <button type="submit"></button>
        </form>);
};