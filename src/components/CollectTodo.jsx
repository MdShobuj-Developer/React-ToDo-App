import { useFormik } from "formik";
import React from "react";

function CollectTodo(props) {
  const formik = useFormik({
    initialValues: {
      title: "",
      desc: "",
    },
    onSubmit: (values, { resetForm }) => {
      props.todos(values);

      resetForm({
        values: { title: "", desc: "" },
      });
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit} className="form_container">
        <div className="title">
          <label>Title: </label>
          <input
            type="text"
            name="title"
            id="title"
            onChange={formik.handleChange}
            value={formik.values.title}
          />
        </div>
        <div className="desc">
          <label>Desc: </label>

          <textarea
            name="desc"
            id="desc"
            onChange={formik.handleChange}
            value={formik.values.desc}
            cols="30"
            rows="10"
          ></textarea>
        </div>
        <button type="submit" className="btn">
          Add
        </button>
      </form>
    </div>
  );
}

export default CollectTodo;
