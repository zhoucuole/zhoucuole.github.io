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

self.addEventListener('push', (e) => {
    let data = e.data;
    console.log(e)
    if (e.data) {
        data = JSON.parse(data.json());
        console.log('push的数据为：', data);
        self.registration.showNotification(data.title, data.options)
    } else {
        console.log('push没有任何数据');
    }
});
