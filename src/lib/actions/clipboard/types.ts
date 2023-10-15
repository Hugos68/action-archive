export interface ClipboardParameters {
	value: string | Blob;
}

export type ClipboardEvents = {
	'on:clipboard_copy': (event: CustomEvent<{ value: string | Blob }>) => void;
};
