// src/App.js
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import CKEditorComponent from './components/CKEditorComponent';
import './App.css';

const App = () => {
    const { handleSubmit, control } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div>
            <h1>CKEditor 5 with react-hook-form and Custom Toolbar - ZELLKON</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <Controller
                        name="content"
                        control={control}
                        defaultValue=""
                        render={({ field: { onChange, value } }) => (
                            <CKEditorComponent value={value} onChange={onChange} />
                        )}
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default App;