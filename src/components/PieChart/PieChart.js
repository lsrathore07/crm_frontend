import { Chart } from "react-google-charts";
import React from "react";
import createTicketsCount from "../../handlers/ticketHandler";



function PieChartTicketsCount(props){
 
    const statusDetails=createTicketsCount(props.ticketDetails)

    const data = [
        ["Status", "Count"],
        ["Opened", statusDetails.pending],
        ["Closed", statusDetails.closed],
        ["Progress", statusDetails.progress],
        ["Blocked", statusDetails.blocked],
      ];

    const options={
        title:"Ticket Status Details",
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

export default PieChartTicketsCount;