import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/auth/operations";
import { selectUser } from "../redux/auth/selectors";
import styles from "./UserMenu.module.css";

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className={styles.userMenu}>
      <p className={styles.userName}>Welcome, {user.name}!</p>
      <button className={styles.logoutButton} onClick={() => dispatch(logout())}>
        Log Out
      </button>
    </div>
  );
};

export default UserMenu;


/*import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/auth/operations";
import { selectUser } from "../redux/auth/selectors";

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div>
      <p>Welcome, {user.name}!</p>
      <button onClick={() => dispatch(logout())}>Log Out</button>
    </div>
  );
};

export default UserMenu;*/
