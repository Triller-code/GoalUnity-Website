import React from 'react';

const League = () => (
  <div className="league">
    <h2>League Table</h2>
    <table>
      <thead>
        <tr>
          <th>Team</th>
          <th>Played</th>
          <th>Won</th>
          <th>Lost</th>
          <th>Points</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Team A</td>
          <td>10</td>
          <td>7</td>
          <td>3</td>
          <td>21</td>
        </tr>
        <tr>
          <td>Team B</td>
          <td>10</td>
          <td>5</td>
          <td>5</td>
          <td>15</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default League;