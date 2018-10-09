self.addEventListener("push", function(event) {
    event.waitUntil(
      self.registration.pushManager.getSubscription()
        .then(function(subscription) {
          if (subscription) {
            return subscription.endpoint
          }
          throw new Error('User not subscribed')
      })
      .then(function(res) {

        console.log("push event", res)
        return self.registration.showNotification('title', {
          body: 'body'
        })
      })
    )
})
/*
self.addEventListener('notificationclick', function(event) {
  event.notification.close()

  var url = "/"
  if (event.notification.data.url) {
    url = event.notification.data.url
  }

  event.waitUntil(
    clients.matchAll({type: 'window'}).then(function() {
      if(clients.openWindow) {
        return clients.openWindow(url)
      }
    })
  )
})
*/