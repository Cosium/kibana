import AggTypesMetricsMetricAggTypeProvider from 'ui/agg_types/metrics/metric_agg_type';
import RegistryFieldFormatsProvider from 'ui/registry/field_formats';
import textHtml from 'ui/agg_types/controls/text.html';

export default function AggTypesMetricsScriptedMetricProvider(Private) {
  let MetricAggType = Private(AggTypesMetricsMetricAggTypeProvider);
  let fieldFormats = Private(RegistryFieldFormatsProvider);

  return new MetricAggType({
    name: 'scripted_metric',
    title: 'Scripted Metric',
    makeLabel: function () {
      return 'Scripted Metric';
    },
    getFormat: function () {
      return fieldFormats.getDefaultInstance('number') || fieldFormats.getDefaultInstance('percent');
    },
    params: [
      {
        name: 'init_script',
        type: 'string',
        editor: textHtml
      }, {
        name: 'map_script',
        type: 'string',
        editor: textHtml
      }, {
        name: 'combine_script',
        type: 'string',
        editor: textHtml
      }, {
        name: 'reduce_script',
        type: 'string',
        editor: textHtml
      }
    ]
  });
};
