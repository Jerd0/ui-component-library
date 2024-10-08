## Table Slots

| Name               | Description                                                                                                                                                                                   |
| ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| append             | Contents to be inserted after the last row. You may need this slot if you want to implement infinite scroll for the table. This slot will be displayed above the summary row if there is one. |
| footer             | Contents to be inserted after scrollable table body. You may need this slot if you want to implement sticky footer or summary row.                                                            |
| cell               | Contents of any table cell with scope {column, row, store, $index}                                                                                                                            |
| cell\_[prop]       | Contents of table cell with prop _name_ and scope {column, row, store, $index}                                                                                                                |
| cell_header        | Contents of any table header cell with scope {column, store, $index}                                                                                                                          |
| cell*header*[prop] | Contents of table header cell with prop _name_ and scope {column, store, $index}                                                                                                              |
| actions            | Contents of table cell for column with type _actions_ and scope {row, column, cell, isDisabled, isSelected, store, $index}                                                                    |
| actions_header     | Contents of table header cell for column with type _actions_ and scope {column, owner, store, $index}                                                                                         |
| [slotName]         | Contents of table cell for column with option _slotName_ and scope {row, column, cell, isDisabled, isSelected, store, $index}                                                                 |
