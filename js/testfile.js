$.fn.dataTableExt.afnSortData["dom-checkbox"] = function (oSettings, iColumn) {
  return $.map(oSettings.oApi._fnGetTrNodes(oSettings), function (tr, i) {
    return $("td:eq(" + iColumn + ") input", tr).prop("checked") ? "1" : "0";
  });
};
