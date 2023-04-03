type Callback = (...args: any) => any;

export class Event<T extends Callback = Callback> {
  private callbacks: Set<T> = new Set();
  constructor(private context: any) {}

  public attach(listener: T): Event<T> {
    this.callbacks.add(listener);
    return this;
  }

  public clear(): Event<T> {
    this.callbacks.clear();
    return this;
  }

  public detach(listener: T): Event<T> {
    this.callbacks.delete(listener);
    return this;
  }

  public emit(...args: Parameters<T>): void {
    const callback = (cb: T) => cb.call(this.context, ...args);
    this.callbacks.forEach(callback);
  }
}
