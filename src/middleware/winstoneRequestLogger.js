import winstoneRequestLogger from 'winston-request-logger';

export default (logger)=>{

    return winstoneRequestLogger.create(logger,{
        'responseTime': ':responseTime ms',
        'url': ':url[pathname]',
        'Request Method':':method',
        'Ip':':ip',
        'User-Agent':':userAgent'

    });

};