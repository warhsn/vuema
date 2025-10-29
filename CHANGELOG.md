# Changelog

### [0.15.10] 2025-10-29

- Refac: Adds the ability to select a single item in search inputs.

### [0.15.9] 2025-09-18

- Refac: Emit errors from drag and drop uploader.

### [0.15.8] 2025-09-18

- Bug: Drag and drop uploader returning success even though the request failed.

### [0.15.7] 2025-08-26

- Bug: Description slot not being correctly placed for number inputs.

### [0.15.6] 2025-08-05

- Refactor: Ensure label is hidden for the currency input if no default slot is provided.

### [0.15.5] 2025-08-05

- Refactor: Adds optional debounce to the filterWatcher.

### [0.15.4] 2025-07-13

- Refactor: Optionally hide the selected items on a search input.

### [0.15.3] 2025-07-12

- Refactor: Better styling for the drap and drop uploader.

### [0.15.2] 2025-07-10

- Bug: Prop reactivity.

### [0.15.1] 2025-07-10

- Bug: Disabled prop not being applied to submit-button component.

### [0.15.0] 2025-07-08

- Feature: Added a drag and drop file uploader.

### [0.14.0] 2025-07-03

- Feature: Added a phone number input.

### [0.13.1] 2025-07-03

- Refactor: Use v-if over v-show for pagination.

### [0.13.0] 2025-07-03

- Feature: Implemeted steps component. 
- Refactor: Improved pagination component.
- Refactor: Improved date picker.

### [0.12.4] 2025-06-27

- Refactor: Added type prop to the text input component.

### [0.12.3] 2025-06-27

- Refactor: Fallback to native date picker on mobile.

### [0.12.2] 2025-06-26

- Bug: Error messages not showing for file inputs.

### [0.12.1] 2025-06-25

- Refactor: Added sizing to the currency input.

### [0.12.0] 2025-06-24

- Feature: Adds a Search Input (alpha).
- Refactor: Added first and last buttons to the pagination component.

### [0.11.1] 2025-06-19

- Refactor: Better styling for the flyout component.

### [0.11.0] 2025-06-18

- Feature: Introduces a Flyout component (beta).
- Bug: Fixed regex in formatDate utility.

### [0.10.6] 2025-06-10

- Bug: Unable to select the last day of previous months.

### [0.10.5] 2025-06-10

- Refactor: Improved typing for asCurrency helper function.

### [0.10.4] 2025-06-05

- Refactor: Default icon type to fa-solid.

### [0.10.3] 2025-06-02

- Bug: Required prop missing from date picker.

### [0.10.2] 2025-05-30

- Refac: Dynamic text for next and previous buttons on the pagination component.

### [0.10.1] 2025-05-30

- Refac: Added sizes to the pagination component.

### [0.10.0] 2025-05-28

- Feature: Added currency formatting utility.

### [0.9.1] 2025-05-27

- Bug: Improper display of text inputs when added left or right slots.

### [0.9.0] 2025-05-26

- Feature: Added a formatDate helper function.
- Feature: Added a filter watcher for query parameters.

### [0.8.1] 2025-05-21

- Bug: Addons separating from text-inputs.

### [0.8.0] 2025-05-21

- Feature: Added tooltip directive.

### [0.7.7] 2025-05-21

- Refactor: Extracted sizing to a composable.
- Refactor: Cleaned up components.

### [0.7.6] 2025-05-21

- Chore: Dependency updates.

### [0.7.5] 2025-05-16

- Bug: Modal method exposure.

### [0.7.4] 2025-05-16

- Bug: Removed conflicting prop from modal component.

### [0.7.4] 2025-05-16

- Refactor: Expose the close method of the modal component.

### [0.7.3] 2025-05-13

- Bug: Avatar not rendering in table.

### [0.7.2] 2025-05-13

- Bug: Invalid path.

### [0.7.1] 2025-05-13

- Bug: Avatar component not rendering image.
- Refac: Extract initials for avatar "name".

### [0.7.0] 2025-05-06

- Feature: Adds in a time input.

### [0.3.0] 2024-12-23

- Feature: Adds in a basic toaster component.

### [0.2.1] 2024-12-23

- Refactor: Ensure Checkbox Input labels are clickable.
- Bug: Checkbox Input rendering bug.

### [0.2.0] 2024-12-21

- Feature: Introduced an Alert Dialog component.
- Bug: Disabled Radio item was still selectable.
- Bug: Dropdown menu not closing when an item is clicked.

### [0.1.3] 2024-12-21

- Added Changelog.
- Internalized Modal trigger.
- Moved Modal transition class and Teleport element to props.
- Improved Confirmation Dialogs.