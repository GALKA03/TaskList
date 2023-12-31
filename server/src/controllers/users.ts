import {
  deleteUserById,
  getUserById,
  getAllUsersService,
  updateUserById,
} from "../services/userService";
import { Request, Response } from "express";
interface UserParams {
  id: string;
}

interface UpdateUserBody {
  username: string;
}

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await getAllUsersService();
    return res.json(users);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Failed to fetch users." });
  }
};

export const getUserId = async (req: Request<UserParams>, res: Response) => {
  try {
    const { id } = req.params;
    const user = await getUserById(id);
    if (!user) {
      return res.status(404).json({ error: "User not found." });
    }
    return res.json(user);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Failed to fetch user." });
  }
};

export const deleteUser = async (req: Request<UserParams>, res: Response) => {
  try {
    const { id } = req.params;
    const deletedUser = await deleteUserById(id);
    if (!deletedUser) {
      return res.status(404).json({ error: "User not found." });
    }
    return res.json({ message: "User deleted successfully." });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Failed to delete user." });
  }
};

export const updateUser = async (
  req: Request<UserParams, any, UpdateUserBody>,
  res: Response
) => {
  try {
    const { id } = req.params;
    const { username } = req.body;

    if (!username) {
      return res.status(400).json({ error: "Username is required." });
    }

    const updatedUser = await updateUserById(id, { username });

    if (!updatedUser) {
      return res.status(404).json({ error: "User not found." });
    }

    return res.json(updatedUser);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Failed to update user." });
  }
};
