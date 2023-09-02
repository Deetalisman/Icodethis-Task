import styled from "styled-components";
import { FaCalendarAlt } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { useState } from "react";
function Progress() {
  const Dav = styled.div`
    font-size: 2rem;
    background-color: rgb(233, 233, 241);
    padding: 1.5rem 3rem;
    font-family: sans-serif;
  `;
  const [data, setData] = useState(0);
  return (
    <Dav>
      <div className="up">
        <div>
          <p>Start Date</p>
          <aside>
            <small>
              <p>10 June 2017</p>
              <FaCalendarAlt className="icons" />
            </small>
            <small>
              <p>15:00</p>
              <FaRegClock className="icons" />
            </small>
          </aside>
        </div>
        <div>
          <p>End Date</p>
          <aside>
            <small>
              <p>18 June 2017</p>
              <FaCalendarAlt className="icons" />
            </small>
            <small>
              <p>17:00</p>
              <FaRegClock className="icons" />
            </small>
          </aside>
        </div>
        <div>
          <p>Type</p>
          <small>
            <p>Task</p>
            <FaAngleDown className="icons" />
          </small>
        </div>
      </div>
      <div className="down">
        <div>
          <p>Progress</p>
          <div className="sub-prog">
            <input
              type="range"
              id="range"
              value={data}
              step="10"
              onChange={(e) => setData(e.target.value)}
            />
            <mark>
              <h1>{data}%</h1>
            </mark>
          </div>
        </div>
      </div>
    </Dav>
  );
}

export default Progress;
