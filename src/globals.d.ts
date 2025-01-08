import 'vue-router';

export {};

declare module 'vue-router' {
  interface RouteMeta {
    // page layout.
    // default layout will render with header and footer
    // full layout is full page without header and footer for pages like login, register etc
    layout?: 'full' | 'default';

    // the fallback component for the route. by default, default fallback component is rendered when app is suspended
    // in future more suspense component can be added to customize suspense loading behaviour per route.
    // for implementation please see './layouts/suspense/SuspenseFallback.vue'
    suspenseFallbackComponent?: 'default';
  }
}
