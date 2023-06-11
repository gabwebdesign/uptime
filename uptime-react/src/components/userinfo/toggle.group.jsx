import { useState } from "react";
export const ToggleGroup = ()=>{

    const types = ["idle", "brb", "working","training"];
    const [active, setActive] = useState(types[0]);

    return (
        <div className="user-info__states d-flex">
          {types.map((type) => (
            <button key={type} className={active===type ? 'btn btn-primary btn-state' : 'btn btn-secondary btn-state'} onClick={() => setActive(type)}>
              {type}
            </button>
          ))}
        </div>
      );
}