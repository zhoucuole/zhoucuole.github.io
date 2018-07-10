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
        case 'doughnut-action':
            console.log('User \'s doughnuts.');
            break;
        case 'gramophone-action':
            console.log('User \'s music.');
            break;
        case 'atom-action':
            console.log('User \'s science.');
            break;
        default:
            console.log(`Unknown action clicked: '${event.action}'`);
            break;
    }
});
