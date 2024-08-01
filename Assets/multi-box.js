document.addEventListener('DOMContentLoaded', () => {
  const app = Vue.createApp({
    data() {
      return {
        section: {
          title: window.sectionData.title,
          description: window.sectionData.description,
          block_common_image: window.sectionData.block_common_image
        },
        blocks: window.sectionData.blocks
      };
    },
    methods: {
      toggleDescription(block, index) {
        this.blocks.forEach((block, i) => {
          if (i !== index) {
            block.showFullDescription = false;
          }
        });
        block.showFullDescription = !block.showFullDescription;
      }
    }
  });
  app.mount('#vue-responsive-grid-section');
})