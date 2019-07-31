declare var process: Process;

interface Process {
    env: Env
}

interface Env {
    WEB_API_BASE_URL: string
}

interface GlobalEnvironment {
    process: Process
}