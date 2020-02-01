
import React from "react";

export interface FormProps<T> { 
  initial?: T;
  resetOnSubmit?: boolean;
  onSubmit?: (data: T) => void;
}

function Form<T>(props: FormProps<T>) {
  const { initial, resetOnSubmit, onSubmit } = props;

  const handleSubmit = (event?: React.FormEvent, cb?: () => void) => {
    if (event) {
      event.preventDefault()
      console.log(event)
    }
  }

return <form onSubmit={handleSubmit}></form>;
}
Form.displayName = "Form";

export default Form;