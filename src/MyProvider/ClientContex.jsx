import React from "react";

export const ClientContex = React.createContext('');

function ClientContexFunc(props) {
    return (
        <ClientContex.Provider value="Kid">
            <div className="App">
                <header className="App-header">
                    {props.hierarchy}
                    {/* <Toy toyName="buba" /> */}
                </header>
            </div>
        </ClientContex.Provider>
    )
}
export default ClientContexFunc;