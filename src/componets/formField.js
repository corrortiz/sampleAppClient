import React from 'react';

export default ({ input, label, type, value, meta: { touched, error, warning } } ) => {
    return (
        <div className={`field required ${touched && error ? 'error': ''}`}>
            <label>{label}</label>
            <div>
                <input {...input} type={type} defaultValue={value}/>
                {touched && error && <div className="ui pointing red basic label"><p>{error}</p></div>}
            </div>
        </div>
    );
};

