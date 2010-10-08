/**
 * @requires commonstyle.js
 * @requires josmstyle.js
 * @requires osmstyle.js
 */

function getMaxSpeedStyle() {
    var styleMap = new OpenLayers.StyleMap();
    
    addStrokeOperator(styleMap, "maxspeed", 135, OpenLayers.Filter.Comparison.GREATER_THAN_OR_EQUAL_TO, "#fe4503", 5);
    addStrokeOperator(styleMap, "maxspeed", 135, OpenLayers.Filter.Comparison.LESS_THAN, "#c0f100", 5);
    addStrokeOperator(styleMap, "maxspeed", 125, OpenLayers.Filter.Comparison.LESS_THAN, "#f6f807", 5);
    addStrokeOperator(styleMap, "maxspeed", 105, OpenLayers.Filter.Comparison.LESS_THAN, "#f807f8", 5);
    addStrokeOperator(styleMap, "maxspeed", 95, OpenLayers.Filter.Comparison.LESS_THAN, "#07f8f8", 5);
    addStrokeOperator(styleMap, "maxspeed", 85, OpenLayers.Filter.Comparison.LESS_THAN, "#f90808", 5);
    addStrokeOperator(styleMap, "maxspeed", 75, OpenLayers.Filter.Comparison.LESS_THAN, "#eec600", 5);
    addStrokeOperator(styleMap, "maxspeed", 65, OpenLayers.Filter.Comparison.LESS_THAN, "#9f9fff", 5);
    addStrokeOperator(styleMap, "maxspeed", 55, OpenLayers.Filter.Comparison.LESS_THAN, "#07f807", 5);
    addStrokeOperator(styleMap, "maxspeed", 45, OpenLayers.Filter.Comparison.LESS_THAN, "#4d4dff", 5);
    addStrokeOperator(styleMap, "maxspeed", 25, OpenLayers.Filter.Comparison.LESS_THAN, "#00da8b", 5);

    return styleMap;
}

function getMountainStyle() {
  // http://dev.openlayers.org/releases/OpenLayers-2.10/doc/apidocs/files/OpenLayers/Feature/Vector-js.html#OpenLayers.Feature.Vector.OpenLayers.Feature.Vector.style
  var styleMap = new OpenLayers.StyleMap();
  /*styleMap.addUniqueValueRules("default", "landuse", {
    'forest': {fillColor: 'green', fillOpacity: 0.8, strokeColor: '#88ff88'}
  });*/
  styleMap.addUniqueValueRules("default", "trail_visibility", {
    'excellent': { strokeOpacity: 1 },
    'good': { strokeOpacity: 0.85 },
    'intermediate': { strokeOpacity: 0.7 },
    'bad': { strokeOpacity: 0.55 },
    'horrible': { strokeOpacity: 0.4 },
    'no': { strokeOpacity: 0.25 }
  });
  styleMap.addUniqueValueRules("default", "tourism", {
    'alpine_hut': { externalGraphic: 'symbols/alpinehut.p.16.png', graphicWidth: 16, graphicHeight: 16, graphicOpacity: 1 },
    'information': { externalGraphic: 'symbols/information.png', graphicWidth: 16, graphicHeight: 16, graphicOpacity: 1 },
    'viewpoint': { externalGraphic: 'symbols/view_point.p.16.png', graphicWidth: 16, graphicHeight: 16, graphicOpacity: 1 }
  });
  styleMap.addUniqueValueRules("default", "information", {
    'guidepost': { externalGraphic: 'symbols/guidepost.png', graphicWidth: 16, graphicHeight: 16, graphicOpacity: 1 }
  });
  styleMap.addUniqueValueRules("default", "natural", {
    'peak': { externalGraphic: 'symbols/peak.png', graphicWidth: 8, graphicHeight: 8, graphicOpacity: 1 }
  });
  styleMap.addUniqueValueRules("default", "mountain_pass", {
    'yes': { externalGraphic: 'symbols/pass.png', graphicWidth: 16, graphicHeight: 16, graphicOpacity: 1 }
  });
  styleMap.addUniqueValueRules("default", "aerialway", {
      'cable_car': { strokeColor: 'black', strokeWidth: 1.5, strokeDashstyle: 'longdashdot' },
      'gondola': { strokeColor: 'black', strokeWidth: 1.5, strokeDashstyle: 'longdashdot' },
      'chair_lift': { strokeColor: 'black', strokeWidth: 1.5, strokeDashstyle: 'longdashdot' },
      'mixed_lift': { strokeColor: 'black', strokeWidth: 1.5, strokeDashstyle: 'longdashdot' },
      'drag_lift': { strokeColor: 'black', strokeWidth: 1.5, strokeDashstyle: 'longdashdot' },
      'station': { pointRadius: 6, fillColor: 'black' },
      'pylon': { pointRadius: 2.5, fillColor: 'black' },
      'platter': { strokeColor: 'black', strokeWidth: 1.5, strokeDashstyle: 'longdashdot' },
      't-bar': { strokeColor: 'black', strokeWidth: 1.5, strokeDashstyle: 'longdashdot' },
      'j-bar': { strokeColor: 'black', strokeWidth: 1.5, strokeDashstyle: 'longdashdot' },
      'rope_tow ': { strokeColor: 'black', strokeWidth: 1.5, strokeDashstyle: 'longdashdot' },
      'magic_carpet': { strokeColor: 'black', strokeWidth: 1.5, strokeDashstyle: 'longdashdot' }
  });
  return styleMap;
}

