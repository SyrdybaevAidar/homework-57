import React, { FormEvent }  from "react";
import { useState } from 'react';
import {Role} from "./Role";

export class UserModel{
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

    setName(name: string): UserModel{
        this.Name = name;
        return this;
    }

    setEmail(email: string): UserModel{
        this.Email = email;
        return this;
    }

    setRoleId(roleId: number): UserModel{
        this.RoleId = roleId;
        return this;
    }

    setIsActive(isActive: boolean): UserModel{
        this.IsActive = isActive;
        return this;
    }
};

interface CreateProps extends React.PropsWithChildren{
    CreateHandler: (user: UserModel) => void;
}

export const Create = (props: CreateProps) => {
    const [createdUser, setCreatedUser] = useState(new UserModel("", "", 0, false));
    const roleComponents = Role.Roles.map(it => 
        (
            <option value={it.Id}>{it.Name}</option>
        )
    );

    const addUser = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        props.CreateHandler(createdUser);
        setCreatedUser(new UserModel("", "", 0, false));
    };

    return (
        <form method="post" onSubmit={e => addUser(e)}>
            <input type="text" onChange={e => setCreatedUser(createdUser.setName(e.currentTarget.value))}/>
            <input type="text" onChange={e => setCreatedUser(createdUser.setEmail(e.currentTarget.value))}/>
            <input type="checkbox" onChange={e => setCreatedUser(createdUser.setIsActive(e.currentTarget.checked))}/>
            <select onChange={e => setCreatedUser(createdUser.setRoleId(parseInt(e.currentTarget.value)))}>
                {roleComponents}
            </select>
            <button type="submit"></button>
        </form>);
};