import { directives } from './directives.ts';
import { widgets } from './widgets.ts';
import { composables } from './composables.ts';

// eslint-disable-next-line node/prefer-global/process
const isProd = process.env.NODE_ENV === 'production';

const componentsList = [
  { text: 'Accordion', link: '/components/accordion/accordion.doc.md' },
  { text: 'Alert', link: '/components/alert/alert.doc.md' },
  { text: 'Autocomplete', link: '/components/autocomplete/autocomplete.doc.md' },
  { text: 'Breadcrumbs', link: '/components/breadcrumbs/breadcrumbs.doc.md' },
  { text: 'Button', link: '/components/button/button.doc.md', readyForProduction: true },
  { text: 'Button Group', link: '/components/button-group/buttonGroup.doc.md' },
  { text: 'Card', link: '/components/card/card.doc.md' },
  { text: 'Carousel', link: '/components/carousel/carousel.doc.md' },
  { text: 'Cascader', link: '/components/cascader/cascader.doc.md' },
  { text: 'Chart', link: '/components/chart/chart.doc.md' },
  { text: 'Checkbox', link: '/components/checkbox/checkbox.doc.md' },
  { text: 'Checkbox Button', link: '/components/checkbox-button/checkboxButton.doc.md' },
  { text: 'Checkbox Group', link: '/components/checkbox-group/checkboxGroup.doc.md' },
  { text: 'Chip', link: '/components/chip/chip.doc.md' },
  { text: 'Code', link: '/components/code/code.doc.md' },
  { text: 'Column', link: '/components/column/column.doc.md' },
  { text: 'Combobox', link: '/components/combobox/combobox.doc.md' },
  { text: 'Config Provider', link: '/components/config-provider/configProvider.doc.md' },
  { text: 'Confirm Dialog', link: '/components/confirm-dialog/confirmDialog.doc.md' },
  { text: 'Container', link: '/components/container/container.doc.md' },
  { text: 'Counter', link: '/components/counter/counter.doc.md' },
  { text: 'Data Table', link: '/components/table/table.doc.md' },
  { text: 'Date Picker', link: '/components/date-picker/datePicker.doc.md' },
  { text: 'Dialog', link: '/components/dialog/dialog.doc.md' },
  { text: 'Disclosure', link: '/components/disclosure/disclosure.doc.md' },
  { text: 'Divider', link: '/components/divider/divider.doc.md', readyForProduction: true },
  { text: 'Drawer', link: '/components/drawer/drawer.doc.md' },
  { text: 'Dropdown', link: '/components/dropdown/dropdown.doc.md' },
  { text: 'File Browser', link: '/components/file-browser/fileBrowser.doc.md' },
  { text: 'File Picker', link: '/components/file-picker/filePicker.doc.md' },
  { text: 'File Upload', link: '/components/file-upload/fileUpload.doc.md' },
  { text: 'Filter', link: '/components/filter/filter.doc.md' },
  { text: 'Footer', link: '/components/footer/footer.doc.md', readyForProduction: true },
  { text: 'Form', link: '/components/form/form.doc.md' },
  { text: 'Form Dialog', link: '/components/form-dialog/formDialog.doc.md' },
  { text: 'Form Error', link: '/components/form-error/formError.doc.md' },
  { text: 'Form Item', link: '/components/form-item/formItem.doc.md' },
  { text: 'Grid', link: '/components/grid/grid.doc.md' },
  { text: 'Header', link: '/components/header/header.doc.md' },
  { text: 'Icon', link: '/components/icon/icon.doc.md' },
  { text: 'Icon Button', link: '/components/icon-button/iconButton.doc.md' },
  { text: 'Infinite Scroll', link: '/components/infinite-scroll/infiniteScroll.doc.md' },
  { text: 'Input', link: '/components/input/input.doc.md' },
  { text: 'Input Base', link: '/components/input-base/inputBase.doc.md' },
  { text: 'Input Number', link: '/components/input-number/inputNumber.doc.md' },
  { text: 'Link', link: '/components/link/link.doc.md', readyForProduction: true },
  { text: 'List', link: '/components/list/list.doc.md' },
  { text: 'ListItem', link: '/components/list-item/listItem.doc.md' },
  { text: 'Loading', link: '/components/loading/loading.doc.md' },
  { text: 'Main', link: '/components/main/main.doc.md' },
  { text: 'Map', link: '/components/map/map.doc.md' },
  { text: 'Markdown Editor', link: '/components/markdown-editor/markdownEditor.doc.md' },
  { text: 'Markup Table', link: '/components/markup-table/markupTable.doc.md' },
  { text: 'Menu', link: '/components/menu/menu.doc.md' },
  { text: 'Menu Group', link: '/components/menu-group/menuGroup.doc.md' },
  { text: 'Menu Item', link: '/components/menu-item/menuItem.doc.md' },
  { text: 'Modal', link: '/components/modal/modal.doc.md' },
  { text: 'Notification', link: '/components/notification.doc.md' },
  { text: 'Num Picker', link: '/components/num-picker/numPicker.doc.md' },
  { text: 'Option', link: '/components/option/option.doc.md' },
  { text: 'Option Group', link: '/components/option-group/optionGroup.doc.md' },
  { text: 'Pagination', link: '/components/pagination/pagination.doc.md' },
  { text: 'Password', link: '/components/password/password.doc.md' },
  { text: 'Popover', link: '/components/popover/popover.doc.md' },
  { text: 'Popper', link: '/components/popper/popper.doc.md' },
  { text: 'Progress', link: '/components/progress/progress.doc.md' },
  { text: 'Radio', link: '/components/radio/radio.doc.md' },
  { text: 'Radio Button', link: '/components/radio-button/radioButton.doc.md' },
  { text: 'Radio Group', link: '/components/radio-group/radioGroup.doc.md' },
  { text: 'Ribbon', link: '/components/ribbon/ribbon.doc.md' },
  { text: 'Row', link: '/components/row/row.doc.md' },
  { text: 'Script Editor', link: '/components/script-editor/scriptEditor.doc.md' },
  { text: 'Search', link: '/components/search/search.doc.md' },
  { text: 'Select', link: '/components/select/select.doc.md' },
  { text: 'Skeleton', link: '/components/skeleton/skeleton.doc.md' },
  { text: 'Slider', link: '/components/slider/slider.doc.md' },
  { text: 'Spinner', link: '/components/spinner/spinner.doc.md' },
  { text: 'Split Button', link: '/components/split-button/splitButton.doc.md' },
  { text: 'Stepper', link: '/components/stepper/stepper.doc.md' },
  { text: 'Stepper Item', link: '/components/stepper-item/stepperItem.doc.md' },
  { text: 'Submenu', link: '/components/submenu/submenu.doc.md' },
  { text: 'Switch', link: '/components/switch/switch.doc.md' },
  { text: 'Table Column', link: '/components/table-column/tableColumn.doc.md' },
  { text: 'Tabs', link: '/components/tabs/tabs.doc.md' },
  { text: 'Tag', link: '/components/tag/tag.doc.md' },
  { text: 'TextArea', link: '/components/textarea/textarea.doc.md' },
  { text: 'Theme Provider', link: '/components/theme-provider/themeProvider.doc.md' },
  { text: 'Tiles', link: '/components/tiles/tiles.doc.md' },
  { text: 'Time Picker', link: '/components/time-picker/timePicker.doc.md' },
  { text: 'Toolbar', link: '/components/toolbar/toolbar.doc.md' },
  { text: 'Tooltip', link: '/components/tooltip/tooltip.doc.md', readyForProduction: true },
  { text: 'Tree', link: '/components/tree/tree.doc.md' },
  { text: 'Typography', link: '/components/typography/typography.doc.md' },
  { text: 'Upload', link: '/components/upload/upload.doc.md' },
  { text: 'Virtual Scroll', link: '/components/virtual-scroll/virtualScroll.doc.md' },
  {
    text: 'Directives',
    items: directives,
    readyForProduction: true
  },
  {
    text: 'Widgets',
    items: widgets
  },
  {
    text: 'Composables',
    items: composables
  }
];

export const enComponents = [
  ...componentsList.filter(c => (isProd && c.readyForProduction) || !isProd),
];
