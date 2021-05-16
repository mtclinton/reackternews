function extractHostname(url) {
    const { hostname } = new URL(url);
    return hostname;
}

export default extractHostname;
