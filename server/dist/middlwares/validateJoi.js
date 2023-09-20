"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validateRequest = ({ schema, requestPart }) => {
    return (req, res, next) => {
        const { error } = schema.validate(req[requestPart]);
        if (error) {
            return res.status(400).send({ message: error.details[0].message });
        }
        next();
    };
};
exports.default = validateRequest;
//# sourceMappingURL=validateJoi.js.map