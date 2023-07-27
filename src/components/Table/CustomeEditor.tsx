import { CellEditor, CellEditorProps } from 'tui-grid/types/editor';

interface CustomCellEditorProps extends CellEditorProps {
  options?: {
    maxLength?: number;
  };
}

class CustomTextEditor implements CellEditor {
  public el: HTMLInputElement;

  constructor(props: CustomCellEditorProps) {
    this.el = document.createElement('input');
    this.el.type = 'text';

    if (props.value) {
      this.el.value = props.value.toString();
    }

    if (props.options) {
      if (props.options.maxLength) {
        this.el.maxLength = props.options.maxLength;
      }
    }
  }

  getElement() {
    return this.el;
  }

  getValue() {
    return this.el.value;
  }

  mounted() {
    this.el.select();
  }
}

export default CustomTextEditor
