import "./styles.css";

function getElement(content) {
  if (content instanceof Element) {
    return content;
  }

  const button = document.createElement("button");

  if (typeof content === "string") {
    button.textContent = content;
  } else {
    button.textContent = String(content);
  }

  return button;
}

const createDropdownMenu = function (
  dropdownTitle,
  menuItems,
  hover = true,
  vertical = true,
) {
  const container = document.createElement("div");
  const content = document.createElement("div");
  const titleElement = getElement(dropdownTitle);
  container.classList.add("dropdown-container");
  titleElement.classList.add("dropdown-menu");
  content.classList.add("dropdown-content");
  content.classList.add(vertical ? "vertical" : "horizontal");
  content.classList.toggle("display-none");

  for (const menuItem of menuItems) {
    const menuElement = getElement(menuItem);

    menuElement.classList.add("dropdown-item");
    menuElement.classList.add(vertical ? "vertical" : "horizontal");

    content.appendChild(menuElement);
  }

  container.appendChild(titleElement);
  container.appendChild(content);

  if (!hover) {
    titleElement.addEventListener("click", () => {
      content.classList.toggle("display-none");
    });
  } else {
    container.addEventListener("mouseover", () => {
      content.classList.toggle("display-none");
    });
    container.addEventListener("mouseout", () => {
      content.classList.toggle("display-none");
    });
  }

  return container;
};

export { createDropdownMenu };
