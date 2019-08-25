import React from 'react'
import {Table} from 'antd'

class XTreeTable extends React.Component{
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentDidMount() {

  }

  render(){
    // const columns = [
    //   {
    //     title: '姓名',
    //     dataIndex: 'name',
    //     key: 'name',
    //   },
    //   {
    //     title: '年龄',
    //     dataIndex: 'age',
    //     key: 'age',
    //     width: '12%',
    //   },
    //   {
    //     title: '地址',
    //     dataIndex: 'address',
    //     width: '30%',
    //     key: 'address',
    //   },
    // ];
    //
    // const data = [
    //   {
    //     key: 1,
    //     name: 'John Brown sr.',
    //     age: 60,
    //     address: 'New York No. 1 Lake Park',
    //     children: [
    //       {
    //         key: 11,
    //         name: 'John Brown',
    //         age: 42,
    //         address: 'New York No. 2 Lake Park',
    //       },
    //       {
    //         key: 12,
    //         name: 'John Brown jr.',
    //         age: 30,
    //         address: 'New York No. 3 Lake Park',
    //         children: [
    //           {
    //             key: 121,
    //             name: 'Jimmy Brown',
    //             age: 16,
    //             address: 'New York No. 3 Lake Park',
    //             children: [
    //               {
    //                 key: 1211,
    //                 name: 'Jimmy Brown 333',
    //                 age: 18,
    //                 address: 'New York No. 3 Lake Park',
    //
    //               },
    //             ],
    //           },
    //         ],
    //       },
    //       {
    //         key: 13,
    //         name: 'Jim Green sr.',
    //         age: 72,
    //         address: 'London No. 1 Lake Park',
    //         children: [
    //           {
    //             key: 131,
    //             name: 'Jim Green',
    //             age: 42,
    //             address: 'London No. 2 Lake Park',
    //             children: [
    //               {
    //                 key: 1311,
    //                 name: 'Jim Green jr.',
    //                 age: 25,
    //                 address: 'London No. 3 Lake Park',
    //               },
    //               {
    //                 key: 1312,
    //                 name: 'Jimmy Green sr.',
    //                 age: 18,
    //                 address: 'London No. 4 Lake Park',
    //               },
    //             ],
    //           },
    //         ],
    //       },
    //     ],
    //   },
    //   {
    //     key: 2,
    //     name: 'Joe Black',
    //     age: 32,
    //     address: 'Sidney No. 1 Lake Park',
    //     children: [
    //       {
    //         key: 21,
    //         name: 'Jim Green jr.',
    //         age: 25,
    //         address: 'London No. 3 Lake Park',
    //       },
    //       {
    //         key: 22,
    //         name: 'Jimmy Green sr.',
    //         age: 18,
    //         address: 'London No. 4 Lake Park',
    //       },
    //     ],
    //   },
    //   {
    //     key: 3,
    //     name: 'Joe Black',
    //     age: 32,
    //     address: 'Sidney No. 1 Lake Park',
    //     children: [
    //       {
    //         key: 31,
    //         name: 'Jim Green jr.',
    //         age: 25,
    //         address: 'London No. 3 Lake Park',
    //         children: [
    //           {
    //             key: 311,
    //             name: 'Jim Green jr.',
    //             age: 25,
    //             address: 'London No. 3 Lake Park',
    //           },
    //           {
    //             key: 312,
    //             name: 'Jimmy Green sr.',
    //             age: 18,
    //             address: 'London No. 4 Lake Park',
    //           },
    //         ],
    //       },
    //       {
    //         key: 32,
    //         name: 'Jimmy Green sr.',
    //         age: 18,
    //         address: 'London No. 4 Lake Park',
    //         children: [
    //           {
    //             key: 321,
    //             name: 'Jim Green jr.',
    //             age: 25,
    //             address: 'London No. 3 Lake Park',
    //             children: [
    //               {
    //                 key: 3211,
    //                 name: 'Jim Green jr.',
    //                 age: 25,
    //                 address: 'London No. 3 Lake Park',
    //                 children: [
    //                   {
    //                     key: 32111,
    //                     name: 'Jim Green jr.',
    //                     age: 25,
    //                     address: 'London No. 3 Lake Park',
    //                   },
    //                   {
    //                     key: 32112,
    //                     name: 'Jimmy Green sr.',
    //                     age: 18,
    //                     address: 'London No. 4 Lake Park',
    //                   },
    //                 ],
    //               },
    //               {
    //                 key: 3212,
    //                 name: 'Jimmy Green sr.',
    //                 age: 18,
    //                 address: 'London No. 4 Lake Park',
    //               },
    //             ],
    //           },
    //           {
    //             key: 322,
    //             name: 'Jimmy Green sr.',
    //             age: 18,
    //             address: 'London No. 4 Lake Park',
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // ];
    //
    // const rowSelection = {
    //   onChange: (selectedRowKeys, selectedRows) => {
    //     console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    //   },
    //   onSelect: (record, selected, selectedRows) => {
    //     console.log(record, selected, selectedRows);
    //   },
    //   onSelectAll: (selected, selectedRows, changeRows) => {
    //     console.log(selected, selectedRows, changeRows);
    //   },
    // };

    const requiredFieldValidator = (value)=> {
      if (value == null || value == undefined || !value.length) {
        return {valid: false, msg: "This is a required field"};
      } else {
        return {valid: true, msg: null};
      }
    }


    const TaskNameFormatter = (row, cell, value, columnDef, dataContext) => {
      value = value.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
      var spacer = "<span style='display:inline-block;height:1px;width:" + (15 * dataContext["indent"]) + "px'></span>";
      var idx = dataView.getIdxById(dataContext.id);
      if (data[idx + 1] && data[idx + 1].indent > data[idx].indent) {
        if (dataContext._collapsed) {
          return spacer + " <span class='toggle expand'></span>&nbsp;" + value;
        } else {
          return spacer + " <span class='toggle collapse'></span>&nbsp;" + value;
        }
      } else {
        return spacer + " <span class='toggle'></span>&nbsp;" + value;
      }
    };

    let dataView;
    let grid;
    let data = [];
    let columns = [
      {id: "title", name: "Title", field: "title", width: 220, cssClass: "cell-title", formatter: TaskNameFormatter, editor: Slick.Editors.Text, validator: requiredFieldValidator},
      {id: "duration", name: "Duration", field: "duration", editor: Slick.Editors.Text},
      {id: "%", name: "% Complete", field: "percentComplete", width: 80, resizable: false, formatter: Slick.Formatters.PercentCompleteBar, editor: Slick.Editors.PercentComplete},
      {id: "start", name: "Start", field: "start", minWidth: 60, editor: Slick.Editors.Date},
      {id: "finish", name: "Finish", field: "finish", minWidth: 60, editor: Slick.Editors.Date},
      {id: "effort-driven", name: "Effort Driven", width: 80, minWidth: 20, maxWidth: 80, cssClass: "cell-effort-driven", field: "effortDriven", formatter: Slick.Formatters.Checkmark, editor: Slick.Editors.Checkbox, cannotTriggerInsert: true}
    ];

    let options = {
      editable: true,
      enableAddRow: true,
      enableCellNavigation: true,
      asyncEditorLoading: false
    };

    let percentCompleteThreshold = 0;
    let searchString = "";

    const myFilter =(item)=> {
      if (item["percentComplete"] < percentCompleteThreshold) {
        return false;
      }

      if (searchString != "" && item["title"].indexOf(searchString) == -1) {
        return false;
      }

      if (item.parent != null) {
        var parent = data[item.parent];

        while (parent) {
          if (parent._collapsed || (parent["percentComplete"] < percentCompleteThreshold) || (searchString != "" && parent["title"].indexOf(searchString) == -1)) {
            return false;
          }

          parent = data[parent.parent];
        }
      }

      return true;
    }

    const percentCompleteSort =(a, b)=> {
      return a["percentComplete"] - b["percentComplete"];
    }

    $(function () {
      var indent = 0;
      var parents = [];

      // prepare the data
      for (var i = 0; i < 100000; i++) {
        var d = (data[i] = {});
        var parent;

        if (Math.random() > 0.8 && i > 0) {
          indent++;
          parents.push(i - 1);
        } else if (Math.random() < 0.3 && indent > 0) {
          indent--;
          parents.pop();
        }

        if (parents.length > 0) {
          parent = parents[parents.length - 1];
        } else {
          parent = null;
        }

        d["id"] = "id_" + i;
        d["indent"] = indent;
        d["parent"] = parent;
        d["title"] = "Task " + i;
        d["duration"] = "5 days";
        d["percentComplete"] = Math.round(Math.random() * 100);
        d["start"] = "01/01/2009";
        d["finish"] = "01/05/2009";
        d["effortDriven"] = (i % 5 == 0);
      }


      // initialize the model
      dataView = new Slick.Data.DataView({ inlineFilters: true });
      dataView.beginUpdate();
      dataView.setItems(data);
      dataView.setFilter(myFilter);
      dataView.endUpdate();


      // initialize the grid
      grid = new Slick.Grid("#myGrid", dataView, columns, options);

      grid.onCellChange.subscribe(function (e, args) {
        dataView.updateItem(args.item.id, args.item);
      });

      grid.onAddNewRow.subscribe(function (e, args) {
        var item = {
          "id": "new_" + (Math.round(Math.random() * 10000)),
          "indent": 0,
          "title": "New task",
          "duration": "1 day",
          "percentComplete": 0,
          "start": "01/01/2009",
          "finish": "01/01/2009",
          "effortDriven": false};
        $.extend(item, args.item);
        dataView.addItem(item);
      });

      grid.onClick.subscribe(function (e, args) {
        if ($(e.target).hasClass("toggle")) {
          var item = dataView.getItem(args.row);
          if (item) {
            if (!item._collapsed) {
              item._collapsed = true;
            } else {
              item._collapsed = false;
            }

            dataView.updateItem(item.id, item);
          }
          e.stopImmediatePropagation();
        }
      });


      // wire up model events to drive the grid
      dataView.onRowCountChanged.subscribe(function (e, args) {
        grid.updateRowCount();
        grid.render();
      });

      dataView.onRowsChanged.subscribe(function (e, args) {
        grid.invalidateRows(args.rows);
        grid.render();
      });


      var h_runfilters = null;

      // wire up the slider to apply the filter to the model
      $("#pcSlider").slider({
        "range": "min",
        "slide": function (event, ui) {
          Slick.GlobalEditorLock.cancelCurrentEdit();

          if (percentCompleteThreshold != ui.value) {
            window.clearTimeout(h_runfilters);
            h_runfilters = window.setTimeout(dataView.refresh, 10);
            percentCompleteThreshold = ui.value;
          }
        }
      });


      // wire up the search textbox to apply the filter to the model
      $("#txtSearch").keyup(function (e) {
        Slick.GlobalEditorLock.cancelCurrentEdit();

        // clear on Esc
        if (e.which == 27) {
          this.value = "";
        }

        searchString = this.value;
        dataView.refresh();
      })
    })

    return(
      <div>
        <div id="myGrid" style={{width:'800px',height:'600px'}}></div>

      </div>
    )
  }
}
export default XTreeTable
