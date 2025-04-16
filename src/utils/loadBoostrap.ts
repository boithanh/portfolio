let bootstrap: typeof import("bootstrap") | null = null;

export async function loadBootstrap() {
    if (!bootstrap) {
        bootstrap = await import("bootstrap/dist/js/bootstrap.bundle.min");
    }
    return bootstrap;
}