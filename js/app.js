/* eslint-disable no-unused-vars */

// DOM Elements
let alert_banner = document.getElementById( "alerts" );
let traffic_chart_ul = document.querySelector(".traffic-chart-nav");

// Alert Banner Logic
alert_banner.innerHTML =
    `
        <div class="alert-banner">
        <p><strong>Alert:</strong> You have <strong>6</strong> overdue tasks
        to complete</p>
        <p class="alert-banner-close">X</p>
        </div>
    `;

alert_banner.addEventListener( 'click', ( event ) =>
{
    if ( event.target.classList.contains( "alert-banner-close" ) )
    {
        alert_banner.style = "animation: whisk-away .5s ease-in forwards;"
        setTimeout( () => { alert_banner.style.display = "none" }, 500 );
    }
} );

function update_chart_data(incoming_data)
{
    traffic_chart.data.datasets[0].data = incoming_data.datasets[0].data;
    traffic_chart.data.labels = incoming_data.labels;
    traffic_chart.update();
}

//Traffic Data Set Selector Logic
traffic_chart_ul.addEventListener('click', (event) => {
    //Remove the '.selected' class from all ul elements in ul
    for(let i = 0; i < traffic_chart_ul.childElementCount; ++i)
    {
        traffic_chart_ul.children[i].classList = '';
    }

    event.target.classList.add("selected");
    if(event.target.textContent.toUpperCase().includes("HOURLY"))
    {
        update_chart_data(hourly_line_data);
    }
    else if(event.target.textContent.toUpperCase().includes("DAILY"))
    {
        update_chart_data(daily_line_data);
    }
    else if(event.target.textContent.toUpperCase().includes("WEEKLY"))
    {
        update_chart_data(weekly_line_data);
    }
    else if(event.target.textContent.toUpperCase().includes("MONTHLY"))
    {
        update_chart_data(monthly_line_data);
    }

});