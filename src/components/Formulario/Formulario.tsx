import * as React from 'react';

export default (props: any) => {
  console.log(props);

  return (
    <div>
      <div className="form-group">
        <label>Nome</label>
        <input type="text" className="form-control" id="" placeholder="Input field" />
      </div>
      <div className="form-group">
        <label>Email</label>
        <input type="text" className="form-control" id="" placeholder="Input field" />
      </div>
    </div>
  );
}