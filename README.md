# Dropdown Menu

This module provides a method to create a dropdown menu.

```javascript
const createDropdownMenu: (dropdownTitle: any, menuItems: any, hover?: boolean, vertical?: boolean) => HTMLDivElement
```

## Installation

The following command can be used to add the dropdown menu to an existing project:

```console
npm install @conkliniam/dropdown-menu
```

## Usage

The following statement can be used to include the createDropdownMenu method in a JavaScript file:

```javascript
const { createDropdownMenu } = require("@conkliniam/dropdown-menu");
```

Here is some example usage that includes some nested dropdown menus:

```javascript
const container = document.querySelector("#container");

const sevenTwoDropdown = createDropdownMenu(
  "VII II",
  ["VII II I", "VII II II", "VII II III", "VII II IV"],
  true,
  false,
);

const sevenDropdown = createDropdownMenu(
  "VII",
  ["VII I", sevenTwoDropdown, "VII III", "VII IV"],
  true,
  true,
);
const romanNumeralDropdown = createDropdownMenu(
  "Roman Numerals",
  ["I", "II", "III", "IV", "V", "VI", sevenDropdown, "VIII"],
  false,
  false,
);

const angryDropdown = createDropdownMenu(
  "Angry",
  ["Ticked Off", "Furious", "Enraged"],
  true,
  true,
);

const moodDropdown = createDropdownMenu(
  "Moods",
  ["Happy", angryDropdown, "Sad"],
  false,
  false,
);

container.appendChild(romanNumeralDropdown);
container.appendChild(moodDropdown);
```

This code results in the following dropdown menus:
![Roman Numerals Dropdown](/images/romanNumeralsDropdown.png)
![Moods Dropdown](/images/moodsDropdown.png)

## Parameters

The parameters for the createDropdownMenu function include:

- Parameter: dropdownTitle
  - Type: Element or String
  - Description: This is the value that clicking or hovering causes the dropdown menu to open. Anything other than a String or Element is converted into a String. For Strings, a button is created with the String as the content.
- Parameter: menuItems
  - Type: list of Element or String
  - Description: These values are added to the the part of the dropdown menu that opens up. Buttons are created for Strings.
- Parameter: hover
  - Type: boolean
  - Default Value: true
  - Description: If true, open dropdown on hover, if false, open dropdown on click
- Parameter: vertical
  - Type: boolean
  - Default Value: false
  - Decription: If true, display the menu items verically, if false, display the menu items horizontally

## Styling

The dropdown menus created include the following classes.

```css
/* The entire div containing the dropdown menu */
.dropdown-container {
}

/* The title for the dropdown menu */
.dropdown-menu {
}

/* The content of the dropdown menu */
/* This is the part that opens up */
.dropdown-content {
}

/* A menu item within the content */
.dropdown-item {
}
```

There are also some CSS custom properties that can be adjusted to customize the appearance of the dropdown menu.

```css
.dropdown-container {
  --menu-item-height: 30px;
  --menu-item-width: 100px;
  --dropdown-hover-color: rgb(133, 133, 163);
}
```
