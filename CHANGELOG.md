# action-archive

## 0.6.2

### Patch Changes

- 29504d5: Fixed potentional memory leak by not clearing timeout for longpress on destroy

## 0.6.1

### Patch Changes

- c371d34: Password Reveal: Fixed memory leak caused by adding duplicate event listeners on every update

## 0.6.0

### Minor Changes

- e3c94dc: Implemented docs search
- 26ec3e0: Implemented the Long Press action

### Patch Changes

- 26ec3e0: Added disabled prop to all actions for more fine grained control

## 0.5.1

### Patch Changes

- 1d4c8dc: Hotfixed some internal errors from refacter

## 0.5.0

### Minor Changes

- 7c08f8a: Add optional container parameter to the click outside action to allow more fine grained control over the click outside area
- 7c08f8a: Removed the button action because it can be replaced by: on:click|preventDefault

## 0.4.0

### Minor Changes

- f1af1ae: Added optional props for resize action that will be passed into the observ method

### Patch Changes

- d84c1a1: Internal rewrite for intersect action, implemented suggestion from: #36

## 0.3.2

### Patch Changes

- 968d795: Internal: moved from svelte-package to tsup

## 0.3.1

### Patch Changes

- 0efd5c3: Fixed password reveal hold option not working properly on touch screen devices

## 0.3.0

### Minor Changes

- 28a6de0: Added password reveal action

## 0.2.1

### Patch Changes

- f163e8f: Hotfix: Fixed intersect action not emitting leave and enter events

## 0.2.0

### Minor Changes

- d7781d4: Migrated svelte-maskify to action archive under the action name: "mask"
- f251d1d: Added resize action

## 0.1.0

### Minor Changes

- f44851f: All events now are prefixed with aa\_ to significantly reduce the chance of having custom event naming collissions with native or third party events

### Patch Changes

- 19cda10: Docs improvements

## 0.0.9

### Patch Changes

- 1cd04a5: Added code copy to docs
- 1cd04a5: Added clipboard action

## 0.0.8

### Patch Changes

- c237ac6: Implemented sidebar for docs
- b18502e: Removed fontsource as accidental dep
- 56c946f: Fixed focus trap including hidden (display: none) elements

## 0.0.7

### Patch Changes

- 934cd7e: Added docs for portal and focus_trap

## 0.0.6

### Patch Changes

- 2caae8b: Major doc rework, slight API change

## 0.0.5

### Patch Changes

- ff149e2: Fixed packaging issues not publishing dist

## 0.0.4

### Patch Changes

- 4fdea9e: Bundle test

## 0.0.3

### Patch Changes

- 695da48: Staticfied website

## 0.0.2

### Patch Changes

- b18dbc7: Added publish CI job, this is a test of that
