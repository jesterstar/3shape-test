export class Route {
    constructor({
        path,
        exact,
        component
    }) {
        this.path = path || undefined;
        this.exact = exact || false;
        this.component = component;
    }
}