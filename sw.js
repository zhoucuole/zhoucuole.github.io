self.addEventListener('notificationclick', event => {
    event.notification.close()
    if (!event.action) {
        // 没有点击在按钮上
        console.log('Notification Click.');
        return;
    }

    switch (event.action) {
        case '发现更多':
            let promiseChain = clients.openWindow('//www.batmobi.net');
            event.waitUntil(promiseChain);
            break;
        case '猜你喜欢':
            break;
        default:
            console.log(`Unknown action clicked: '${event.action}'`);
            break;
    }
});
