import joi from 'joi';

export const songSchema = joi.object().keys({
    id: joi.string().length(36),
    name: joi.string().required(),
});
