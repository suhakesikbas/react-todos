import React, { useState, useEffect } from "react";

const initialFormValues = { title: "", isCompleted: false};
function Form({ addTodo,todoList }) {
	const [form, setForm] = useState(initialFormValues);

	useEffect(() => {
		setForm(initialFormValues);
	}, [todoList]);

	const onChangeInput = (e) => {
		setForm({ ...todoList, [e.target.name]: e.target.value });
	};

	const onSubmit = (e) => {
		e.preventDefault();
		if (form.title === "")  {
            alert("Başlık boş olamaz.");
            return false
        };
        if (todoList.some(t=>t.title === form.title)) {
            alert("Zaten ekli.");
            return false
        };

		addTodo([...todoList, form]);
	};

    return(
        <form onSubmit={onSubmit}>
			<div>
				<input
                    name="title"
                    className="new-todo"
					placeholder="What needs to be done?"
					value={form.title}
					onChange={onChangeInput}
                    autoFocus
				/>
			</div>
		</form>
    )
}

export default Form