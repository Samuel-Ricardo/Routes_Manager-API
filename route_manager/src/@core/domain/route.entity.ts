import { RouteProps } from '@types/RouteProps';

export class Route {
  public readonly id: string;
  public props: Required<RouteProps>;

  private constructor(props: RouteProps, id?: string) {
    this.id = id || crypto.randomUUID();

    if (!props) {
      //@ts-expect-error used for ORM
      this.props = {};
      return;
    }

    this.props = {
      ...props,
      points: props.points || [],
    };
  }

  public static create(props: RouteProps, id?: string): Route {
    return new Route(props, id);
  }
}
