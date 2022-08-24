function ChildComponent({ name,age,ismarried }) {
    return (
      <>
     <div>
        <table>
          <tr><td>Name </td><td>{name}</td></tr>
           <tr> <td>Age</td><td>{age}</td></tr>
            <tr><td>Marital Status</td><td>{ismarried}</td></tr>
        </table>
      </div>
      </>
    );
  }
  
  