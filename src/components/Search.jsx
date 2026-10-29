import { createContext, useState} from "react";

export const UserContext = createContext (null);

function UserProvider({children }) {
    const [search , setSearch] = useState ("");

    return (
        <UserContext.Provider value = {{search, setSearch}}>
            {children}

        </UserContext.Provider>
    )
}

export default UserProvider;