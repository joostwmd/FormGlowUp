<script lang="ts">
	import { Popover as PopoverPrimitive } from "bits-ui";
	import {
		FORM_THEME_CONTEXT_KEY,
		type FormThemeContext
	} from "$lib/components/custom/form/form-theme-context";
	import { cn, flyAndScale } from "$lib/components/shadcn/utils.js";
	import { getContext, onDestroy } from "svelte";
	import { get } from "svelte/store";

	type $$Props = PopoverPrimitive.ContentProps;
	let className: $$Props["class"] = undefined;
	export let transition: $$Props["transition"] = flyAndScale;
	export let transitionConfig: $$Props["transitionConfig"] = undefined;
	export { className as class };

	const formTheme = getContext<FormThemeContext | undefined>(FORM_THEME_CONTEXT_KEY);

	let fontFamily = formTheme ? get(formTheme.fontFamily) : "";
	if (formTheme) {
		const unsub = formTheme.fontFamily.subscribe((v) => (fontFamily = v));
		onDestroy(unsub);
	}

	function kebabCase(key: string): string {
		return key.replace(/([A-Z])/g, "-$1").toLowerCase();
	}

	function mergePopoverStyle(
		font: string,
		incoming: string | Record<string, string | number> | null | undefined
	): string | undefined {
		const parts: string[] = [];
		if (font) parts.push(`font-family: ${font}`);
		if (incoming == null || incoming === "") {
			return parts.length ? parts.join("; ") : undefined;
		}
		if (typeof incoming === "string") {
			parts.push(incoming);
			return parts.join("; ");
		}
		for (const [key, value] of Object.entries(incoming)) {
			if (value === undefined || value === "") continue;
			parts.push(`${kebabCase(key)}: ${value}`);
		}
		return parts.length ? parts.join("; ") : undefined;
	}

	let restProps: Record<string, unknown>;
	let mergedStyle: string | undefined;
	$: {
		const { style: incomingStyle, ...rest } = $$restProps;
		restProps = rest;
		mergedStyle = mergePopoverStyle(formTheme ? fontFamily : "", incomingStyle as never);
	}
</script>

<PopoverPrimitive.Content
	{transition}
	{transitionConfig}
	class={cn(
		"bg-popover text-popover-foreground z-50 w-72 rounded-md border p-4 shadow-md outline-none",
		className
	)}
	{...restProps}
	style={mergedStyle}
>
	<slot />
</PopoverPrimitive.Content>
