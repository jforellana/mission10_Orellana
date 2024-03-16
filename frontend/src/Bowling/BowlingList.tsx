import { useEffect, useState } from 'react';
import { Bowler } from '../types/Bowler';
function BowlingList() {
  const [bowlData, setBowlData] = useState<Bowler[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const rsp = await fetch('http://localhost:5200/BowlingLeague');
      const f = await rsp.json();
      setBowlData(f);
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="row">
        <h4 className="text-center">Bowling League info</h4>
      </div>
      <div>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Bowler Name</th>
              <th>Team Name</th>
              <th>Other</th>
            </tr>
          </thead>
          <tbody>
            {bowlData.map((f) => (
              <tr key={f.bowlerId}>
                <td>{f.bowlerFirstName}</td>
                <td>{f.teamId}</td>
                <td>{f.bowlerAddress}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default BowlingList;
