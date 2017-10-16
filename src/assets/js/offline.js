import OfflinePlugin from 'offline-plugin/runtime';

export default function() {
    OfflinePlugin.install({
        onUpdateReady: () => {
            OfflinePlugin.applyUpdate();
        },
        onUpdated: () => {
            window.location.reload();
        }
    });
};