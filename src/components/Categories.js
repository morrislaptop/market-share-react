import React from 'react';

class CategoriesComponent extends React.Component {

  render() {
    return (
      <div className="categories">
        <ul>
          <li><div className="checkbox"><label><input type="checkbox" /> Mobile</label></div></li>
          <li><div className="checkbox"><label><input type="checkbox" /> Desktop</label></div></li>
        </ul>
      </div>
    );
  }
}

CategoriesComponent.defaultProps = {
};

export default CategoriesComponent;
