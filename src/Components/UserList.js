import classes from "./UserList.module.css";

export default function UserList({ userInput }) {
  return (
    <div className={classes.container}>
      {userInput.map((user) => {
        return (
          <>
            <h1>{user.username} - </h1>
            <h1> {user.comments}</h1>
          </>
        );
      })}
    </div>
  );
}
