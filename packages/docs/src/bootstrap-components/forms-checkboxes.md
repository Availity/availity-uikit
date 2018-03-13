---
category: Forms
title: Checkboxes
description: Checkboxes are for selecting one or several options in a list, while radios are for selecting one option from many. A checkbox or radio with the `disabled` attribute will be styled appropriately. To have the label for the checkbox or radio also display a <strong>not-allowed</strong> cursor when the user hovers over the label, add the `disabled` class to your radio, `form-check-inline`, `.checkbox`, `.form-check-inline`, `.custom-control`, or `fieldset`.
---
<div class="docs-example">
  <label class="custom-control custom-checkbox">
    <input type="checkbox" class="custom-control-input">
    <span class="custom-control-label">Check this custom checkbox</span>
  </label>
  <label class="custom-control custom-checkbox">
      <input type="checkbox" class="custom-control-input" disabled>
      <span class="custom-control-label">Disabled checkbox</span>
    </label>
  <label class="custom-control custom-checkbox disabled">
    <input type="checkbox" class="custom-control-input" disabled>
    <span class="custom-control-label">Disabled checkbox and cursor</span>
  </label>
</div>
