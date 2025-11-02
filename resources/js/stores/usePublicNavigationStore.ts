import { defineStore } from "pinia";

export const useNavigationStore = defineStore("navigation", {
  state: () => ({
    drawerOpen: false,
    links: [
      { title: "Inicio", href: "/", name: "home" },
      { title: "Nosotros", href: "/about", name: "about" },
      { title: "Servicios", href: "/services", name: "services" },
      { title: "Proyectos", href: "/projects", name: "projects" },
      { title: "Blog", href: "/blog", name: "blog" },
      { title: "Contacto", href: "/contact", name: "contact" },
    ],
    admin: { title: "Admin", href: "/dashboard", name: "admin" },
  }),

  actions: {
    toggleDrawer() {
      this.drawerOpen = !this.drawerOpen;
    },
    closeDrawer() {
      this.drawerOpen = false;
    },
    openDrawer() {
      this.drawerOpen = true;
    },
  },
});
