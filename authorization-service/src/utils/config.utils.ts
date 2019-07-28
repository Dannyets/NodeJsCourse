function get(key: string): string | undefined {
    return process.env[key];
}

export default {
    get,
};
