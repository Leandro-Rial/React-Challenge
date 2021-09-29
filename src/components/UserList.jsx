import React, { useContext } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Delete } from "@material-ui/icons";
import { Container } from "@mui/material";
import { GlobalState } from "../context/GlobalState";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  iconos: {
    cursor: "pointer",
  },
}));

const UserList = () => {
  const { users, deleteUser } = useContext(GlobalState);

  const styles = useStyles();

  return (
    <Container className="list animate__animated animate__fadeIn">
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Email</TableCell>
              <TableCell>Nombre</TableCell>
              <TableCell>Edad</TableCell>
              <TableCell>Acciones</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {users.length > 0 ? (
              <>
                {users.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{user.name}</TableCell>
                    <TableCell>{user.age}</TableCell>
                    <TableCell>
                      <Delete
                        className={styles.iconos}
                        onClick={() => deleteUser(user.id)}
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </>
            ) : (
              <p>No User</p>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default UserList;
