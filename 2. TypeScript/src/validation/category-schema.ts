import joi from 'joi';

export const categorySchema = joi.object().keys({
    id: joi.string().length(36),
    name: joi.string().required(),
});
