
import { verifyToken, isTokenBlacklisted } from '../utils/jwtServices';
import { Request as ExpressRequest, Response, NextFunction } from 'express';

interface ExtendedRequest extends ExpressRequest {
    user?: any;
}

export const authenticateToken = (req: ExtendedRequest, res: Response, next: NextFunction) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) return res.sendStatus(401); // if there isn't any token

    if (isTokenBlacklisted(token)) return res.sendStatus(401); // if token is blacklisted

    try {
        const user = verifyToken(token);
        req.user = user; // save user in request for use in other routes
        next();
    } catch (err) {
        return res.sendStatus(403); // if token is invalid
    }
};
