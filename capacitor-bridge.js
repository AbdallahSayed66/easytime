import { LocalNotifications } from '@capacitor/local-notifications';

// Expose the plugin to the global window object so Vanilla JS can access it
window.CapacitorLocalNotifications = LocalNotifications;
