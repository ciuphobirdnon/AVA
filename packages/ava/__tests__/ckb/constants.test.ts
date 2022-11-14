import { CkbConsts } from '../../src/ckb';

describe('CKB Constants', () => {
  test('CkbConsts namespace', () => {
    expect(CkbConsts.CHART_IDS).toEqual([
      'line_chart',
      'step_line_chart',
      'area_chart',
      'stacked_area_chart',
      'percent_stacked_area_chart',
      'interval_area_chart',
      'stream_chart',
      'column_chart',
      'grouped_column_chart',
      'stacked_column_chart',
      'percent_stacked_column_chart',
      'interval_column_chart',
      'range_column_chart',
      'waterfall_chart',
      'histogram',
      'bar_chart',
      'stacked_bar_chart',
      'percent_stacked_bar_chart',
      'grouped_bar_chart',
      'interval_bar_chart',
      'range_bar_chart',
      'radial_bar_chart',
      'mirror_bar_chart',
      'bullet_chart',
      'pie_chart',
      'donut_chart',
      'nested_pie_chart',
      'rose_chart',
      'scatter_plot',
      'bubble_chart',
      'non_ribbon_chord_diagram',
      'arc_diagram',
      'chord_diagram',
      'treemap',
      'sankey_diagram',
      'funnel_chart',
      'overlapping_funnel_chart',
      'mirror_funnel_chart',
      'box_plot',
      'heatmap',
      'density_heatmap',
      'gauge_chart',
      'radar_chart',
      'wordcloud',
      'candlestick_chart',
      'compact_box_tree',
      'dendrogram',
      'indented_tree',
      'radial_tree',
      'flow_diagram',
      'fruchterman_layout_graph',
      'force_directed_layout_graph',
      'fa2_layout_graph',
      'mds_layout_graph',
      'circular_layout_graph',
      'spiral_layout_graph',
      'radial_layout_graph',
      'concentric_layout_graph',
      'grid_layout_graph',
      'symbol_map',
      'chart_map',
      'column_map_3d',
      'scatter_map',
      'path_map',
      'isoline_map',
      'arc_map_3d',
      'choropleth_map',
      'choropleth_map_3d',
      'hexagonal_heat_map',
      'hexagonal_heat_map_3d',
      'classical_heat_map',
      'grid_heat_map',
      'bubble_map',
      'bubble_light_map',
      'packed_circles',
      'polar_treemap',
      'sunburst_diagram',
      'liquid_chart',
      'kpi_panel',
      'table',
    ]);

    expect(CkbConsts.FAMILIES).toEqual([
      'LineCharts',
      'ColumnCharts',
      'BarCharts',
      'PieCharts',
      'AreaCharts',
      'ScatterCharts',
      'FunnelCharts',
      'HeatmapCharts',
      'RadarCharts',
      'TreeGraph',
      'GeneralGraph',
      'PolygonLayer',
      'LineLayer',
      'PointLayer',
      'HeatmapLayer',
      'Table',
      'Others',
    ]);

    expect(CkbConsts.PURPOSES).toEqual([
      'Comparison',
      'Trend',
      'Distribution',
      'Rank',
      'Proportion',
      'Composition',
      'Relation',
      'Hierarchy',
      'Flow',
      'Spatial',
      'Anomaly',
      'Value',
    ]);

    expect(CkbConsts.COORDINATE_SYSTEMS).toEqual([
      'NumberLine',
      'Cartesian2D',
      'SymmetricCartesian',
      'Cartesian3D',
      'Polar',
      'NodeLink',
      'Radar',
      'Geo',
      'Other',
    ]);

    expect(CkbConsts.GRAPHIC_CATEGORIES).toEqual(['Statistic', 'Diagram', 'Graph', 'Map', 'Other']);

    expect(CkbConsts.SHAPES).toEqual([
      'Lines',
      'Bars',
      'Round',
      'Square',
      'Area',
      'Scatter',
      'Symmetric',
      'Network',
      'Map',
      'Other',
    ]);

    expect(CkbConsts.LEVEL_OF_MEASUREMENTS).toEqual([
      'Nominal',
      'Ordinal',
      'Interval',
      'Discrete',
      'Continuous',
      'Time',
    ]);

    expect(CkbConsts.CHANNELS).toEqual([
      'Position',
      'Length',
      'Color',
      'Area',
      'Angle',
      'ArcLength',
      'Direction',
      'Size',
      'Opacity',
      'Stroke',
      'LineWidth',
      'Lightness',
    ]);

    expect(CkbConsts.RECOMMEND_RATINGS).toEqual(['Recommended', 'Use with Caution', 'Not Recommended']);
  });
});