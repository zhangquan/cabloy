module.exports = app => {
  // const moduleInfo = app.meta.mockUtil.parseInfoFromPackage(__dirname);
  class Version {
    async _update_11(options) {
      // alter table: aCmsArticle
      const sql = `
      ALTER TABLE aCmsArticle
        ADD COLUMN renderAt timestamp DEFAULT NULL
                `;
      await this.ctx.model.query(sql);
    }
  }
  return Version;
};
