import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const Cards = () => {
  const { user, isAuthenticated, isLoading,logout } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }
console.log(user.toStr)
  return (
    isAuthenticated && (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{JSON.stringify(user)}</p>
       
    <button type="submit" className="btn btn-primary" onClick={() => logout({ returnTo: window.location.origin })}>
             Logout
        </button>
      </div>
    )
  );
};

//export default Cards;