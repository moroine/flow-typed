declare module "sentry-expo" {
  declare type SentryBreadcrumbType = "navigation" | "http";

  declare export type SentryBreadcrumb = {
    message?: string;
    category?: string;
    level?: SentrySeverity;
    data?: {};
    type?: SentryBreadcrumbType;
  }

  declare export type SentrySeverity = "fatal" | "error" | "warning" | "info" | "debug" | "critical"

  declare type SentryLog = {
    None: 0,
    Error: 1,
    Debug: 2,
    Verbose: 3
  }

  declare type SentryOptions = {
    logLevel?: SentryLog;
    instrument?: boolean;
    disableNativeIntegration?: boolean;
    ignoreModulesExclude?: [string];
    ignoreModulesInclude?: [string];
  }

  declare export default class Sentry {
    install(): void;

    static config(dsn: string, options?: SentryOptions): Sentry;

    static isNativeClientAvailable(): boolean;

    static crash(): void;

    static nativeCrash(): void;

    static setEventSentSuccessfully(callback: Function): void;

    static setShouldSendCallback(callback: Function): void;

    static setDataCallback(callback: Function): void;

    static setUserContext(user: {
      id?: string;
      username?: string;
      email?: string;
      extra?: {};
    }): void;

    static setTagsContext(tags: {}): void;

    static setExtraContext(extra: {}): void;

    static captureMessage(message: string, options?: {}): void;

    static captureException(ex: Error, options?: {}): void;

    static captureBreadcrumb(breadcrumb: SentryBreadcrumb): void;

    static clearContext(): Promise<void>;

    static context(func: Function, ...args: any[]): void;
    static context(options: {}, func: Function, ...args: any[]): void;

    static wrap(func: Function): Function;
    static wrap(options: {}, func: Function): Function;

    static lastException(): {};
    static lastException(): null;

    static lastEventId(): {};
    static lastEventId(): null;

    static setRelease(release: string): void;

    static setDist(dist: string): void;

    static setVersion(version: string): void;
  }
}
