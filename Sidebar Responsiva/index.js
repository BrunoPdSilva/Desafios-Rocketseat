const sidebar = document.querySelector("#sidebar");
const toggleButton = document.querySelector("#toggle");

function toogleSidebar() {
  const isSidebarOpen = sidebar.classList.contains("sidebar-open");

  if (isSidebarOpen) {
    sidebar.classList.remove("sidebar-open");
    sidebar.classList.add("sidebar-closed");
  } else {
    sidebar.classList.add("sidebar-open");
    sidebar.classList.remove("sidebar-closed");
  }
}

toggleButton.addEventListener("click", toogleSidebar);
