import joi from 'joi';

export const projectSchema = joi.object().keys({
    id: joi.string().length(36),
    name: joi.string().required(),
});
