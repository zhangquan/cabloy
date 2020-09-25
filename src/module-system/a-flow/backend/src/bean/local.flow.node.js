const VarsFn = require('../common/vars.js');

module.exports = ctx => {
  const moduleInfo = ctx.app.meta.mockUtil.parseInfoFromPackage(__dirname);
  class FlowNode {
    constructor({ flowInstance, context, nodeRef }) {
      this.flowInstance = flowInstance;
      this.context = context;
      this._nodeRef = nodeRef;
      this._nodeBase = null;
      this._nodeBaseBean = null;
      // context
      this.contextNode = ctx.bean._newBean(`${moduleInfo.relativeName}.local.context.node`, {
        nodeRef,
      });
    }

    get modelFlowNode() {
      return ctx.model.module(moduleInfo.relativeName).flowNode;
    }
    get modelFlowNodeHistory() {
      return ctx.model.module(moduleInfo.relativeName).flowNodeHistory;
    }

    async init() {
      // create flowNode
      const flowNodeId = await this._createFlowNode();
      // context init
      await this._contextInit({ flowNodeId });
    }

    async _createFlowNode() {
      // flowNode
      const data = {
        flowId: this.context._flowId,
        flowNodeDefId: this.contextNode._nodeDef.id,
        nodeVars: '{}',
      };
      const res = await this.modelFlowNode.insert(data);
      const flowNodeId = res.insertId;
      // flowNodeHistory
      data.flowNodeId = flowNodeId;
      await this.modelFlowNodeHistory.insert(data);
      // ok
      return flowNodeId;
    }

    async _contextInit({ flowNodeId }) {
      // flowNodeId
      this.contextNode._flowNodeId = flowNodeId;
      // flowNode
      this.contextNode._flowNode = await this.modelFlowNode.get({ id: flowNodeId });
      this.contextNode._flowHistory = await this.modelFlowNodeHistory.get({ flowNodeId });
      // flowVars
      this.contextNode._nodeVars = new (VarsFn())();
      this.contextNode._nodeVars._vars = this.contextNode._flowNode.nodeVars ? JSON.parse(this.contextNode._flowNode.nodeVars) : {};
    }

    async enter() {
      // raise event: onNodeEnter
      const res = await this.nodeBaseBean.onNodeEnter();
      if (!res) return;
      await this.begin();
    }

    async begin() {
      // raise event: onNodeBegin
      const res = await this.nodeBaseBean.onNodeBegin();
      if (!res) return;
      await this.doing();
    }

    async doing() {
      // raise event: onNodeDoing
      const res = await this.nodeBaseBean.onNodeDoing();
      if (!res) return;
      await this.end();
    }

    async end() {
      // raise event: onNodeEnd
      const res = await this.nodeBaseBean.onNodeEnd();
      if (!res) return;
      await this.leave();
    }

    async leave() {
      // raise event: onNodeLeave
      const res = await this.nodeBaseBean.onNodeLeave();
      if (!res) return;
      // next
      await this.flowInstance.nextEdges({ nodeRef: this._nodeRef });
    }

    get nodeBaseBean() {
      if (!this._nodeBaseBean) {
        this._nodeBaseBean = ctx.bean._newBean(this.nodeBase.beanFullName, {
          flowInstance: this.flowInstance, context: this.context, nodeRef: this._nodeRef,
        });
      }
      return this._nodeBaseBean;
    }

    get nodeBase() {
      if (!this._nodeBase) this._nodeBase = ctx.bean.flowDef._getFlowNodeBase(this._nodeRef.type);
      return this._nodeBase;
    }

  }
  return FlowNode;
};
