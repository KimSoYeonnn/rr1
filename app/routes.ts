import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route('/about', 'routes/about.tsx'),
    route("/todo", "layout/todoLayout.tsx", [
        route("list",'routes/todo/listPage.tsx')
    ])

] satisfies RouteConfig;
