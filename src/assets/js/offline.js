import OfflinePlugin from 'offline-plugin/runtime';

export default function() {
    OfflinePlugin.install({
        onUpdating: () => {
            console.log('SW Event:', 'onUpdating');
        },
        onUpdateReady: () => {
            console.log('SW Event:', 'onUpdateReady');
            // Apply update when available
            OfflinePlugin.applyUpdate();
        },
        onUpdated: () => {
            console.log('SW Event:', 'onUpdated');
            // Reload immediately when updated
            window.location.reload();
        }
    });
};