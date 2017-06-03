import winston from 'winston';

let tsFormat = function(){ return new Date().toLocaleString()};

let logger = new (winston.Logger)({
    transports: [

        new (winston.transports.Console)({
            timestamp: tsFormat,
            colorize: true
        }),
        new (winston.transports.File)({
            timestamp: tsFormat,
            filename: __dirname+'/../logFile.txt'
        })
    ]
});

export default logger;