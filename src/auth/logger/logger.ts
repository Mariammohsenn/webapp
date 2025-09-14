import { Logger, Injectable } from '@nestjs/common';

@Injectable()
export class AppLogger extends Logger {
  log(message: string) {
    super.log(message, 'AppLogger');
  }

  error(message: string, trace: string) {
    super.error(message, trace, 'AppLogger');
  }

  warn(message: string) {
    super.warn(message, 'AppLogger');
  }

  debug(message: string) {
    super.debug(message, 'AppLogger');
  }

  verbose(message: string) {
    super.verbose(message, 'AppLogger');
  }
}