function getHikkingStyle() {
    var styleMap = getMountainStyle();
    addStroke(styleMap, 'highway', 'path', 'green', 3);

    styleMap.addUniqueValueRules("default", "sac_scale", {
      'hiking': { strokeColor: 'red', strokeWidth: 2 },
      'mountain_hiking': { strokeColor: 'red', strokeDashstyle: 'longdash', strokeWidth: 2 },
      'demanding_mountain_hiking': { strokeColor: 'red', strokeDashstyle: 'dash', strokeWidth: 2 },
      'alpine_hiking': { strokeColor: 'blue', strokeWidth: 2 },
      'demanding_alpine_hiking': { strokeColor: 'blue', strokeDashstyle: 'longdash', strokeWidth: 2 },
      'difficult_alpine_hiking': { strokeColor: 'blue', strokeDashstyle: 'dash', strokeWidth: 2 }
    });
    return styleMap;
}
function getMTBStyle() {
    var styleMap = getMountainStyle();
    styleMap.addUniqueValueRules("default", "mtb:scale", {
      '0': { strokeColor: 'blue', strokeWidth: 2 },
      '1': { strokeColor: 'blue', strokeDashstyle: 'dash', strokeWidth: 2 },
      '2': { strokeColor: 'red', strokeWidth: 2 },
      '3': { strokeColor: 'red', strokeDashstyle: 'dash', strokeWidth: 2 },
      '4': { strokeColor: 'black', strokeWidth: 2 },
      '5': { strokeColor: 'black', strokeDashstyle: 'dash', strokeWidth: 2 }
    });
    styleMap.addUniqueValueRules("default", "route", {
      'bicycle': { strokeColor: 'blue', strokeWidth: 6, strokeOpacity: 0.3 },
      'mtb': { strokeColor: 'yellow', strokeWidth: 6, strokeOpacity: 0.3 }
    });
    return styleMap;
}
function getPisteStyle() {
    var styleMap = getMountainStyle();
    styleMap.addUniqueValueRules("default", "piste:difficulty", {
      'novice': { strokeColor: 'green', strokeWidth: 0 },
      'easy': { strokeColor: 'blue', strokeWidth: 0 },
      'intermediate': { strokeColor: 'red', strokeWidth: 0 },
      'advanced': { strokeColor: 'black', strokeWidth: 0 },
      'freestyle': { strokeColor: 'yellow', strokeWidth: 0 }
    });
    return styleMap;
}
function getSledStyle() {
    var styleMap = getPisteStyle();
    styleMap.addUniqueValueRules("default", "piste:type", {
      'sled': { strokeWidth: 4 }
    });
    return styleMap;
}
function getNordicStyle() {
    var styleMap = getPisteStyle();
    styleMap.addUniqueValueRules("default", "piste:type", {
      'nordic': { strokeWidth: 4 }
    });
    return styleMap;
}
function getSkyStyle() {
    var styleMap = getPisteStyle();
    styleMap.addUniqueValueRules("default", "piste:type", {
      'downhill': { strokeWidth: 4 }
    });
    return styleMap;
}
function getSnowShoeStyle() {
    var styleMap = getMountainStyle();
    styleMap.addUniqueValueRules("default", "route", {
      'snowshoe': { strokeColor: 'blue', strokeWidth: 3 }
    });
    return styleMap;
}
function getWinterWalksStyle() {
    var styleMap = getMountainStyle();
    styleMap.addUniqueValueRules("default", "route", {
      'winterwalks': { strokeColor: 'blue', strokeWidth: 3 }
    });
    return styleMap;
}
function getVitaStyle() {
    var styleMap = new OpenLayers.StyleMap();
    styleMap.addUniqueValueRules("default", "route", {
      'fitness_trail': { strokeColor: 'red', strokeWidth: 2 }
    });
    styleMap.addUniqueValueRules("default", "leisure", {
      'fitness_station': { pointRadius: 3, fillColor: 'orange' }
    });
    return styleMap;
}

