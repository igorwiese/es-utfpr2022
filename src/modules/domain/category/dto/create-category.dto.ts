import * as Joi from 'joi';
import {CREATE, JoiSchema} from 'nestjs-joi';

export class CreateCategoryDto {
    @JoiSchema(['CREATE'], Joi.string().required())
    name: string;
}
