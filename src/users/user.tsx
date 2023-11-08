import React  from "react";
import { UserModel } from "./create";
import { Role } from "./Role";

interface userProps extends React.PropsWithChildren {
    Name: string;
    Email: string;
    Role: string;
    IsActive: boolean;
};

interface usersListProps extends React.PropsWithChildren {
    users: UserModel[];
};

export const User = (props: userProps) => {
    return (<div className="user">
        <span>{props.Name}</span>
        <span>{props.Email}</span>
        <span>{props.Role}</span>
        <span>{props.IsActive}</span>
    </div>);
};

export const Users = (props: usersListProps) => {
    const users = props.users.map(it => (
        <User Name={it.Name} Email={it.Email} Role={Role.Roles.find(role => role.Id === it.RoleId)?.Name ?? ""}  IsActive={it.IsActive}/>
    ));

    return (
        <div className="users">
            {users}
        </div>
    );
};