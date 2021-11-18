export default defineComponent({
  name: "TemplateIcons",
  setup() {
    const icons = ["ionic", "vue", "vite"]
    return { icons }
  },
  render() {
    const TemplateIcons: any = []
    this.icons.forEach(icon => {
      TemplateIcons.push(h(`ion-label`, { class: "hover:scale-120 text-size-30px" }, icon))
    })
    return h("div", { class: "children:mx-2 mt-5 flex justify-center children:transform children:duration-150" }, TemplateIcons)
  }
})