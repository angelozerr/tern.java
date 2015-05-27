(function(mod) {
  if (typeof exports == "object" && typeof module == "object") // CommonJS
    return mod(require("tern/lib/infer"), require("tern/lib/tern"));
  if (typeof define == "function" && define.amd) // AMD
    return define([ "tern/lib/infer", "tern/lib/tern" ], mod);
  mod(tern, tern);
})(function(infer, tern) {
  "use strict";

  tern.registerPlugin("gcharts", function(server, options) {

    return {
      defs : defs
    };
  });
  
  var defs = {
  "!name": "gcharts",
  "!define": {
    "DataTableOptions": {
      "cols": {
        
      },
      "rows": {
        
      }
    }
  },
  "google": {
    "visualization": {
      "DataTable": {
        "!type": "fn(opt_data?: +DataTableOptions, opt_version?: number) -> +google.visualization.DataTable",
        "!url": "https://developers.google.com/chart/interactive/docs/reference#DataTable",
        "prototype": {
          "addColumn": {
            "!type": "fn() -> number",
            "!doc": "Adds a new column to the data table, and returns the index of the new column. All the cells\n        of the new column are assigned a null value. This method has two signatures:\n      \n      First signature has the following parameters:\n      \n        \n          type - A string with the data type of the values of the column. The type can\n          be one of the following: 'string', 'number', 'boolean', 'date', 'datetime',\n          and 'timeofday'.\n        \n        \n          opt_label - [Optional] A string with the label of the column. The\n          column label is typically displayed as part of the visualization, for example as a column\n          header in a table, or as a legend label in a pie chart. If not value is specified, an\n          empty string is assigned.\n        \n        \n          opt_id  - [Optional] A string with a unique identifier for the\n          column. If not value is specified, an empty string is assigned.\n        \n      \n      Second signature has a single object parameter with the following members:\n      \n        \n          type - A string describing the column data type. Same values as\n          type above.\n        \n        label - [Optional, string] A label for the column.\n        id - [Optional, string] An ID for the column.\n        \n          role - [Optional, string] A\n          role for the column.\n        \n        \n          pattern - [Optional, string] A number (or date) format string\n          specifying how to display the column value.\n        \n      \n      \n        See also: getColumnId,\n        getColumnLabel,\n        getColumnType,\n        insertColumn,\n        getColumnRole",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#DataTable"
          },
          "addRow": {
            "!type": "fn() -> number",
            "!doc": "Adds a new row to the data table, and returns the index of the new row.\n      \n        \n          opt_cellArray [optional] A row object, in JavaScript notation,\n          specifying the data for the new row. If this parameter is not included, this method will\n          simply add a new, empty row to the end of the table. This parameter is an array of cell\n          values: if you only want to specify a value for a cell, just give the cell value\n          (e.g. 55 or 'hello'); if you want to specify a formatted value and/or properties for the\n          cell, use a cell object (e.g., {v:55, f:'Fifty-five'}). You can\n          mix simple values and cell objects in the same method call). Use null or an\n          empty array entry for an empty cell.\n        \n      \n      Examples:\n      data.addRow();  // Add an empty row\ndata.addRow(['Hermione', new Date(1999,0,1)]); // Add a row with a string and a date value.\n\n// Add a row with two cells, the second with a formatted value.\ndata.addRow(['Hermione', {v: new Date(1999,0,1),\n                          f: 'January First, Nineteen ninety-nine'}\n]);\n\ndata.addRow(['Col1Val', null, 'Col3Val']); // Second column is undefined.\ndata.addRow(['Col1Val', , 'Col3Val']);     // Same as previous.",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#DataTable"
          },
          "addRows": {
            "!type": "fn() -> number",
            "!doc": "Adds new rows to the data table, and returns the index of the last added row. You can call\n        this method to create new empty rows, or with data used to populate the rows, as described\n        below.\n      \n      \n         numOrArray - Either a number or an array:\n          \n            \n              Number - A number specifying how many new, unpopulated rows to add.\n            \n            \n              Array - An array of row objects used to\n              populate a set of new rows. Each row is an object as described in\n              addRow(). Use null or an empty array entry for an empty\n              cell.\n            \n          \n        \n      \n      Example:\n      data.addRows([\n  ['Ivan', new Date(1977,2,28)],\n  ['Igor', new Date(1962,7,5)],\n  ['Felix', new Date(1983,11,17)],\n  ['Bob', null] // No date set for Bob.\n]);\n      See also: insertRows",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#DataTable"
          },
          "clone": {
            "!type": "fn() -> +google.visualization.ChartWrapper",
            "!doc": "Returns a deep copy of the chart wrapper.",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#DataTable"
          },
          "getColumnId": {
            "!type": "fn() -> string",
            "!doc": "Returns the identifier of a given column specified by the column index in the underlying\n      table.\n      For data tables that are retrieved by queries, the column identifier is set by the data\n      source, and can be used to refer to columns when using the\n      query language. \n      See also: Query.setQuery",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#DataTable"
          },
          "getColumnLabel": {
            "!type": "fn() -> string",
            "!doc": "Returns the label of a given column specified by the column index in the underlying table.\n      \n      The column label is typically displayed as part of the visualization. For example the column\n      label can be displayed as a column header in a table, or as the legend label in a pie chart.\n      \n      For data tables that are retrieved by queries, the column label is set by the data source, or\n      by the label clause of the\n      query language. \n      See also: setColumnLabel",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#DataTable"
          },
          "getColumnPattern": {
            "!type": "fn() -> string",
            "!doc": "Returns the formatting pattern used to format the values of the specified column.\n      \n        \n          columnIndex should be a number greater than or equal to zero, and less than\n          the number of columns as returned by the getNumberOfColumns() method.\n        \n      \n      \n        For data tables that are retrieved by queries, The column pattern is set by the data source,\n        or by the format clause of the query language. An example of a pattern is\n        '#,##0.00'. For more on patterns see the\n        query language reference.",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#DataTable"
          },
          "getColumnProperties": {
            "!type": "fn() -> ?",
            "!doc": "Returns a map of all properties for the specified column. Note that the properties object is\n        returned by reference, so changing values in the retrieved object changes them in the\n        DataTable.\n      \n      \n        \n          columnIndex is the numeric index of the column to retrieve properties for.",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#DataTable"
          },
          "getColumnProperty": {
            "!type": "fn() -> +Auto",
            "!doc": "Returns the value of a named property, or null if no such property is set for\n        the specified column. The return type varies, depending on the property.\n      \n      \n        \n          columnIndex should be a number greater than or equal to zero, and less than\n          the number of columns as returned by the getNumberOfColumns() method.\n        \n        name is the property name, as a string.\n      \n      \n        See also: setColumnProperty\n        setColumnProperties",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#DataTable"
          },
          "getColumnRange": {
            "!type": "fn() -> ?",
            "!doc": "Returns the minimal and maximal values of values in a specified column. The returned object\n        has properties min and max. If the range has no values,\n        min and max will contain null.\n      \n      \n        columnIndex should be a number greater than or equal to zero, and less than the\n        number of columns as returned by the getNumberOfColumns() method.",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#DataTable"
          },
          "getColumnRole": {
            "!type": "fn() -> string",
            "!doc": "Returns the role of the specified column.",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#DataTable"
          },
          "getColumnType": {
            "!type": "fn() -> string",
            "!doc": "Returns the type of a given column specified by the column index.\n      \n        \n          columnIndex should be a number greater than or equal to zero, and less than\n          the number of columns as returned by the getNumberOfColumns() method.\n        \n      \n      \n        The returned column type can be one of the following: 'string', 'number', 'boolean',\n        'date', 'datetime', and 'timeofday'",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#DataTable"
          },
          "getDistinctValues": {
            "!type": "fn() -> +Array of objects",
            "!doc": "Returns the unique values in a certain column, in ascending order.\n      \n        \n          columnIndex should be a number greater than or equal to zero, and less than\n          the number of columns as returned by the getNumberOfColumns() method.\n        \n      \n      \n        The type of the returned objects is the same as that returned by the\n        getValue method.",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#DataTable"
          },
          "getFilteredRows": {
            "!type": "fn() -> +Array of objects",
            "!doc": "Returns the row indexes for rows that match all of the given filters. The indexes are\n        returned in ascending order. The output of this method can be used as input to\n        DataView.setRows() to change the displayed set\n        of rows in a visualization.\n      \n      \n        filters - An array of objects that describe an acceptable cell value. A row\n        index is returned by this method if it matches all of the given filters. Each\n        filter is an object with a numeric column property that specifies the index of\n        the column in the row to assess, plus one of the following:\n      \n      \n        \n          A value property with a value that must be matched exactly by the cell in the\n          specified column. The value must be the same type as the column; or\n        \n        \n          One or both of the following properties, the same type as the column\n          being filtered:\n          \n            \n              minValue - A minimum value for the cell. The cell value in the specified\n              column must be greater than or equal to this value.\n            \n            \n              maxValue - A maximum value for the cell. The cell value in the specified\n              column must be less than or equal to this value.\n            \n          \n          A null or undefined value for minValue (or maxValue) means that\n          the lower (or upper) bound of the range will not be enforced.\n        \n      \n      \n        Another optional property, test, specifies a function to be combined with value\n        or range filtering.  The function is called with the cell value, the row and column indices,\n        and the datatable. It should return false if the row should be excluded from the result.\n      \n      \n        Example: getFilteredRows([{column: 3, value: 42}, {column: 2,\n        minValue: 'bar', maxValue: 'foo'}]) returns an array containing, in ascending order,\n        the indexes of all rows for which the fourth column (column index 3) is exactly 42, and the\n        third column (column index 2) is between 'bar' and 'foo' (inclusive).",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#DataTable"
          },
          "getFormattedValue": {
            "!type": "fn() -> string",
            "!doc": "Returns the formatted value of the cell at the given row and column indexes.\n      \n        \n          rowIndex should be a number greater than or equal to zero, and less than the\n          number of rows as returned by the getNumberOfRows() method.\n        \n        \n          ColumnIndex should be a number greater than or equal to zero, and less than\n          the number of columns as returned by the getNumberOfColumns() method.\n        \n      \n      \n        For more on formatting column values see the\n        query language reference.\n      \n      See also: setFormattedValue",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#DataTable"
          },
          "getNumberOfColumns": {
            "!type": "fn() -> number",
            "!doc": "Returns the number of columns in the table.",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#DataTable"
          },
          "getNumberOfRows": {
            "!type": "fn() -> number",
            "!doc": "Returns the number of rows in the table.",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#DataTable"
          },
          "getProperties": {
            "!type": "fn() -> ?",
            "!doc": "Returns a map of all the properties for the specified cell. Note that the properties object\n        is returned by reference, so changing values in the retrieved object changes them in the\n        DataTable.\n      \n      \n        rowIndex is the cell's row index.\n        columnIndex is the cell's column index.",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#DataTable"
          },
          "getProperty": {
            "!type": "fn() -> +Auto",
            "!doc": "Returns the value of a named property, or null if no such property is set for\n        the specified cell. The return type varies, depending on the property.\n      \n      \n        \n          rowIndex should be a number greater than or equal to zero, and less than the\n          number of rows as returned by the getNumberOfRows() method.\n        \n        \n          columnIndex should be a number greater than or equal to zero, and less than\n          the number of columns as returned by the getNumberOfColumns() method.\n        \n        name is a string with the property name.\n      \n      \n        See also: setCell\n        setProperties\n        setProperty",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#DataTable"
          },
          "getRowProperties": {
            "!type": "fn() -> ?",
            "!doc": "Returns a map of all properties for the specified row. Note that the properties object is\n        returned by reference, so changing values in the retrieved object changes them in the\n        DataTable.\n      \n      \n        \n          rowIndex is the index of the row to retrieve properties for.",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#DataTable"
          },
          "getRowProperty": {
            "!type": "fn() -> +Auto",
            "!doc": "Returns the value of a named property, or null if no such property is set for\n        the specified row. The return type varies, depending on the property.\n      \n      \n        \n          rowIndex should be a number greater than or equal to zero, and less than the\n          number of rows as returned by the getNumberOfRows() method.\n        \n        name is a string with the property name.\n      \n      \n        See also: setRowProperty\n        setRowProperties",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#DataTable"
          },
          "getSortedRows": {
            "!type": "fn() -> +Array of numbers",
            "!doc": "Returns a sorted version of the table without modifying the order of the underlying data.\n        To permanently sort the underlying data, call\n        sort(). You can specify sorting in a number of\n        ways, depending on the type you pass in to the sortColumns parameter:\n      \n      \n        \n          A single number specifies the index of the column to sort by. Sorting\n          will be in ascending order. Example: sortColumns(3) will\n          sort by the 4th column, in ascending order.\n        \n        \n          A single object that contains the number of the column index to sort by,\n          and an optional boolean property desc. If desc is set to true,\n          the specific column will be sorted in descending order; otherwise, sorting is in\n          ascending order. Examples: sortColumns({column: 3}) will\n          sort by the 4th column, in ascending order;\n          sortColumns({column: 3, desc: true}) will sort by the 4th column, in\n          descending order.\n        \n        \n          An array of numbers of the column indexes by which to sort. The first\n          number is the primary column by which to sort, the second one is the secondary, and so on.\n          This means that when two values in the first column are equal, the values in the next\n          column are compared, and so on. Example:\n          sortColumns([3, 1, 6]) will sort first by the 4th column\n          (in ascending order), then by the 2nd column (in ascending order), and then by the 7th\n          column (in ascending order).\n        \n        \n           An array of objects, each one with the number of the column index to\n          sort by, and an optional boolean property desc. If desc is set\n          to true, the specific column will be sorted in descending order (the default is ascending\n          order). The first object is the primary column by which to sort, the second one is the\n          secondary, and so on. This means that when two values in the first column are equal, the\n          values in the next column are compared, and so on. Example:\n          sortColumn([{column: 3}, {column: 1, desc: true}, {column: 6, desc: true}])\n          will sort first by the 4th column (in ascending order), then column 2 in descending order,\n          and then column 7 in descending order.\n        \n      \n      \n        The returned value is an array of numbers, each number is an index of a\n        DataTable row. Iterating on the DataTable rows by the order of the\n        returned array will result in rows ordered by the specified sortColumns. The\n        output can be used as input to\n        DataView.setRows() to quickly change the\n        displayed set of rows in a visualization.\n      \n      \n        Note that the sorting is guaranteed to be stable: this means that if you sort on equal\n        values of two rows, the same sort will return the rows in the same order every time.\n        See also: sort\n      \n      Example: To iterate on rows ordered by the third column, use:\n      var rowInds = data.getSortedRows([{column: 2}]);\nfor (var i = 0; i < rowInds.length; i++) {\n  var v = data.getValue(rowInds[i], 2);\n}",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#DataTable"
          },
          "getTableProperties": {
            "!type": "fn() -> ?",
            "!doc": "Returns a map of all properties for the table.",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#DataTable"
          },
          "getTableProperty": {
            "!type": "fn() -> +Auto",
            "!doc": "Returns the value of a named property, or null if no such property is set for\n        the table. The return type varies, depending on the property.\n      \n      \n        name is a string with the property name.\n      \n      \n        See also: setTableProperties\n        setTableProperty",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#DataTable"
          },
          "getValue": {
            "!type": "fn() -> ?",
            "!doc": "Returns the value of the cell at the given row and column indexes.\n      \n        \n          rowIndex should be a number greater than or equal to zero, and less than the\n          number of rows as returned by the getNumberOfRows() method.\n        \n        \n          columnIndex should be a number greater than or equal to zero, and less than\n          the number of columns as returned by the getNumberOfColumns() method.\n        \n      \n      \n        The type of the returned value depends on the column type (see\n        getColumnType):\n      \n      \n        If the column type is 'string', the value is a string.\n        If the column type is 'number', the value is a number.\n        If the column type is 'boolean', the value is a boolean.\n        If the column type is 'date' or 'datetime', the value is a Date object.\n        \n          If the column type is 'timeofday', the value is an array of four numbers: [hour, minute,\n          second, milliseconds].\n        \n        If the column value is a null value, an exception is thrown.",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#DataTable"
          },
          "insertColumn": {
            "!type": "fn()",
            "!doc": "Inserts a new column to the data table, at the specifid index. All existing columns at or\n        after the specified index are shifted to a higher index.\n      \n      \n        \n          columnIndex is a number with the required index of the new column.\n        \n        \n          type should be a string with the data type of the values of the column. The\n          type can be one of the following:\n          'string', 'number', 'boolean', 'date', 'datetime', and\n          'timeofday'.\n        \n        \n          label should be a string with the label of the column. The column label is\n          typically displayed as part of the visualization, for example as a column header in a\n          table, or as a legend label in a pie chart. If no value is specified, an empty string is\n          assigned.\n        \n        \n          id should be a string with a unique identifier for the column. If no value is\n          specified, an empty string is assigned.\n        \n      \n      See also: addColumn",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#DataTable"
          },
          "insertRows": {
            "!type": "fn()",
            "!doc": "Insert the specified number of rows at the specified row index.\n      \n        \n          rowIndex is the index number where to insert the new row(s). Rows will be\n          added, starting at the index number specified.\n        \n        \n          numberOrArray is either a number of new, empty rows to add, or an array of\n          one or more populated rows to add at the index. See\n          addRows() for the syntax for adding an array\n          of row objects.\n        \n      \n      See also: addRows",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#DataTable"
          },
          "removeColumn": {
            "!type": "fn()",
            "!doc": "Removes the column at the specified index.\n      \n        columnIndex should be a number with a valid column index.\n      \n      See also: removeColumns",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#DataTable"
          },
          "removeColumns": {
            "!type": "fn()",
            "!doc": "Removes the specified number of columns starting from the column at the specified index.\n      \n      \n        numberOfColumns is the number of columns to remove.\n        columnIndex should be a number with a valid column index.\n      \n      See also: removeColumn",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#DataTable"
          },
          "removeRow": {
            "!type": "fn()",
            "!doc": "Removes the row at the specified index.\n      \n        rowIndex should be a number with a valid row index.\n      \n      See also: removeRows",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#DataTable"
          },
          "removeRows": {
            "!type": "fn()",
            "!doc": "Removes the specified number of rows starting from the row at the specified index.\n      \n        numberOfRows is the number of rows to remove.\n        rowIndex should be a number with a valid row index.\n      \n      See also: removeRow",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#DataTable"
          },
          "setCell": {
            "!type": "fn()",
            "!doc": "Sets the value, formatted value, and/or properties, of a cell.\n      \n        \n          rowIndex should be a number greater than or equal to zero, and less than the\n          number of rows as returned by the getNumberOfRows() method.\n        \n        \n          columnIndex should be a number greater than or equal to zero, and less than\n          the number of columns as returned by the getNumberOfColumns() method.\n        \n        \n          value [Optional] is the value assigned to the specified cell. To\n          avoid overwriting this value, set this parameter to undefined; to clear this\n          value, set it to null. The type of the value depends on the column type (see\n          getColumnType()):\n          \n            If the column type is 'string', the value should be a string.\n            If the column type is 'number', the value should be a number.\n            If the column type is 'boolean', the value should be a boolean.\n            If the column type is 'date' or 'datetime', the value should be a Date object.\n            \n              If the column type is 'timeofday', the value should be an array of four numbers:\n              [hour, minute, second, milliseconds].\n            \n          \n        \n        \n          formattedValue [Optional] is a string with the value formatted as a\n          string. To avoid overwriting this value, set this parameter to undefined; to\n          clear this value and have the API apply default formatting to value as\n          needed, set it to null; to explicitly set an empty formatted value, set it to\n          an empty string. The formatted value is typically used by visualizations to display value\n          labels. For example the formatted value can appear as a label text within a pie chart.\n        \n        \n          properties [Optional] is an Object (a name/value map)\n          with additional properties for this cell. To avoid overwriting this value, set this\n          parameter to undefined; to clear this value, set it to null.\n          Some visualizations support row, column, or cell properties to modify their display or\n          behavior; see the visualization documentation to see what properties are supported.\n        \n      \n      \n        See also: setValue(),\n        setFormattedValue(),\n        setProperty(),\n        setProperties().",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#DataTable"
          },
          "setColumnLabel": {
            "!type": "fn()",
            "!doc": "Sets the label of a column.\n      \n        \n          columnIndex should be a number greater than or equal to zero, and less than\n          the number of columns as returned by the getNumberOfColumns() method.\n        \n        \n          label is a string with the label to assign to the column. The column label is\n          typically displayed as part of the visualization. For example the column label can be\n          displayed as a column header in a table, or as the legend label in a pie chart.\n        \n      \n      See also: getColumnLabel",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#DataTable"
          },
          "setColumnProperty": {
            "!type": "fn()",
            "!doc": "Sets a single column property. Some visualizations support row, column, or cell properties\n        to modify their display or behavior; see the visualization documentation to see what\n        properties are supported.\n      \n      \n        \n          columnIndex should be a number greater than or equal to zero, and less than\n          the number of columns as returned by the getNumberOfColumns() method.\n        \n        name is a string with the property name.\n        \n          value is a value of any type to assign to the specified named property of the\n          specified column.\n        \n      \n      \n        See also:setColumnProperties\n        getColumnProperty",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#DataTable"
          },
          "setColumnProperties": {
            "!type": "fn()",
            "!doc": "Sets multiple column properties. Some visualizations support row, column, or cell properties\n        to modify their display or behavior; see the visualization documentation to see what\n        properties are supported.\n      \n      \n        \n          columnIndex should be a number greater than or equal to zero, and less than\n          the number of columns as returned by the getNumberOfColumns() method.\n        \n        \n          properties is an Object (name/value map) with additional\n          properties for this column. If null is specified, all additional properties\n          of the column will be removed.\n        \n      \n      \n        See also: setColumnProperty\n        getColumnProperty",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#DataTable"
          },
          "setFormattedValue": {
            "!type": "fn()",
            "!doc": "Sets the formatted value of a cell.\n      \n        \n          rowIndex should be a number greater than or equal to zero, and less than the\n          number of rows as returned by the getNumberOfRows() method.\n        \n        \n          columnIndex should be a number greater than or equal to zero, and less than\n          the number of columns as returned by the getNumberOfColumns() method.\n        \n        \n          formattedValue is a string with the value formatted for display. To clear\n          this value and have the API apply default formatting to the cell value as needed, set it\n          formattedValue null; to explicitly set an empty formatted value, set\n          it to an empty string.\n        \n      \n      See also: getFormattedValue",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#DataTable"
          },
          "setProperty": {
            "!type": "fn()",
            "!doc": "Sets a cell property. Some visualizations support row, column, or cell properties to modify\n        their display or behavior; see the visualization documentation to see what properties are\n        supported.\n      \n      \n        \n          rowIndex should be a number greater than or equal to zero, and less than the\n          number of rows as returned by the getNumberOfRows() method.\n        \n        \n          columnIndex should be a number greater than or equal to zero, and less than\n          the number of columns as returned by the getNumberOfColumns() method.\n        \n        name is a string with the property name.\n        \n          value is a value of any type to assign to the specified named property of\n          the specified cell.\n        \n      \n      \n        See also: setCell\n        setProperties\n        getProperty",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#DataTable"
          },
          "setProperties": {
            "!type": "fn()",
            "!doc": "Sets multiple cell properties. Some visualizations support row, column, or cell properties\n        to modify their display or behavior; see the visualization documentation to see what\n        properties are supported.\n      \n      \n        \n          rowIndex should be a number greater than or equal to zero, and less than the\n          number of rows as returned by the getNumberOfRows() method.\n        \n        \n          columnIndex should be a number greater than or equal to zero, and less than\n          the number of columns as returned by the getNumberOfColumns() method.\n        \n        \n          properties is an Object (name/value map) with additional\n          properties for this cell. If null is specified, all additional properties of\n          the cell will be removed.\n        \n      \n      \n        See also: setCell\n        setProperty\n        getProperty",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#DataTable"
          },
          "setRowProperty": {
            "!type": "fn()",
            "!doc": "Sets a row property. Some visualizations support row, column, or cell properties to modify\n        their display or behavior; see the visualization documentation to see what properties are\n        supported.\n      \n      \n        \n          rowIndex should be a number greater than or equal to zero, and less than the\n          number of rows as returned by the getNumberOfRows() method.\n        \n        name is a string with the property name.\n        \n          value is a value of any type to assign to the specified named property of the\n          specified row.\n        \n      \n      \n        See also: setRowProperties\n        getRowProperty",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#DataTable"
          },
          "setRowProperties": {
            "!type": "fn()",
            "!doc": "Sets multiple row properties. Some visualizations support row, column, or cell properties to\n        modify their display or behavior; see the visualization documentation to see what properties\n        are supported.\n      \n      \n        \n          rowIndex should be a number greater than or equal to zero, and less than the\n          number of rows as returned by the getNumberOfRows() method.\n        \n        \n          properties is an Object (name/value map) with additional\n          properties for this row. If null is specified, all additional properties of\n          the row will be removed.\n        \n      \n      \n        See also: setRowProperty\n        getRowProperty",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#DataTable"
          },
          "setTableProperty": {
            "!type": "fn()",
            "!doc": "Sets a single table property. Some visualizations support table, row, column, or cell\n        properties to modify their display or behavior; see the visualization documentation to see\n        what properties are supported.\n      \n      \n        name is a string with the property name.\n        \n          value is a value of any type to assign to the specified named property of the\n          table.\n        \n      \n      \n        See also: setTableProperties\n        getTableProperty",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#DataTable"
          },
          "setTableProperties": {
            "!type": "fn()",
            "!doc": "Sets multiple table properties. Some visualizations support table, row, column, or cell\n        properties to modify their display or behavior; see the visualization documentation to see\n        what properties are supported.\n      \n      \n        \n          properties is an Object (name/value map) with additional\n          properties for the table. If null is specified, all additional properties of\n          the table will be removed.\n        \n      \n      \n        See also: setTableProperty\n        getTableProperty",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#DataTable"
          },
          "setValue": {
            "!type": "fn()",
            "!doc": "Sets the value of a cell. In addition to overwriting any existing cell value, this method\n        will also clear out any formatted value and properties for the cell.\n      \n      \n        \n          rowIndex should be a number greater than or equal to zero, and less than the\n          number of rows as returned by the getNumberOfRows() method.\n        \n        \n          columnIndex should be a number greater than or equal to zero, and less than\n          the number of columns as returned by the getNumberOfColumns() method. This\n          method does not let you set a formatted value for this cell; to do that, call\n          setFormattedValue().\n        \n        \n          value is the value assigned to the specified cell. The type of the returned\n          value depends on the column type\n          (see getColumnType):\n          \n            If the column type is 'string', the value should be a string.\n            If the column type is 'number', the value should be a number.\n            If the column type is 'boolean', the value should be a boolean.\n            If the column type is 'date' or 'datetime', the value should be a Date object.\n            \n              If the column type is 'timeofday', the value should be an array of four numbers:\n              [hour, minute, second, milliseconds].\n            \n            For any column type, the value can be set to null.\n          \n        \n      \n      \n        See also: setCell,\n        setFormattedValue,\n         setProperty,\n        setProperties",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#DataTable"
          },
          "sort": {
            "!type": "fn()",
            "!doc": "Sorts the rows, according to the specified sort columns. The DataTable is\n      modified by this method. See\n      getSortedRows() for a description of the\n      sorting details. This method does not return the sorted data.\n      See also: getSortedRows \n      Example: To sort by the third column and then by the second\n      column, use: data.sort([{column: 2}, {column: 1}]);",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#DataTable"
          },
          "toJSON": {
            "!type": "fn() -> string",
            "!doc": "Returns a string version of the JSON representation of the chart.",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#DataTable"
          },
          "getColumnId\n        getColumnLabel\n        getColumnPattern\n        getColumnProperty\n        getColumnRange\n        getColumnType\n        getDistinctValues\n        getFilteredRows\n        getFormattedValue\n        getNumberOfColumns\n        getNumberOfRows\n        getProperty\n        getProperties\n        getRowProperty\n        getSortedRows\n        getTableProperty\n        getValue": {
            "!type": "fn() -> +See descriptions in DataTable.",
            "!doc": "Same as the equivalent DataTable methods, except that row/column indexes refer to\n      the index in the view and not in the underlying table/view.",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#DataTable"
          },
          "getTableColumnIndex": {
            "!type": "fn() -> number",
            "!doc": "Returns the index in the underlying table (or view) of a given column specified by its index\n        in this view. viewColumnIndex should be a number greater than or equal to zero,\n        and less than the number of columns as returned by the getNumberOfColumns()\n        method. Returns -1 if this is a generated column.\n      \n      \n        Example: If setColumns([3, 1, 4]) was previously called, then\n        getTableColumnIndex(2) will return 4.",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#DataTable"
          },
          "getTableRowIndex": {
            "!type": "fn() -> number",
            "!doc": "Returns the index in the underlying table (or view) of a given row specified by its index in\n        this view. viewRowIndex should be a number greater than or equal to zero, and\n        less than the number of rows as returned by the getNumberOfRows() method.\n      \n      \n        Example: If setRows([3, 1, 4]) was previously called, then\n        getTableRowIndex(2) will return 4.",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#DataTable"
          },
          "getViewColumnIndex": {
            "!type": "fn() -> number",
            "!doc": "Returns the index in this view that maps to a given column specified by its index in the\n        underlying table (or view). If more than one such index exists, returns the first (smallest)\n        one. If no such index exists (the specified column is not in the view), returns -1.\n        tableColumnIndex should be a number greater than or equal to zero, and less\n        than the number of columns as returned by the getNumberOfColumns() method of\n        the underlying table/view.\n      \n      \n        Example: If setColumns([3, 1, 4]) was previously called, then\n        getViewColumnIndex(4) will return 2.",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#DataTable"
          },
          "getViewColumns": {
            "!type": "fn() -> +Array of numbers",
            "!doc": "Returns the columns in this view, in order. That is, if you call setColumns\n        with some array, and then call getViewColumns() you should get an identical\n        array.",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#DataTable"
          },
          "getViewRowIndex": {
            "!type": "fn() -> number",
            "!doc": "Returns the index in this view that maps to a given row specified by its index in the\n        underlying table (or view). If more than one such index exists, returns the first (smallest)\n        one. If no such index exists (the specified row is not in the view), returns -1.\n        tableRowIndex should be a number greater than or equal to zero, and less than\n        the number of rows as returned by the getNumberOfRows() method of the\n        underlying table/view.\n      \n      \n        Example: If setRows([3, 1, 4]) was previously called, then\n        getViewRowIndex(4) will return 2.",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#DataTable"
          },
          "getViewRows": {
            "!type": "fn() -> +Array of numbers",
            "!doc": "Returns the rows in this view, in order. That is, if you call setRows with some\n        array, and then call getViewRows() you should get an identical array.",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#DataTable"
          },
          "hideColumns": {
            "!type": "fn()",
            "!doc": "Hides the specified columns from the current view. columnIndexes is an array of\n        numbers representing the indexes of the columns to hide. These indexes are the index numbers\n        in the underlying table/view. The numbers in columnIndexes do not have\n        to be in order (that is, [3,4,1] is fine). The remaining columns retain their index order\n        when you iterate through them. Entering an index number for a column already hidden is not\n        an error, but entering an index that does not exist in the underlying table/view will throw\n        an error. To unhide columns, call setColumns().\n      \n      \n        Example: If you have a table with 10 columns, and you call\n        setColumns([2,7,1,7,9]), and then hideColumns([7,9]), the columns\n        in the view will then be [2,1].",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#DataTable"
          },
          "hideRows": {
            "!type": "fn()",
            "!doc": "Hides the specified rows from the current view. rowIndexes is an array of\n        numbers representing the indexes of the rows to hide. These indexes are the index numbers in\n        the underlying table/view. The numbers in rowIndexes do not have to be\n        in order (that is, [3,4,1] is fine). The remaining rows retain their index order. Entering\n        an index number for a row already hidden is not an error, but entering an index that does\n        not exist in the underlying table/view will throw an error. To unhide rows, call\n        setRows().\n      \n      \n        Example: If you have a table with 10 rows, and you call\n        setRows([2,7,1,7,9]), and then hideRows([7,9]), the rows in the\n        view will then be [2,1].",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#DataTable"
          },
          "setColumns": {
            "!type": "fn()",
            "!doc": "Specifies which columns are visible in this view. Any columns not specified will be hidden.\n        This is an array of column indexes in the underlying table/view, or calculated columns. If\n        you don't call this method, the default is to show all columns. The array can also contain\n        duplicates, to show the same column multiple times. Columns will be shown in the order\n        specified.\n      \n      \n        \n          columnIndexes - An array of numbers and/or objects (can be mixed):\n          \n            \n              Numbers specify the index of the source data column to include in the\n              view. The data is brought through unmodified. If you need to explicitly define a role\n              or additional column properties, specify an object with a sourceColumn\n              property.\n            \n            \n              Objects specify a calculated column. A calculated column\n              creates a value on the fly for each row and adds it to the view. The object must have\n              the following properties:\n              \n                \n                  calc [function] - A function that will be called for each\n                  row in the column to calculate a value for that cell. The function signature is\n                  func(dataTable, row), where\n                  dataTable is the source DataTable, and\n                  row is the index of the source data row. The function should\n                  return a single value of the type specified by type.\n                \n                \n                  type [string] - The JavaScript type of the value that the\n                  calc function returns.\n                \n                \n                  label [Optional, string] - An optional label to\n                  assign to this generated column. If not specified, the view column will have no\n                  label.\n                \n                \n                  id [Optional, string] - An optional ID to assign to\n                  this generated column.\n                \n                \n                  sourceColumn - [Optional, number] The source column\n                  to use as a value; if specified, do not specify the calc or the\n                  type property. This is similar to passing in a number instead of an\n                  object, but enables you to specify a role and properties for the new column.\n                \n                \n                  properties [Optional, object] - An object\n                  containing any arbitrary properties to assign to this column. If not specified,\n                  the view column will have no properties.\n                \n                \n                  role [Optional, string] - A\n                  role to assign to this column. If not\n                  specified, the existing role will not be imported.\n                \n              \n            \n          \n        \n      \n      Examples:\n      // Show some columns directly from the underlying data.\n// Shows column 3 twice.\nview.setColumns([3, 4, 3, 2]);\n\n// Underlying table has a column specifying a value in centimeters.\n// The view imports this directly, and creates a calculated column\n// that converts the value into inches.\nview.setColumns([1,{calc:cmToInches, type:'number', label:'Height in Inches'}]);\nfunction cmToInches(dataTable, rowNum){\n  return Math.floor(dataTable.getValue(rowNum, 1) / 2.54);\n}",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#DataTable"
          },
          "setRows": {
            "!type": "fn()",
            "!doc": "Sets the visible rows in this view, based on index numbers from the underlying table/view.\n        rowIndexes should be an array of index numbers specifying which rows to show in\n        the view. The array specifies the order in which to show the rows, and rows can be\n        duplicated. Note that only the rows specified in rowIndexes will be\n        shown; this method clears all other rows from the view. The array can also contain\n        duplicates, effectively duplicating the specified row in this view (for example,\n        setRows([3, 4, 3, 2]) will cause row 3 to appear twice in this\n        view). The array thus provides a mapping of the rows from the underlying table/view to this\n        view. You can use getFilteredRows() or\n        getSortedRows() to generate input for\n        this method.\n      \n      \n        Example: To create a view with rows three and zero of an underlying\n        table/view: view.setRows([3, 0])",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#DataTable"
          },
          "toDataTable": {
            "!type": "fn() -> +google.visualization.DataTable",
            "!doc": "Returns a DataTable object populated with the visible rows and columns of the\n      DataView.",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#DataTable"
          },
          "draw": {
            "!type": "fn()",
            "!doc": "Draws the chart. You must call this method after any changes that you make to the chart or\n        data to show the changes.\n      \n      \n        \n          opt_container_ref [Optional] - A reference to a valid container element\n          on the page. If specified, the chart will be drawn there. If not, the chart will be drawn\n          in the element with ID specified by containerId.",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#DataTable"
          },
          "getDataSourceUrl": {
            "!type": "fn() -> string",
            "!doc": "If this chart gets its data from a data source,\n      returns the URL for this data source. Otherwise, returns null.",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#DataTable"
          },
          "getDataTable": {
            "!type": "fn() -> +google.visualization.DataTable",
            "!doc": "Returns the data table as returned by the data source. Returns null if the query\n      execution failed and no data was returned.",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#DataTable"
          },
          "getChartType": {
            "!type": "fn() -> string",
            "!doc": "The class name of the wrapped chart. If this is a Google chart, the name will not be qualified\n      with google.visualization. So, for example, if this were a Treemap chart,\n      it would return \"Treemap\" rather than \"google.visualization.treemap\".",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#DataTable"
          },
          "getChartName": {
            "!type": "fn() -> string",
            "!doc": "Returns the chart name assigned by setChartName().",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#DataTable"
          },
          "getChart": {
            "!type": "fn() -> +Chart object reference",
            "!doc": "Returns a reference to the chart created by this ChartWrapper, for example a\n      \n        google.visualization.BarChart\n      \n      or a\n      \n        google.visualization.ColumnChart\n      .\n      This will return null until after you have called draw() on the ChartWrapper\n      object, and it throws a ready event. Methods called on the returned object will be reflected\n      on the page.",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#DataTable"
          },
          "getContainerId": {
            "!type": "fn() -> string",
            "!doc": "The ID of the chart's DOM container element.",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#DataTable"
          },
          "getQuery": {
            "!type": "fn() -> string",
            "!doc": "The query string for this chart, if it has one and queries a data source.",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#DataTable"
          },
          "getRefreshInterval": {
            "!type": "fn() -> number",
            "!doc": "Any refresh interval for this chart, if it queries a data source. Zero\n      indicates no refresh.",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#DataTable"
          },
          "getOption": {
            "!type": "fn() -> +Any type",
            "!doc": "Returns the specified chart option value\n      \n        \n          key - The name of the option to retrieve. May be a qualified name, such as\n          'vAxis.title'.\n        \n        \n          opt_default_value [Optional] - If the specified value is undefined or\n          null, this value will be returned.",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#DataTable"
          },
          "getOptions": {
            "!type": "fn() -> ?",
            "!doc": "Returns the options object for this chart.",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#DataTable"
          },
          "getView": {
            "!type": "fn() -> +Object OR Array",
            "!doc": "Returns the DataView initializer object, in the same format as\n      dataview.toJSON(), or an array of such objects.",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#DataTable"
          },
          "setDataSourceUrl": {
            "!type": "fn()",
            "!doc": "Sets the URL of a data source to use for this\n      chart. If you also set a data table for this object, the data source URL will be ignored.",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#DataTable"
          },
          "setDataTable": {
            "!type": "fn()",
            "!doc": "Sets the DataTable for the chart. Pass in one of the following: null; a DataTable object; a\n      JSON representation of a DataTable; or an array following the syntax of\n      arrayToDataTable().",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#DataTable"
          },
          "setChartType": {
            "!type": "fn()",
            "!doc": "Sets the chart type. Pass in the class name of the wrapped chart. If this is a Google chart,\n      do not qualify it with google.visualization. So, for example, for a pie chart,\n      pass in \"PieChart\".",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#DataTable"
          },
          "setChartName": {
            "!type": "fn()",
            "!doc": "Sets an arbitrary name for the chart. This is not shown anywhere on the chart, unless a custom\n      chart is explicitly designed to use it.",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#DataTable"
          },
          "setContainerId": {
            "!type": "fn()",
            "!doc": "Sets the ID of the containing DOM element for the chart.",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#DataTable"
          },
          "setQuery": {
            "!type": "fn()",
            "!doc": "Sets the query string. The value of the string parameter should be a valid\n      query. \n      This method, if used, should be called before calling the send method.\n      Learn more about the Query language.",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#DataTable"
          },
          "setRefreshInterval": {
            "!type": "fn()",
            "!doc": "Sets the query to automatically call the send method every specified duration\n        (number of seconds), starting from the first explicit call to send.\n        seconds is a number greater than or equal to zero.\n      \n      If you use this method, you should call it before calling the send method.\n      \n        Cancel this method either by calling it again with zero (the default), or by calling\n        abort().",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#DataTable"
          },
          "setOption": {
            "!type": "fn()",
            "!doc": "Sets a single chart option value, where key is the option name and value is\n      the value. To unset an option, pass in null for the value. Note that key may be a\n      qualified name, such as 'vAxis.title'.",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#DataTable"
          },
          "setOptions": {
            "!type": "fn()",
            "!doc": "Sets a complete options object for a chart.",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#DataTable"
          },
          "setView": {
            "!type": "fn()",
            "!doc": "Sets a DataView initializer object, which acts as a filter over the underlying\n      data. The chart wrapper must have underlying data from a DataTable or a data source to apply\n      this view to. You can pass in either a string or DataView initializer object,\n      like that returned by dataview.toJSON(). You can\n      also pass in an array of DataView initializer objects, in which case the first\n      DataView in the array is applied to the underlying data to create a new data\n      table, and the second DataView is applied to the data table resulting from\n      application of the first DataView, and so on.",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#DataTable"
          },
          "openDialog": {
            "!type": "fn() -> +null",
            "!doc": "Opens the chart editor as an embedded dialog box on the page. The function returns\n        immediately; it does not wait for the dialog to be closed. If you do not lose scope of the\n        instance, you can call openDialog() again to reopen the dialog, although you\n        must pass in a ChartWrapper object again.\n      \n      \n        \n          chartWrapper - A ChartWrapper\n          object defining the initial chart to render in the window. The chart must either have a\n          populated DataTable, or be connected to a valid data source. This wrapper is\n          copied internally to the chart editor, so any later changes that you make to your\n          ChartWrapper handle will not be reflected in the chart editor's copy.\n        \n        \n          opt_options - [Optional] An object containing any options for the chart\n          editor. See the options table below.",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#DataTable"
          },
          "getChartWrapper": {
            "!type": "fn() -> +google.visualization.ChartWrapper",
            "!doc": "Returns a ChartWrapper representing the chart, with user modifications.",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#DataTable"
          },
          "setChartWrapper": {
            "!type": "fn() -> +null",
            "!doc": "Use this method to update the rendered chart on the editor.\n      \n        chartWrapper - A ChartWrapper object representing the new chart to\n        render. The chart must either have a populated DataTable, or be connected to a\n        valid data source.",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#DataTable"
          },
          "closeDialog": {
            "!type": "fn() -> +null",
            "!doc": "Closes the chart editor dialog box.",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#DataTable"
          },
          "google.visualization.data.group": {
            "!type": "fn()",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#DataTable"
          },
          "google.visualization.data.join": {
            "!type": "fn()",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#DataTable"
          },
          "google.visualization.formatter_name": {
            "!type": "fn()",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#DataTable"
          },
          "format": {
            "!type": "fn()",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#DataTable"
          },
          "google.visualization.ColorFormat": {
            "!type": "fn()",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#DataTable"
          },
          "addRange": {
            "!type": "fn()",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#DataTable"
          },
          "addGradientRange": {
            "!type": "fn()",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#DataTable"
          },
          "google.visualization.DateFormat": {
            "!type": "fn()",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#DataTable"
          },
          "formatValue": {
            "!type": "fn()",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#DataTable"
          },
          "google.visualization.NumberFormat": {
            "!type": "fn()",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#DataTable"
          },
          "google.visualization.PatternFormat": {
            "!type": "fn()",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#DataTable"
          },
          "createQueryFromPrefs": {
            "!type": "fn() -> +google.visualization.Query",
            "!doc": "Static. Create a new instance of google.visualization.Query and set its\n      properties according to values from the gadget preferences. The type of parameter\n      prefs is _IG_Prefs\n      \n        Preference _table_query_url is used to set the Query data source URL.\n        \n          Preference _table_query_refresh_interval is used to set the Query refresh\n          interval (in seconds).",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#DataTable"
          },
          "validateResponse": {
            "!type": "fn() -> bool",
            "!doc": "Static. Parameter response is of type\n      google.visualization.QueryResponse. Returns true if\n      the response contains data. Returns false if the query execution failed and the\n      response does not contain data. If an error occured, this method displays an error message.",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#DataTable"
          },
          "abort": {
            "!type": "fn()",
            "!doc": "Stops the automated query sending that was started with setRefreshInterval().",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#DataTable"
          },
          "setTimeout": {
            "!type": "fn()",
            "!doc": "Sets the number of seconds to wait for the data source to respond before raising a timeout\n      error. seconds is a number greater than zero. \n      The default timeout is 30 seconds. This method, if used, should be called before calling the\n      send method.",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#DataTable"
          },
          "send": {
            "!type": "fn()",
            "!doc": "Sends the query to the data source. callback should be a function that will be\n      called when the data source responds. The callback function will receive a single parameter of\n      type google.visualization.QueryResponse.",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#DataTable"
          },
          "getDetailedMessage": {
            "!type": "fn() -> string",
            "!doc": "Returns a detailed error message for queries that failed. If the query execution was\n      successful, this method returns an empty string. The message returned is a message that is\n      intended for developers, and may contain technical information, for example 'Column {salary}\n      does not exist'.",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#DataTable"
          },
          "getMessage": {
            "!type": "fn() -> string",
            "!doc": "Returns a short error message for queries that failed. If the query execution was successful,\n      this method returns an empty string. The message returned is a short message that is intended\n      for end users, for example 'Invalid Query' or 'Access Denied'.",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#DataTable"
          },
          "getReasons": {
            "!type": "fn() -> +Array of strings",
            "!doc": "Returns an array of zero of more entries. Each entry is a short string with an error or\n      warning code that was raised while executing the query. Possible codes:\n      \n        \n          access_denied The user does not have permissions to access the data source.\n        \n        invalid_query The specified query has a syntax error.\n        \n          data_truncated One or more data rows that match the query selection were not\n          returned due to output size limits. (warning).\n        \n        timeout The query did not respond within the expected time.",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#DataTable"
          },
          "hasWarning": {
            "!type": "fn() -> bool",
            "!doc": "Returns true if the query execution has any warning messages.",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#DataTable"
          },
          "isError": {
            "!type": "fn() -> bool",
            "!doc": "Returns true if the query execution failed, and the response does not contain\n      any data table. Returns <false> if the query execution was successful and the response\n      contains a data table.",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#DataTable"
          }
        }
      },
      "DataView": {
        "!url": "https://developers.google.com/chart/interactive/docs/reference#DataView",
        "prototype": {
          "getColumnId\n        getColumnLabel\n        getColumnPattern\n        getColumnProperty\n        getColumnRange\n        getColumnType\n        getDistinctValues\n        getFilteredRows\n        getFormattedValue\n        getNumberOfColumns\n        getNumberOfRows\n        getProperty\n        getProperties\n        getRowProperty\n        getSortedRows\n        getTableProperty\n        getValue": {
            "!type": "fn() -> +See descriptions in DataTable.",
            "!doc": "Same as the equivalent DataTable methods, except that row/column indexes refer to\n      the index in the view and not in the underlying table/view.",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#DataView"
          },
          "getTableColumnIndex": {
            "!type": "fn() -> number",
            "!doc": "Returns the index in the underlying table (or view) of a given column specified by its index\n        in this view. viewColumnIndex should be a number greater than or equal to zero,\n        and less than the number of columns as returned by the getNumberOfColumns()\n        method. Returns -1 if this is a generated column.\n      \n      \n        Example: If setColumns([3, 1, 4]) was previously called, then\n        getTableColumnIndex(2) will return 4.",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#DataView"
          },
          "getTableRowIndex": {
            "!type": "fn() -> number",
            "!doc": "Returns the index in the underlying table (or view) of a given row specified by its index in\n        this view. viewRowIndex should be a number greater than or equal to zero, and\n        less than the number of rows as returned by the getNumberOfRows() method.\n      \n      \n        Example: If setRows([3, 1, 4]) was previously called, then\n        getTableRowIndex(2) will return 4.",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#DataView"
          },
          "getViewColumnIndex": {
            "!type": "fn() -> number",
            "!doc": "Returns the index in this view that maps to a given column specified by its index in the\n        underlying table (or view). If more than one such index exists, returns the first (smallest)\n        one. If no such index exists (the specified column is not in the view), returns -1.\n        tableColumnIndex should be a number greater than or equal to zero, and less\n        than the number of columns as returned by the getNumberOfColumns() method of\n        the underlying table/view.\n      \n      \n        Example: If setColumns([3, 1, 4]) was previously called, then\n        getViewColumnIndex(4) will return 2.",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#DataView"
          },
          "getViewColumns": {
            "!type": "fn() -> +Array of numbers",
            "!doc": "Returns the columns in this view, in order. That is, if you call setColumns\n        with some array, and then call getViewColumns() you should get an identical\n        array.",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#DataView"
          },
          "getViewRowIndex": {
            "!type": "fn() -> number",
            "!doc": "Returns the index in this view that maps to a given row specified by its index in the\n        underlying table (or view). If more than one such index exists, returns the first (smallest)\n        one. If no such index exists (the specified row is not in the view), returns -1.\n        tableRowIndex should be a number greater than or equal to zero, and less than\n        the number of rows as returned by the getNumberOfRows() method of the\n        underlying table/view.\n      \n      \n        Example: If setRows([3, 1, 4]) was previously called, then\n        getViewRowIndex(4) will return 2.",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#DataView"
          },
          "getViewRows": {
            "!type": "fn() -> +Array of numbers",
            "!doc": "Returns the rows in this view, in order. That is, if you call setRows with some\n        array, and then call getViewRows() you should get an identical array.",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#DataView"
          },
          "hideColumns": {
            "!type": "fn()",
            "!doc": "Hides the specified columns from the current view. columnIndexes is an array of\n        numbers representing the indexes of the columns to hide. These indexes are the index numbers\n        in the underlying table/view. The numbers in columnIndexes do not have\n        to be in order (that is, [3,4,1] is fine). The remaining columns retain their index order\n        when you iterate through them. Entering an index number for a column already hidden is not\n        an error, but entering an index that does not exist in the underlying table/view will throw\n        an error. To unhide columns, call setColumns().\n      \n      \n        Example: If you have a table with 10 columns, and you call\n        setColumns([2,7,1,7,9]), and then hideColumns([7,9]), the columns\n        in the view will then be [2,1].",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#DataView"
          },
          "hideRows": {
            "!type": "fn()",
            "!doc": "Hides the specified rows from the current view. rowIndexes is an array of\n        numbers representing the indexes of the rows to hide. These indexes are the index numbers in\n        the underlying table/view. The numbers in rowIndexes do not have to be\n        in order (that is, [3,4,1] is fine). The remaining rows retain their index order. Entering\n        an index number for a row already hidden is not an error, but entering an index that does\n        not exist in the underlying table/view will throw an error. To unhide rows, call\n        setRows().\n      \n      \n        Example: If you have a table with 10 rows, and you call\n        setRows([2,7,1,7,9]), and then hideRows([7,9]), the rows in the\n        view will then be [2,1].",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#DataView"
          },
          "setColumns": {
            "!type": "fn()",
            "!doc": "Specifies which columns are visible in this view. Any columns not specified will be hidden.\n        This is an array of column indexes in the underlying table/view, or calculated columns. If\n        you don't call this method, the default is to show all columns. The array can also contain\n        duplicates, to show the same column multiple times. Columns will be shown in the order\n        specified.\n      \n      \n        \n          columnIndexes - An array of numbers and/or objects (can be mixed):\n          \n            \n              Numbers specify the index of the source data column to include in the\n              view. The data is brought through unmodified. If you need to explicitly define a role\n              or additional column properties, specify an object with a sourceColumn\n              property.\n            \n            \n              Objects specify a calculated column. A calculated column\n              creates a value on the fly for each row and adds it to the view. The object must have\n              the following properties:\n              \n                \n                  calc [function] - A function that will be called for each\n                  row in the column to calculate a value for that cell. The function signature is\n                  func(dataTable, row), where\n                  dataTable is the source DataTable, and\n                  row is the index of the source data row. The function should\n                  return a single value of the type specified by type.\n                \n                \n                  type [string] - The JavaScript type of the value that the\n                  calc function returns.\n                \n                \n                  label [Optional, string] - An optional label to\n                  assign to this generated column. If not specified, the view column will have no\n                  label.\n                \n                \n                  id [Optional, string] - An optional ID to assign to\n                  this generated column.\n                \n                \n                  sourceColumn - [Optional, number] The source column\n                  to use as a value; if specified, do not specify the calc or the\n                  type property. This is similar to passing in a number instead of an\n                  object, but enables you to specify a role and properties for the new column.\n                \n                \n                  properties [Optional, object] - An object\n                  containing any arbitrary properties to assign to this column. If not specified,\n                  the view column will have no properties.\n                \n                \n                  role [Optional, string] - A\n                  role to assign to this column. If not\n                  specified, the existing role will not be imported.\n                \n              \n            \n          \n        \n      \n      Examples:\n      // Show some columns directly from the underlying data.\n// Shows column 3 twice.\nview.setColumns([3, 4, 3, 2]);\n\n// Underlying table has a column specifying a value in centimeters.\n// The view imports this directly, and creates a calculated column\n// that converts the value into inches.\nview.setColumns([1,{calc:cmToInches, type:'number', label:'Height in Inches'}]);\nfunction cmToInches(dataTable, rowNum){\n  return Math.floor(dataTable.getValue(rowNum, 1) / 2.54);\n}",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#DataView"
          },
          "setRows": {
            "!type": "fn()",
            "!doc": "Sets the visible rows in this view, based on index numbers from the underlying table/view.\n        rowIndexes should be an array of index numbers specifying which rows to show in\n        the view. The array specifies the order in which to show the rows, and rows can be\n        duplicated. Note that only the rows specified in rowIndexes will be\n        shown; this method clears all other rows from the view. The array can also contain\n        duplicates, effectively duplicating the specified row in this view (for example,\n        setRows([3, 4, 3, 2]) will cause row 3 to appear twice in this\n        view). The array thus provides a mapping of the rows from the underlying table/view to this\n        view. You can use getFilteredRows() or\n        getSortedRows() to generate input for\n        this method.\n      \n      \n        Example: To create a view with rows three and zero of an underlying\n        table/view: view.setRows([3, 0])",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#DataView"
          },
          "toDataTable": {
            "!type": "fn() -> +google.visualization.DataTable",
            "!doc": "Returns a DataTable object populated with the visible rows and columns of the\n      DataView.",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#DataView"
          },
          "toJSON": {
            "!type": "fn() -> string",
            "!doc": "Returns a string version of the JSON representation of the chart.",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#DataView"
          },
          "draw": {
            "!type": "fn()",
            "!doc": "Draws the chart. You must call this method after any changes that you make to the chart or\n        data to show the changes.\n      \n      \n        \n          opt_container_ref [Optional] - A reference to a valid container element\n          on the page. If specified, the chart will be drawn there. If not, the chart will be drawn\n          in the element with ID specified by containerId.",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#DataView"
          },
          "clone": {
            "!type": "fn() -> +google.visualization.ChartWrapper",
            "!doc": "Returns a deep copy of the chart wrapper.",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#DataView"
          },
          "getDataSourceUrl": {
            "!type": "fn() -> string",
            "!doc": "If this chart gets its data from a data source,\n      returns the URL for this data source. Otherwise, returns null.",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#DataView"
          },
          "getDataTable": {
            "!type": "fn() -> +google.visualization.DataTable",
            "!doc": "Returns the data table as returned by the data source. Returns null if the query\n      execution failed and no data was returned.",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#DataView"
          },
          "getChartType": {
            "!type": "fn() -> string",
            "!doc": "The class name of the wrapped chart. If this is a Google chart, the name will not be qualified\n      with google.visualization. So, for example, if this were a Treemap chart,\n      it would return \"Treemap\" rather than \"google.visualization.treemap\".",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#DataView"
          },
          "getChartName": {
            "!type": "fn() -> string",
            "!doc": "Returns the chart name assigned by setChartName().",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#DataView"
          },
          "getChart": {
            "!type": "fn() -> +Chart object reference",
            "!doc": "Returns a reference to the chart created by this ChartWrapper, for example a\n      \n        google.visualization.BarChart\n      \n      or a\n      \n        google.visualization.ColumnChart\n      .\n      This will return null until after you have called draw() on the ChartWrapper\n      object, and it throws a ready event. Methods called on the returned object will be reflected\n      on the page.",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#DataView"
          },
          "getContainerId": {
            "!type": "fn() -> string",
            "!doc": "The ID of the chart's DOM container element.",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#DataView"
          },
          "getQuery": {
            "!type": "fn() -> string",
            "!doc": "The query string for this chart, if it has one and queries a data source.",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#DataView"
          },
          "getRefreshInterval": {
            "!type": "fn() -> number",
            "!doc": "Any refresh interval for this chart, if it queries a data source. Zero\n      indicates no refresh.",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#DataView"
          },
          "getOption": {
            "!type": "fn() -> +Any type",
            "!doc": "Returns the specified chart option value\n      \n        \n          key - The name of the option to retrieve. May be a qualified name, such as\n          'vAxis.title'.\n        \n        \n          opt_default_value [Optional] - If the specified value is undefined or\n          null, this value will be returned.",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#DataView"
          },
          "getOptions": {
            "!type": "fn() -> ?",
            "!doc": "Returns the options object for this chart.",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#DataView"
          },
          "getView": {
            "!type": "fn() -> +Object OR Array",
            "!doc": "Returns the DataView initializer object, in the same format as\n      dataview.toJSON(), or an array of such objects.",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#DataView"
          },
          "setDataSourceUrl": {
            "!type": "fn()",
            "!doc": "Sets the URL of a data source to use for this\n      chart. If you also set a data table for this object, the data source URL will be ignored.",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#DataView"
          },
          "setDataTable": {
            "!type": "fn()",
            "!doc": "Sets the DataTable for the chart. Pass in one of the following: null; a DataTable object; a\n      JSON representation of a DataTable; or an array following the syntax of\n      arrayToDataTable().",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#DataView"
          },
          "setChartType": {
            "!type": "fn()",
            "!doc": "Sets the chart type. Pass in the class name of the wrapped chart. If this is a Google chart,\n      do not qualify it with google.visualization. So, for example, for a pie chart,\n      pass in \"PieChart\".",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#DataView"
          },
          "setChartName": {
            "!type": "fn()",
            "!doc": "Sets an arbitrary name for the chart. This is not shown anywhere on the chart, unless a custom\n      chart is explicitly designed to use it.",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#DataView"
          },
          "setContainerId": {
            "!type": "fn()",
            "!doc": "Sets the ID of the containing DOM element for the chart.",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#DataView"
          },
          "setQuery": {
            "!type": "fn()",
            "!doc": "Sets the query string. The value of the string parameter should be a valid\n      query. \n      This method, if used, should be called before calling the send method.\n      Learn more about the Query language.",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#DataView"
          },
          "setRefreshInterval": {
            "!type": "fn()",
            "!doc": "Sets the query to automatically call the send method every specified duration\n        (number of seconds), starting from the first explicit call to send.\n        seconds is a number greater than or equal to zero.\n      \n      If you use this method, you should call it before calling the send method.\n      \n        Cancel this method either by calling it again with zero (the default), or by calling\n        abort().",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#DataView"
          },
          "setOption": {
            "!type": "fn()",
            "!doc": "Sets a single chart option value, where key is the option name and value is\n      the value. To unset an option, pass in null for the value. Note that key may be a\n      qualified name, such as 'vAxis.title'.",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#DataView"
          },
          "setOptions": {
            "!type": "fn()",
            "!doc": "Sets a complete options object for a chart.",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#DataView"
          },
          "setView": {
            "!type": "fn()",
            "!doc": "Sets a DataView initializer object, which acts as a filter over the underlying\n      data. The chart wrapper must have underlying data from a DataTable or a data source to apply\n      this view to. You can pass in either a string or DataView initializer object,\n      like that returned by dataview.toJSON(). You can\n      also pass in an array of DataView initializer objects, in which case the first\n      DataView in the array is applied to the underlying data to create a new data\n      table, and the second DataView is applied to the data table resulting from\n      application of the first DataView, and so on.",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#DataView"
          },
          "openDialog": {
            "!type": "fn() -> +null",
            "!doc": "Opens the chart editor as an embedded dialog box on the page. The function returns\n        immediately; it does not wait for the dialog to be closed. If you do not lose scope of the\n        instance, you can call openDialog() again to reopen the dialog, although you\n        must pass in a ChartWrapper object again.\n      \n      \n        \n          chartWrapper - A ChartWrapper\n          object defining the initial chart to render in the window. The chart must either have a\n          populated DataTable, or be connected to a valid data source. This wrapper is\n          copied internally to the chart editor, so any later changes that you make to your\n          ChartWrapper handle will not be reflected in the chart editor's copy.\n        \n        \n          opt_options - [Optional] An object containing any options for the chart\n          editor. See the options table below.",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#DataView"
          },
          "getChartWrapper": {
            "!type": "fn() -> +google.visualization.ChartWrapper",
            "!doc": "Returns a ChartWrapper representing the chart, with user modifications.",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#DataView"
          },
          "setChartWrapper": {
            "!type": "fn() -> +null",
            "!doc": "Use this method to update the rendered chart on the editor.\n      \n        chartWrapper - A ChartWrapper object representing the new chart to\n        render. The chart must either have a populated DataTable, or be connected to a\n        valid data source.",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#DataView"
          },
          "closeDialog": {
            "!type": "fn() -> +null",
            "!doc": "Closes the chart editor dialog box.",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#DataView"
          },
          "google.visualization.data.group": {
            "!type": "fn()",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#DataView"
          },
          "google.visualization.data.join": {
            "!type": "fn()",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#DataView"
          },
          "google.visualization.formatter_name": {
            "!type": "fn()",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#DataView"
          },
          "format": {
            "!type": "fn()",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#DataView"
          },
          "google.visualization.ColorFormat": {
            "!type": "fn()",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#DataView"
          },
          "addRange": {
            "!type": "fn()",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#DataView"
          },
          "addGradientRange": {
            "!type": "fn()",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#DataView"
          },
          "google.visualization.DateFormat": {
            "!type": "fn()",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#DataView"
          },
          "formatValue": {
            "!type": "fn()",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#DataView"
          },
          "google.visualization.NumberFormat": {
            "!type": "fn()",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#DataView"
          },
          "google.visualization.PatternFormat": {
            "!type": "fn()",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#DataView"
          },
          "createQueryFromPrefs": {
            "!type": "fn() -> +google.visualization.Query",
            "!doc": "Static. Create a new instance of google.visualization.Query and set its\n      properties according to values from the gadget preferences. The type of parameter\n      prefs is _IG_Prefs\n      \n        Preference _table_query_url is used to set the Query data source URL.\n        \n          Preference _table_query_refresh_interval is used to set the Query refresh\n          interval (in seconds).",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#DataView"
          },
          "validateResponse": {
            "!type": "fn() -> bool",
            "!doc": "Static. Parameter response is of type\n      google.visualization.QueryResponse. Returns true if\n      the response contains data. Returns false if the query execution failed and the\n      response does not contain data. If an error occured, this method displays an error message.",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#DataView"
          },
          "abort": {
            "!type": "fn()",
            "!doc": "Stops the automated query sending that was started with setRefreshInterval().",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#DataView"
          },
          "setTimeout": {
            "!type": "fn()",
            "!doc": "Sets the number of seconds to wait for the data source to respond before raising a timeout\n      error. seconds is a number greater than zero. \n      The default timeout is 30 seconds. This method, if used, should be called before calling the\n      send method.",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#DataView"
          },
          "send": {
            "!type": "fn()",
            "!doc": "Sends the query to the data source. callback should be a function that will be\n      called when the data source responds. The callback function will receive a single parameter of\n      type google.visualization.QueryResponse.",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#DataView"
          },
          "getDetailedMessage": {
            "!type": "fn() -> string",
            "!doc": "Returns a detailed error message for queries that failed. If the query execution was\n      successful, this method returns an empty string. The message returned is a message that is\n      intended for developers, and may contain technical information, for example 'Column {salary}\n      does not exist'.",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#DataView"
          },
          "getMessage": {
            "!type": "fn() -> string",
            "!doc": "Returns a short error message for queries that failed. If the query execution was successful,\n      this method returns an empty string. The message returned is a short message that is intended\n      for end users, for example 'Invalid Query' or 'Access Denied'.",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#DataView"
          },
          "getReasons": {
            "!type": "fn() -> +Array of strings",
            "!doc": "Returns an array of zero of more entries. Each entry is a short string with an error or\n      warning code that was raised while executing the query. Possible codes:\n      \n        \n          access_denied The user does not have permissions to access the data source.\n        \n        invalid_query The specified query has a syntax error.\n        \n          data_truncated One or more data rows that match the query selection were not\n          returned due to output size limits. (warning).\n        \n        timeout The query did not respond within the expected time.",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#DataView"
          },
          "hasWarning": {
            "!type": "fn() -> bool",
            "!doc": "Returns true if the query execution has any warning messages.",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#DataView"
          },
          "isError": {
            "!type": "fn() -> bool",
            "!doc": "Returns true if the query execution failed, and the response does not contain\n      any data table. Returns <false> if the query execution was successful and the response\n      contains a data table.",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#DataView"
          }
        }
      },
      "ChartWrapper": {
        "!url": "https://developers.google.com/chart/interactive/docs/reference#ChartWrapper",
        "prototype": {
          "draw": {
            "!type": "fn()",
            "!doc": "Draws the chart. You must call this method after any changes that you make to the chart or\n        data to show the changes.\n      \n      \n        \n          opt_container_ref [Optional] - A reference to a valid container element\n          on the page. If specified, the chart will be drawn there. If not, the chart will be drawn\n          in the element with ID specified by containerId.",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#ChartWrapper"
          },
          "toJSON": {
            "!type": "fn() -> string",
            "!doc": "Returns a string version of the JSON representation of the chart.",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#ChartWrapper"
          },
          "clone": {
            "!type": "fn() -> +google.visualization.ChartWrapper",
            "!doc": "Returns a deep copy of the chart wrapper.",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#ChartWrapper"
          },
          "getDataSourceUrl": {
            "!type": "fn() -> string",
            "!doc": "If this chart gets its data from a data source,\n      returns the URL for this data source. Otherwise, returns null.",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#ChartWrapper"
          },
          "getDataTable": {
            "!type": "fn() -> +google.visualization.DataTable",
            "!doc": "Returns the data table as returned by the data source. Returns null if the query\n      execution failed and no data was returned.",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#ChartWrapper"
          },
          "getChartType": {
            "!type": "fn() -> string",
            "!doc": "The class name of the wrapped chart. If this is a Google chart, the name will not be qualified\n      with google.visualization. So, for example, if this were a Treemap chart,\n      it would return \"Treemap\" rather than \"google.visualization.treemap\".",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#ChartWrapper"
          },
          "getChartName": {
            "!type": "fn() -> string",
            "!doc": "Returns the chart name assigned by setChartName().",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#ChartWrapper"
          },
          "getChart": {
            "!type": "fn() -> +Chart object reference",
            "!doc": "Returns a reference to the chart created by this ChartWrapper, for example a\n      \n        google.visualization.BarChart\n      \n      or a\n      \n        google.visualization.ColumnChart\n      .\n      This will return null until after you have called draw() on the ChartWrapper\n      object, and it throws a ready event. Methods called on the returned object will be reflected\n      on the page.",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#ChartWrapper"
          },
          "getContainerId": {
            "!type": "fn() -> string",
            "!doc": "The ID of the chart's DOM container element.",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#ChartWrapper"
          },
          "getQuery": {
            "!type": "fn() -> string",
            "!doc": "The query string for this chart, if it has one and queries a data source.",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#ChartWrapper"
          },
          "getRefreshInterval": {
            "!type": "fn() -> number",
            "!doc": "Any refresh interval for this chart, if it queries a data source. Zero\n      indicates no refresh.",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#ChartWrapper"
          },
          "getOption": {
            "!type": "fn() -> +Any type",
            "!doc": "Returns the specified chart option value\n      \n        \n          key - The name of the option to retrieve. May be a qualified name, such as\n          'vAxis.title'.\n        \n        \n          opt_default_value [Optional] - If the specified value is undefined or\n          null, this value will be returned.",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#ChartWrapper"
          },
          "getOptions": {
            "!type": "fn() -> ?",
            "!doc": "Returns the options object for this chart.",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#ChartWrapper"
          },
          "getView": {
            "!type": "fn() -> +Object OR Array",
            "!doc": "Returns the DataView initializer object, in the same format as\n      dataview.toJSON(), or an array of such objects.",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#ChartWrapper"
          },
          "setDataSourceUrl": {
            "!type": "fn()",
            "!doc": "Sets the URL of a data source to use for this\n      chart. If you also set a data table for this object, the data source URL will be ignored.",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#ChartWrapper"
          },
          "setDataTable": {
            "!type": "fn()",
            "!doc": "Sets the DataTable for the chart. Pass in one of the following: null; a DataTable object; a\n      JSON representation of a DataTable; or an array following the syntax of\n      arrayToDataTable().",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#ChartWrapper"
          },
          "setChartType": {
            "!type": "fn()",
            "!doc": "Sets the chart type. Pass in the class name of the wrapped chart. If this is a Google chart,\n      do not qualify it with google.visualization. So, for example, for a pie chart,\n      pass in \"PieChart\".",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#ChartWrapper"
          },
          "setChartName": {
            "!type": "fn()",
            "!doc": "Sets an arbitrary name for the chart. This is not shown anywhere on the chart, unless a custom\n      chart is explicitly designed to use it.",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#ChartWrapper"
          },
          "setContainerId": {
            "!type": "fn()",
            "!doc": "Sets the ID of the containing DOM element for the chart.",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#ChartWrapper"
          },
          "setQuery": {
            "!type": "fn()",
            "!doc": "Sets the query string. The value of the string parameter should be a valid\n      query. \n      This method, if used, should be called before calling the send method.\n      Learn more about the Query language.",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#ChartWrapper"
          },
          "setRefreshInterval": {
            "!type": "fn()",
            "!doc": "Sets the query to automatically call the send method every specified duration\n        (number of seconds), starting from the first explicit call to send.\n        seconds is a number greater than or equal to zero.\n      \n      If you use this method, you should call it before calling the send method.\n      \n        Cancel this method either by calling it again with zero (the default), or by calling\n        abort().",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#ChartWrapper"
          },
          "setOption": {
            "!type": "fn()",
            "!doc": "Sets a single chart option value, where key is the option name and value is\n      the value. To unset an option, pass in null for the value. Note that key may be a\n      qualified name, such as 'vAxis.title'.",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#ChartWrapper"
          },
          "setOptions": {
            "!type": "fn()",
            "!doc": "Sets a complete options object for a chart.",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#ChartWrapper"
          },
          "setView": {
            "!type": "fn()",
            "!doc": "Sets a DataView initializer object, which acts as a filter over the underlying\n      data. The chart wrapper must have underlying data from a DataTable or a data source to apply\n      this view to. You can pass in either a string or DataView initializer object,\n      like that returned by dataview.toJSON(). You can\n      also pass in an array of DataView initializer objects, in which case the first\n      DataView in the array is applied to the underlying data to create a new data\n      table, and the second DataView is applied to the data table resulting from\n      application of the first DataView, and so on.",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#ChartWrapper"
          },
          "openDialog": {
            "!type": "fn() -> +null",
            "!doc": "Opens the chart editor as an embedded dialog box on the page. The function returns\n        immediately; it does not wait for the dialog to be closed. If you do not lose scope of the\n        instance, you can call openDialog() again to reopen the dialog, although you\n        must pass in a ChartWrapper object again.\n      \n      \n        \n          chartWrapper - A ChartWrapper\n          object defining the initial chart to render in the window. The chart must either have a\n          populated DataTable, or be connected to a valid data source. This wrapper is\n          copied internally to the chart editor, so any later changes that you make to your\n          ChartWrapper handle will not be reflected in the chart editor's copy.\n        \n        \n          opt_options - [Optional] An object containing any options for the chart\n          editor. See the options table below.",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#ChartWrapper"
          },
          "getChartWrapper": {
            "!type": "fn() -> +google.visualization.ChartWrapper",
            "!doc": "Returns a ChartWrapper representing the chart, with user modifications.",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#ChartWrapper"
          },
          "setChartWrapper": {
            "!type": "fn() -> +null",
            "!doc": "Use this method to update the rendered chart on the editor.\n      \n        chartWrapper - A ChartWrapper object representing the new chart to\n        render. The chart must either have a populated DataTable, or be connected to a\n        valid data source.",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#ChartWrapper"
          },
          "closeDialog": {
            "!type": "fn() -> +null",
            "!doc": "Closes the chart editor dialog box.",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#ChartWrapper"
          },
          "google.visualization.data.group": {
            "!type": "fn()",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#ChartWrapper"
          },
          "google.visualization.data.join": {
            "!type": "fn()",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#ChartWrapper"
          },
          "google.visualization.formatter_name": {
            "!type": "fn()",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#ChartWrapper"
          },
          "format": {
            "!type": "fn()",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#ChartWrapper"
          },
          "google.visualization.ColorFormat": {
            "!type": "fn()",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#ChartWrapper"
          },
          "addRange": {
            "!type": "fn()",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#ChartWrapper"
          },
          "addGradientRange": {
            "!type": "fn()",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#ChartWrapper"
          },
          "google.visualization.DateFormat": {
            "!type": "fn()",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#ChartWrapper"
          },
          "formatValue": {
            "!type": "fn()",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#ChartWrapper"
          },
          "google.visualization.NumberFormat": {
            "!type": "fn()",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#ChartWrapper"
          },
          "google.visualization.PatternFormat": {
            "!type": "fn()",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#ChartWrapper"
          },
          "createQueryFromPrefs": {
            "!type": "fn() -> +google.visualization.Query",
            "!doc": "Static. Create a new instance of google.visualization.Query and set its\n      properties according to values from the gadget preferences. The type of parameter\n      prefs is _IG_Prefs\n      \n        Preference _table_query_url is used to set the Query data source URL.\n        \n          Preference _table_query_refresh_interval is used to set the Query refresh\n          interval (in seconds).",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#ChartWrapper"
          },
          "validateResponse": {
            "!type": "fn() -> bool",
            "!doc": "Static. Parameter response is of type\n      google.visualization.QueryResponse. Returns true if\n      the response contains data. Returns false if the query execution failed and the\n      response does not contain data. If an error occured, this method displays an error message.",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#ChartWrapper"
          },
          "abort": {
            "!type": "fn()",
            "!doc": "Stops the automated query sending that was started with setRefreshInterval().",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#ChartWrapper"
          },
          "setTimeout": {
            "!type": "fn()",
            "!doc": "Sets the number of seconds to wait for the data source to respond before raising a timeout\n      error. seconds is a number greater than zero. \n      The default timeout is 30 seconds. This method, if used, should be called before calling the\n      send method.",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#ChartWrapper"
          },
          "send": {
            "!type": "fn()",
            "!doc": "Sends the query to the data source. callback should be a function that will be\n      called when the data source responds. The callback function will receive a single parameter of\n      type google.visualization.QueryResponse.",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#ChartWrapper"
          },
          "getDetailedMessage": {
            "!type": "fn() -> string",
            "!doc": "Returns a detailed error message for queries that failed. If the query execution was\n      successful, this method returns an empty string. The message returned is a message that is\n      intended for developers, and may contain technical information, for example 'Column {salary}\n      does not exist'.",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#ChartWrapper"
          },
          "getMessage": {
            "!type": "fn() -> string",
            "!doc": "Returns a short error message for queries that failed. If the query execution was successful,\n      this method returns an empty string. The message returned is a short message that is intended\n      for end users, for example 'Invalid Query' or 'Access Denied'.",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#ChartWrapper"
          },
          "getReasons": {
            "!type": "fn() -> +Array of strings",
            "!doc": "Returns an array of zero of more entries. Each entry is a short string with an error or\n      warning code that was raised while executing the query. Possible codes:\n      \n        \n          access_denied The user does not have permissions to access the data source.\n        \n        invalid_query The specified query has a syntax error.\n        \n          data_truncated One or more data rows that match the query selection were not\n          returned due to output size limits. (warning).\n        \n        timeout The query did not respond within the expected time.",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#ChartWrapper"
          },
          "hasWarning": {
            "!type": "fn() -> bool",
            "!doc": "Returns true if the query execution has any warning messages.",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#ChartWrapper"
          },
          "isError": {
            "!type": "fn() -> bool",
            "!doc": "Returns true if the query execution failed, and the response does not contain\n      any data table. Returns <false> if the query execution was successful and the response\n      contains a data table.",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#ChartWrapper"
          }
        }
      },
      "GadgetHelper": {
        "!url": "https://developers.google.com/chart/interactive/docs/reference#GadgetHelper",
        "prototype": {
          "createQueryFromPrefs": {
            "!type": "fn() -> +google.visualization.Query",
            "!doc": "Static. Create a new instance of google.visualization.Query and set its\n      properties according to values from the gadget preferences. The type of parameter\n      prefs is _IG_Prefs\n      \n        Preference _table_query_url is used to set the Query data source URL.\n        \n          Preference _table_query_refresh_interval is used to set the Query refresh\n          interval (in seconds).",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#GadgetHelper"
          },
          "validateResponse": {
            "!type": "fn() -> bool",
            "!doc": "Static. Parameter response is of type\n      google.visualization.QueryResponse. Returns true if\n      the response contains data. Returns false if the query execution failed and the\n      response does not contain data. If an error occured, this method displays an error message.",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#GadgetHelper"
          },
          "abort": {
            "!type": "fn()",
            "!doc": "Stops the automated query sending that was started with setRefreshInterval().",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#GadgetHelper"
          },
          "setRefreshInterval": {
            "!type": "fn()",
            "!doc": "Sets the query to automatically call the send method every specified duration\n        (number of seconds), starting from the first explicit call to send.\n        seconds is a number greater than or equal to zero.\n      \n      If you use this method, you should call it before calling the send method.\n      \n        Cancel this method either by calling it again with zero (the default), or by calling\n        abort().",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#GadgetHelper"
          },
          "setTimeout": {
            "!type": "fn()",
            "!doc": "Sets the number of seconds to wait for the data source to respond before raising a timeout\n      error. seconds is a number greater than zero. \n      The default timeout is 30 seconds. This method, if used, should be called before calling the\n      send method.",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#GadgetHelper"
          },
          "setQuery": {
            "!type": "fn()",
            "!doc": "Sets the query string. The value of the string parameter should be a valid\n      query. \n      This method, if used, should be called before calling the send method.\n      Learn more about the Query language.",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#GadgetHelper"
          },
          "send": {
            "!type": "fn()",
            "!doc": "Sends the query to the data source. callback should be a function that will be\n      called when the data source responds. The callback function will receive a single parameter of\n      type google.visualization.QueryResponse.",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#GadgetHelper"
          },
          "getDataTable": {
            "!type": "fn() -> +google.visualization.DataTable",
            "!doc": "Returns the data table as returned by the data source. Returns null if the query\n      execution failed and no data was returned.",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#GadgetHelper"
          },
          "getDetailedMessage": {
            "!type": "fn() -> string",
            "!doc": "Returns a detailed error message for queries that failed. If the query execution was\n      successful, this method returns an empty string. The message returned is a message that is\n      intended for developers, and may contain technical information, for example 'Column {salary}\n      does not exist'.",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#GadgetHelper"
          },
          "getMessage": {
            "!type": "fn() -> string",
            "!doc": "Returns a short error message for queries that failed. If the query execution was successful,\n      this method returns an empty string. The message returned is a short message that is intended\n      for end users, for example 'Invalid Query' or 'Access Denied'.",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#GadgetHelper"
          },
          "getReasons": {
            "!type": "fn() -> +Array of strings",
            "!doc": "Returns an array of zero of more entries. Each entry is a short string with an error or\n      warning code that was raised while executing the query. Possible codes:\n      \n        \n          access_denied The user does not have permissions to access the data source.\n        \n        invalid_query The specified query has a syntax error.\n        \n          data_truncated One or more data rows that match the query selection were not\n          returned due to output size limits. (warning).\n        \n        timeout The query did not respond within the expected time.",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#GadgetHelper"
          },
          "hasWarning": {
            "!type": "fn() -> bool",
            "!doc": "Returns true if the query execution has any warning messages.",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#GadgetHelper"
          },
          "isError": {
            "!type": "fn() -> bool",
            "!doc": "Returns true if the query execution failed, and the response does not contain\n      any data table. Returns <false> if the query execution was successful and the response\n      contains a data table.",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#GadgetHelper"
          }
        }
      },
      "Query": {
        "!url": "https://developers.google.com/chart/interactive/docs/reference#Query",
        "prototype": {
          "abort": {
            "!type": "fn()",
            "!doc": "Stops the automated query sending that was started with setRefreshInterval().",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#Query"
          },
          "setRefreshInterval": {
            "!type": "fn()",
            "!doc": "Sets the query to automatically call the send method every specified duration\n        (number of seconds), starting from the first explicit call to send.\n        seconds is a number greater than or equal to zero.\n      \n      If you use this method, you should call it before calling the send method.\n      \n        Cancel this method either by calling it again with zero (the default), or by calling\n        abort().",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#Query"
          },
          "setTimeout": {
            "!type": "fn()",
            "!doc": "Sets the number of seconds to wait for the data source to respond before raising a timeout\n      error. seconds is a number greater than zero. \n      The default timeout is 30 seconds. This method, if used, should be called before calling the\n      send method.",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#Query"
          },
          "setQuery": {
            "!type": "fn()",
            "!doc": "Sets the query string. The value of the string parameter should be a valid\n      query. \n      This method, if used, should be called before calling the send method.\n      Learn more about the Query language.",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#Query"
          },
          "send": {
            "!type": "fn()",
            "!doc": "Sends the query to the data source. callback should be a function that will be\n      called when the data source responds. The callback function will receive a single parameter of\n      type google.visualization.QueryResponse.",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#Query"
          },
          "getDataTable": {
            "!type": "fn() -> +google.visualization.DataTable",
            "!doc": "Returns the data table as returned by the data source. Returns null if the query\n      execution failed and no data was returned.",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#Query"
          },
          "getDetailedMessage": {
            "!type": "fn() -> string",
            "!doc": "Returns a detailed error message for queries that failed. If the query execution was\n      successful, this method returns an empty string. The message returned is a message that is\n      intended for developers, and may contain technical information, for example 'Column {salary}\n      does not exist'.",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#Query"
          },
          "getMessage": {
            "!type": "fn() -> string",
            "!doc": "Returns a short error message for queries that failed. If the query execution was successful,\n      this method returns an empty string. The message returned is a short message that is intended\n      for end users, for example 'Invalid Query' or 'Access Denied'.",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#Query"
          },
          "getReasons": {
            "!type": "fn() -> +Array of strings",
            "!doc": "Returns an array of zero of more entries. Each entry is a short string with an error or\n      warning code that was raised while executing the query. Possible codes:\n      \n        \n          access_denied The user does not have permissions to access the data source.\n        \n        invalid_query The specified query has a syntax error.\n        \n          data_truncated One or more data rows that match the query selection were not\n          returned due to output size limits. (warning).\n        \n        timeout The query did not respond within the expected time.",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#Query"
          },
          "hasWarning": {
            "!type": "fn() -> bool",
            "!doc": "Returns true if the query execution has any warning messages.",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#Query"
          },
          "isError": {
            "!type": "fn() -> bool",
            "!doc": "Returns true if the query execution failed, and the response does not contain\n      any data table. Returns <false> if the query execution was successful and the response\n      contains a data table.",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#Query"
          }
        }
      },
      "QueryResponse": {
        "!url": "https://developers.google.com/chart/interactive/docs/reference#QueryResponse",
        "prototype": {
          "getDataTable": {
            "!type": "fn() -> +google.visualization.DataTable",
            "!doc": "Returns the data table as returned by the data source. Returns null if the query\n      execution failed and no data was returned.",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#QueryResponse"
          },
          "getDetailedMessage": {
            "!type": "fn() -> string",
            "!doc": "Returns a detailed error message for queries that failed. If the query execution was\n      successful, this method returns an empty string. The message returned is a message that is\n      intended for developers, and may contain technical information, for example 'Column {salary}\n      does not exist'.",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#QueryResponse"
          },
          "getMessage": {
            "!type": "fn() -> string",
            "!doc": "Returns a short error message for queries that failed. If the query execution was successful,\n      this method returns an empty string. The message returned is a short message that is intended\n      for end users, for example 'Invalid Query' or 'Access Denied'.",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#QueryResponse"
          },
          "getReasons": {
            "!type": "fn() -> +Array of strings",
            "!doc": "Returns an array of zero of more entries. Each entry is a short string with an error or\n      warning code that was raised while executing the query. Possible codes:\n      \n        \n          access_denied The user does not have permissions to access the data source.\n        \n        invalid_query The specified query has a syntax error.\n        \n          data_truncated One or more data rows that match the query selection were not\n          returned due to output size limits. (warning).\n        \n        timeout The query did not respond within the expected time.",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#QueryResponse"
          },
          "hasWarning": {
            "!type": "fn() -> bool",
            "!doc": "Returns true if the query execution has any warning messages.",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#QueryResponse"
          },
          "isError": {
            "!type": "fn() -> bool",
            "!doc": "Returns true if the query execution failed, and the response does not contain\n      any data table. Returns <false> if the query execution was successful and the response\n      contains a data table.",
            "!url": "https://developers.google.com/chart/interactive/docs/reference#QueryResponse"
          }
        }
      }
    }
  },
  "Data": {
    "!url": "https://developers.google.com/chart/interactive/docs/reference#Data",
    "prototype": {
      "google.visualization.data.group": {
        "!type": "fn()",
        "!url": "https://developers.google.com/chart/interactive/docs/reference#Data"
      },
      "google.visualization.data.join": {
        "!type": "fn()",
        "!url": "https://developers.google.com/chart/interactive/docs/reference#Data"
      },
      "google.visualization.formatter_name": {
        "!type": "fn()",
        "!url": "https://developers.google.com/chart/interactive/docs/reference#Data"
      },
      "format": {
        "!type": "fn()",
        "!url": "https://developers.google.com/chart/interactive/docs/reference#Data"
      },
      "google.visualization.ColorFormat": {
        "!type": "fn()",
        "!url": "https://developers.google.com/chart/interactive/docs/reference#Data"
      },
      "addRange": {
        "!type": "fn()",
        "!url": "https://developers.google.com/chart/interactive/docs/reference#Data"
      },
      "addGradientRange": {
        "!type": "fn()",
        "!url": "https://developers.google.com/chart/interactive/docs/reference#Data"
      },
      "google.visualization.DateFormat": {
        "!type": "fn()",
        "!url": "https://developers.google.com/chart/interactive/docs/reference#Data"
      },
      "formatValue": {
        "!type": "fn()",
        "!url": "https://developers.google.com/chart/interactive/docs/reference#Data"
      },
      "google.visualization.NumberFormat": {
        "!type": "fn()",
        "!url": "https://developers.google.com/chart/interactive/docs/reference#Data"
      },
      "google.visualization.PatternFormat": {
        "!type": "fn()",
        "!url": "https://developers.google.com/chart/interactive/docs/reference#Data"
      },
      "createQueryFromPrefs": {
        "!type": "fn() -> +google.visualization.Query",
        "!doc": "Static. Create a new instance of google.visualization.Query and set its\n      properties according to values from the gadget preferences. The type of parameter\n      prefs is _IG_Prefs\n      \n        Preference _table_query_url is used to set the Query data source URL.\n        \n          Preference _table_query_refresh_interval is used to set the Query refresh\n          interval (in seconds).",
        "!url": "https://developers.google.com/chart/interactive/docs/reference#Data"
      },
      "validateResponse": {
        "!type": "fn() -> bool",
        "!doc": "Static. Parameter response is of type\n      google.visualization.QueryResponse. Returns true if\n      the response contains data. Returns false if the query execution failed and the\n      response does not contain data. If an error occured, this method displays an error message.",
        "!url": "https://developers.google.com/chart/interactive/docs/reference#Data"
      },
      "abort": {
        "!type": "fn()",
        "!doc": "Stops the automated query sending that was started with setRefreshInterval().",
        "!url": "https://developers.google.com/chart/interactive/docs/reference#Data"
      },
      "setRefreshInterval": {
        "!type": "fn()",
        "!doc": "Sets the query to automatically call the send method every specified duration\n        (number of seconds), starting from the first explicit call to send.\n        seconds is a number greater than or equal to zero.\n      \n      If you use this method, you should call it before calling the send method.\n      \n        Cancel this method either by calling it again with zero (the default), or by calling\n        abort().",
        "!url": "https://developers.google.com/chart/interactive/docs/reference#Data"
      },
      "setTimeout": {
        "!type": "fn()",
        "!doc": "Sets the number of seconds to wait for the data source to respond before raising a timeout\n      error. seconds is a number greater than zero. \n      The default timeout is 30 seconds. This method, if used, should be called before calling the\n      send method.",
        "!url": "https://developers.google.com/chart/interactive/docs/reference#Data"
      },
      "setQuery": {
        "!type": "fn()",
        "!doc": "Sets the query string. The value of the string parameter should be a valid\n      query. \n      This method, if used, should be called before calling the send method.\n      Learn more about the Query language.",
        "!url": "https://developers.google.com/chart/interactive/docs/reference#Data"
      },
      "send": {
        "!type": "fn()",
        "!doc": "Sends the query to the data source. callback should be a function that will be\n      called when the data source responds. The callback function will receive a single parameter of\n      type google.visualization.QueryResponse.",
        "!url": "https://developers.google.com/chart/interactive/docs/reference#Data"
      },
      "getDataTable": {
        "!type": "fn() -> +google.visualization.DataTable",
        "!doc": "Returns the data table as returned by the data source. Returns null if the query\n      execution failed and no data was returned.",
        "!url": "https://developers.google.com/chart/interactive/docs/reference#Data"
      },
      "getDetailedMessage": {
        "!type": "fn() -> string",
        "!doc": "Returns a detailed error message for queries that failed. If the query execution was\n      successful, this method returns an empty string. The message returned is a message that is\n      intended for developers, and may contain technical information, for example 'Column {salary}\n      does not exist'.",
        "!url": "https://developers.google.com/chart/interactive/docs/reference#Data"
      },
      "getMessage": {
        "!type": "fn() -> string",
        "!doc": "Returns a short error message for queries that failed. If the query execution was successful,\n      this method returns an empty string. The message returned is a short message that is intended\n      for end users, for example 'Invalid Query' or 'Access Denied'.",
        "!url": "https://developers.google.com/chart/interactive/docs/reference#Data"
      },
      "getReasons": {
        "!type": "fn() -> +Array of strings",
        "!doc": "Returns an array of zero of more entries. Each entry is a short string with an error or\n      warning code that was raised while executing the query. Possible codes:\n      \n        \n          access_denied The user does not have permissions to access the data source.\n        \n        invalid_query The specified query has a syntax error.\n        \n          data_truncated One or more data rows that match the query selection were not\n          returned due to output size limits. (warning).\n        \n        timeout The query did not respond within the expected time.",
        "!url": "https://developers.google.com/chart/interactive/docs/reference#Data"
      },
      "hasWarning": {
        "!type": "fn() -> bool",
        "!doc": "Returns true if the query execution has any warning messages.",
        "!url": "https://developers.google.com/chart/interactive/docs/reference#Data"
      },
      "isError": {
        "!type": "fn() -> bool",
        "!doc": "Returns true if the query execution failed, and the response does not contain\n      any data table. Returns <false> if the query execution was successful and the response\n      contains a data table.",
        "!url": "https://developers.google.com/chart/interactive/docs/reference#Data"
      }
    }
  },
  "Formatters": {
    "!url": "https://developers.google.com/chart/interactive/docs/reference#Formatters",
    "prototype": {
      "google.visualization.formatter_name": {
        "!type": "fn()",
        "!url": "https://developers.google.com/chart/interactive/docs/reference#Formatters"
      },
      "format": {
        "!type": "fn()",
        "!url": "https://developers.google.com/chart/interactive/docs/reference#Formatters"
      },
      "google.visualization.ColorFormat": {
        "!type": "fn()",
        "!url": "https://developers.google.com/chart/interactive/docs/reference#Formatters"
      },
      "addRange": {
        "!type": "fn()",
        "!url": "https://developers.google.com/chart/interactive/docs/reference#Formatters"
      },
      "addGradientRange": {
        "!type": "fn()",
        "!url": "https://developers.google.com/chart/interactive/docs/reference#Formatters"
      },
      "google.visualization.DateFormat": {
        "!type": "fn()",
        "!url": "https://developers.google.com/chart/interactive/docs/reference#Formatters"
      },
      "formatValue": {
        "!type": "fn()",
        "!url": "https://developers.google.com/chart/interactive/docs/reference#Formatters"
      },
      "google.visualization.NumberFormat": {
        "!type": "fn()",
        "!url": "https://developers.google.com/chart/interactive/docs/reference#Formatters"
      },
      "google.visualization.PatternFormat": {
        "!type": "fn()",
        "!url": "https://developers.google.com/chart/interactive/docs/reference#Formatters"
      },
      "createQueryFromPrefs": {
        "!type": "fn() -> +google.visualization.Query",
        "!doc": "Static. Create a new instance of google.visualization.Query and set its\n      properties according to values from the gadget preferences. The type of parameter\n      prefs is _IG_Prefs\n      \n        Preference _table_query_url is used to set the Query data source URL.\n        \n          Preference _table_query_refresh_interval is used to set the Query refresh\n          interval (in seconds).",
        "!url": "https://developers.google.com/chart/interactive/docs/reference#Formatters"
      },
      "validateResponse": {
        "!type": "fn() -> bool",
        "!doc": "Static. Parameter response is of type\n      google.visualization.QueryResponse. Returns true if\n      the response contains data. Returns false if the query execution failed and the\n      response does not contain data. If an error occured, this method displays an error message.",
        "!url": "https://developers.google.com/chart/interactive/docs/reference#Formatters"
      },
      "abort": {
        "!type": "fn()",
        "!doc": "Stops the automated query sending that was started with setRefreshInterval().",
        "!url": "https://developers.google.com/chart/interactive/docs/reference#Formatters"
      },
      "setRefreshInterval": {
        "!type": "fn()",
        "!doc": "Sets the query to automatically call the send method every specified duration\n        (number of seconds), starting from the first explicit call to send.\n        seconds is a number greater than or equal to zero.\n      \n      If you use this method, you should call it before calling the send method.\n      \n        Cancel this method either by calling it again with zero (the default), or by calling\n        abort().",
        "!url": "https://developers.google.com/chart/interactive/docs/reference#Formatters"
      },
      "setTimeout": {
        "!type": "fn()",
        "!doc": "Sets the number of seconds to wait for the data source to respond before raising a timeout\n      error. seconds is a number greater than zero. \n      The default timeout is 30 seconds. This method, if used, should be called before calling the\n      send method.",
        "!url": "https://developers.google.com/chart/interactive/docs/reference#Formatters"
      },
      "setQuery": {
        "!type": "fn()",
        "!doc": "Sets the query string. The value of the string parameter should be a valid\n      query. \n      This method, if used, should be called before calling the send method.\n      Learn more about the Query language.",
        "!url": "https://developers.google.com/chart/interactive/docs/reference#Formatters"
      },
      "send": {
        "!type": "fn()",
        "!doc": "Sends the query to the data source. callback should be a function that will be\n      called when the data source responds. The callback function will receive a single parameter of\n      type google.visualization.QueryResponse.",
        "!url": "https://developers.google.com/chart/interactive/docs/reference#Formatters"
      },
      "getDataTable": {
        "!type": "fn() -> +google.visualization.DataTable",
        "!doc": "Returns the data table as returned by the data source. Returns null if the query\n      execution failed and no data was returned.",
        "!url": "https://developers.google.com/chart/interactive/docs/reference#Formatters"
      },
      "getDetailedMessage": {
        "!type": "fn() -> string",
        "!doc": "Returns a detailed error message for queries that failed. If the query execution was\n      successful, this method returns an empty string. The message returned is a message that is\n      intended for developers, and may contain technical information, for example 'Column {salary}\n      does not exist'.",
        "!url": "https://developers.google.com/chart/interactive/docs/reference#Formatters"
      },
      "getMessage": {
        "!type": "fn() -> string",
        "!doc": "Returns a short error message for queries that failed. If the query execution was successful,\n      this method returns an empty string. The message returned is a short message that is intended\n      for end users, for example 'Invalid Query' or 'Access Denied'.",
        "!url": "https://developers.google.com/chart/interactive/docs/reference#Formatters"
      },
      "getReasons": {
        "!type": "fn() -> +Array of strings",
        "!doc": "Returns an array of zero of more entries. Each entry is a short string with an error or\n      warning code that was raised while executing the query. Possible codes:\n      \n        \n          access_denied The user does not have permissions to access the data source.\n        \n        invalid_query The specified query has a syntax error.\n        \n          data_truncated One or more data rows that match the query selection were not\n          returned due to output size limits. (warning).\n        \n        timeout The query did not respond within the expected time.",
        "!url": "https://developers.google.com/chart/interactive/docs/reference#Formatters"
      },
      "hasWarning": {
        "!type": "fn() -> bool",
        "!doc": "Returns true if the query execution has any warning messages.",
        "!url": "https://developers.google.com/chart/interactive/docs/reference#Formatters"
      },
      "isError": {
        "!type": "fn() -> bool",
        "!doc": "Returns true if the query execution failed, and the response does not contain\n      any data table. Returns <false> if the query execution was successful and the response\n      contains a data table.",
        "!url": "https://developers.google.com/chart/interactive/docs/reference#Formatters"
      }
    }
  },
  "Query": {
    "!url": "https://developers.google.com/chart/interactive/docs/reference#Query",
    "prototype": {
      "abort": {
        "!type": "fn()",
        "!doc": "Stops the automated query sending that was started with setRefreshInterval().",
        "!url": "https://developers.google.com/chart/interactive/docs/reference#Query"
      },
      "setRefreshInterval": {
        "!type": "fn()",
        "!doc": "Sets the query to automatically call the send method every specified duration\n        (number of seconds), starting from the first explicit call to send.\n        seconds is a number greater than or equal to zero.\n      \n      If you use this method, you should call it before calling the send method.\n      \n        Cancel this method either by calling it again with zero (the default), or by calling\n        abort().",
        "!url": "https://developers.google.com/chart/interactive/docs/reference#Query"
      },
      "setTimeout": {
        "!type": "fn()",
        "!doc": "Sets the number of seconds to wait for the data source to respond before raising a timeout\n      error. seconds is a number greater than zero. \n      The default timeout is 30 seconds. This method, if used, should be called before calling the\n      send method.",
        "!url": "https://developers.google.com/chart/interactive/docs/reference#Query"
      },
      "setQuery": {
        "!type": "fn()",
        "!doc": "Sets the query string. The value of the string parameter should be a valid\n      query. \n      This method, if used, should be called before calling the send method.\n      Learn more about the Query language.",
        "!url": "https://developers.google.com/chart/interactive/docs/reference#Query"
      },
      "send": {
        "!type": "fn()",
        "!doc": "Sends the query to the data source. callback should be a function that will be\n      called when the data source responds. The callback function will receive a single parameter of\n      type google.visualization.QueryResponse.",
        "!url": "https://developers.google.com/chart/interactive/docs/reference#Query"
      },
      "getDataTable": {
        "!type": "fn() -> +google.visualization.DataTable",
        "!doc": "Returns the data table as returned by the data source. Returns null if the query\n      execution failed and no data was returned.",
        "!url": "https://developers.google.com/chart/interactive/docs/reference#Query"
      },
      "getDetailedMessage": {
        "!type": "fn() -> string",
        "!doc": "Returns a detailed error message for queries that failed. If the query execution was\n      successful, this method returns an empty string. The message returned is a message that is\n      intended for developers, and may contain technical information, for example 'Column {salary}\n      does not exist'.",
        "!url": "https://developers.google.com/chart/interactive/docs/reference#Query"
      },
      "getMessage": {
        "!type": "fn() -> string",
        "!doc": "Returns a short error message for queries that failed. If the query execution was successful,\n      this method returns an empty string. The message returned is a short message that is intended\n      for end users, for example 'Invalid Query' or 'Access Denied'.",
        "!url": "https://developers.google.com/chart/interactive/docs/reference#Query"
      },
      "getReasons": {
        "!type": "fn() -> +Array of strings",
        "!doc": "Returns an array of zero of more entries. Each entry is a short string with an error or\n      warning code that was raised while executing the query. Possible codes:\n      \n        \n          access_denied The user does not have permissions to access the data source.\n        \n        invalid_query The specified query has a syntax error.\n        \n          data_truncated One or more data rows that match the query selection were not\n          returned due to output size limits. (warning).\n        \n        timeout The query did not respond within the expected time.",
        "!url": "https://developers.google.com/chart/interactive/docs/reference#Query"
      },
      "hasWarning": {
        "!type": "fn() -> bool",
        "!doc": "Returns true if the query execution has any warning messages.",
        "!url": "https://developers.google.com/chart/interactive/docs/reference#Query"
      },
      "isError": {
        "!type": "fn() -> bool",
        "!doc": "Returns true if the query execution failed, and the response does not contain\n      any data table. Returns <false> if the query execution was successful and the response\n      contains a data table.",
        "!url": "https://developers.google.com/chart/interactive/docs/reference#Query"
      }
    }
  },
  "Error": {
    "!url": "https://developers.google.com/chart/interactive/docs/reference#Error"
  },
  "Events": {
    "!url": "https://developers.google.com/chart/interactive/docs/reference#Events"
  },
  "Standard": {
    "!url": "https://developers.google.com/chart/interactive/docs/reference#Standard"
  },
  "Assorted": {
    "!url": "https://developers.google.com/chart/interactive/docs/reference#Assorted"
  }
};
});