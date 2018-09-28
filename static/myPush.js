console.log('called myPush.js')
self.addEventListener("push", function(event) {
    event.waitUntil(
      self.registration.pushManager.getSubscription()
        .then(function(subscription) {
          if (subscription) {
              console.log("myPush endPoint",subscription.endpoint )
            return subscription.endpoint
          }
          throw new Error('User not subscribed')
      })
      .then(function(res) {

        return self.registration.showNotification('title', {
          body: 'contents'
        })
      })
    )
})