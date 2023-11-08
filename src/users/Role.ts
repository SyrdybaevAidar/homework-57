export class Role{
    static IdCounter: number = 1;
    static Roles: Role[] = [new Role("Admin"), new Role("Manager"), new Role("Operator")];
    Id: number;
    Name: string;
    constructor(name: string){
        this.Id = Role.IdCounter;
        this.Name = name;
    }
}