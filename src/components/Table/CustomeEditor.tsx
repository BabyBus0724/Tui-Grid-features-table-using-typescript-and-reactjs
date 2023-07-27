import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

interface CustomTextEditorProps {
  value: string;
  onChange: (value: string) => void;
}

const CustomTextEditor: React.FC<CustomTextEditorProps> = (props) => {
  const elRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = elRef.current;

    if (!el) {
      return;
    }

    const handleChange = () => {
      const value = el.innerText;
      props.onChange(value);
    };

    el.addEventListener('input', handleChange);

    return () => {
      el.removeEventListener('input', handleChange);
    };
  }, []);

  useEffect(() => {
    const el = elRef.current;

    if (!el) {
      return;
    }

    el.innerText = props.value;
  }, [props.value]);

  return <div contentEditable ref={elRef} />;
};

export default CustomTextEditor;
