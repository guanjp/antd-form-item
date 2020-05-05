import React from 'react';
import MyForm, { FormValues } from './components/form';

export default () => {
  function onSaveSection(values: FormValues) {
    console.log(values);
  }
  return (
    <div>
      <MyForm values={{
        open: 1,
      }}
      onOK={onSaveSection} />
    </div>
  );
}
