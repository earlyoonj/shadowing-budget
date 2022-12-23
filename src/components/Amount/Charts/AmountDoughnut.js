import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { DOUGHNUT_CONFIG } from '../../../config/constants';

ChartJS.register(ArcElement, Tooltip);

function DoughnutStatus(props) {
    const { labels, datasets: chartData, options: chartOptions } = props;
    
    const options = { ...chartOptions, cutout: DOUGHNUT_CONFIG.HOLE_SIZE};
    const datasets = [  
        { ...chartData, borderRadius: 0.4 * DOUGHNUT_CONFIG.HOLE_SIZE, borderWidth: 0 },
    ];

    const data = { labels, datasets };

    return (
        <div>
            <Doughnut data={data} options={options || {}} />
        </div>
    );
}

export default DoughnutStatus;
