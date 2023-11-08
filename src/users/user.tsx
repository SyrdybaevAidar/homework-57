import React  from "react";

interface userProps extends React.PropsWithChildren {
    Name: string;
    Email: string;
    Role: string;
    IsActive: boolean;
};

export const User = (props: userProps) => {
    return (<div>
        <p>{props.Name}</p>
        <p>{props.Email}</p>
        <p>{props.Role}</p>
        <p>{props.IsActive}</p>
    </div>);
};