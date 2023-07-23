const notifications = document.getElementById("notifications");
const dots = document.querySelectorAll('.dot');
const readNotificationsAll = document.getElementById('readNotifications');
const singleNotifications = document.querySelectorAll('.single-notification');

let notificationsNumber = "3";

dots.forEach((dot) => {
    dot.addEventListener('click', (e) => {
        e.target.style.display = "none"
        notificationsNumber--
        notifications.innerText = notificationsNumber;
        
        if (e.target.parentElement.parentElement.className.includes('unread')) {
            e.target.parentElement.parentElement.classList.remove('unread')
        }
    })
})


readNotificationsAll.addEventListener('click', () => {
    notifications.innerText = "0"

    dots.forEach((dot) => {
        dot.style.display = "none";
    })

    singleNotifications.forEach((item) => {
        item.classList.remove('unread');
    })
})
