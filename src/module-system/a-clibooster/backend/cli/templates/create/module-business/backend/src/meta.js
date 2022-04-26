module.exports = app => {
  // schemas
  const schemas = require('./config/validation/schemas.js')(app);
  // static
  const staticResources = require('./config/static/resources.js')(app);
  // meta
  const meta = {
    base: {
      atoms: {
        <%=argv.atomClassName%>: {
          info: {
            bean: '<%=argv.atomClassName%>',
            title: '<%=argv.atomClassNameCapitalize%>',
            tableName: '<%=argv.providerId%><%=argv.atomClassNameCapitalize%>',
            language: false,
            category: true,
            tag: true,
          },
          actions: {},
          validator: '<%=argv.atomClassName%>',
          search: {
            validator: '<%=argv.atomClassName%>Search',
          },
        },
      },
      statics: {
        'a-base.resource': {
          items: staticResources,
        },
      },
    },
    validation: {
      validators: {
        <%=argv.atomClassName%>: {
          schemas: '<%=argv.atomClassName%>',
        },
        <%=argv.atomClassName%>Search: {
          schemas: '<%=argv.atomClassName%>Search',
        },
      },
      keywords: {},
      schemas,
    },
    index: {
      indexes: {
        <%=argv.providerId%><%=argv.atomClassNameCapitalize%>: 'createdAt,updatedAt,atomId',
      },
    },
  };
  return meta;
};