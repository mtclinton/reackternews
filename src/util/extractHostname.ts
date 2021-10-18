function extractHostname(url: string): string {
    const { hostname } = new URL(url);
    return hostname;
}

export default extractHostname;
