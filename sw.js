self.addEventListener('notificationclick', event => {
    event.notification.close()
    if (!event.action) {
        // 没有点击在按钮上
        console.log('Notification Click.');
        return;
    }

    switch (event.action) {
        case '发现更多':
            event.waitUntil(clients.openWindow('//www.batmobi.net'));
            break;
        case '猜你喜欢':
            event.waitUntil(clients.openWindow('//www.batmobi.net'));
            break;
        default:
            console.log(`Unknown action clicked: '${event.action}'`);
            break;
    }
});
