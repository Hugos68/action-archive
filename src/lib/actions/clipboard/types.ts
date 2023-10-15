export type ClipboardParameters = {
	value: string | Blob;
};

export type ClipboardEvents = {
	'on:aa_copy'?: (event: CustomEvent<{ value: string | Blob }>) => void;
};
