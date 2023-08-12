import { WSresponse } from "../libs/WSresponse.js";
import { loginService } from "../services/index.js";
import jwt from "jsonwebtoken";
import { config } from "../config.js";
import bcrypt from "bcrypt";

const loginUser = async (req, res) => {
  try {
    const { userName, password } = req.body;

    const existingUser = await loginService.getUserByName(userName);

    const isPassordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );

    if (!existingUser || !isPassordCorrect) {
      return res.json(
        new WSresponse(null, "Invalid email o password", true, 501)
      );
    }

    const PRIVATE_KEY = config.api.apiSecret;

    const token = jwt.sign({ data: existingUser }, PRIVATE_KEY, {
      expiresIn: "24h",
    });

    res.json(new WSresponse(token, "token generate", false, 0));
  } catch (error) {
    console.log("error", error);
    res
      .status(500)
      .json(new WSresponse(null, "Error: Internal server error", true, 500));
  }
};

export const loginController = { loginUser };
