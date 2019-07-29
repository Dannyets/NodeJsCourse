import winston from 'winston';
import { logUtils } from '@common/utils';

function createLogger(name: string) {
    const options = logUtils.createLoggerOptions(name);

    return winston.createLogger(options);
}

export {
    createLogger
};
