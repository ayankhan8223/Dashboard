import React from "react";
import Card from "./Card";
import "./List.css";

function List() {
  return (
    <div>
      <div className="list1">
        <div className="row1">
          <Card
            img="https://freepngimg.com/thumb/shoes/26230-6-nike-shoes-clipart.png"
            name="Air Jordan XXXVI SE Luka 'Global Game'"
          />
        </div>
        <div className="row1">
          <Card
            img="https://freepngimg.com/thumb/shoes/27518-9-nike-shoes-file.png"
            name="Nike Air Max 90"
          />
        </div>
        <div className="row1">
          <Card
            img="
            https://freepngimg.com/thumb/running%20shoes/12-running-shoes-png-image.png"
            name="Zoom Freak 3"
          />
        </div>
      </div>

      <div className="list1">
        <div className="row1">
          <Card
            img="
           https://pngimg.com/uploads/running_shoes/running_shoes_PNG5816.png"
            name="Nike Flow 2020 ISPA"
          />
        </div>
        <div className="row1">
          <Card
            img="
            https://freepngimg.com/thumb/running%20shoes/40-nike-running-shoes-png-image.png"
            name="Nike SB Zoom Blazer Mid Premium"
          />
        </div>
        <div className="row1">
          <Card
            img="
            https://freepngimg.com/thumb/running%20shoes/20-running-shoes-png-image.png"
            name="Giannis Immortality Force Field"
          />
        </div>
      </div>

      <div className="list1">
        <div className="row1">
          <Card
            img="
            https://freepngimg.com/thumb/running%20shoes/10-running-shoes-png-image.png"
            name="Nike Air Max 95"
          />
        </div>
        <div className="row1">
          <Card
            img="
            https://freepngimg.com/thumb/running%20shoes/11-running-shoes-png-image.png"
            name="Nike Defy All Day"
          />
        </div>
        <div className="row1">
          <Card
            img="
            https://freepngimg.com/thumb/running%20shoes/26-running-shoes-png-image.png"
            name="Nike Flex Run 2021"
          />
        </div>
      </div>
    </div>
  );
}

export default List;
