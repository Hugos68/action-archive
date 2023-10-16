// NOTE: Copy of svelte action return due to this being the only thing that is required from svelte in this project.

/**
 * Actions can return an object containing the two properties defined in this interface. Both are optional.
 * - update: An action can have a parameter. This method will be called whenever that parameter changes,
 *   immediately after Svelte has applied updates to the markup. `ActionReturn` and `ActionReturn<undefined>` both
 *   mean that the action accepts no parameters.
 * - destroy: Method that is called after the element is unmounted
 *
 * Additionally, you can specify which additional attributes and events the action enables on the applied element.
 * This applies to TypeScript typings only and has no effect at runtime.
 *
 * Example usage:
 * ```ts
 * interface Attributes {
 * 	newprop?: string;
 * 	'on:event': (e: CustomEvent<boolean>) => void;
 * }
 *
 * export function myAction(node: HTMLElement, parameter: Parameter): ActionReturn<Parameter, Attributes> {
 * 	// ...
 * 	return {
 * 		update: (updatedParameter) => {...},
 * 		destroy: () => {...}
 * 	};
 * }
 * ```
 *
 * Docs: https://svelte.dev/docs/svelte-action
 */
export interface ActionReturn<
	Parameter = undefined,
	// eslint-disable-next-line
	Attributes extends Record<string, any> = Record<never, any>
> {
	update?: (parameter: Parameter) => void;
	destroy?: () => void;
	/**
	 * ### DO NOT USE THIS
	 * This exists solely for type-checking and has no effect at runtime.
	 * Set this through the `Attributes` generic instead.
	 */
	$$_attributes?: Attributes;
}
