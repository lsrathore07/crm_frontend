import { Chart } from "react-google-charts";
import React from "react";
import createUsersCount from "../../handlers/userHandler";

function PieChartUsersCount(props){
 
    const statusDetails=createUsersCount(props.userDetails)

    const data = [
        ["Status", "Count"],
        ["Approved", statusDetails.approved],
        ["Pending", statusDetails.pending],
        ["Rejected", statusDetails.rejected]
      ];

    const options={
        title:"Users Status Details",
        is3D:true
    }
    return (
        <div id="chart">
              <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
      style={{
        backgroundColor: "#C0C0C0"
      }}    
      />

        </div>
      
    )
}

export default PieChartUsersCount;