module.exports = ctx => {

  class ContextTask {

    constructor({ context, contextNode, nodeDef }) {
      this.context = context;
      this.contextNode = contextNode;
      this._nodeDef = nodeDef;
      //
      this._flowTaskId = null;
      this._flowTask = null;
      this._flowTaskHistory = null;
      this._taskVars = null;
      //
      this._utils = null;
      //
      this._user = null;
    }

    get vars() {
      return this._taskVars;
    }

    get utils() {
      return this._utils;
    }

  }

  return ContextTask;
};
