export default {
  data() {
    return {
    };
  },
  methods: {
    page_onRefresh(done) {
      done && done();
      this.layout_componentInstance && this.layout_componentInstance.onPageRefresh(true);
    },
    page_onInfinite() {
      this.layout_componentInstance && this.layout_componentInstance.onPageInfinite();
    },
    page_onClear() {
      this.layout_componentInstance && this.layout_componentInstance.onPageClear();
    },
    page_getTitle() {
      //
      if (this.container.params && this.container.params.pageTitle) return this.container.params.pageTitle;
      //
      const atomClass = this.getAtomClass(this.container.atomClass);
      const atomClassTitle = atomClass && atomClass.titleLocale;
      if (this.container.scene === 'select') {
        if (!atomClass) return `${this.$text('Select')} ${this.$text('Atom')}`;
        return `${this.$text('Select')} ${atomClassTitle}`;
      } else if (this.container.scene === 'selecting') {
        if (!atomClass) return `${this.$text('Selecting')} ${this.$text('Atom')}`;
        return `${this.$text('Selecting')} ${atomClassTitle}`;
      } else if (this.container.scene === 'search') {
        if (!atomClass) return `${this.$text('Search')} ${this.$text('Atom')}`;
        return `${this.$text('Search')} ${atomClassTitle}`;
      } else if (this.container.scene === 'mine') {
        return this.$text('My Atoms');
      }
      if (!atomClass) return this.$text('Atom');
      return `${this.$text('Atom')}: ${atomClassTitle}`;
    },
    page_getSubtitle() {
      const stage = this.getCurrentStage();
      if (stage === 'archive') return '';
      return this.$text(stage.replace(stage[0], stage[0].toUpperCase()));
    },
  },
};
