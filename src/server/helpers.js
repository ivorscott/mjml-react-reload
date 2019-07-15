const RELOAD_SCRIPT = '<script src="/reload/reload.js"></script>'

/**
 * Attach Reload Script
 * https://github.com/alallier/reload
 *
 * reload creates a new Express route for reload.
 *
 * When you restart the server, the client will detect the server being
 * restarted and automatically refresh the page.
 * @param {*} html
 */
export function reloadable(html) {
    return html.replace('</body>', `${RELOAD_SCRIPT}</body>`)
}
