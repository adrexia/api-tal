require.def("sampleapp/models/sampledatasourcemanager",
  [
      "apital/models/datasourcemanager",
      "sampleapp/datasources/sampledatasource"
  ],
  function(DataSourceManager, SampleDataSource) {
      return DataSourceManager.extend({

          init: function(args) {
              this._super();

              this._addDataSourceClasses({
                  'sample': SampleDataSource
              });
          }

      });
  }
);