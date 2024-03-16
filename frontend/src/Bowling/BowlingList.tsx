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
              <th>Address</th>
              <th>City</th>
              <th>State</th>
              <th>Zip</th>
              <th>Phone Number</th>
            </tr>
          </thead>
          <tbody>
            {bowlData.map((f) => (
              <tr key={f.bowlerId}>
                <td>
                  {f.bowlerFirstName} {f.bowlerMiddleInit} {f.bowlerLastName}
                </td>
                <td>{f.teamName}</td>
                <td>{f.bowlerAddress}</td>
                <td>{f.bowlerCity}</td>
                <td>{f.bowlerState}</td>
                <td>{f.bowlerZip}</td>
                <td>{f.bowlerPhoneNumber}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default BowlingList;
