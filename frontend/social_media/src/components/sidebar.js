import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="col-lg-3">
        <aside className="sidebar static">
          <div className="widget">
            <h4 className="widget-title">Shortcuts</h4>
            <ul className="naves">
              <li>
                <i className="ti-files" />
                <a href="/Groups" title>My Group</a>
              </li>
              <li> 
                <i className="ti-user" />
                <Link to={"/findfriends"}>find friends</Link>
                
              </li>

              <li>
                <i className="ti-power-off" />
                <a href="/login" title>Logout</a>
              </li>
            </ul>
          </div>{/* Shortcuts */}
        </aside>
      </div>
    );
}

export default Sidebar;
