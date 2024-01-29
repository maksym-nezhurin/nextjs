abstract class ALogger {
    abstract log(message: string): void;

    printDate(date: Date) {
        this.log(date.toString());
    }
}

class MyLogger extends ALogger {
    log(message: string) {
        console.log('message', message);
    }

    logWithDate(message: string) {
        this.printDate(new Date());
        this.log(message);
    }
}

const logger = new MyLogger();
logger.logWithDate('hello, this is new message!');