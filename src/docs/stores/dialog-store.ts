import type { CreateDialogProps } from '@melt-ui/svelte';
import { writable, type Writable } from 'svelte/store';
import type { ComponentType } from 'svelte';
export interface DialogSettings {
	component: ComponentType;
	options?: CreateDialogProps;
	props?: Record<string, unknown>;
}

export interface Dialog extends DialogSettings {
	id: number;
	open: Writable<boolean>;
}

function createDialogStore() {
	const { subscribe, update } = writable<Dialog[]>([]);

	function trigger(settings: DialogSettings) {
		update((dialogs) => [...dialogs, { ...settings, id: Date.now(), open: writable(true) }]);
	}

	function closeLatest() {
		update((dialogs) => {
			const dialog = dialogs.pop();
			if (dialog) dialog.open.set(false);
			return dialogs;
		});
	}

	function closeAll() {
		update((dialogs) => {
			dialogs.forEach((dialog) => dialog.open.set(false));
			return [];
		});
	}

	return {
		subscribe,
		trigger,
		closeLatest,
		closeAll
	};
}

export const dialogStore = createDialogStore();
