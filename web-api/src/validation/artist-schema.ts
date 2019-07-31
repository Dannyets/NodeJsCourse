import joi from 'joi';

export const artistSchema = joi.object().keys({
    id: joi.string().length(36),
    name: joi.string().required(),
});
